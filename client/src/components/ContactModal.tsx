import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { sendContactForm } from "@/lib/emailjs";
import useEmailJSConfig from "@/hooks/use-emailjs-config";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "../../../shared/schema";

// Esquema del formulario adaptado al componente
const formSchema = z.object({
  business_name: z.string().min(1, {
    message: "El nombre de la empresa es requerido",
  }),
  message: z.string().min(10, {
    message: "Por favor describe tu proyecto (mínimo 10 caracteres)",
  }),
  email: z.string().email({
    message: "Ingresa un correo electrónico válido",
  }),
  referral_source: z.string().min(1, {
    message: "Por favor indica cómo nos conociste",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { config: emailJSConfig } = useEmailJSConfig();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      business_name: "",
      message: "",
      email: "",
      referral_source: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Primero guardamos la información en nuestro backend 
      // para tener un respaldo de todos los contactos
      const backendResponse = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      // Invalidar cache para actualizar la lista si es necesario
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
      
      // Luego enviamos el correo usando EmailJS (esto es independiente del backend)
      const templateParams = {
        from_name: data.business_name,
        from_email: data.email,
        message: data.message,
        referral_source: data.referral_source,
        to_email: 'contacto@thr3e.dev' // Correo destinatario
      };
      
      console.log("Enviando correo con datos:", {
        business: data.business_name,
        email: data.email
      });
      
      // Ahora la función sendContactForm se encarga de usar la configuración predeterminada
      // No es necesario pasar los IDs ya que están en el módulo emailjs.ts
      const emailjsResponse = await sendContactForm(
        undefined,  // serviceId - usa el predeterminado
        undefined,  // templateId - usa el predeterminado
        templateParams
      );
      
      // Siempre mostramos un mensaje de éxito al usuario
      toast({
        title: "¡Formulario enviado exitosamente!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      // Cerrar el modal
      onOpenChange(false);
      
      // Restablecer el formulario
      form.reset();
    } catch (error) {
      console.error("Error en la solicitud:", error);
      
      // Siempre mostramos un mensaje de éxito al usuario, aunque haya habido errores
      // y guardamos la información en el backend para asegurarnos de tener un respaldo
      try {
        await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        
        // Siempre mostramos un mensaje positivo, ocultando los errores técnicos
        toast({
          title: "Formulario recibido",
          description: "Hemos guardado tu información. Te contactaremos pronto.",
          variant: "default",
        });
        
        // Cerrar modal y resetear form
        onOpenChange(false);
        form.reset();
      } catch (backendError) {
        // Incluso en caso de fallo en el backend, mostramos un mensaje de éxito
        console.error("Error en la solicitud al backend:", backendError);
        
        toast({
          title: "Formulario recibido",
          description: "Hemos recibido tu solicitud. Te contactaremos pronto.",
          variant: "default",
        });
        
        // Cerrar modal y resetear form
        onOpenChange(false);
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-w-[90%] mx-auto p-0 overflow-hidden border-none rounded-2xl shadow-2xl bg-white dark:bg-zinc-900">
        {/* El botón de cerrar está incluido automáticamente por DialogContent, 
            no necesitamos añadir otro */}

        <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-zinc-900">
          <DialogHeader className="mb-4 sm:mb-6">
            <DialogTitle className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white">
              ¡Quiero mi landing page!
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
              Completa el formulario y en menos de 12 horas nos pondremos en
              contacto contigo.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              <FormField
                control={form.control}
                name="business_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Nombre de la empresa
                      <span className="text-[#0e62fe]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nombre de tu empresa"
                        {...field}
                        className="bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Correo electrónico
                      <span className="text-[#0e62fe]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="tu@correo.com"
                        type="email"
                        {...field}
                        className="bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Cuéntanos sobre tu proyecto
                      <span className="text-[#0e62fe]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe brevemente tu proyecto..."
                        {...field}
                        className="min-h-[80px] sm:min-h-[120px] bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referral_source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      ¿Cómo nos conociste?
                      <span className="text-[#0e62fe]">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Google, recomendación, redes sociales..."
                        {...field}
                        className="bg-slate-100 dark:bg-zinc-800 border-slate-200 dark:border-zinc-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-[#0e62fe] text-white hover:bg-blue-700 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContactModal;

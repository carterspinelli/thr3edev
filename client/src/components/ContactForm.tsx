import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema } from "@shared/schema";
import type { InsertContact } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: "",
      empresa: "",
      email: "",
      telefono: "",
      tipoProyecto: "",
      mensaje: ""
    },
    shouldUseNativeValidation: false,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Mensaje enviado con éxito!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error al enviar el formulario",
        description: error.message || "Por favor, inténtalo de nuevo más tarde.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: InsertContact) {
    mutate(data);
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">CONTACTO</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">¿Listo para comenzar?</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row bg-white border border-neutral-100 rounded-lg overflow-hidden shadow-sm">
            <div className="md:w-2/5 bg-neutral-900 text-white p-10 md:p-12">
              <h3 className="text-xl font-semibold mb-6">Información de contacto</h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-300 mb-1">Email</h4>
                    <p className="text-white">contacto@disenorapido.mx</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-300 mb-1">Teléfono</h4>
                    <p className="text-white">+52 (55) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-neutral-300 mb-1">Ubicación</h4>
                    <p className="text-white">Ciudad de México, México</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-neutral-800">
                <p className="text-neutral-400 text-sm">
                  Horario de atención: Lunes a Viernes de 9:00 AM a 6:00 PM
                </p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-10 md:p-12">
              <Form {...form}>
                <form 
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Nombre</FormLabel>
                          <FormControl>
                            <Input 
                              className="border-neutral-200 focus:border-primary" 
                              onChange={field.onChange} 
                              onBlur={field.onBlur}
                              value={field.value || ""}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="empresa"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Empresa</FormLabel>
                          <FormControl>
                            <Input 
                              className="border-neutral-200 focus:border-primary" 
                              onChange={field.onChange} 
                              onBlur={field.onBlur}
                              value={field.value || ""}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Email</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              className="border-neutral-200 focus:border-primary" 
                              onChange={field.onChange} 
                              onBlur={field.onBlur}
                              value={field.value || ""}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-700">Teléfono</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              className="border-neutral-200 focus:border-primary" 
                              onChange={field.onChange} 
                              onBlur={field.onBlur}
                              value={field.value || ""}
                              name={field.name}
                              ref={field.ref}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="tipoProyecto"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Tipo de Proyecto</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value || ""}
                        >
                          <FormControl>
                            <SelectTrigger className="border-neutral-200 focus:border-primary">
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="landing-page">Landing Page</SelectItem>
                            <SelectItem value="sitio-corporativo">Sitio Corporativo</SelectItem>
                            <SelectItem value="e-commerce">Tienda en Línea</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-700">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4} 
                            className="resize-none border-neutral-200 focus:border-primary"
                            onChange={field.onChange} 
                            onBlur={field.onBlur}
                            value={field.value || ""}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="shine"
                    className="w-full bg-[#0e62fe] text-white font-medium h-12"
                    disabled={isPending}
                    Icon={ArrowRight}
                    iconPlacement="right"
                  >
                    {isPending ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

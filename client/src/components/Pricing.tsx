import { useState } from "react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactModal from "./ContactModal";

export default function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();

  const pricingFeatures = [
    {
      title: "Incluye",
      items: [
        "Diseño elegante",
        "100% responsivo (se ve increíble en cualquier dispositivo)",
        "1 mes de soporte técnico",
        "Entrega ultra rápida: en solo 3 días",
        "Dominio personalizado",
        "Integración con redes sociales",
      ],
    },
    {
      title: "Características",
      items: [
        "Estilo visual alineado a tu marca",
        "Diseño pensado para convertir",
        "Visuales que hablan por tu marca",
        "Textos que comunican tu identidad con claridad",
        "Carga rápida (porque nadie quiere esperar)",
        "Hosting incluido – sin complicaciones técnicas",
      ],
    },
  ];

  return (
    <section className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`} id="pricing">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">
            PRECIOS TRANSPARENTES
          </p>
          <h2
            className={`text-3xl md:text-4xl font-medium mb-4 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            Un precio fijo, sin sorpresas
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            Sin presupuestos complicados ni costos ocultos. Solo una tarifa
            simple.
          </p>
        </motion.div>

        <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
          <PricingCard
            title="Landing Page Profesional"
            description="Todo lo que necesitas para establecer tu presencia web."
            price={18000}
            priceSuffix=" MXN"
            features={pricingFeatures}
            buttonText="Quiero mi landing page"
            onButtonClick={() => setIsContactModalOpen(true)}
          />
          
          <ContactModal 
            open={isContactModalOpen} 
            onOpenChange={setIsContactModalOpen} 
          />
        </Dialog>

        <motion.div
          className="mt-6 text-center text-zinc-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          * Las integraciones adicionales pueden tener un costo extra según su
          complejidad.
        </motion.div>
      </div>
    </section>
  );
}

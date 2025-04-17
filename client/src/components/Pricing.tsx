import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";

export default function Pricing() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();
  
  const pricingFeatures = [
    {
      title: "Incluye",
      items: [
        "Diseño minimalista y elegante",
        "Entrega en solo 3 días",
        "Adaptado a todos los dispositivos",
        "SEO básico incluido",
        "Formulario de contacto funcional",
        "Dominio personalizado",
        "1 mes de soporte técnico",
        "Integración de redes sociales"
      ]
    },
    {
      title: "Características",
      items: [
        "Diseño de alta conversión",
        "Adaptado a tu marca",
        "Optimizado para móviles",
        "Imágenes profesionales",
        "Textos persuasivos",
        "Carga rápida",
        "Analítica web",
        "Hospedaje incluido"
      ]
    }
  ];
  
  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#FFC229] text-sm font-medium mb-2 tracking-wide">PRECIOS TRANSPARENTES</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Un precio fijo, sin sorpresas</h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Sin presupuestos complicados ni costos ocultos. Solo una tarifa simple y predecible.
          </p>
        </motion.div>
        
        <PricingCard 
          title="Landing Page Profesional"
          description="Todo lo que necesitas para establecer tu presencia web"
          price={18000}
          features={pricingFeatures}
          buttonText="Solicitar mi sitio web"
          onButtonClick={() => {
            window.location.href = "#contacto";
          }}
        />
        
        <motion.div 
          className="mt-6 text-center text-zinc-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          * Las integraciones adicionales pueden tener un costo extra según su complejidad
        </motion.div>
      </div>
    </section>
  );
}

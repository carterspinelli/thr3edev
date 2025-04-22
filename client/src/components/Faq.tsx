
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";

const faqItems = [
  {
    id: 1,
    question: "¿Cómo funciona exactamente el proceso de 3 días?",
    answer: "El proceso comienza con una reunión inicial de 30 minutos para entender tu negocio y necesidades. Inmediatamente después, diseñamos y desarrollamos tu landing page utilizando las mejores tecnologías disponibles. Al tercer día, entregamos el sitio completamente funcional junto con el código fuente."
  },
  {
    id: 2,
    question: "¿Qué incluye exactamente el precio de $18,000 MXN?",
    answer: "El precio fijo incluye diseño personalizado, desarrollo completo, optimización para dispositivos móviles, formulario de contacto funcional, SEO básico, hospedaje por un año, entrega del código fuente completo y 1 mes de soporte técnico. No hay costos ocultos ni cargos adicionales."
  },
  {
    id: 3,
    question: "¿Qué necesitan de mi parte para comenzar?",
    answer: "Para comenzar solo necesitamos 30 minutos de tu tiempo para la reunión inicial, información básica sobre tu negocio, cualquier preferencia de diseño, y tus contenidos (textos, logotipo e imágenes). También un anticipo del 50% del precio total."
  },
  {
    id: 4,
    question: "¿Por qué entregan el código fuente completo?",
    answer: "Creemos en la transparencia y en darte control total sobre tu sitio web. Al entregar el código fuente, garantizamos que puedas modificarlo en el futuro con tu propio equipo técnico si así lo deseas, o seguir trabajando con nosotros para actualizaciones y mejoras."
  },
  {
    id: 5,
    question: "¿Ofrecen servicios de hosting y dominio?",
    answer: "Sí, el primer año de hosting está incluido en el precio. Después del primer año, ofrecemos planes de hosting a precios competitivos. En cuanto al dominio, podemos adquirirlo por ti (costo adicional) o puedes utilizar uno que ya poseas."
  }
];

export default function Faq() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">DUDAS FRECUENTES</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${isDark ? "text-white" : "text-zinc-900"}`}>Preguntas Frecuentes</h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
            Respuestas a las dudas más comunes sobre nuestro servicio.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaqAccordion 
            data={faqItems}
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

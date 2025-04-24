import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";

// Importamos la interfaz FAQItem para nuestros datos
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

// Iconos en emojis para las preguntas
const icons = ["⏱️", "💵", "📋", "📝", "🌐"];

// Datos formatados para nuestro nuevo componente
const faqData: FAQItem[] = [
  {
    id: 1,
    question: "¿3 días? ¿En serio? Sin trucos.",
    answer: "Absolutamente en serio. 72 horas desde el brief inicial hasta la entrega completa. Lo que normalmente toma semanas, nosotros lo hacemos en días. Nuestro sistema está optimizado para la velocidad sin sacrificar calidad. Hemos eliminado los cuellos de botella típicos del desarrollo web tradicional.",
    icon: icons[0],
    iconPosition: "left"
  },
  {
    id: 2,
    question: "¿Qué incluye realmente el precio de $18K?",
    answer: "Todo. Diseño, código, hosting por 1 año, implementación de formularios, optimización móvil, SEO fundamental, archivos fuente, y soporte por 30 días. Sin sorpresas, sin costos adicionales, sin asteriscos ni letra pequeña. Transparencia total.",
    icon: icons[1],
    iconPosition: "right"
  },
  {
    id: 3,
    question: "¿Y si necesito cambios después?",
    answer: "El código es tuyo. Puedes hacer modificaciones por tu cuenta o contratar a cualquier desarrollador. Si prefieres que nosotros hagamos los cambios, tenemos paquetes de mantenimiento accesibles. La flexibilidad es tuya. Tu sitio, tus reglas.",
    icon: icons[2],
    iconPosition: "left"
  },
  {
    id: 4,
    question: "¿Podré actualizar el contenido yo mismo?",
    answer: "Por supuesto. Implementamos un sistema intuitivo para que puedas actualizar textos, imágenes y otros contenidos sin conocimientos técnicos. Si necesitas modificaciones más complejas, ofrecemos soporte. Queremos que tengas independencia.",
    icon: icons[3],
    iconPosition: "right"
  },
  {
    id: 5,
    question: "¿Cómo iniciamos? ¿Cuál es el primer paso?",
    answer: "Simple: agendamos una llamada de 30 minutos, recopilamos tus requerimientos y el 50% de anticipo. Inmediatamente activamos el cronómetro. 72 horas después, tu sitio estará listo. Así de directo, así de eficiente.",
    icon: icons[4],
    iconPosition: "left"
  }
];

export default function Faq() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`py-16 md:py-24 ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium tracking-wide mb-2">LA TRANSPARENCIA ES CLAVE</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Dudas <span className="text-[#0e62fe]">resueltas</span></h2>
          <p className={`text-lg max-w-3xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Respuestas directas, sin rodeos. Todo lo que necesitas saber antes de
            acelerar tu presencia web a velocidad supersónica.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-opacity-40 rounded-xl p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={`max-w-2xl mx-auto rounded-xl p-6 ${isDark ? 'bg-zinc-900' : 'bg-zinc-50'}`}>
            <div className="mb-3 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#0e62fe]/10 flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-2xl">💬</span>
                </motion.div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-lg">Chat de Soporte</h3>
                <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Última actualización: Hoy
                </p>
              </div>
            </div>
            
            <FaqAccordion 
              data={faqData}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
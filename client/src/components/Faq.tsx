import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { useTranslation } from "react-i18next";

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

// This function will be used to get the correct FAQ data based on the current language
const getFaqData = (t: any): FAQItem[] => {
  return [
    {
      id: 1,
      question: t("faq.question1"),
      answer: t("faq.answer1"),
      icon: icons[0],
      iconPosition: "left",
    },
    {
      id: 2,
      question: t("faq.question2"),
      answer: t("faq.answer2"),
      icon: icons[1],
      iconPosition: "right",
    },
    {
      id: 3,
      question: t("faq.question3", { defaultValue: "¿Qué necesitan de mi parte para comenzar?" }),
      answer: t("faq.answer3", { defaultValue: "Para comenzar solo necesitamos 30 minutos de tu tiempo para la reunión inicial, información básica sobre tu negocio, cualquier preferencia de diseño, y tus contenidos (textos, logotipo e imágenes). También un anticipo del 50% del precio total." }),
      icon: icons[2],
      iconPosition: "left",
    },
    {
      id: 4,
      question: t("faq.question4", { defaultValue: "¿Por qué entregan el código fuente completo?" }),
      answer: t("faq.answer4", { defaultValue: "Creemos en la transparencia y en darte control total sobre tu landing page. Al entregar el código fuente, garantizamos que puedas modificarlo en el futuro con tu propio equipo si así lo deseas, o seguir trabajando con nosotros para actualizaciones y mejoras." }),
      icon: icons[3],
      iconPosition: "right",
    },
    {
      id: 5,
      question: t("faq.question5", { defaultValue: "¿Ofrecen servicios de hosting y dominio?" }),
      answer: t("faq.answer5", { defaultValue: "Sí, el primer año de hosting está incluido en el precio. Después del primer año, ofrecemos planes de hosting a precios competitivos. En cuanto al dominio, podemos adquirirlo por ti (costo adicional) o puedes utilizar uno que ya hayas adquirido." }),
      icon: icons[4],
      iconPosition: "left",
    },
  ];
};

export default function Faq() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t, i18n } = useTranslation();

  return (
    <section
      id="faq"
      className={`py-16 md:py-24 ${isDark ? "bg-zinc-950 text-white" : "bg-white text-zinc-900"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium tracking-wide mb-2">
            {t("faq.title").toUpperCase()}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            {t("faq.subtitle")}
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
          >
            {i18n.language === 'es' ? 'Respuestas a las dudas más comunes sobre nuestro servicio.' : 'Answers to common questions about our service.'}
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-opacity-40 rounded-xl p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className={`max-w-2xl mx-auto rounded-xl p-6 ${isDark ? "bg-zinc-900" : "bg-zinc-50"}`}
          >
            <div className="mb-3 flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#0e62fe]/10 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-2xl">💬</span>
                </motion.div>
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-lg">{i18n.language === 'es' ? 'Chat de Soporte' : 'Support Chat'}</h3>
                <p
                  className={`text-sm ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
                >
                  {i18n.language === 'es' ? 'Última actualización: Hoy' : 'Last updated: Today'}
                </p>
              </div>
            </div>

            <FaqAccordion data={getFaqData(t)} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

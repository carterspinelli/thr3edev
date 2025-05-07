import { useState } from "react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactModal from "./ContactModal";
import { useTranslation } from "react-i18next";

export default function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();

  // Definición de las características del precio que cambian según el idioma
  const pricingFeatures = [
    {
      title: t("pricing.features"),
      items: [
        t("pricing.feature1"),
        t("pricing.feature2"),
        t("pricing.feature3"),
        t("pricing.feature4"),
        t("pricing.feature5"),
        t("pricing.feature6"),
      ],
    },
    {
      title: t("pricing.subtitle"),
      items: [
        t("pricing.feature7"),
        t("pricing.feature8"),
        "Imágenes personalizadas",
        "Textos que comunican tu identidad con claridad",
        "Carga rápida (porque nadie quiere esperar)",
        t("pricing.feature6"),
      ],
    },
  ];

  return (
    <section
      className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}
      id="pricing"
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">
            {t("pricing.title").toUpperCase()}
          </p>
          <h2
            className={`text-3xl md:text-4xl font-medium mb-4 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            {t("pricing.subtitle")}
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            {t("pricing.description")}
          </p>
        </motion.div>

        <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
          <PricingCard
            title={t("pricing.title")}
            description={t("pricing.description")}
            price={i18n.language === 'en' ? 1000 : 18000}
            priceSuffix={i18n.language === 'en' ? " USD" : " MXN"}
            features={pricingFeatures}
            buttonText={t("pricing.cta")}
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
          * {i18n.language === 'en' 
            ? "Additional integrations may have an extra cost depending on their complexity." 
            : "Las integraciones adicionales pueden tener un costo extra según su complejidad."}
        </motion.div>
      </div>
    </section>
  );
}

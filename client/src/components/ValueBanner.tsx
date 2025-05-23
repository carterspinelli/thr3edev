import React, { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Clock, DollarSign, Code, DownloadCloud } from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTranslation } from "react-i18next";

interface MeteorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const MeteorCard = ({ icon, title, description, color }: MeteorCardProps) => {
  const { theme } = useTheme();
  const { setCursorVariant } = useSetCursorVariant();
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <motion.div
      className="w-full relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        setMouseEnter(true);
        setCursorVariant("sm");
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
        setCursorVariant("default");
      }}
    >
      {/* Eliminado el fondo de gradiente */}

      <div
        className={cn(
          "relative shadow-xl px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center text-center",
          theme === "dark"
            ? "bg-zinc-900 border-zinc-800"
            : "bg-white border-zinc-200",
          "border",
        )}
      >
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full border mb-6 text-[#0e62fe] mx-auto"
          style={{ borderColor: `${color}40` }}
        >
          {icon}
        </div>

        <h3
          className={`font-bold text-xl mb-3 relative z-50 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
        >
          {title}
        </h3>

        <p
          className={`text-base mb-6 relative z-50 ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
        >
          {description}
        </p>

        <Meteors
          number={mouseEnter ? 20 : 10}
          className={mouseEnter ? "opacity-100" : "opacity-30"}
        />
      </div>
    </motion.div>
  );
};

export default function ValueBanner() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const valueItems = [
    {
      icon: <Clock className="size-6" />,
      title: t("benefits.benefit1.title"),
      description: t("benefits.benefit1.description"),
      color: "#0e62fe",
    },
    {
      icon: <DollarSign className="size-6" />,
      title: t("benefits.benefit2.title"),
      description: t("benefits.benefit2.description"),
      color: "#0e62fe",
    },
    {
      icon: <Code className="size-6" />,
      title: t("benefits.benefit3.title"),
      description: t("benefits.benefit3.description"),
      color: "#0e62fe",
    },
    {
      icon: <DownloadCloud className="size-6" />,
      title: t("benefits.benefit4.title"),
      description: t("benefits.benefit4.description"),
      color: "#0e62fe",
    },
  ];

  return (
    <section
      className={`py-20 ${theme === "dark" ? "bg-black" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-zinc-900"}`}
          >
            Por qué <span className="text-[#0e62fe]">elegirnos</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
          >
            Lo hacemos simple</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueItems.map((item, index) => (
            <MeteorCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
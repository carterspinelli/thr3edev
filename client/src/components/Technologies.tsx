import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-background-stars-card";

// The technologies array is now created inside the component to access translations

export default function Technologies() {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  
  const technologies = [
    {
      name: "Next.js",
      description: t("technologies.tech1"),
      url: "https://nextjs.org/",
    },
    {
      name: "Gatsby.js",
      description: t("technologies.tech2"),
      url: "https://www.gatsbyjs.com/",
    },
    {
      name: "TailwindCSS",
      description: t("technologies.tech3"),
      url: "https://tailwindcss.com/",
    },
    {
      name: "TypeScript",
      description: t("technologies.tech4"),
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Node.js",
      description: t("technologies.tech5"),
      url: "https://nodejs.org/",
    },
    {
      name: "React",
      description: t("technologies.tech6"),
      url: "https://reactjs.org/",
    },
  ];

  return (
    <section 
      id="tecnologias"
      className={`py-24 overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#26D9A3] text-sm font-medium mb-2 tracking-wide">{t("technologies.title").toUpperCase()}</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            {t("technologies.subtitle")}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            {t("technologies.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowingStarsBackgroundCard href={tech.url} className={`h-full ${theme === 'dark' ? '' : 'bg-[linear-gradient(110deg,#f5f5f5_0.6%,#e8e8e8)]'}`}>
                <GlowingStarsTitle>{tech.name}</GlowingStarsTitle>
                <div className="flex justify-between items-end">
                  <GlowingStarsDescription>
                    {tech.description}
                  </GlowingStarsDescription>
                  <div className={`h-8 w-8 rounded-full ${theme === 'dark' ? 'bg-[hsla(0,0%,100%,.1)]' : 'bg-[hsla(0,0%,0%,.1)]'} flex items-center justify-center`}>
                    <ArrowRight className={`h-4 w-4 ${theme === 'dark' ? 'text-white' : 'text-black'} stroke-2`} />
                  </div>
                </div>
              </GlowingStarsBackgroundCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
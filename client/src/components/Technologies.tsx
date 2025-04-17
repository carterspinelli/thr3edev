import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-background-stars-card";

const technologies = [
  {
    name: "Next.js",
    description: "El framework React para aplicaciones web con renderizado híbrido.",
    url: "https://nextjs.org/",
  },
  {
    name: "Gatsby.js",
    description: "Framework frontend para crear sitios rápidos con React y GraphQL.",
    url: "https://www.gatsbyjs.com/",
  },
  {
    name: "TailwindCSS",
    description: "Framework CSS utilitario para construir diseños personalizados.",
    url: "https://tailwindcss.com/",
  },
  {
    name: "TypeScript",
    description: "Lenguaje de programación tipado superset de JavaScript.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Node.js",
    description: "Entorno de ejecución de JavaScript del lado del servidor.",
    url: "https://nodejs.org/",
  },
  {
    name: "React",
    description: "Biblioteca de JavaScript para construir interfaces de usuario.",
    url: "https://reactjs.org/",
  },
];

export default function Technologies() {
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 md:py-28 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#26D9A3] text-sm font-medium mb-2 tracking-wide">TECNOLOGÍAS</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Construido con lo mejor
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Utilizamos las tecnologías más innovadoras y eficientes para crear sitios web de alto rendimiento.
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
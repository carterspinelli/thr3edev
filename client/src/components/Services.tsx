import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { ColorBlock } from "@/components/ui/color-block";
import { FeatureIcons } from "@/components/ui/feature-icons";
import { motion } from "framer-motion";

const serviceBlocks = [
  {
    number: "01",
    title: "Estrategia",
    description: "Analizamos tu negocio y definimos la mejor estrategia para convertir visitantes en clientes.",
    color: "red" as const,
    icon: <FeatureIcons.PlanningBoard />
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos experiencias digitales que cautivan a tu audiencia y reflejan la identidad de tu marca.",
    color: "yellow" as const,
    icon: <FeatureIcons.Pencil />
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos landing pages optimizadas con las mejores tecnologías y prácticas del mercado.",
    color: "green" as const,
    icon: <FeatureIcons.Laptop />
  },
  {
    number: "04",
    title: "Velocidad",
    description: "Entregamos tu landing page lista para usar en solo 3 días a un precio fijo de $18,000 MXN.",
    color: "red" as const,
    icon: <FeatureIcons.Runner />
  }
];

export default function Services() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  
  return (
    <section id="servicios" className="py-20 md:py-28 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#FF4D2B] text-sm font-medium mb-2 tracking-wide">NUESTROS SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-white">Creamos experiencias impactantes</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Diseñamos landing pages que convierten visitantes en clientes mediante un proceso perfeccionado y entregas ultrarrápidas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceBlocks.map((block, index) => (
            <ColorBlock
              key={index}
              number={block.number}
              title={block.title}
              description={block.description}
              color={block.color}
              icon={block.icon}
              className={index === 1 ? "md:row-span-2 md:h-full" : ""}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-24 p-8 rounded-lg bg-zinc-900 border border-zinc-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={() => setCursorText("3 días")}
          onMouseLeave={() => setCursorText("")}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
                De la idea al lanzamiento <span className="text-[#FF4D2B]">en 3 días</span>
              </h3>
              <p className="text-zinc-400 text-base">
                Hemos perfeccionado nuestro proceso para entregar landing pages de alta calidad en tiempo récord. 
                Sin complicaciones, sin costos ocultos, solo resultados excepcionales a un precio fijo de $18,000 MXN.
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#FF4D2B]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFC229]"></div>
              <div className="w-3 h-3 rounded-full bg-[#26D9A3]"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

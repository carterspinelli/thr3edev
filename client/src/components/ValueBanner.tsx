import { BoltIcon, BanknoteIcon, StarIcon } from "lucide-react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { motion } from "framer-motion";

export default function ValueBanner() {
  const { setCursorText } = useSetCursorVariant();
  
  const benefits = [
    {
      icon: <BoltIcon className="h-6 w-6" />,
      title: "Entrega en 3 días",
      description: "De la idea al lanzamiento en tiempo récord",
      color: "#FF4D2B",
      hoverText: "Rapidez"
    },
    {
      icon: <BanknoteIcon className="h-6 w-6" />,
      title: "Precio fijo: $18,000 MXN",
      description: "Sin costos ocultos ni sorpresas",
      color: "#FFC229",
      hoverText: "Precio"
    },
    {
      icon: <StarIcon className="h-6 w-6" />,
      title: "Diseño minimalista",
      description: "Sitios elegantes optimizados para conversión",
      color: "#26D9A3",
      hoverText: "Diseño"
    }
  ];
  
  return (
    <section className="py-20 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center group relative"
              onMouseEnter={() => setCursorText(benefit.hoverText)}
              onMouseLeave={() => setCursorText("")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="mb-6 w-16 h-16 rounded-full flex items-center justify-center relative z-10"
                style={{ backgroundColor: `${benefit.color}15` }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 rounded-full" style={{ 
                  background: `radial-gradient(circle at center, ${benefit.color}30 0%, transparent 70%)` 
                }}></div>
                <div style={{ color: benefit.color }}>
                  {benefit.icon}
                </div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-medium mb-3 text-white text-center"
                initial={{ y: 0 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                {benefit.title}
              </motion.h3>
              
              <p className="text-zinc-400 text-sm max-w-xs mx-auto text-center">
                {benefit.description}
              </p>
              
              <motion.div 
                className="absolute top-1/2 -z-10 rounded-full opacity-10 blur-xl"
                initial={{ width: 100, height: 100 }}
                whileHover={{ width: 130, height: 130 }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: benefit.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Clock, DollarSign, Star } from "lucide-react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ValueCard = ({ icon, title, description, color }: ValueCardProps) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      className={`flex flex-col items-center p-8 rounded-xl ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} 
                  shadow-lg border ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-100'} text-center`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <motion.div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#0e62fe]/10"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3" style={{ color }}>{title}</h3>
      <p className={`text-sm ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>
    </motion.div>
  );
};

export default function ValueBanner() {
  const { theme } = useTheme();
  
  const valueItems = [
    {
      icon: <Clock className="size-6 text-[#0e62fe]" />,
      title: "Entrega en 3 días",
      description: "De la idea al lanzamiento en tiempo récord",
      color: "#0e62fe"
    },
    {
      icon: <DollarSign className="size-6 text-[#0e62fe]" />,
      title: "Precio fijo: $18,000 MXN",
      description: "Sin costos ocultos ni sorpresas",
      color: "#0e62fe"
    },
    {
      icon: <Star className="size-6 text-[#0e62fe]" />,
      title: "Diseño minimalista",
      description: "Sitios elegantes optimizados para conversión",
      color: "#0e62fe"
    }
  ];

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Nuestros <span className="text-[#0e62fe]">valores principales</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Entregamos sitios web de alta calidad con un proceso claro y predecible
          </p>
        </motion.div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueItems.map((item, index) => (
            <ValueCard
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
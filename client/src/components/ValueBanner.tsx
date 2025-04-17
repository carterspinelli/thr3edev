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
      className={`flex flex-col items-center p-6 text-center ${theme === 'dark' ? '' : 'text-zinc-800'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-24 h-24 rounded-full flex items-center justify-center mb-5"
        style={{ 
          backgroundColor: theme === 'dark' 
            ? 'rgba(30, 30, 30, 0.5)' 
            : 'rgba(245, 245, 245, 0.9)',
          boxShadow: theme === 'dark'
            ? '0 4px 6px rgba(0, 0, 0, 0.2)' 
            : '0 4px 6px rgba(0, 0, 0, 0.05)'
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-medium mb-3" style={{ color }}>{title}</h3>
      <p className={`text-sm max-w-64 mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>{description}</p>
    </motion.div>
  );
};

export default function ValueBanner() {
  const { theme } = useTheme();
  
  const valueItems = [
    {
      icon: <Clock className="size-8 text-[#FF4D2B]" />,
      title: "Entrega en 3 días",
      description: "De la idea al lanzamiento en tiempo récord",
      color: "#FF4D2B"
    },
    {
      icon: <DollarSign className="size-8 text-[#FFC229]" />,
      title: "Precio fijo: $18,000 MXN",
      description: "Sin costos ocultos ni sorpresas",
      color: "#FFC229"
    },
    {
      icon: <Star className="size-8 text-[#26D9A3]" />,
      title: "Diseño minimalista",
      description: "Sitios elegantes optimizados para conversión",
      color: "#26D9A3"
    }
  ];

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
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
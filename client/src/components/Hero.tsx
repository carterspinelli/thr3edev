import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  CustomCursor,
  useSetCursorVariant,
} from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Brush, Zap, BarChart3, FolderCheck, Clock, PieChart } from "lucide-react";

// Componente para las partículas flotantes
const FloatingParticles = ({ color }: { color: string }) => {
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 60 - 30,
    y: Math.random() * 60 - 30,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute left-1/2 top-1/2"
          initial={{ 
            opacity: 0,
            x: 0, 
            y: 0 
          }}
          animate={{ 
            opacity: [0, 0.8, 0],
            x: particle.x, 
            y: particle.y,
            scale: [0, 1, 0.5]
          }}
          transition={{ 
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" 
          }}
        >
          <div 
            className="rounded-full" 
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`, 
              backgroundColor: color,
              filter: 'blur(1px)' 
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Componente para la tarjeta de característica expandible
interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
  color: string;
  hoverColor: string;
  bgColor: string;
  isDarkMode: boolean;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
}

const FeatureCard = ({ 
  icon, 
  text, 
  color, 
  hoverColor,
  bgColor,
  isDarkMode,
  description,
  stats
}: FeatureCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className={`relative group overflow-hidden ${expanded ? 'z-20' : 'z-10'}`}
      initial={false}
      animate={{ width: expanded ? 'auto' : 'auto' }}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      {/* Contenedor principal */}
      <motion.div
        className={`rounded-xl cursor-pointer transition-all duration-300 flex flex-col overflow-hidden`}
        style={{
          backgroundColor: expanded ? `${bgColor}20` : (hovered ? `${bgColor}15` : 'transparent'),
          boxShadow: (expanded || hovered) ? `0 0 25px 0 ${bgColor}30` : 'none',
          border: `1px solid ${expanded ? bgColor : 'transparent'}`
        }}
        animate={{ 
          width: expanded ? '100%' : 'auto',
          height: expanded ? 'auto' : 'auto',
          borderRadius: expanded ? 16 : 50
        }}
        onClick={() => setExpanded(!expanded)}
        layout
      >
        {/* Cabecera - Siempre visible */}
        <motion.div 
          className="flex items-center space-x-3 px-4 py-3"
          layout="position"
        >
          <motion.div 
            className="rounded-full p-1.5 flex items-center justify-center"
            style={{ backgroundColor: color }}
            animate={{ 
              rotate: (expanded || hovered) ? [0, 5, -5, 0] : 0,
              scale: (expanded || hovered) ? [1, 1.1, 1] : 1
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            layout="position"
          >
            {icon}
          </motion.div>

          <motion.div
            className="flex flex-col"
            layout="position"
          >
            <motion.span
              className={`text-sm font-medium transition-colors duration-300`}
              style={{
                color: (expanded || hovered) ? hoverColor : (isDarkMode ? "#a1a1aa" : "#52525b")
              }}
              layout="position"
            >
              {text}
            </motion.span>
            
            {expanded && (
              <motion.span
                className={`text-xs ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Haz clic para {expanded ? 'cerrar' : 'abrir'}
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Contenido expandido */}
        {expanded && (
          <motion.div
            className="px-4 pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className={`text-xs mb-3 ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-sm font-semibold" style={{ color }}>
                    {stat.value}
                  </span>
                  <span className={`text-xs ${isDarkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Partículas flotantes */}
      {(expanded || hovered) && <FloatingParticles color={color} />}
    </motion.div>
  );
};

export default function Hero() {
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } =
    useSetCursorVariant();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <section
        id="inicio"
        className={`pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden ${isDark ? "bg-black text-white" : "bg-white text-zinc-900"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
            {/* Background elements removed */}

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
                <span className="inline-block mb-4">Landing pages</span> <br />
                <span className="text-[#0e62fe]">profesionales</span> en{" "}
                <Cover>solo 3 días</Cover>
              </h1>

              <p
                className={`text-lg md:text-xl mb-10 tracking-tight max-w-3xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Diseño, desarrollo y hosting completo por{" "}
                <span className="font-medium text-[#0e62fe]">
                  $18,000 MXN
                </span>
                {" "}precio fijo. Del concepto al lanzamiento en tres días, incluyendo
                entrega del código fuente.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="rounded-full px-10 py-6 bg-[#0e62fe] hover:bg-[#0952d3] text-white font-medium"
                asChild
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#pricing">Solicitar mi sitio web</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`rounded-full px-10 py-6 font-medium ${
                  isDark
                    ? "border-zinc-800 text-white hover:bg-zinc-900"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-100"
                }`}
                asChild
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#servicios">Nuestros servicios</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 z-10 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureCard 
                icon={<Brush size={14} className="text-white" />} 
                text="Diseño" 
                color="#0e62fe"
                hoverColor="#0e62fe"
                bgColor="#0e62fe"
                isDarkMode={isDark}
                description="Creamos diseños profesionales, modernos y optimizados que reflejen la identidad de tu marca y generen confianza en tus usuarios."
                stats={[
                  { value: "100%", label: "Personalizado" },
                  { value: "UI/UX", label: "Profesional" },
                  { value: "Figma", label: "Prototipos" },
                  { value: "Responsive", label: "En todo dispositivo" },
                ]}
              />
              
              <FeatureCard 
                icon={<Zap size={14} className="text-black" />} 
                text="Velocidad" 
                color="#FFC229"
                hoverColor="#c79300"
                bgColor="#FFC229"
                isDarkMode={isDark}
                description="Entregamos tu landing page completa en solo 3 días, sin sacrificar calidad. Un proceso optimizado que minimiza esperas y maximiza resultados."
                stats={[
                  { value: "3 días", label: "Entrega garantizada" },
                  { value: "24h", label: "Primera versión" },
                  { value: "48h", label: "Revisiones" },
                  { value: "72h", label: "Lanzamiento" },
                ]}
              />
              
              <FeatureCard 
                icon={<BarChart3 size={14} className="text-black" />} 
                text="Resultados" 
                color="#26D9A3"
                hoverColor="#1ba077"
                bgColor="#26D9A3"
                isDarkMode={isDark}
                description="Diseñamos pensando en la conversión. Cada elemento de tu landing page está optimizado para captar leads y generar ventas efectivas."
                stats={[
                  { value: "+40%", label: "Conversión promedio" },
                  { value: "95/100", label: "Rendimiento web" },
                  { value: "SEO", label: "Optimizado" },
                  { value: "Analytics", label: "Incluido" },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

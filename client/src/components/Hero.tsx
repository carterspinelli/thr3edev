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

// Componente para la tarjeta de característica con hover
interface FeatureCardProps {
  icon: React.ReactNode;
  text: string;
  color: string;
  isDarkMode: boolean;
  caption: string;
}

const FeatureCard = ({ 
  icon, 
  text, 
  color, 
  isDarkMode,
  caption
}: FeatureCardProps) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="w-32 h-28 flex flex-col items-center justify-center rounded-xl border transition-all duration-300"
        style={{
          backgroundColor: hovered ? `${color}15` : (isDarkMode ? 'rgba(24, 24, 27, 0.4)' : 'rgba(244, 244, 245, 0.7)'),
          borderColor: hovered ? color : (isDarkMode ? 'rgba(63, 63, 70, 0.4)' : 'rgba(212, 212, 216, 0.4)'),
          boxShadow: hovered ? `0 4px 20px 0 ${color}40` : 'none'
        }}
      >
        <motion.div 
          className="mb-2 rounded-full p-2 flex items-center justify-center"
          animate={{ 
            scale: hovered ? [1, 1.15, 1] : 1,
            rotateY: hovered ? [0, 180, 360] : 0
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{
            backgroundColor: color,
            boxShadow: hovered ? `0 0 15px 0 ${color}70` : 'none'
          }}
        >
          {icon}
        </motion.div>

        <motion.span
          className="text-sm font-medium mb-0.5"
          animate={{ 
            y: hovered ? [0, -3, 0] : 0
          }}
          transition={{ duration: 0.5 }}
          style={{
            color: hovered ? color : (isDarkMode ? '#fff' : '#18181b')
          }}
        >
          {text}
        </motion.span>
        
        <motion.span
          className="text-xs text-center px-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ 
            opacity: hovered ? 1 : 0,
            y: hovered ? 0 : -5
          }}
          transition={{ duration: 0.3 }}
          style={{
            color: isDarkMode ? '#a1a1aa' : '#71717a' 
          }}
        >
          {caption}
        </motion.span>
      </motion.div>
      
      {/* Partículas de fondo */}
      {hovered && (
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FloatingParticles color={color} />
        </motion.div>
      )}
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
              className="flex justify-center gap-6 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureCard 
                icon={<Brush size={16} className="text-white" />} 
                text="Diseño" 
                color="#0e62fe"
                isDarkMode={isDark}
                caption="UI/UX Profesional"
              />
              
              <FeatureCard 
                icon={<Zap size={16} className="text-black" />} 
                text="Velocidad" 
                color="#FFC229"
                isDarkMode={isDark}
                caption="Entrega en 3 días"
              />
              
              <FeatureCard 
                icon={<BarChart3 size={16} className="text-black" />} 
                text="Resultados" 
                color="#26D9A3"
                isDarkMode={isDark}
                caption="Optimizado para conversión"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

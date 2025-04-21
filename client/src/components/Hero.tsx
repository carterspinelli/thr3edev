import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  CustomCursor,
  useSetCursorVariant,
} from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Brush, Zap, BarChart3 } from "lucide-react";

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

// Componente para el feature badge con animación
const FeatureBadge = ({ 
  icon, 
  text, 
  color, 
  hoverColor,
  bgColor,
  isDarkMode
}: { 
  icon: React.ReactNode; 
  text: string; 
  color: string;
  hoverColor: string;
  bgColor: string;
  isDarkMode: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative"
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={`flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out`}
        style={{
          backgroundColor: hovered ? `${bgColor}30` : 'transparent',
          boxShadow: hovered ? `0 0 20px 0 ${bgColor}20` : 'none'
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div 
          className="rounded-full p-1 flex items-center justify-center"
          style={{ backgroundColor: color }}
          animate={{ 
            rotate: hovered ? [0, 5, -5, 0] : 0,
            scale: hovered ? [1, 1.1, 1] : 1
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>

        <motion.span
          className={`text-sm font-medium transition-colors duration-300`}
          style={{
            color: hovered ? hoverColor : (isDarkMode ? "#a1a1aa" : "#52525b")
          }}
        >
          {text}
        </motion.span>
      </motion.div>
      
      {hovered && <FloatingParticles color={color} />}
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
              className="flex flex-wrap justify-center gap-4 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FeatureBadge 
                icon={<Brush size={14} className="text-white" />} 
                text="Diseño" 
                color="#0e62fe"
                hoverColor="#0e62fe"
                bgColor="#0e62fe"
                isDarkMode={isDark}
              />
              
              <FeatureBadge 
                icon={<Zap size={14} className="text-black" />} 
                text="Velocidad" 
                color="#FFC229"
                hoverColor="#c79300"
                bgColor="#FFC229"
                isDarkMode={isDark}
              />
              
              <FeatureBadge 
                icon={<BarChart3 size={14} className="text-black" />} 
                text="Resultados" 
                color="#26D9A3"
                hoverColor="#1ba077"
                bgColor="#26D9A3"
                isDarkMode={isDark}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

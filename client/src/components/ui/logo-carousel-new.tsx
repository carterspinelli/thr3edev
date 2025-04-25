import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  if (!logos || logos.length === 0) {
    return null;
  }
  
  const isMobile = useIsMobile();
  const CYCLE_DURATION = isMobile ? 3000 : 2000; // Más tiempo para ver cada logo en móvil
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex] || logos[0]; // Asegurarse de que siempre haya un logo

  // Aumentar el tamaño en móvil para mayor visibilidad
  const containerSizeClasses = isMobile
    ? "relative h-24 w-32 overflow-visible"
    : "relative h-16 w-24 overflow-visible md:h-24 md:w-48";

  return (
    <motion.div
      className={containerSizeClasses}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={currentLogo.src}
            alt={currentLogo.name}
            className="h-auto w-auto object-contain max-h-[90%] max-w-[90%]"
            style={{
              minWidth: isMobile ? "80px" : "auto",
              minHeight: isMobile ? "30px" : "auto",
            }}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

interface LogoCarouselProps {
  columns?: number;
  logos: Logo[];
}

export function LogoCarousel({ columns = 2, logos }: LogoCarouselProps) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const isMobile = useIsMobile();
  
  // Asegurarse de que siempre haya al menos una columna, y en móvil mostrar solo una
  const effectiveColumns = isMobile ? 1 : Math.max(1, columns);
  
  // En móvil, reducir el intervalo de tiempo para mostrar los logos más rápido
  const timeInterval = isMobile ? 50 : 100;

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      // Asegurarse de que haya logos para mostrar
      if (!logos || logos.length === 0) {
        // Si no hay logos, crear un array del tamaño apropiado
        return Array.from({ length: effectiveColumns }, () => []);
      }
      
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: effectiveColumns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % effectiveColumns].push(logo);
      });

      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [effectiveColumns]
  );

  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + timeInterval);
    }, timeInterval);
    return () => clearInterval(interval);
  }, [timeInterval]);

  // Preparar estilos específicos para móvil o desktop
  const containerStyles = isMobile 
    ? "flex flex-col items-center justify-center gap-8 py-8" 
    : "flex justify-center gap-4 py-8";
    
  return (
    <div className={containerStyles}>
      {/* Asegurar que siempre se renderice al menos una columna */}
      {(logoColumns && logoColumns.length > 0) ? (
        logoColumns.map((columnLogos, index) => (
          <LogoColumn
            key={index}
            logos={columnLogos}
            columnIndex={index}
            currentTime={time}
          />
        ))
      ) : (
        // Fallback por si no hay columnas
        <div className="text-sm text-zinc-500">Cargando logos...</div>
      )}
    </div>
  );
}
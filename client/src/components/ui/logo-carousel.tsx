import { useCallback, useEffect, useState } from "react";
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
  const isMobile = useIsMobile();
  // Reducimos ligeramente el tiempo del ciclo en móviles para que se vean más logos
  const CYCLE_DURATION = isMobile ? 1800 : 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
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
            className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
            // Aumentamos el brillo en móviles para que se vean mejor
            style={{ 
              filter: isMobile ? 'brightness(1.1)' : 'none',
              maxHeight: isMobile ? '70%' : '80%' // Ligeramente más pequeño en móviles
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
  const isMobile = useIsMobile();
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  
  // Ajustamos el número de columnas en móvil si no se especifica
  const effectiveColumns = isMobile ? Math.min(2, columns) : columns;

  const distributeLogos = useCallback(
    (logos: Logo[]) => {
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
    // Velocidad más rápida en dispositivos móviles para mostrar más logos
    const interval = setInterval(() => {
      setTime((prev) => prev + (isMobile ? 150 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="flex justify-center gap-4 py-8">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}
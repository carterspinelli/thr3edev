import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime = (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative overflow-hidden p-2"
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
          className="flex items-center justify-center h-[80px] md:h-[100px]"
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
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
            style={{ 
              filter: 'brightness(1.3) contrast(1.2)',
              maxWidth: '100%',
              maxHeight: '100%'
            }}
            width="80"
            height="80"
            loading="eager"
            onError={(e) => {
              console.error(`Error loading logo: ${currentLogo.name}`, e);
              // Set a fallback if image fails to load
              e.currentTarget.style.display = 'none';
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

// Almacena de manera global los logos distribuidos para mantener consistencia entre instancias
let globalDistributedLogos: Logo[][] | null = null;

export function LogoCarousel({ columns = 2, logos }: LogoCarouselProps) {
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);

  const distributeLogos = useCallback(() => {
    // Si ya tenemos los logos distribuidos, los usamos
    if (globalDistributedLogos) {
      return globalDistributedLogos;
    }
    
    // Distribuir los logos de manera determinística
    const result: Logo[][] = Array.from({ length: columns }, () => []);
    
    // Aseguramos que cada columna tenga al menos un logo
    for (let i = 0; i < logos.length; i++) {
      const colIndex = i % columns;
      result[colIndex].push(logos[i]);
    }
    
    // Aseguramos que todas las columnas tengan la misma cantidad de logos
    const maxLength = Math.max(...result.map((col) => col.length));
    result.forEach((col) => {
      while (col.length < maxLength) {
        // Agregamos logos de manera determinística
        const index = col.length % logos.length;
        col.push(logos[index]);
      }
    });
    
    // Guardamos globalmente para mantener consistencia
    globalDistributedLogos = result;
    return result;
  }, [columns, logos]);

  useEffect(() => {
    setLogoColumns(distributeLogos());
  }, [distributeLogos]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-2 md:py-4 px-4">
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
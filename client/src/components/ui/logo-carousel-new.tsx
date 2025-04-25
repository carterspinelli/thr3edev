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
    ? "relative h-28 w-40 overflow-visible"
    : "relative h-16 w-24 overflow-visible md:h-24 md:w-48";

  // Obtener la URL de la imagen o usar el ruta por defecto
  const imageSrc = currentLogo.src || `/ibm-logo.svg`;

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
            src={imageSrc}
            alt={currentLogo.name}
            className="h-auto w-auto object-contain max-h-[90%] max-w-[90%] dark:filter dark:brightness-0 dark:invert"
            style={{
              minWidth: isMobile ? "100px" : "auto",
              minHeight: isMobile ? "40px" : "auto",
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
  // Usamos logos fijos en caso de que los pasados no se carguen correctamente
  const defaultLogos: Logo[] = [
    { id: 1, name: "IBM", src: "/ibm-logo.svg" },
    { id: 2, name: "Udemy", src: "/udemy-logo.svg" },
    { id: 3, name: "GitHub", src: "/github-logo.svg" },
    { id: 4, name: "Meta", src: "/meta-logo.svg" }
  ];
  
  // Usar los logos por defecto si los pasados están vacíos
  const logosToUse = (logos && logos.length > 0) ? logos : defaultLogos;
  
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
    setLogoColumns(distributeLogos(logosToUse));
  }, [logosToUse, distributeLogos]);

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
import { useState, useEffect } from "react";
import { GripVertical } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ThemeComparisonProps {
  lightModeContent: React.ReactNode;
  darkModeContent: React.ReactNode;
  className?: string;
}

export function ThemeComparison({
  lightModeContent,
  darkModeContent,
  className = ""
}: ThemeComparisonProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(true);
  const isMobile = useIsMobile();

  // En dispositivos móviles, podemos dejar que el usuario arrastre pero también ofrecemos animación automática
  useEffect(() => {
    // Inicializar la posición de la cortina al montar el componente
    setInset(50);
    
    if (isMobile) {
      // Sin embargo, añadimos un movimiento sutil cada cierto tiempo para llamar la atención
      const interval = setInterval(() => {
        setInset((prev) => {
          // Pequeña oscilación para llamar la atención sobre la capacidad de arrastrar
          if (prev === 50) return 45;
          if (prev === 45) return 55;
          if (prev === 55) return 50;
          return 50;
        });
      }, 3000);
      
      // Ocultar la sugerencia después de 5 segundos
      const hintTimer = setTimeout(() => {
        setShowHint(false);
      }, 5000);
      
      return () => {
        clearInterval(interval);
        clearTimeout(hintTimer);
      };
    }
  }, [isMobile]);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    // Ocultar la sugerencia si el usuario está interactuando
    if (showHint) {
      setShowHint(false);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl select-none ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      <div
        className="bg-white dark:bg-zinc-800 h-full w-1 absolute z-20 top-0 -ml-[0.5px] select-none"
        style={{
          left: inset + "%",
        }}
      >
        <button
          className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:scale-110 transition-all w-8 h-8 md:w-10 md:h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-md"
          onTouchStart={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onMouseDown={(e) => {
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onTouchEnd={() => setOnMouseDown(false)}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-4 w-4 md:h-5 md:w-5 select-none text-zinc-500 dark:text-zinc-400" />
        </button>
      </div>
      
      {/* Lado oscuro (a la derecha) */}
      <div className="relative w-full">
        {darkModeContent}
      </div>
      
      {/* Lado claro (a la izquierda) con el recorte */}
      <div 
        className="absolute left-0 top-0 z-10 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - inset}% 0 0)`,
        }}
      >
        {lightModeContent}
      </div>
      
      {/* Indicación para dispositivos móviles */}
      {isMobile && showHint && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm whitespace-nowrap animate-pulse">
          Desliza para cambiar de tema
        </div>
      )}
    </div>
  );
}
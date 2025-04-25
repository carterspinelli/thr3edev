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
  // Inicializar a 50 por defecto (la mitad)
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const isMobile = useIsMobile();

  // En dispositivos móviles, solo inicializamos la cortina al cargar y mostramos una sugerencia visual
  useEffect(() => {
    // Solo inicializar una vez, cuando el componente se monta
    const initTimer = setTimeout(() => {
      // Si el usuario no ha interactuado aún, establecer la posición inicial
      if (!hasInteracted) {
        setInset(50);
      }
    }, 100);
    
    // Mostrar la sugerencia por 5 segundos
    let hintTimer: NodeJS.Timeout;
    if (isMobile && showHint) {
      hintTimer = setTimeout(() => {
        setShowHint(false);
      }, 5000);
    }
    
    return () => {
      clearTimeout(initTimer);
      if (hintTimer) {
        clearTimeout(hintTimer);
      }
    };
    // Este efecto solo debe ejecutarse una vez al montar el componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    // Marcar que el usuario ha interactuado
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    
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
          className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:scale-110 transition-all w-10 h-10 md:w-12 md:h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 cursor-ew-resize flex justify-center items-center shadow-md"
          onTouchStart={(e) => {
            setHasInteracted(true); // Marcar interacción
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onMouseDown={(e) => {
            setHasInteracted(true); // Marcar interacción
            setOnMouseDown(true);
            onMouseMove(e);
          }}
          onTouchEnd={() => setOnMouseDown(false)}
          onMouseUp={() => setOnMouseDown(false)}
        >
          <GripVertical className="h-5 w-5 md:h-6 md:w-6 select-none text-zinc-500 dark:text-zinc-400" />
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
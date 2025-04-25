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
  const isMobile = useIsMobile();
  
  // Para móviles, inicializamos con un valor diferente y lo actualizamos
  // cuando cambia el estado isMobile
  useEffect(() => {
    // En móvil, iniciamos con 100% (solo oscuro) para evitar problemas de espacio
    // o con 50% (mitad) dependiendo del diseño deseado
    setInset(isMobile ? 50 : 50);
  }, [isMobile]);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

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
      className={`relative overflow-hidden select-none ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      <div
        className={`bg-white dark:bg-zinc-800 h-full ${isMobile ? 'w-[2px]' : 'w-1'} absolute z-20 top-0 -ml-[0.5px] select-none`}
        style={{
          left: inset + "%",
        }}
      >
        <button
          className={`bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:scale-110 transition-all ${isMobile ? 'w-10 h-10' : 'w-8 h-8'} select-none -translate-y-1/2 absolute top-1/2 ${isMobile ? '-ml-5' : '-ml-4'} z-30 cursor-ew-resize flex justify-center items-center shadow-md`}
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
          <GripVertical className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} select-none text-zinc-500 dark:text-zinc-400`} />
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
      
      {/* Mode labels removed */}
    </div>
  );
}
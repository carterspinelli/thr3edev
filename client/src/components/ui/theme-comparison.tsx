import { useState } from "react";
import { GripVertical } from "lucide-react";

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
          className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-md"
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
          <GripVertical className="h-4 w-4 select-none text-zinc-500 dark:text-zinc-400" />
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
      
      {/* Etiquetas de Modo */}
      <div className="absolute top-4 left-4 z-30 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-sm text-zinc-800 border border-zinc-200"
        style={{
          opacity: inset < 15 ? 0 : 1,
          transition: "opacity 0.3s ease"
        }}
      >
        Modo Claro
      </div>
      
      <div className="absolute top-4 right-4 z-30 bg-zinc-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium shadow-sm text-white border border-zinc-700"
        style={{
          opacity: inset > 85 ? 0 : 1,
          transition: "opacity 0.3s ease"
        }}
      >
        Modo Oscuro
      </div>
    </div>
  );
}
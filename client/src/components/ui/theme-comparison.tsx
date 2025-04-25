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
      className={`relative overflow-hidden select-none ${className}`}
      onMouseMove={onMouseMove}
      onMouseUp={() => setOnMouseDown(false)}
      onMouseLeave={() => setOnMouseDown(false)}
      onTouchMove={onMouseMove}
      onTouchEnd={() => setOnMouseDown(false)}
    >
      <div className="relative w-full h-full">
        {/* Cada lado ocupa la mitad correspondiente */}
        <div className="flex h-full">
          {/* Lado claro (izquierda) */}
          <div 
            className="relative h-full overflow-hidden"
            style={{ width: `${inset}%` }}
          >
            {lightModeContent}
          </div>
          
          {/* Lado oscuro (derecha) */}
          <div 
            className="relative h-full overflow-hidden"
            style={{ width: `${100 - inset}%` }}
          >
            {darkModeContent}
          </div>
        </div>
        
        {/* Línea divisoria vertical */}
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
      </div>
    </div>
  );
}
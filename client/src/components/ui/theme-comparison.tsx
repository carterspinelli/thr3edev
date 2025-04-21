import { useState } from "react";
import { GripVertical } from "lucide-react";
import { motion } from "framer-motion";

interface ThemeComparisonProps {
  lightComponent: React.ReactNode;
  darkComponent: React.ReactNode;
  title?: string;
  description?: string;
  label?: string;
  className?: string;
}

export function ThemeComparison({
  lightComponent,
  darkComponent,
  title,
  description,
  label,
  className = "",
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
    
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setInset(percentage);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          {label && (
            <div>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#0e62fe10] text-[#0e62fe]">
                {label}
              </span>
            </div>
          )}
          
          {(title || description) && (
            <div className="flex gap-2 flex-col">
              {title && (
                <motion.h3 
                  className="text-2xl md:text-3xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {title}
                </motion.h3>
              )}
              
              {description && (
                <motion.p 
                  className="text-lg max-w-2xl leading-relaxed text-zinc-600 dark:text-zinc-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {description}
                </motion.p>
              )}
            </div>
          )}
          
          <motion.div 
            className="pt-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div
              className="relative w-full h-full overflow-hidden rounded-xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onMouseLeave={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-zinc-300 dark:bg-zinc-700 h-full w-1 absolute z-20 top-0 -ml-0.5 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-[#0e62fe] rounded-full hover:scale-110 transition-all w-8 h-8 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg"
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
                  <GripVertical className="h-4 w-4 text-white select-none" />
                </button>
              </div>
              
              {/* Dark theme (background layer) */}
              <div className="absolute left-0 top-0 w-full h-full select-none">
                {darkComponent}
              </div>
              
              {/* Light theme (overlay with clip path) */}
              <div 
                className="absolute left-0 top-0 z-10 w-full h-full select-none"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              >
                {lightComponent}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
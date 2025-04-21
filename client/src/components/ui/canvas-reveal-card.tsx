import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CanvasRevealCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  className?: string;
  children?: React.ReactNode;
}

export const CanvasRevealCard: React.FC<CanvasRevealCardProps> = ({
  title,
  description,
  icon,
  color,
  className = "",
  children,
}) => {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasActive, setCanvasActive] = useState(false);
  
  // Iniciar la animación al entrar con el ratón
  useEffect(() => {
    if (hovered && canvasRef.current) {
      setCanvasActive(true);
      const ctx = canvasRef.current.getContext("2d");
      if (!ctx) return;
      
      // Configuramos el canvas para que tenga píxeles más nítidos
      const dpr = window.devicePixelRatio || 1;
      canvasRef.current.width = canvasRef.current.offsetWidth * dpr;
      canvasRef.current.height = canvasRef.current.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      
      // Puntos que se mostrarán en la animación
      const dotSize = 2;
      const spacing = 10;
      const width = canvasRef.current.offsetWidth;
      const height = canvasRef.current.offsetHeight;
      
      const dots: {x: number; y: number; delay: number; opacity: number; color: string;}[] = [];
      
      // Creamos una matriz de puntos
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          // Calculamos la distancia desde el centro para el retraso
          const centerX = width / 2;
          const centerY = height / 2;
          const distanceToCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          );
          
          // El retraso aumenta con la distancia al centro
          const delay = distanceToCenter * 0.003 + Math.random() * 0.3;
          
          // Color con una opacidad aleatoria
          const opacity = [0.2, 0.3, 0.4, 0.5, 0.7, 1.0][Math.floor(Math.random() * 6)];
          
          dots.push({
            x,
            y,
            delay,
            opacity,
            // Versión semitransparente del color base
            color: color
          });
        }
      }
      
      // Animación de puntos
      let startTime = performance.now();
      let animationFrame: number;
      
      const animate = (time: number) => {
        const elapsed = (time - startTime) / 1000; // segundos
        
        ctx.clearRect(0, 0, width, height);
        
        for (const dot of dots) {
          // Si ha pasado el tiempo de retraso, dibujamos el punto
          if (elapsed > dot.delay) {
            ctx.fillStyle = `${dot.color}${Math.floor(dot.opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        
        // Detenemos la animación si todos los puntos ya están visibles
        const allDotsVisible = dots.every(dot => elapsed > dot.delay + 0.5);
        if (allDotsVisible) {
          return;
        }
        
        animationFrame = requestAnimationFrame(animate);
      };
      
      // Iniciamos la animación
      animationFrame = requestAnimationFrame(animate);
      
      // Limpiamos la animación al desmontar
      return () => {
        cancelAnimationFrame(animationFrame);
      };
    } else {
      setCanvasActive(false);
    }
  }, [hovered, color]);
  
  // Calcular color secundario (más claro) basado en el color principal
  const getSecondaryColor = () => {
    // Versión más clara para el gradiente
    return color.replace('rgb', 'rgba').replace(')', ', 0.5)');
  };
  
  return (
    <motion.div
      className={`relative overflow-hidden border border-zinc-200 dark:border-zinc-800 rounded-xl group ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "240px",
        height: "280px"
      }}
    >
      {/* Fondo con gradiente */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `linear-gradient(145deg, ${color}, ${getSecondaryColor()})`,
          transition: "opacity 300ms ease"
        }}
      />
      
      {/* Capa de canvas para el efecto de puntos */}
      <div className="absolute inset-0 z-10 opacity-70">
        <AnimatePresence>
          {canvasActive && (
            <motion.canvas
              ref={canvasRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full block"
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Contenido de la tarjeta */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
        <motion.div
          className="mb-4 rounded-full p-3 bg-white/10 backdrop-blur-sm"
          animate={{ 
            scale: hovered ? [1, 1.1, 1] : 1,
            rotateY: hovered ? [0, 180, 360] : 0
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        
        <motion.h3
          className="text-lg font-semibold mb-2 transition-colors"
          style={{ color: hovered ? "#fff" : "currentColor" }}
        >
          {title}
        </motion.h3>
        
        <motion.p
          className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: hovered ? "rgba(255, 255, 255, 0.9)" : "currentColor" }}
          initial={{ y: 10, opacity: 0 }}
          animate={hovered ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        
        {children}
      </div>
      
      {/* Elementos decorativos en las esquinas */}
      <div className="absolute h-2 w-2 border-t border-l border-zinc-300 dark:border-zinc-700 top-2 left-2" />
      <div className="absolute h-2 w-2 border-t border-r border-zinc-300 dark:border-zinc-700 top-2 right-2" />
      <div className="absolute h-2 w-2 border-b border-l border-zinc-300 dark:border-zinc-700 bottom-2 left-2" />
      <div className="absolute h-2 w-2 border-b border-r border-zinc-300 dark:border-zinc-700 bottom-2 right-2" />
    </motion.div>
  );
};

export default CanvasRevealCard;
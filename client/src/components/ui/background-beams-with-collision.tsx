"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [beams, setBeams] = useState<Array<{
    initialX: number;
    translateX: number;
    duration: number;
    repeatDelay: number;
    delay?: number;
    className?: string;
  }>>([]);
  
  // Función para generar los beams basados en el ancho de la pantalla
  const generateBeams = () => {
    const totalBeams = 9; // Número total de meteoritos
    const screenWidth = window.innerWidth;
    
    // Crear un arreglo vacío para los nuevos beams
    const newBeams = [];
    
    // Calcular el espaciado aproximado entre beams
    const spacing = screenWidth / (totalBeams - 1);
    
    // Propiedades estándar para diferentes tamaños
    const sizeVariants = [
      { className: "h-6" },
      { className: "h-8" },
      { className: "h-10" },
      { className: "h-12" },
      { className: "h-16" },
      { className: "h-20" },
    ];
    
    // Propiedades de duración y retraso
    const durationOptions = [4, 5, 6, 7, 8];
    const delayOptions = [0, 1, 2, 3, 4];
    const repeatDelayOptions = [2, 3, 4, 5, 6, 7];
    
    // Crear beams uniformemente espaciados
    for (let i = 0; i < totalBeams; i++) {
      // Calculamos la posición X como un porcentaje del ancho de la pantalla
      const xPos = Math.round(i * spacing);
      
      // Seleccionar propiedades aleatorias para cada beam
      const size = sizeVariants[Math.floor(Math.random() * sizeVariants.length)];
      const duration = durationOptions[Math.floor(Math.random() * durationOptions.length)];
      const repeatDelay = repeatDelayOptions[Math.floor(Math.random() * repeatDelayOptions.length)];
      
      // Solo algunos beams tendrán delay
      const hasDelay = Math.random() > 0.5;
      const delay = hasDelay ? delayOptions[Math.floor(Math.random() * delayOptions.length)] : undefined;
      
      newBeams.push({
        initialX: xPos,
        translateX: xPos,
        duration,
        repeatDelay,
        delay,
        className: size.className,
      });
    }
    
    setBeams(newBeams);
  };
  
  // Generar beams iniciales y al cambiar el tamaño de la ventana
  useEffect(() => {
    // Generar beams iniciales
    generateBeams();
    
    // Ajustar los beams al cambiar el tamaño de la ventana
    const handleResize = () => {
      generateBeams();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-96 md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
        // h-screen if you want bigger
        className
      )}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  // Crear partículas de explosión más balanceadas
  const spans = Array.from({ length: 24 }, (_, index) => {
    // Distribuir partículas en un círculo completo (360 grados)
    const angle = (index / 24) * 2 * Math.PI;
    const distance = Math.random() * 30 + 20; // Distancia aleatoria entre 20 y 50
    
    return {
      id: index,
      initialX: 0,
      initialY: 0,
      // Usar trigonometría para una distribución más uniforme
      directionX: Math.cos(angle) * distance,
      directionY: Math.sin(angle) * distance - 15, // Bias hacia arriba para el efecto de explosión
    };
  });

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
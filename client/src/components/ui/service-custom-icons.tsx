import React from "react";
import horseIcon from "@assets/horse.png";
import cubeIcon from "@assets/cube.png";
import laptopIcon from "@assets/laptop.png";
import speedIcon from "@assets/speed.png";

// Componente genérico para mantener todos los íconos con el mismo tamaño
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
      {children}
    </div>
  </div>
);

export const ChessKnightIcon = () => (
  <IconWrapper>
    <img src={horseIcon} alt="Estrategia" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
  </IconWrapper>
);

export const PencilIcon = () => (
  <IconWrapper>
    <img src={cubeIcon} alt="Diseño" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
  </IconWrapper>
);

export const LaptopIcon = () => (
  <IconWrapper>
    <img src={laptopIcon} alt="Desarrollo" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
  </IconWrapper>
);

export const SpeedometerIcon = () => (
  <IconWrapper>
    <img src={speedIcon} alt="Velocidad" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
  </IconWrapper>
);
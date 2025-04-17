import React from "react";
import horseIcon from "@assets/horse.png";
import cubeIcon from "@assets/cube.png";
import laptopIcon from "@assets/laptop.png";
import speedIcon from "@assets/speed.png";

export const ChessKnightIcon = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={horseIcon} alt="Estrategia" className="w-full h-full object-contain" />
  </div>
);

export const PencilIcon = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={cubeIcon} alt="Diseño" className="w-full h-full object-contain" />
  </div>
);

export const LaptopIcon = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={laptopIcon} alt="Desarrollo" className="w-full h-full object-contain" />
  </div>
);

export const SpeedometerIcon = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img src={speedIcon} alt="Velocidad" className="w-full h-full object-contain" />
  </div>
);
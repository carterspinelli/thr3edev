import React from "react";
import { motion } from "framer-motion";

export function ASVMProjectBackground() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-green-500 rounded-xl">
      {/* Logo de ASVM centrado */}
      <img 
        src="/images/clients/asvm_logo.png" 
        alt="ASVM Logo" 
        className="absolute inset-0 m-auto z-10 w-3/4 object-contain opacity-80"
      />
      
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 12 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Gradiente superior */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900/50 z-0" />
    </div>
  );
}
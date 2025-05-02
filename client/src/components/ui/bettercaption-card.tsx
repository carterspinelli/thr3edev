import React from "react";
import { motion } from "framer-motion";

interface BetterCaptionCardProps {
  className?: string;
  variant?: "standard" | "pro";
}

export function BetterCaptionCard({ className = "", variant = "standard" }: BetterCaptionCardProps) {
  const isPro = variant === "pro";
  
  return (
    <div className={`w-full h-full overflow-hidden rounded-lg shadow-lg ${className}`}>
      <div className="w-full h-full bg-[#f4f6f9] relative">
        {/* Header */}
        <div className="w-full h-12 bg-white flex items-center justify-between px-4 shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-[#38bdf8] rounded-md"></div>
            <span className="text-neutral-800 font-medium">BetterCaption{isPro ? " Pro" : ""}</span>
          </div>
          <span className="text-neutral-600 text-sm">Documentation</span>
        </div>
        
        {/* Contenido */}
        <div className="w-full py-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent mb-4">
            BetterCaption{isPro ? " Pro" : ""}
          </h1>
          <p className="text-neutral-600 max-w-md mx-auto px-4">
            {isPro 
              ? "Análisis avanzado de audiencia y generación de hashtags personalizados para máximo engagement" 
              : "Create engaging Instagram captions tailored to your unique style and optimized for maximum audience engagement"}
          </p>
          
          {/* Botones */}
          <div className="flex space-x-4 mt-6">
            <motion.div 
              className="px-5 py-2 bg-gradient-to-r from-[#4f46e5] to-[#3b82f6] text-white rounded-full font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              Get Started <span className="ml-1">→</span>
            </motion.div>
            <motion.div 
              className="px-5 py-2 bg-[#f1f5f9] text-[#64748b] rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
            >
              Learn More
            </motion.div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#38bdf8] rounded-full flex items-center justify-center text-white text-xl mb-3">
                ✓
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">
                {isPro ? "Voice AI" : "Authentic Voice"}
              </h3>
              <p className="text-sm text-neutral-600">
                {isPro 
                  ? "AI avanzada que replica tu estilo de escritura" 
                  : "Preserves your unique writing style"}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#38bdf8] rounded-full flex items-center justify-center text-white text-xl mb-3">
                📈
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">
                {isPro ? "Analytics Pro" : "Engagement"}
              </h3>
              <p className="text-sm text-neutral-600">
                {isPro 
                  ? "Análisis detallado del rendimiento" 
                  : "Maximize your post performance"}
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4f46e5] to-[#38bdf8] rounded-full flex items-center justify-center text-white text-xl mb-3">
                #
              </div>
              <h3 className="font-medium text-neutral-800 mb-1">
                {isPro ? "Hashtag Pro" : "Smart Hashtags"}
              </h3>
              <p className="text-sm text-neutral-600">
                {isPro 
                  ? "Hashtags personalizados de alto impacto" 
                  : "Strategic hashtag recommendations"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
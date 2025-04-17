import React from "react";
import { FooterIcons } from "./footer-icons";
import { motion } from "framer-motion";

function handleScrollTop() {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
}

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function ThemeToggle({ isDarkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <div className="flex items-center justify-center py-8">
      <motion.div 
        className="flex items-center rounded-full border border-dotted border-zinc-700 px-2 py-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className={`${isDarkMode ? 'bg-transparent text-white' : 'bg-[#0e62fe] text-white'} mr-3 rounded-full p-2 transition-all duration-300`}
          aria-label="Activar modo claro"
        >
          <FooterIcons.Sun className="h-5 w-5" strokeWidth={1.5} />
          <span className="sr-only">Modo claro</span>
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          type="button" 
          onClick={handleScrollTop}
          className="text-zinc-400 hover:text-white transition-colors duration-300"
          aria-label="Volver arriba"
        >
          <FooterIcons.ArrowUp className="h-3 w-3" />
          <span className="sr-only">Ir arriba</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleDarkMode}
          className={`${isDarkMode ? 'bg-[#0e62fe] text-white' : 'bg-transparent text-black'} ml-3 rounded-full p-2 transition-all duration-300`}
          aria-label="Activar modo oscuro"
        >
          <FooterIcons.Moon className="h-5 w-5" strokeWidth={1.5} />
          <span className="sr-only">Modo oscuro</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const StackingNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const items = [
    { href: "#portafolio", label: "Portafolio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
  ];

  return (
    <div
      className="flex items-center gap-x-2"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {items.map((item, index) => (
        <StackingNavbarItem
          href={item.href}
          expanded={expanded}
          key={index}
          index={index}
        >
          {item.label}
        </StackingNavbarItem>
      ))}
    </div>
  );
};

const StackingNavbarItem = ({
  href,
  children,
  style,
  expanded,
  index,
}: {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  expanded: boolean;
  index: number;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ x: -100 * index }}
      animate={{ x: expanded ? 0 : -100 * index }}
      transition={{
        duration: 0.6,
        ease: "circInOut",
        delay: 0.1 * index,
        type: "spring",
      }}
      style={{ zIndex: 100 - index }}
    >
      <a
        className={`flex items-center text-sm px-5 py-3 rounded-3xl bg-white/10 no-underline backdrop-blur-lg transition-colors duration-300 ease-in-out ${
          isDark 
            ? "text-white hover:bg-[#0e62fe] hover:text-white" 
            : "text-zinc-900 hover:bg-[#0e62fe] hover:text-white"
        }`}
        href={href}
        style={style}
      >
        {children}
      </a>
    </motion.div>
  );
};

export { StackingNavbar };
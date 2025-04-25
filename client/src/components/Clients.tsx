import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ThemeComparison } from "@/components/ui/theme-comparison";

// Logo paths - usando SVG que son más adecuados para la web
const clientLogos = [
  {
    id: 1,
    name: "IBM",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 2,
    name: "Udemy",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 3,
    name: "Docusaurus",
    src: "https://docusaurus.io/img/docusaurus.svg",
  },
  {
    id: 4,
    name: "Metamask",
    src: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  },
];

// Componente de contenido para el modo claro
const LightClientContent = () => (
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="mb-8 text-center">
      <p className="text-[#0e62fe] text-sm font-medium tracking-wide mb-2">
        CLIENTES DESTACADOS
      </p>
      <h2 className="text-2xl md:text-4xl font-medium mb-2 text-zinc-900">
        Marcas que confían en nosotros
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto text-zinc-600">
        Diseñamos experiencias web para empresas líderes que buscan destacar
        en el mercado digital
      </p>
    </div>

    <div className="w-full max-w-3xl mx-auto">
      <LogoCarousel logos={clientLogos} columns={2} />
    </div>
  </div>
);

// Componente de contenido para el modo oscuro
const DarkClientContent = () => (
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="mb-8 text-center">
      <p className="text-[#0e62fe] text-sm font-medium tracking-wide mb-2">
        CLIENTES DESTACADOS
      </p>
      <h2 className="text-2xl md:text-4xl font-medium mb-2 text-white">
        Marcas que confían en nosotros
      </h2>
      <p className="text-base md:text-lg max-w-2xl mx-auto text-zinc-400">
        Diseñamos experiencias web para empresas líderes que buscan destacar
        en el mercado digital
      </p>
    </div>

    <div className="w-full max-w-3xl mx-auto">
      <LogoCarousel logos={clientLogos} columns={2} />
    </div>
  </div>
);

// Componente para mostrar el contenido en modo claro
const LightModeContent = () => {
  return (
    <div className="py-8 bg-zinc-50 h-full w-full flex items-center">
      <LightClientContent />
    </div>
  );
};

// Componente para mostrar el contenido en modo oscuro con efectos
const DarkModeContent = () => {
  return (
    <div className="py-8 bg-[#050715] relative overflow-hidden h-full w-full flex items-center">
      {/* Fondo con efectos para el modo oscuro */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,98,254,0.1)_0%,rgba(0,0,0,0)_80%)]" />
      <div className="stars absolute inset-0" />

      {/* Múltiples capas de estrellas fugaces con diferentes colores y velocidades */}
      <ShootingStars
        starColor="#0e62fe"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#3b82f6"
        trailColor="#0e62fe"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#60a5fa"
        trailColor="#2563eb"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      <DarkClientContent />
    </div>
  );
};

export default function Clients() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`relative ${isDark ? "bg-[#050715]" : "bg-zinc-50"}`}>
      {/* Componente de comparación de temas */}
      <ThemeComparison
        lightModeContent={<LightModeContent />}
        darkModeContent={<DarkModeContent />}
        className="w-full h-[450px] md:h-auto md:aspect-[21/9]"
      />
    </section>
  );
}

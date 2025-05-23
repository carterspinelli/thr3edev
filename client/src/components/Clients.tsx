import React from "react";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

// Logo paths
const clientLogos = [
  {
    id: 1,
    name: "IBM",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    id: 2,
    name: "ASVM",
    src: "/images/clients/asvm_logo.png",
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
  {
    id: 5,
    name: "Vessel México",
    src: "/images/vessel-logo.png",
  },
];

export default function Clients() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <section className="relative">
      <div className="bg-[#050715] py-10 sm:py-16 w-full relative overflow-hidden flex flex-col">
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

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col">
          <div className="text-center space-y-2 md:space-y-4 mb-6">
            <p className={`text-[#0e62fe] ${isMobile ? 'text-[10px]' : 'text-xs'} sm:text-sm font-medium tracking-wide uppercase`}>
              {t("clients.title")}
            </p>
            <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} sm:text-3xl md:text-4xl font-medium mb-1 md:mb-2 text-white`}>
              {t("clients.subtitle")}
            </h2>
            <p className={`${isMobile ? 'text-xs' : 'text-sm'} sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto text-zinc-400`}>
              {t("clients.description")}
            </p>
          </div>

          <div className="py-6">
            <LogoCarousel logos={clientLogos} columns={2} />
          </div>
        </div>
      </div>
    </section>
  );
}

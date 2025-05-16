"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroParallax = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return <MobilePortfolioDisplay projects={projects} />;
  } else {
    return <DesktopParallaxDisplay projects={projects} />;
  }
};

// Mobile optimized portfolio view
const MobilePortfolioDisplay = ({
  projects
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="py-8">
      <Header />
      <div className="container mx-auto px-4 mt-6">
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div 
                className="relative rounded-lg overflow-hidden shadow-lg h-[240px]"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <img
                    src={project.thumbnail}
                    className="object-cover object-center w-full h-full"
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-lg font-semibold mb-1 line-clamp-1">{project.title}</h3>
                    <p className="text-white text-xs opacity-90 line-clamp-2">{project.description}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop parallax display
const DesktopParallaxDisplay = ({
  projects
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  }[];
}) => {
  // Ensure we have data for all rows
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  
  return (
    <div
      ref={ref}
      className="relative py-40 overflow-hidden antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ 
        height: "300vh",
        position: "relative"
      }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 overflow-visible">
          {firstRow.map((project) => (
            <DesktopProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 overflow-visible">
          {secondRow.map((project) => (
            <DesktopProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 overflow-visible">
          {thirdRow.map((project) => (
            <DesktopProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  
  return (
    <div className={`max-w-7xl relative mx-auto ${isMobile ? 'py-10' : 'py-20 md:py-40'} px-4 w-full left-0 top-0`}>
      <h1 className={`text-2xl md:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
        {i18n.language === 'es' ? (
          <>Nuestros <span className="text-[#0e62fe]">proyectos</span> <br /> más recientes</>
        ) : (
          <>Our <span className="text-[#0e62fe]">latest</span> <br /> projects</>
        )}
      </h1>
      <p className={`max-w-2xl text-base md:text-xl mt-8 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
        {i18n.language === 'es' ? 
          'Diseñamos experiencias web para empresas líderes que buscan destacar en el mercado digital. Cada proyecto es único y personalizado para satisfacer las necesidades específicas de nuestros clientes.' :
          'We design web experiences for leading companies looking to stand out in the digital market. Each project is unique and personalized to meet the specific needs of our clients.'}
      </p>
    </div>
  );
};

// Desktop project card with parallax effect
const DesktopProjectCard = ({
  project,
  translate,
}: {
  project: {
    title: string;
    link: string;
    thumbnail: string;
    description: string;
  };
  translate: MotionValue<number>;
}) => {
  const { setCursorVariant } = useSetCursorVariant();
  
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/product relative flex-shrink-0 h-96 w-[30rem]"
      onMouseEnter={() => setCursorVariant("sm")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl h-full"
      >
        <img
          src={project.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={project.title}
        />
      </a>
      
      <div 
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-black to-transparent pointer-events-none rounded-lg transition-opacity duration-300"
      ></div>
      
      <div 
        className="absolute bottom-0 left-0 p-6 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300"
      >
        <h2 className="text-white text-xl font-bold mb-2">
          {project.title}
        </h2>
        <p className="text-white text-sm opacity-80">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};
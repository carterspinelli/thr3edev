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
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((project) => (
            <ProjectCard
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
  
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className={`text-2xl md:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
        Nuestros <span className="text-[#0e62fe]">proyectos</span> <br /> más recientes
      </h1>
      <p className={`max-w-2xl text-base md:text-xl mt-8 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
        Diseñamos experiencias web para empresas líderes que buscan destacar en el mercado digital.
        Cada proyecto es único y personalizado para satisfacer las necesidades específicas de nuestros clientes.
      </p>
    </div>
  );
};

export const ProjectCard = ({
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
  const { theme } = useTheme();
  
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
      onMouseEnter={() => setCursorVariant("sm")}
      onMouseLeave={() => setCursorVariant("default")}
    >
      <a
        href={project.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={project.thumbnail}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={project.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-black to-transparent pointer-events-none rounded-lg transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
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
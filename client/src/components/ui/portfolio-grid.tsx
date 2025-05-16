import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "react-i18next";
import { ShootingStars } from "./shooting-stars";
import { useIsMobile } from "@/hooks/use-mobile";

interface Project {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
}

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`relative min-h-screen w-full ${theme === "dark" ? "bg-black" : "bg-gray-50"}`}>
      {/* Shooting star background for dark mode */}
      {theme === "dark" && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,98,254,0.15)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
          
          {/* Multiple shooting star layers with different colors and speeds */}
          <ShootingStars
            starColor="#0e62fe"
            trailColor="#2EB9DF"
            minSpeed={15}
            maxSpeed={35}
            minDelay={1000}
            maxDelay={3000}
          />
          <ShootingStars
            starColor="#0099FF"
            trailColor="#00B8FF"
            minSpeed={10}
            maxSpeed={25}
            minDelay={2000}
            maxDelay={4000}
          />
          <ShootingStars
            starColor="#00BFFF"
            trailColor="#0e62fe"
            minSpeed={20}
            maxSpeed={40}
            minDelay={1500}
            maxDelay={3500}
          />
        </div>
      )}

      {/* Page header */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            {i18n.language === 'es' ? (
              <>Nuestros <span className="text-[#0e62fe]">proyectos</span> más recientes</>
            ) : (
              <>Our <span className="text-[#0e62fe]">latest</span> projects</>
            )}
          </h1>
          <p className={`max-w-2xl mx-auto text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            {i18n.language === 'es' ? 
              'Diseñamos experiencias web para empresas líderes que buscan destacar en el mercado digital. Cada proyecto es único y personalizado para satisfacer las necesidades específicas de nuestros clientes.' :
              'We design web experiences for leading companies looking to stand out in the digital market. Each project is unique and personalized to meet the specific needs of our clients.'}
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block h-full overflow-hidden group rounded-xl ${
                  theme === "dark" ? "bg-zinc-900" : "bg-white"
                } shadow-lg transform transition-all duration-300`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transform transition-all duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 group-hover:text-[#0e62fe] transition-colors ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`line-clamp-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className={`mt-4 text-[#0e62fe] font-medium flex items-center transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-70"
                  }`}>
                    <span>{i18n.language === 'es' ? 'Ver proyecto' : 'View project'}</span>
                    <svg 
                      className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
                        hoveredIndex === index ? "translate-x-1" : ""
                      }`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Starry background styling */}
      <style>
        {`
          .stars {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: twinkle 5s ease-in-out infinite;
            opacity: 0.5;
          }

          @keyframes twinkle {
            0% { opacity: 0.5; }
            50% { opacity: 0.8; }
            100% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
}
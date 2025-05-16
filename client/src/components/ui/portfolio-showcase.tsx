"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"
import { useTheme } from "@/hooks/use-theme"
import { useTranslation } from "react-i18next"

// Portfolio projects with necessary info
const portfolioProjects = [
  {
    title: "Vessel México",
    url: "/images/vessel-screen.png",
    link: "https://vesselmexico.com/",
    author: "Vessel México",
    description: {
      es: "Sitio web oficial para Vessel México, fabricante de herramientas de precisión desde 1916",
      en: "Official website for Vessel Mexico, manufacturer of precision tools since 1916"
    }
  },
  {
    title: "IBM DS8000",
    url: "/images/ibm-ds8000.png",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    author: "IBM",
    description: {
      es: "Sistema de almacenamiento empresarial de alta gama para IBM",
      en: "High-end enterprise storage system for IBM"
    }
  },
  {
    title: "BetterCaption",
    url: "/images/bettercaption.png",
    link: "https://carterspinelli-test-dev.com/",
    author: "Carter Spinelli",
    description: {
      es: "Sitio web de documentación técnica construido con Docusaurus",
      en: "Technical documentation website built with Docusaurus"
    }
  },
  {
    title: "ASVM Analytics",
    url: "/images/clients/asvm_logo.png",
    link: "#",
    author: "ASVM",
    description: {
      es: "Plataforma de análisis de datos para empresas financieras",
      en: "Data analytics platform for financial companies"
    }
  }
]

interface ProjectItemProps {
  index: number
  project: typeof portfolioProjects[0]
  onInView: (inView: boolean) => void
}

function ProjectItem({ index, project, onInView }: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { i18n } = useTranslation()
  const { theme } = useTheme()
  
  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      key={index}
      className="h-screen w-full flex justify-center items-center snap-center py-10 px-4"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-3/5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.5, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
            className="relative overflow-hidden rounded-xl shadow-2xl"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={project.url}
                alt={project.title}
                className="w-full h-full object-cover aspect-video"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark' ? 'from-black/80' : 'from-black/50'} to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300`}>
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-white text-sm opacity-90 mb-1">
                    {isInView && (
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {i18n.language === 'es' ? 'Ver sitio' : 'Visit site'}
                      </motion.span>
                    )}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
        
        <div className="w-full md:w-2/5 text-center md:text-left">
          {isInView && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className={`text-xl md:text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                {i18n.language === 'es' ? project.description.es : project.description.en}
              </p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-[#0e62fe] text-white text-sm hover:bg-blue-700 transition-colors"
              >
                {i18n.language === 'es' ? 'Explorar proyecto' : 'Explore project'}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export function PortfolioShowcase() {
  const textRotateRef = useRef<TextRotateRef>(null)
  const { theme } = useTheme()
  const { i18n } = useTranslation()

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index)
    }
  }

  return (
    <div className="w-full relative">
      <div className="sticky top-0 z-10 pt-20 pb-6 backdrop-blur-sm bg-opacity-80 bg-white dark:bg-black dark:bg-opacity-80">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className={`text-2xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            {i18n.language === 'es' ? 'Nuestros proyectos' : 'Our projects'}
          </h2>
          <div className="h-12 md:h-16">
            <TextRotate
              ref={textRotateRef}
              texts={portfolioProjects.map(p => p.author)}
              mainClassName="text-sm sm:text-2xl md:text-3xl w-full flex pt-2 text-[#0e62fe]"
              splitLevelClassName="overflow-hidden pb-2"
              staggerFrom={"first"}
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.005}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
            />
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-8rem)] overflow-auto snap-y snap-mandatory">
        {portfolioProjects.map((project, index) => (
          <ProjectItem
            key={`${project.title}-${index}`}
            index={index}
            project={project}
            onInView={(inView) => handleInView(index, inView)}
          />
        ))}
      </div>
    </div>
  )
}
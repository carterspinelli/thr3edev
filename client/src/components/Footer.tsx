import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { FooterIcons } from "@/components/ui/footer-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Logo } from "@/components/ui/logo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useTranslation } from "react-i18next";

// The navigation will be created dynamically based on the current language
const getNavigation = (t: any) => ({
  categories: [
    {
      id: "main",
      sections: [
        {
          id: "menu",
          title: t("footer.menu", "Menu"),
          items: [
            { name: t("footer.services", "Servicios"), href: "/#nuestro-proceso" },
            { name: t("footer.portfolio", "Portafolio"), href: "/portafolio" },
          ],
        },
        {
          id: "legal",
          title: t("footer.legal", "Legal"),
          items: [
            { name: t("footer.privacy", "Privacidad"), href: "/privacidad" },
          ],
        },
      ],
    },
  ],
});

const socialLinks = [
  { icon: <FooterIcons.Mail className="h-5 w-5" />, href: "mailto:contacto@thr3e.dev", label: "Email" },
];

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export default function Footer({ onNavigate }: FooterProps = {}) {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  const [, setLocation] = useLocation();
  const { t, i18n } = useTranslation();
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "/#nuestro-proceso") {
      // Para el enlace de Servicios, siempre navegar a la página principal + sección
      if (window.location.pathname !== "/") {
        sessionStorage.setItem('scrollToSection', 'nuestro-proceso');
        window.location.href = "/";
      } else {
        document.querySelector("#nuestro-proceso")?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      if (onNavigate) {
        onNavigate(href);
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href === "/portafolio" || href === "/privacidad") {
      if (onNavigate) {
        onNavigate(href);
      } else {
        // Navegar a la página usando wouter
        setLocation(href);
        // Asegurar que se va al inicio de la página
        window.scrollTo(0, 0);
      }
    }
  };
  
  return (
    <BackgroundBeamsWithCollision className={`h-auto ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6">
          <motion.div 
            className={`py-10 border-b border-dotted ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-300'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          
          <div className="py-10">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2 md:pr-10">
                <p className={`text-left text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  {t("footer.description", "Transformamos ideas en experiencias digitales increíbles. Creamos páginas web optimizadas para conversión en tiempo récord. Nuestro método centrado en resultados garantiza proyectos entregados en solo 3 días con excelencia en cada detalle.")}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-8 md:gap-10">
                  {getNavigation(t).categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex flex-wrap justify-end gap-8 md:gap-10"
                    >
                      {category.sections.map((section, sectionIndex) => (
                        <div key={section.id}>
                          <h3 className={`font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>{section.title}</h3>
                          <ul className="flex flex-col space-y-3">
                            {section.items.map((item, index) => (
                              <motion.li 
                                key={item.name} 
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 + sectionIndex * 0.1 }}
                              >
                                <a
                                  href={item.href}
                                  className={`text-sm transition-colors duration-300 ${
                                    theme === 'dark' 
                                      ? 'text-zinc-500 hover:text-white' 
                                      : 'text-zinc-600 hover:text-black'
                                  }`}
                                  onClick={(e) => handleNavigation(e, item.href)}
                                  onMouseEnter={() => setCursorVariant("sm")}
                                  onMouseLeave={() => setCursorVariant("default")}
                                >
                                  {item.name}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`border-t border-dotted ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-300'} py-10`}>
            <div className="flex flex-row items-center justify-center gap-6">
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    aria-label={link.label}
                    href={link.href}
                    rel="noreferrer"
                    target="_blank"
                    className={`hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform ${
                      theme === 'dark'
                        ? 'border-zinc-800 text-zinc-500 hover:text-white'
                        : 'border-zinc-300 text-zinc-500 hover:text-black'
                    }`}
                    onMouseEnter={() => setCursorVariant("sm")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
              
              <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleTheme} />
            </div>
            
            <div className="flex flex-col justify-between text-center text-xs mt-8">
              <motion.div 
                className="flex flex-row items-center justify-center gap-1 text-zinc-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span>©</span>
                <span>{new Date().getFullYear()}</span>
                <span>{t("footer.madeWith", "Hecho con")}</span>
                <FooterIcons.Heart className="text-[#0e62fe] mx-1 h-4 w-4 animate-pulse" />
                <span>{t("footer.by", "por")}</span>
                <motion.span 
                  className={`cursor-pointer font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  whileHover={{ color: "#0e62fe" }}
                >
                  <Link href="/">thr3e.dev</Link>
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

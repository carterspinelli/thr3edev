import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { FooterIcons } from "@/components/ui/footer-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import logoImg from "@assets/thr3edev_logo.png";

const navigation = {
  categories: [
    {
      id: "main",
      sections: [
        {
          id: "menu",
          items: [
            { name: "Inicio", href: "#inicio" },
            { name: "Servicios", href: "#servicios" },
            { name: "Portafolio", href: "#portafolio" },
          ],
        },
        {
          id: "servicios",
          items: [
            { name: "Landing Pages", href: "#servicios" },
            { name: "Sitios Corporativos", href: "#servicios" },
            { name: "Tiendas Online", href: "#servicios" },
          ],
        },
        {
          id: "about",
          items: [
            { name: "Nosotros", href: "#nosotros" },
            { name: "Precios", href: "#precios" },
            { name: "Contacto", href: "#contacto" },
          ],
        },
        {
          id: "info",
          items: [
            { name: "FAQs", href: "#" },
            { name: "Términos", href: "#" },
            { name: "Privacidad", href: "#" },
          ],
        },
      ],
    },
  ],
};

const socialLinks = [
  { icon: <FooterIcons.Mail className="h-5 w-5" />, href: "mailto:contacto@thr3e.dev", label: "Email" },
  { icon: <FooterIcons.Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  { icon: <FooterIcons.X className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <FooterIcons.Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
  { icon: <FooterIcons.Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
  { icon: <FooterIcons.Github className="h-5 w-5" />, href: "#", label: "GitHub" },
];

export default function Footer() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';
  
  return (
    <footer className={theme === 'dark' ? "bg-black border-t border-zinc-900" : "bg-zinc-100 border-t border-zinc-200"}>
      <div className="container mx-auto px-6">
        <motion.div 
          className={`py-10 flex flex-col md:flex-row items-center justify-between border-b border-dotted ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-300'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <motion.div 
              className="flex items-center cursor-pointer mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <img src={logoImg} alt="thr3e.dev" className="h-20 md:h-24" />
            </motion.div>
          </Link>
          <p className="text-center md:text-left text-xs leading-relaxed text-zinc-500 max-w-xl">
            Transformamos ideas en experiencias digitales impactantes. Creamos landing pages optimizadas para conversión en tiempo récord. Nuestro enfoque minimalista y orientado a resultados asegura que cada proyecto sea entregado en solo 3 días con la máxima calidad.
          </p>
        </motion.div>
        
        <div className="py-10">
          {navigation.categories.map((category) => (
            <div
              key={category.id}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6"
            >
              {category.sections.map((section, sectionIndex) => (
                <div key={section.id}>
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
        
        <div className="border-t border-dotted border-zinc-800 py-10">
          <div className="flex flex-wrap justify-center gap-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 px-6 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  aria-label={link.label}
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                  className="hover:-translate-y-1 border border-dotted border-zinc-800 rounded-xl p-2.5 transition-transform text-zinc-500 hover:text-white"
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
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
              <span>Hecho con</span>
              <FooterIcons.Heart className="text-[#FF4D2B] mx-1 h-4 w-4 animate-pulse" />
              <span>por</span>
              <motion.span 
                className="cursor-pointer text-white font-medium"
                whileHover={{ color: "#FF4D2B" }}
              >
                <Link href="/">thr3e.dev</Link>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

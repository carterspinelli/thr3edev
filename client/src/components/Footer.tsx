import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { FooterIcons } from "@/components/ui/footer-icons";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import { Logo } from "@/components/ui/logo";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

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
    <BackgroundBeamsWithCollision className={`h-auto ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="relative z-10 w-full">
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
                <Logo textSize="lg" />
              </motion.div>
            </Link>
            <div>
              <p className={`text-center md:text-left text-xs leading-relaxed max-w-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Diseñamos y desarrollamos sitios web para marcas modernas. Nuestro enfoque único permite entregar landing pages profesionales en solo 3 días por un precio fijo.
              </p>
              <div className="mt-4 md:mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-xs text-[#0e62fe] hover:text-[#0952d3] transition-colors duration-300"
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Contáctanos
                </a>
                <a 
                  href="#portafolio" 
                  className="inline-flex items-center text-xs text-[#0e62fe] hover:text-[#0952d3] transition-colors duration-300"
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  Ver nuestro trabajo
                </a>
              </div>
            </div>
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
          
          <div className={`border-t border-dotted ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-300'} py-10`}>
            <div className="flex flex-wrap justify-center gap-y-6">
              <div className="flex flex-wrap items-center justify-center gap-4 px-6 mb-8">
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
                <FooterIcons.Heart className="text-[#0e62fe] mx-1 h-4 w-4 animate-pulse" />
                <span>por</span>
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

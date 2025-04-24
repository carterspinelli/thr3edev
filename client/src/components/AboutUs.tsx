import { 
  Paintbrush, 
  Code, 
  Rocket, 
  Headphones,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

export default function AboutUs() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="nosotros" className={`py-20 md:py-28 ${isDark ? 'bg-[#080A16]' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">SOBRE NOSOTROS</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Nuestro <span className="text-[#0e62fe]">equipo</span> y <span className="text-[#0e62fe]">filosofía</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Un colectivo de creadores digitales unidos por el amor al diseño y desarrollo de experiencias web notables.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={`rounded-2xl overflow-hidden h-full ${isDark ? 'bg-black/40' : 'bg-white'} shadow-sm`}>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Nuestro equipo" 
                className="w-full h-[300px] object-cover object-center"
              />
              <div className="p-8">
                <h3 className={`text-2xl font-medium mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                  Quiénes Somos
                </h3>
                <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-6`}>
                  Somos un equipo de diseñadores y desarrolladores web apasionados por crear sitios web efectivos, 
                  hermosos y funcionales en tiempo récord. Nuestra misión es simplificar el proceso de creación web 
                  para pequeñas y medianas empresas.
                </p>
                <a 
                  href="#contacto" 
                  className="inline-flex items-center text-[#0e62fe] hover:text-[#0952d3] transition-colors duration-300 font-medium"
                >
                  Conoce más sobre nosotros 
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className={`rounded-2xl h-full ${isDark ? 'bg-black/40' : 'bg-white'} p-8 shadow-sm`}>
              <h3 className={`text-2xl font-medium mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Nuestra Filosofía
              </h3>
              <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} mb-8`}>
                Con años de experiencia en la industria, hemos optimizado nuestro flujo de trabajo para entregar 
                resultados excepcionales en solo 3 días. Creemos que un gran diseño web debe ser accesible para todos.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-zinc-800 text-[#0e62fe]' : 'bg-blue-50 text-[#0e62fe]'}`}>
                    <Paintbrush className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Diseño creativo</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Diseños atractivos que captan la atención y comunican tu marca
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-zinc-800 text-[#0e62fe]' : 'bg-blue-50 text-[#0e62fe]'}`}>
                    <Code className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Desarrollo ágil</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Código limpio y optimizado para un rendimiento excepcional
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-zinc-800 text-[#0e62fe]' : 'bg-blue-50 text-[#0e62fe]'}`}>
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Entrega rápida</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Tu landing page lista en solo 3 días, sin demoras
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isDark ? 'bg-zinc-800 text-[#0e62fe]' : 'bg-blue-50 text-[#0e62fe]'}`}>
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>Soporte dedicado</h4>
                    <p className={`text-sm ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      Comunicación clara y apoyo continuo en todo el proceso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

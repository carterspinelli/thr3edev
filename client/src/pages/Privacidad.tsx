import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacidad() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidad</h1>
              
              <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
                <p className="text-lg">
                  Última actualización: {new Date().toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                <h2>1. Introducción</h2>
                <p>
                  En thr3e.dev, respetamos su privacidad y nos comprometemos a proteger sus datos personales. 
                  Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita 
                  nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.
                </p>
                
                <h2>2. Los datos que recopilamos sobre usted</h2>
                <p>
                  Datos personales, o información personal, significa cualquier información sobre un individuo 
                  a partir de la cual se puede identificar a esa persona. No incluye datos donde se ha eliminado 
                  la identidad (datos anónimos).
                </p>
                <p>
                  Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre 
                  usted que hemos agrupado de la siguiente manera:
                </p>
                <ul>
                  <li>
                    <strong>Datos de identidad</strong> incluyen nombre, apellido, nombre de usuario o 
                    identificador similar.
                  </li>
                  <li>
                    <strong>Datos de contacto</strong> incluyen dirección de correo electrónico y números de teléfono.
                  </li>
                  <li>
                    <strong>Datos técnicos</strong> incluyen dirección de protocolo de Internet (IP), datos de 
                    inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, 
                    tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra 
                    tecnología en los dispositivos que utiliza para acceder a este sitio web.
                  </li>
                  <li>
                    <strong>Datos de uso</strong> incluyen información sobre cómo utiliza nuestro sitio web, 
                    productos y servicios.
                  </li>
                </ul>
                
                <h2>3. Cómo utilizamos sus datos personales</h2>
                <p>
                  Solo utilizaremos sus datos personales cuando la ley nos lo permita. 
                  Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:
                </p>
                <ul>
                  <li>
                    Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
                  </li>
                  <li>
                    Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses 
                    y derechos fundamentales no anulen esos intereses.
                  </li>
                  <li>
                    Cuando necesitemos cumplir con una obligación legal o regulatoria.
                  </li>
                </ul>
                
                <h2>4. Divulgación de sus datos personales</h2>
                <p>
                  Es posible que tengamos que compartir sus datos personales con las partes que se establecen a continuación 
                  para los fines establecidos en la sección 3 anterior:
                </p>
                <ul>
                  <li>
                    Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.
                  </li>
                  <li>
                    Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.
                  </li>
                  <li>
                    Autoridades fiscales, reguladoras y otras autoridades.
                  </li>
                </ul>
                
                <h2>5. Seguridad de datos</h2>
                <p>
                  Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se 
                  pierdan, utilicen o accedan accidentalmente de forma no autorizada, se modifiquen o divulguen. 
                  Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas 
                  y otros terceros que tienen una necesidad comercial de conocer. Solo procesarán sus datos personales 
                  según nuestras instrucciones y están sujetos a un deber de confidencialidad.
                </p>
                
                <h2>6. Sus derechos legales</h2>
                <p>
                  Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación 
                  con sus datos personales, que incluyen:
                </p>
                <ul>
                  <li>
                    Solicitar acceso a sus datos personales.
                  </li>
                  <li>
                    Solicitar la corrección de sus datos personales.
                  </li>
                  <li>
                    Solicitar la eliminación de sus datos personales.
                  </li>
                  <li>
                    Oponerse al procesamiento de sus datos personales.
                  </li>
                  <li>
                    Solicitar la restricción del procesamiento de sus datos personales.
                  </li>
                  <li>
                    Solicitar la transferencia de sus datos personales.
                  </li>
                  <li>
                    Derecho a retirar el consentimiento.
                  </li>
                </ul>
                
                <h2>7. Contacto</h2>
                <p>
                  Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, 
                  comuníquese con nosotros en: contacto@thr3e.dev
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
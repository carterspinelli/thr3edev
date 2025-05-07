import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Privacidad() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <h1 className="text-3xl md:text-4xl font-bold mb-8">
                {i18n.language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </h1>
              
              <div className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}>
                <p className="text-lg">
                  {i18n.language === 'es' ? 'Última actualización: ' : 'Last updated: '}
                  {new Date().toLocaleDateString(i18n.language === 'es' ? 'es-ES' : 'en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                
                <h2>{i18n.language === 'es' ? '1. Introducción' : '1. Introduction'}</h2>
                <p>
                  {i18n.language === 'es' 
                    ? 'En thr3e.dev, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.'
                    : 'At thr3e.dev, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we care for your personal data when you visit our website and will inform you about your privacy rights and how the law protects you.'}
                </p>
                
                <h2>{i18n.language === 'es' ? '2. Los datos que recopilamos sobre usted' : '2. The data we collect about you'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Datos personales, o información personal, significa cualquier información sobre un individuo a partir de la cual se puede identificar a esa persona. No incluye datos donde se ha eliminado la identidad (datos anónimos).'
                    : 'Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).'}
                </p>
                <p>
                  {i18n.language === 'es'
                    ? 'Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted que hemos agrupado de la siguiente manera:'
                    : 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:'}
                </p>
                <ul>
                  <li>
                    <strong>{i18n.language === 'es' ? 'Datos de identidad' : 'Identity Data'}</strong> 
                    {i18n.language === 'es'
                      ? ' incluyen nombre, apellido, nombre de usuario o identificador similar.'
                      : ' includes first name, last name, username or similar identifier.'}
                  </li>
                  <li>
                    <strong>{i18n.language === 'es' ? 'Datos de contacto' : 'Contact Data'}</strong> 
                    {i18n.language === 'es'
                      ? ' incluyen dirección de correo electrónico y números de teléfono.'
                      : ' includes email address and telephone numbers.'}
                  </li>
                  <li>
                    <strong>{i18n.language === 'es' ? 'Datos técnicos' : 'Technical Data'}</strong> 
                    {i18n.language === 'es'
                      ? ' incluyen dirección de protocolo de Internet (IP), datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.'
                      : ' includes internet protocol (IP) address, login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.'}
                  </li>
                  <li>
                    <strong>{i18n.language === 'es' ? 'Datos de uso' : 'Usage Data'}</strong> 
                    {i18n.language === 'es'
                      ? ' incluyen información sobre cómo utiliza nuestro sitio web, productos y servicios.'
                      : ' includes information about how you use our website, products and services.'}
                  </li>
                </ul>
                
                <h2>{i18n.language === 'es' ? '3. Cómo utilizamos sus datos personales' : '3. How we use your personal data'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:'
                    : 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:'}
                </p>
                <ul>
                  <li>
                    {i18n.language === 'es'
                      ? 'Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.'
                      : 'Where we need to perform the contract we are about to enter into or have entered into with you.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.'
                      : 'Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Cuando necesitemos cumplir con una obligación legal o regulatoria.'
                      : 'Where we need to comply with a legal or regulatory obligation.'}
                  </li>
                </ul>
                
                <h2>{i18n.language === 'es' ? '4. Divulgación de sus datos personales' : '4. Disclosure of your personal data'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Es posible que tengamos que compartir sus datos personales con las partes que se establecen a continuación para los fines establecidos en la sección 3 anterior:'
                    : 'We may have to share your personal data with the parties set out below for the purposes set out in section 3 above:'}
                </p>
                <ul>
                  <li>
                    {i18n.language === 'es'
                      ? 'Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.'
                      : 'Service providers who provide IT and system administration services.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.'
                      : 'Professional advisers including lawyers, bankers, auditors and insurers.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Autoridades fiscales, reguladoras y otras autoridades.'
                      : 'Tax, regulatory authorities and other authorities.'}
                  </li>
                </ul>
                
                <h2>{i18n.language === 'es' ? '5. Seguridad de datos' : '5. Data security'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen o accedan accidentalmente de forma no autorizada, se modifiquen o divulguen. Además, limitamos el acceso a sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad comercial de conocer. Solo procesarán sus datos personales según nuestras instrucciones y están sujetos a un deber de confidencialidad.'
                    : 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.'}
                </p>
                
                <h2>{i18n.language === 'es' ? '6. Sus derechos legales' : '6. Your legal rights'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, que incluyen:'
                    : 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:'}
                </p>
                <ul>
                  <li>
                    {i18n.language === 'es'
                      ? 'Solicitar acceso a sus datos personales.'
                      : 'Request access to your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Solicitar la corrección de sus datos personales.'
                      : 'Request correction of your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Solicitar la eliminación de sus datos personales.'
                      : 'Request erasure of your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Oponerse al procesamiento de sus datos personales.'
                      : 'Object to processing of your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Solicitar la restricción del procesamiento de sus datos personales.'
                      : 'Request restriction of processing your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Solicitar la transferencia de sus datos personales.'
                      : 'Request transfer of your personal data.'}
                  </li>
                  <li>
                    {i18n.language === 'es'
                      ? 'Derecho a retirar el consentimiento.'
                      : 'Right to withdraw consent.'}
                  </li>
                </ul>
                
                <h2>{i18n.language === 'es' ? '7. Contacto' : '7. Contact'}</h2>
                <p>
                  {i18n.language === 'es'
                    ? 'Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, comuníquese con nosotros en: contacto@thr3e.dev'
                    : 'If you have any questions about this privacy policy or our privacy practices, please contact us at: contacto@thr3e.dev'}
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
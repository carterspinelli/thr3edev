import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <Link href="/" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-primary">Diseño</span>
              <span className="text-orange-500">Rápido</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Sitios web profesionales en 3 días. Diseño, desarrollo y lanzamiento rápido a un precio fijo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mb-10 md:mb-0 md:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-primary">Inicio</a></li>
              <li><a href="#servicios" className="text-gray-400 hover:text-primary">Servicios</a></li>
              <li><a href="#portafolio" className="text-gray-400 hover:text-primary">Portafolio</a></li>
              <li><a href="#nosotros" className="text-gray-400 hover:text-primary">Nosotros</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-primary">Contacto</a></li>
            </ul>
          </div>
          
          <div className="mb-10 md:mb-0 md:w-1/4">
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary">Landing Pages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Sitios Corporativos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Tiendas en Línea</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Mantenimiento Web</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary">Hosting & Dominios</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/5">
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="text-primary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">contacto@disenorapido.mx</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-primary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">Ciudad de México, México</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DiseñoRápido. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-400">Términos y Condiciones</a>
            <a href="#" className="text-gray-500 hover:text-gray-400">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

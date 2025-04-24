import { useEffect } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";
import { useLocation } from "wouter";

// Proyectos para el portafolio
const projects = [
  {
    title: "IBM Copy Services Manager",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Plataforma de gestión de servicios de almacenamiento para IBM",
    thumbnail: "https://1.cms.s81c.com/sites/default/files/2020-10-21/IBM-Storage-2-1032x1370-1.jpg"
  },
  {
    title: "Udemy Business",
    link: "https://business.udemy.com/",
    description: "Plataforma de aprendizaje empresarial con cursos personalizados",
    thumbnail: "https://business.udemy.com/wp-content/uploads/2023/10/homepage-preview-2x.png"
  },
  {
    title: "Startup Financiera",
    link: "#",
    description: "Landing page para servicios financieros con alta conversión",
    thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Salón de Belleza",
    link: "#",
    description: "Sitio elegante con sistema de citas integrado",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Agencia de Marketing",
    link: "#",
    description: "Landing page optimizada para generación de leads",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Restaurante Italiano",
    link: "#",
    description: "Sitio con menú digital y sistema de reservas",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Academia de Fitness",
    link: "#",
    description: "Plataforma de venta de membresías y clases online",
    thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Despacho Jurídico",
    link: "#",
    description: "Sitio profesional para servicios legales especializados",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Inmobiliaria de Lujo",
    link: "#",
    description: "Plataforma de propiedades con filtros avanzados",
    thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Estudio de Arquitectura",
    link: "#",
    description: "Portafolio interactivo con visualización 3D",
    thumbnail: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Clínica Dental",
    link: "#",
    description: "Sitio web con sistema de gestión de pacientes",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "E-commerce de Moda",
    link: "#",
    description: "Tienda online con pasarela de pagos integrada",
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cafetería Artesanal",
    link: "#",
    description: "Plataforma de pedidos online y programa de lealtad",
    thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Gimnasio Premium",
    link: "#",
    description: "Aplicación web para reserva de clases y seguimiento",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Estudio Fotográfico",
    link: "#",
    description: "Galería interactiva con efectos visuales modernos",
    thumbnail: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Agencia Creativa",
    link: "#",
    description: "Portafolio dinámico con interacciones avanzadas",
    thumbnail: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export default function PortfolioPage() {
  const { theme } = useTheme();
  const [, setLocation] = useLocation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-zinc-900'}>
      <Header />
      
      <div className="relative mt-16">
        <HeroParallax projects={projects} />
      </div>
      
      <Footer />
    </div>
  );
}
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Portfolio items array
const portfolioItems = [
  {
    id: 1,
    imageUrl: "/images/ibm-ds8000.png",
    title: "IBM DS8000",
    description: "Sistema de almacenamiento empresarial"
  },
  {
    id: 2,
    imageUrl: "/images/ibm-csm.png",
    title: "IBM Copy Services Manager",
    description: "Plataforma para IBM"
  },
  {
    id: 3,
    imageUrl: "/images/udemy-business.png",
    title: "Udemy Business",
    description: "Plataforma de aprendizaje empresarial"
  },
  {
    id: 4,
    imageUrl: "/images/carter-spinelli.png",
    title: "Carter Spinelli",
    description: "Colección personal minimalista"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Agencia de Marketing",
    description: "Landing page para captar leads"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Restaurante Italiano",
    description: "Sitio con menú digital integrado"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Academia de Fitness",
    description: "Landing para venta de membresías"
  },
  {
    id: 7,
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Despacho Jurídico",
    description: "Sitio para servicios legales"
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">NUESTROS <span className="text-[#0e62fe]">proyectos</span> MÁS RECIENTES</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Trabajos recientes</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-6">
              Cada uno de estos proyectos fue entregado en 3 días, manteniendo la calidad y elegancia.
            </p>
            <div className="mt-8">
              <Button 
                variant="expandIcon" 
                size="lg"
                className="bg-[#0e62fe] text-white"
                Icon={() => <ArrowRight className="h-4 w-4" />} 
                iconPlacement="right"
                onClick={() => window.location.href = "/portafolio"}
              >
                Ver portafolio completo
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-neutral-100 rounded-md overflow-hidden hover:border-neutral-200 transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1 text-neutral-900">{item.title}</h3>
                  <p className="text-neutral-500 text-sm mb-4">{item.description}</p>
                  <Button
                    variant="expandIcon"
                    size="sm"
                    className="px-0 bg-transparent text-[#0e62fe] hover:bg-transparent"
                    Icon={() => <ArrowRight className="h-4 w-4" />}
                    iconPlacement="right"
                    onClick={() => window.open(item.id === 1 ? "https://www.ibm.com/mx-es/products/ds8000" : 
                      item.id === 2 ? "https://www.ibm.com/es-es/products/copy-services-manager" : 
                      item.id === 3 ? "https://business.udemy.com/" :
                      item.id === 4 ? "https://carterspinelli.com/miscellaneous" : "#")}
                  >
                    Ver proyecto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

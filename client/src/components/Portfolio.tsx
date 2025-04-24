import { ArrowRight } from "lucide-react";

// Portfolio items array
const portfolioItems = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "FinTech Solutions",
    description: "Landing para startup financiero - 3 días de desarrollo"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "EleganceStudio",
    description: "Sitio con reservas en línea - Entregado en 72 horas"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "DigiMarketing Pro",
    description: "Landing de conversión - Completado en 3 días"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "La Trattoria",
    description: "Sitio + menú digital - Desarrollo express 72h"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Power Fitness",
    description: "Landing de conversión - 3 días, 0 demoras"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "LegalPartners",
    description: "Sitio corporativo legal - Entregado en tiempo récord"
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-20 md:py-28 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">VELOCIDAD Y CALIDAD</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">72 horas <span className="text-[#0e62fe]">de impacto</span></h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Estos son proyectos reales. Cada uno conceptualizado, diseñado y entregado en exactamente tres días. 
              Sin atajos. Sin plantillas genéricas. 100% personalizado.
            </p>
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
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/90"
                  >
                    Ver proyecto
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

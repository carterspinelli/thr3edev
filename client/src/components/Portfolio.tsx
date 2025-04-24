import { ArrowRight } from "lucide-react";

// Portfolio items array
const portfolioItems = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Startup Financiera",
    description: "Landing page para servicios financieros"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Salón de Belleza",
    description: "Sitio elegante con sistema de citas"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Agencia de Marketing",
    description: "Landing page para captar leads"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Restaurante Italiano",
    description: "Sitio con menú digital integrado"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Academia de Fitness",
    description: "Landing para venta de membresías"
  },
  {
    id: 6,
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
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">NUESTROS PROYECTOS</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Trabajos recientes</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Cada uno de estos proyectos fue entregado en 3 días, manteniendo la calidad y elegancia.
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

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    description: "Landing page con sistema de citas"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Consultora de Marketing",
    description: "Landing page para captar leads"
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Restaurante Italiano",
    description: "Landing page con menú digital"
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Academia de Fitness",
    description: "Landing page para venta de membresías"
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Despacho Jurídico",
    description: "Landing page para servicios legales"
  }
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Portafolio</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Echa un vistazo a algunos de nuestros trabajos recientes. Cada proyecto fue entregado en 3 días.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-3">{item.description}</p>
                <a href="#" className="text-primary font-medium hover:underline">Ver detalles</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

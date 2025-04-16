import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "¿Realmente pueden entregar un sitio web en 3 días?",
    answer: "Sí, nuestro proceso está optimizado para entregar landing pages profesionales en 3 días hábiles. Esto es posible gracias a nuestro flujo de trabajo estructurado y a que nos especializamos en un tipo específico de sitio web. Si tu proyecto requiere funcionalidades más complejas, podríamos necesitar tiempo adicional."
  },
  {
    id: "faq-2",
    question: "¿Qué incluye exactamente el precio de $18,000 MXN?",
    answer: "El precio incluye diseño personalizado, desarrollo completo, optimización para dispositivos móviles, formulario de contacto funcional, SEO básico y 1 mes de soporte técnico gratuito. También incluye el alojamiento por el primer año. No hay costos ocultos ni cargos adicionales."
  },
  {
    id: "faq-3",
    question: "¿Qué necesitan de mi parte para comenzar?",
    answer: "Para comenzar, necesitamos información básica sobre tu negocio, los objetivos de tu sitio web, cualquier preferencia de diseño o color, y tus contenidos (textos, logotipo e imágenes). También un anticipo del 50% del precio total."
  },
  {
    id: "faq-4",
    question: "¿Qué pasa si necesito cambios después de la entrega?",
    answer: "Incluimos una ronda de cambios menores sin costo adicional. Para modificaciones más extensas o funcionalidades adicionales, ofrecemos tarifas por hora muy accesibles o paquetes de mantenimiento mensuales."
  },
  {
    id: "faq-5",
    question: "¿Ofrecen servicios de hosting y dominio?",
    answer: "Sí, el primer año de hosting está incluido en el precio. Después del primer año, ofrecemos planes de hosting a precios competitivos. En cuanto al dominio, podemos adquirirlo por ti (costo adicional) o puedes utilizar uno que ya poseas."
  }
];

export default function Faq() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestro servicio.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

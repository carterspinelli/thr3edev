import { BoltIcon, BanknoteIcon, StarIcon } from "lucide-react";

export default function ValueBanner() {
  return (
    <section className="py-10 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-4 text-3xl">
              <BoltIcon className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega en 3 días</h3>
            <p>De la idea al lanzamiento en tiempo récord</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 text-3xl">
              <BanknoteIcon className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precio fijo: $18,000 MXN</h3>
            <p>Sin costos ocultos ni sorpresas</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-4 text-3xl">
              <StarIcon className="h-8 w-8 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño profesional</h3>
            <p>Sitios optimizados para conversión</p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { BoltIcon, BanknoteIcon, StarIcon } from "lucide-react";

export default function ValueBanner() {
  return (
    <section className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="mb-5 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <BoltIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Entrega en 3 días</h3>
            <p className="text-neutral-600 text-sm max-w-xs mx-auto">De la idea al lanzamiento en tiempo récord</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-5 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <BanknoteIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Precio fijo: $18,000 MXN</h3>
            <p className="text-neutral-600 text-sm max-w-xs mx-auto">Sin costos ocultos ni sorpresas</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="mb-5 w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
              <StarIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño minimalista</h3>
            <p className="text-neutral-600 text-sm max-w-xs mx-auto">Sitios elegantes optimizados para conversión</p>
          </div>
        </div>
      </div>
    </section>
  );
}

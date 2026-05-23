import Image from "next/image";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";

export default function AboutPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGEN */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
              alt="Orfebrería artesanal"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTO */}
          <div>

            <span className="text-yellow-500 uppercase tracking-[4px] text-sm font-semibold">
              Nuestra Historia
            </span>

            <h1 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Tradición familiar en el arte de la orfebrería
            </h1>

            <p className="text-gray-700 text-lg leading-8 mb-6">

Nuestra historia nace de la pasión por la orfebrería artesanal y más de cuatro décadas dedicadas al arte de crear joyas exclusivas.

</p>

<p className="text-gray-700 text-lg leading-8 mb-6">

Desde los años 70's, nuestra fundadora inició su trayectoria trabajando junto a reconocidos joyeros de Cali, participando en importantes talleres como Platería Ramírez. Durante los años 80's y 90's, hizo parte del equipo de prestigiosas joyerías como Victoria Gemologos y Joyería L'amour, consolidando una amplia experiencia en la elaboración de piezas únicas en oro y plata.

</p>

<p className="text-gray-700 text-lg leading-8 mb-6">

Posteriormente, en 1995 hasta el 2008, estuvo al frente de la administración de Joyería Majesty, fortaleciendo aún más su conocimiento en el mundo de la joyería y la atención personalizada a sus clientes.

</p>

<p className="text-gray-700 text-lg leading-8">

Hoy en día, continuamos esta tradición desde nuestro taller artesanal, creando joyas  personalizadas para quienes buscan elegancia, exclusividad, calidad y autenticidad en cada detalle.

</p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}
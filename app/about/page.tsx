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
              Somos una empresa netamente familiar fundada en el año 1987,
              nacida de la pasión y dedicación de un matrimonio de orfebres
              que inició elaborando joyas para reconocidas joyerías de la ciudad de Cali.
            </p>

            <p className="text-gray-700 text-lg leading-8 mb-6">
              Con el paso de los años, nuestra experiencia artesanal y compromiso
              con la excelencia nos han permitido mantener viva una tradición
              basada en el detalle, la elegancia y el trabajo hecho completamente a mano.
            </p>

            <p className="text-gray-700 text-lg leading-8">
              Hoy en día continuamos ofreciendo servicios de elaboración de joyas
              personalizadas en oro y plata, creando piezas únicas que reflejan
              la esencia y estilo de cada cliente.
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
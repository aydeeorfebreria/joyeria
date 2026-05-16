import Image from "next/image";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";

export default function ContactPage() {
  return (
    <main className="bg-white text-black min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGEN */}
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
              alt="Taller de orfebrería"
              fill
              className="object-cover"
            />
          </div>

          {/* FORMULARIO */}
          <div>

            <span className="text-yellow-500 uppercase tracking-[4px] text-sm font-semibold">
              Contáctanos
            </span>

            <h1 className="text-5xl font-bold mt-4 mb-8 leading-tight">
              Estamos aquí para ayudarte
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Si tienes alguna petición, inquietud o deseas cotizar una joya personalizada,
              puedes comunicarte con nosotros a través del siguiente formulario.
            </p>

            {/* FORM */}
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-500"
              />

              <textarea
                placeholder="Escribe tu mensaje..."
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-yellow-500"
              />

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition"
              >
                Enviar solicitud
              </button>

            </form>

          </div>

        </div>

        {/* WHATSAPP DESTACADO */}
        <div className="mt-24 bg-black text-white rounded-3xl p-10 text-center shadow-xl">

          <h2 className="text-4xl font-bold mb-4">
            ¿Prefieres atención inmediata?
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            También puedes comunicarte directamente con nosotros a través de WhatsApp
            para recibir asesoría personalizada.
          </p>

          <a
            href="https://wa.me/57XXXXXXXXXX"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-full text-white font-semibold hover:bg-green-400 transition"
          >
            Contactar por WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOTON FLOTANTE */}
      <WhatsAppButton />

    </main>
  );
}
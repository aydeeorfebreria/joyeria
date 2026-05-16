import Navbar from "@/app/Navbar";
import Carousel from "@/app/Carousel";
import WhatsAppButton from "@/app/WhatsAppButton";
import Footer from "@/app/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />

      {/* HERO / CAROUSEL */}
      <Carousel />

      {/* CTA CATALOGO */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Descubre nuestras joyas
        </h2>
        <p className="text-gray-400 mb-6">
          Explora nuestro catálogo y encuentra piezas únicas
        </p>

        <Link
          href="/catalogo"
          className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400"
        >
          Ver catálogo
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
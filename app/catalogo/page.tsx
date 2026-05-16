import fs from "fs";
import path from "path";
import Link from "next/link";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";

export default function CatalogoPage() {

  // Ruta base
  const rutaBase = path.join(process.cwd(), "public/joyas/images");

  // Leer carpetas
  const categorias = fs.readdirSync(rutaBase).filter((item) => {
    const rutaCompleta = path.join(rutaBase, item);
    return fs.statSync(rutaCompleta).isDirectory();
  });

  // Obtener imagen principal de cada carpeta
  const dataCategorias = categorias.map((categoria) => {

    const rutaCategoria = path.join(rutaBase, categoria);

    const archivos = fs.readdirSync(rutaCategoria);

    const imagenPrincipal = archivos.find((archivo) =>
      [".jpg", ".jpeg", ".png", ".webp"].includes(
        path.extname(archivo).toLowerCase()
      )
    );

    return {
      nombre: categoria,
      imagen: `/joyas/images/${categoria}/${imagenPrincipal}`,
    };
  });

  return (
    <main className="bg-white text-black min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <section className="pt-32 pb-16 text-center px-6">

        <h1 className="text-5xl font-bold mb-4 text-yellow-500">
          Nuestro Catálogo
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Descubre nuestras colecciones elaboradas artesanalmente.
        </p>

      </section>

      {/* GRID CATEGORIAS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {dataCategorias.map((categoria, index) => (

            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              {/* IMAGEN */}
              <div className="overflow-hidden">

                <img
                  src={categoria.imagen}
                  alt={categoria.nombre}
                  className="w-full h-[420px] object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* INFO */}
              <div className="p-6">

                <h2 className="text-3xl font-bold mb-4">
                  {categoria.nombre}
                </h2>

                <p className="text-gray-500 mb-6">
                  Descubre nuestra colección de {categoria.nombre.toLowerCase()}.
                </p>

                <Link
                  href={`/catalogo/${categoria.nombre.toLowerCase()}`}
                  className="bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition"
                >
                  Ver más
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}
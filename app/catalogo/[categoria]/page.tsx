import fs from "fs";
import path from "path";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

export default async function CategoriaPage({ params }: Props) {

  const { categoria } = await params;

  // Capitalizar nombre carpeta
  const nombreCarpeta =
    categoria.charAt(0).toUpperCase() + categoria.slice(1);

  // Ruta carpeta
  const rutaCarpeta = path.join(
    process.cwd(),
    `public/joyas/images/${nombreCarpeta}`
  );

  // Leer imágenes
  const archivos = fs.readdirSync(rutaCarpeta);

  const imagenes = archivos.filter((archivo) =>
    [".jpg", ".jpeg", ".png", ".webp"].includes(
      path.extname(archivo).toLowerCase()
    )
  );

  return (
    <main className="bg-white text-black min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <section className="pt-32 pb-16 text-center px-6">

        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          {nombreCarpeta}
        </h1>

        <p className="text-gray-600 text-lg">
          Descubre nuestra colección artesanal de {nombreCarpeta.toLowerCase()}.
        </p>

      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {imagenes.map((imagen, index) => (

            <a
              key={index}
              href={`/joyas/images/${nombreCarpeta}/${imagen}`}
              target="_blank"
              className="overflow-hidden rounded-3xl shadow-lg cursor-pointer group"
            >

              <img
                src={`/joyas/images/${nombreCarpeta}/${imagen}`}
                alt={imagen}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
              />

            </a>

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
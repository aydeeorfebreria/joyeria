import { notFound } from "next/navigation";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import CategoryContent from "@/app/catalogo/[categoria]/CategoryContent";
import {
  getCatalogCategories,
  getCategoryBySlug,
  getCategoryImages,
} from "@/app/lib/catalog";

type Props = {
  params: Promise<{
    categoria: string;
  }>;
};

export const dynamicParams = false;

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const category = getCategoryBySlug(categoria);

  if (!category) {
    notFound();
  }

  const imagenes = getCategoryImages(category.name);

  return (
    <main className="page-shell text-[#17130d] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      <CategoryContent category={category} images={imagenes} />

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}

export function generateStaticParams() {
  return getCatalogCategories().map((category) => ({
    categoria: category.slug,
  }));
}

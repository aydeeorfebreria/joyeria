import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { getCatalogCategories } from "@/app/lib/catalog";
import CatalogContent from "@/app/catalogo/CatalogContent";

export default function CatalogoPage() {
  const dataCategorias = getCatalogCategories();

  return (
    <main className="page-shell text-[#17130d] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      <CatalogContent categories={dataCategorias} />

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/app/context/LanguageContext";
import type { CatalogCategory } from "@/app/lib/catalog";

type CatalogContentProps = {
  categories: CatalogCategory[];
};

export default function CatalogContent({ categories }: CatalogContentProps) {
  const t = useTranslations();

  const orfebreria = categories.filter(
    (categoria) => !categoria.name.startsWith("Bisuteria_")
  );
  
  const bisuteria = categories.filter(
    (categoria) => categoria.name.startsWith("Bisuteria_")
  );

  const renderCategoryGrid = (items: CatalogCategory[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  
      {items.map((categoria) => {
        const rawName = categoria.name.replace("Bisuteria_", "");
  
        const categoryName =
          t.catalog.categories[
            rawName as keyof typeof t.catalog.categories
          ] ?? rawName;
  
        return (
          <div
            key={categoria.slug}
            className="group bg-white overflow-hidden border border-[#efe7d8] shadow-[0_18px_45px_rgba(32,24,14,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(32,24,14,0.13)]"
          >
  
            <div className="relative h-[420px] overflow-hidden">
  
              <Image
                src={categoria.image}
                alt={categoryName}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-[420px] object-cover hover:scale-110 transition duration-500"
              />
  
            </div>
  
            <div className="p-6">
  
              <h2 className="font-display text-3xl font-normal mb-4">
                {categoryName}
              </h2>
  
              <p className="text-[#6f675c] mb-7 leading-7">
                {t.catalog.cardDescription} {categoryName.toLowerCase()}.
              </p>
  
              <Link
                href={`/catalogo/${categoria.slug}`}
                className="premium-button px-6 py-3"
              >
                {t.catalog.viewMore}
              </Link>
  
            </div>
  
          </div>
        );
      })}
  
    </div>
  );

  return (
    <>
      <section className="pt-36 pb-16 text-center px-6">

        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-gold">
          {t.catalog.eyebrow}
        </p>

        <h1 className="font-display text-5xl md:text-6xl font-normal mb-5">
          {t.catalog.title}
        </h1>

        <p className="text-[#6f675c] text-lg leading-8 max-w-2xl mx-auto">
          {t.catalog.description}
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        {/* ORFEBRERÍA */}
        <div className="mb-24">

          <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
            {t.catalog.collectionOrfebreria}
          </h2>

          <p className="text-center text-[#6f675c] mb-12">
          {t.catalog.collectionOrfebreriaDescription}
          </p>

          {renderCategoryGrid(orfebreria)}

        </div>

        {/* BISUTERÍA */}
        <div>

          <h2 className="font-display text-4xl md:text-5xl text-center mb-4">
            {t.catalog.collectionBisuteria}
          </h2>

          <p className="text-center text-[#6f675c] mb-12">
            {t.catalog.collectionBisuteriaDescription}
          </p>

          {renderCategoryGrid(bisuteria)}

        </div>

    </section>

      {/* CUSTOM JEWELRY CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="rounded-3xl bg-black text-white p-10 md:p-16 text-center shadow-2xl">

          <h2 className="font-display text-4xl md:text-5xl font-normal mb-6">
            {t.catalog.customTitle}
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-white/80 leading-8 mb-10">
            {t.catalog.customDescription}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 text-[#d4af37] font-medium">

            <span>✨ {t.catalog.exclusiveDesigns}</span>
            <span>✨ {t.catalog.artisanCrafting}</span>
            <span>✨ {t.catalog.personalizedService}</span>

          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#d4af37] px-8 py-4 text-black font-semibold transition hover:scale-105 hover:bg-[#e5c35a]"
          >
            {t.catalog.customButton}
          </Link>

        </div>

      </section>

    </>
  );
}

"use client";

import Image from "next/image";
import { useTranslations } from "@/app/context/LanguageContext";
import type { CatalogCategory, CatalogImage } from "@/app/lib/catalog";

type CategoryContentProps = {
  category: CatalogCategory;
  images: CatalogImage[];
};

export default function CategoryContent({
  category,
  images,
}: CategoryContentProps) {
  const t = useTranslations();
  const categoryName =
    t.catalog.categories[category.name as keyof typeof t.catalog.categories] ??
    category.name;

  return (
    <>
      <section className="pt-36 pb-16 text-center px-6">

        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-gold">
          {t.catalog.collection}
        </p>

        <h1 className="font-display text-5xl md:text-6xl font-normal mb-5">
          {categoryName}
        </h1>

        <p className="text-[#6f675c] text-lg leading-8 max-w-2xl mx-auto">
          {t.catalog.categoryDescription} {categoryName.toLowerCase()}.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {images.map((imagen) => (

            <a
              key={imagen.src}
              href={imagen.src}
              target="_blank"
              rel="noreferrer"
              className="relative h-[420px] overflow-hidden border border-[#efe7d8] shadow-[0_18px_45px_rgba(32,24,14,0.08)] cursor-pointer group"
            >

              <Image
                src={imagen.src}
                alt={`${categoryName} - ${imagen.name}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
              />

            </a>

          ))}

        </div>

      </section>
    </>
  );
}

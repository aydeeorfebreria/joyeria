"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "@/app/context/LanguageContext";

const slides = [
  {
    imagen: "/hero/slide1.jpg",
  },
  {
    imagen: "/hero/slide2.jpg",
  },
  {
    imagen: "/hero/slide3.jpg",
  },
  {
    imagen: "/hero/slide4.jpg",
  },
];

export default function Carousel() {

  const [index, setIndex] = useState(0);
  const t = useTranslations();

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % slides.length);

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <section className="relative h-[78vh] min-h-[560px] overflow-hidden pt-20 bg-[#16110c]">

      {/* IMAGEN */}
      <Image
        src={slides[index].imagen}
        alt={t.hero.slides[index]}
        fill
        priority={index === 0}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/60" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <p className="mb-5 text-xs md:text-sm uppercase tracking-[0.38em] text-[#f1d58b]">
          {t.hero.brand}
        </p>

        <h1 className="font-display text-white text-5xl md:text-7xl font-normal max-w-5xl leading-tight">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base md:text-xl leading-8 text-white/85">
          {t.hero.slides[index]}
        </p>
        <div className="mt-10">
          <a
            href="/catalogo"
            className="inline-flex items-center rounded-full bg-[#d4af37] px-8 py-4 text-black font-semibold transition hover:scale-105 hover:bg-[#e5c35a]"
          >
            {t.hero.catalogButton}
          </a>
        </div>
      </div>

      {/* IZQUIERDA */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 transition duration-300"
        aria-label={t.hero.previous}
      >
        ❮
      </button>

      {/* DERECHA */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 transition duration-300"
        aria-label={t.hero.next}
      >
        ❯
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-20">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`${t.hero.indicator} ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-[#d4af37]"
                : "bg-white/50"
            } w-2.5`}
          />

        ))}

      </div>

    </section>

  );
}

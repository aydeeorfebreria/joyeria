"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

const slides = [
  {
    texto: {
      es: "Argollas artesanales",
      en: "Handcrafted wedding bands",
    },
    imagen: "/hero/slide1.jpg",
  },
  {
    texto: {
      es: "Cadenas exclusivas",
      en: "Exclusive chains",
    },
    imagen: "/hero/slide2.jpg",
  },
  {
    texto: {
      es: "Topos elegantes",
      en: "Elegant earrings",
    },
    imagen: "/hero/slide3.jpg",
  },
  {
    texto: {
      es: "Candongas únicas",
      en: "Unique hoop earrings",
    },
    imagen: "/hero/slide4.jpg",
  },
];

export default function Carousel() {

  const [index, setIndex] = useState(0);
  const { language } = useLanguage();

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

    <section className="relative h-[75vh] overflow-hidden pt-24">

      {/* IMAGEN */}
      <img
        src={slides[index].imagen}
        alt={slides[index].texto[language]}
        className="absolute inset-0 w-full h-full object-contain bg-white"
      />

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENIDO */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <h1 className="text-white text-5xl md:text-7xl font-bold max-w-5xl">
        {slides[index].texto[language]}
        </h1>

      </div>

      {/* IZQUIERDA */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-5xl z-20"
      >
        ←
      </button>

      {/* DERECHA */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-5xl z-20"
      >
        →
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-20">

        {slides.map((_, i) => (

          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full ${
              i === index
                ? "bg-yellow-500"
                : "bg-white/50"
            }`}
          />

        ))}

      </div>

    </section>

  );
}
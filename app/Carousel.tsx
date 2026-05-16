"use client";

import { useState, useEffect } from "react";

const slides = [
  "Diseños únicos en oro",
  "Joyas personalizadas",
  "Arte hecho a mano",
  "Elegancia atemporal",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gray-100 relative">
      
      {/* TEXTO */}
      <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 transition-all">
        {slides[index]}
      </h2>

      {/* NUMERO */}
      <span className="text-sm text-gray-500 mb-4">
        {index + 1} / {slides.length}
      </span>

      {/* FLECHAS */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-black hover:text-yellow-500"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-black hover:text-yellow-500"
      >
        →
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-yellow-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
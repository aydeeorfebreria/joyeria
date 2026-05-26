"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/app/context/LanguageContext";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  return (

    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
        >

          <img
            src="/logo.png"
            alt="Aydee Orfebre"
            className="h-20 w-auto"
          />

        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex gap-8 text-black">

          <Link href="/" className="hover:text-yellow-500 transition">
            Inicio
          </Link>

          <Link href="/about" className="hover:text-yellow-500 transition">
            Acerca de nosotros
          </Link>

          <Link href="/catalogo" className="hover:text-yellow-500 transition">
            Catálogo
          </Link>

          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contáctenos
          </Link>

          </div>

          {/* LANGUAGE SELECTOR DESKTOP */}
          <div className="hidden xl:flex items-center gap-3">

            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                language === "es"
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-black"
              }`}
            >
              🇨🇴 ES
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                language === "en"
                  ? "bg-yellow-500 text-black"
                  : "bg-white/10 text-black"
              }`}
            >
              🇺🇸 ENG
            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="xl:hidden text-black text-4xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="xl:hidden bg-white px-6 py-6 border-t border-gray-800">

          <div className="flex flex-col space-y-6 text-black text-xl">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              Acerca de nosotros
            </Link>

            <Link
              href="/catalogo"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contactenos
            </Link>

            {/* LANGUAGE SELECTOR MOBILE */}
            <div className="flex gap-3 pt-4">

              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  language === "es"
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10 text-black"
                }`}
              >
                🇨🇴 ES
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-yellow-500 text-black"
                    : "bg-white/10 text-black"
                }`}
              >
                🇺🇸 ENG
              </button>

            </div>

          </div>

        </div>

      )}

    </nav>

  );
}
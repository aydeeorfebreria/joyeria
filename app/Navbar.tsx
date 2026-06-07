"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage, useTranslations } from "@/app/context/LanguageContext";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  return (

    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b border-[#efe7d8]">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center"
        >

          <Image
            src="/logo.png"
            alt="Aydee Orfebre"
            width={160}
            height={80}
            className="h-16 w-auto"
            priority
          />

        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* DESKTOP MENU */}
          <div className="hidden xl:flex gap-8 text-sm tracking-wide text-[#2a231a]">

          <Link href="/" className="hover:text-[var(--gold)] transition">
            {t.nav.home}
          </Link>

          <Link href="/about" className="hover:text-[var(--gold)] transition">
            {t.nav.about}
          </Link>

          <Link href="/catalogo" className="hover:text-[var(--gold)] transition">
            {t.nav.catalog}
          </Link>

          <Link href="/contact" className="hover:text-[var(--gold)] transition">
            {t.nav.contact}
          </Link>

          </div>

          {/* LANGUAGE SELECTOR DESKTOP */}
          <div className="hidden xl:flex items-center gap-3">

            <button
              onClick={() => setLanguage("es")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                language === "es"
                  ? "bg-[var(--gold)] text-black"
                  : "bg-[#f7efe1] text-[#2a231a]"
              }`}
            >
              ES
            </button>

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                language === "en"
                  ? "bg-[var(--gold)] text-black"
                  : "bg-[#f7efe1] text-[#2a231a]"
              }`}
            >
              EN
            </button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            className="xl:hidden text-black text-4xl"
            aria-label={t.nav.openMenu}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="xl:hidden bg-white px-6 py-6 border-t border-[#efe7d8]">

          <div className="flex flex-col space-y-6 text-black text-xl">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.home}
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.about}
            </Link>

            <Link
              href="/catalogo"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.products}
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>

            {/* LANGUAGE SELECTOR MOBILE */}
            <div className="flex gap-3 pt-4">

              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  language === "es"
                    ? "bg-[var(--gold)] text-black"
                    : "bg-[#f7efe1] text-black"
                }`}
              >
                ES
              </button>

              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition ${
                  language === "en"
                    ? "bg-[var(--gold)] text-black"
                    : "bg-[#f7efe1] text-black"
                }`}
              >
                EN
              </button>

            </div>

          </div>

        </div>

      )}

    </nav>

  );
}

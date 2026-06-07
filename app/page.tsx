"use client";

import Navbar from "@/app/Navbar";
import Carousel from "@/app/Carousel";
import WhatsAppButton from "@/app/WhatsAppButton";
import Footer from "@/app/Footer";
import Link from "next/link";
import { useTranslations } from "@/app/context/LanguageContext";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="page-shell text-[#17130d]">
      <Navbar />

      {/* HERO / CAROUSEL */}
      <Carousel />

      {/* CTA CATALOGO */}
      <section className="py-20 px-6 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.34em] text-gold">
          {t.home.eyebrow}
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-normal mb-4">
          {t.home.title}
        </h2>
        <p className="text-[#6f675c] max-w-xl mx-auto mb-8 leading-7">
          {t.home.description}
        </p>

        <Link
          href="/catalogo"
          className="premium-button px-8 py-3"
        >
          {t.home.cta}
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

"use client";

import Image from "next/image";

import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { useTranslations } from "@/app/context/LanguageContext";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="page-shell text-[#17130d] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-36">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGEN */}
          <div className="relative w-full h-[500px] overflow-hidden border border-[#efe7d8] shadow-[0_24px_60px_rgba(32,24,14,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
              alt="Orfebrería artesanal"
              fill
              className="object-cover"
            />
          </div>

          {/* TEXTO */}
          <div>

            <span className="text-gold uppercase tracking-[0.34em] text-xs font-semibold">
              {t.about.eyebrow}
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-normal mt-4 mb-8 leading-tight">
              {t.about.title}
            </h1>

            {t.about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-[#51483d] text-lg leading-8 ${
                  index === t.about.paragraphs.length - 1 ? "" : "mb-6"
                }`}
              >
                {paragraph}
              </p>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

      {/* WHATSAPP */}
      <WhatsAppButton />

    </main>
  );
}

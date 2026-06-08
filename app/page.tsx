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

      {/* EXPERIENCE SECTION */}
        <section className="py-20 px-6 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-gold">
            AYDEE ORFEBRE
          </p>

          <h2 className="font-display text-4xl md:text-5xl font-normal mb-8">
            {t.home.experienceTitle}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white border border-[#efe7d8] rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">

            <div className="text-4xl mb-4">
              ✨
            </div>

            <p className="font-medium text-lg">
              {t.home.feature1}
            </p>

          </div>

          <div className="bg-white border border-[#efe7d8] rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">

            <div className="text-4xl mb-4">
              💎
            </div>

            <p className="font-medium text-lg">
              {t.home.feature2}
            </p>

          </div>

          <div className="bg-white border border-[#efe7d8] rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">

            <div className="text-4xl mb-4">
              🔨
            </div>

            <p className="font-medium text-lg">
              {t.home.feature3}
            </p>

          </div>

          <div className="bg-white border border-[#efe7d8] rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300">

            <div className="text-4xl mb-4">
              🤝
            </div>

            <p className="font-medium text-lg">
              {t.home.feature4}
            </p>

          </div>

</div>

          <p className="max-w-3xl mx-auto text-[#6f675c] text-lg leading-8">
            {t.home.experienceDescription}
          </p>
          <div className="w-24 h-[2px] bg-[#d4af37] mx-auto mt-8"></div>

        </div>

        </section>

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

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#faf8f4]">

      <div className="max-w-6xl mx-auto text-center">

        <p className="mb-4 text-xs uppercase tracking-[0.34em] text-gold">
          AYDEE ORFEBRE
        </p>

        <h2 className="font-display text-4xl md:text-5xl font-normal mb-14">
          {t.home.testimonialsTitle}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white rounded-3xl p-8 border border-[#efe7d8] shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">

            <div className="text-[#d4af37] text-2xl mb-4">
              ★★★★★
            </div>

            <p className="text-[#6f675c] text-sm leading-8 mb-6">
              "{t.home.testimonial1}"
            </p>

            <span className="font-semibold">
              {t.home.testimonial1Author}
            </span>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#efe7d8] shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">

            <div className="text-[#d4af37] text-2xl mb-4">
              ★★★★★
            </div>

            <p className="text-[#6f675c] text-sm leading-8 mb-6">
              "{t.home.testimonial2}"
            </p>

            <span className="font-semibold">
              {t.home.testimonial2Author}
            </span>

          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#efe7d8] shadow-sm hover:-translate-y-1 hover:shadow-lg transition duration-300">

            <div className="text-[#d4af37] text-2xl mb-4">
              ★★★★★
            </div>

            <p className="text-[#6f675c] text-sm leading-8 mb-6">
              "{t.home.testimonial3}"
            </p>

            <span className="font-semibold">
              {t.home.testimonial3Author}
            </span>

          </div>

        </div>

      </div>

      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

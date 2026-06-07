"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { useTranslations } from "@/app/context/LanguageContext";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

export default function ContactPage() {
  const t = useTranslations();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();
    setStatus("sending");

    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nombre,
          email,
          mensaje,
        }),
      });

      if (response.ok) {

        setStatus("sent");

        setNombre("");
        setEmail("");
        setMensaje("");

      } else {

        setStatus("error");

      }

    } catch {

      setStatus("error");

    }
  };

  return (
    <main className="page-shell text-[#17130d] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENIDO */}
      <section className="max-w-7xl mx-auto px-6 py-36">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGEN */}
          <div className="relative w-full h-[600px] overflow-hidden border border-[#efe7d8] shadow-[0_24px_60px_rgba(32,24,14,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
              alt="Taller de orfebrería"
              fill
              className="object-cover"
            />
          </div>

          {/* FORMULARIO */}
          <div>

            <span className="text-gold uppercase tracking-[0.34em] text-xs font-semibold">
              {t.contact.eyebrow}
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-normal mt-4 mb-8 leading-tight">
              {t.contact.title}
            </h1>

            <p className="text-[#6f675c] text-lg leading-8 mb-8">
              {t.contact.description}
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                required
                placeholder={t.contact.namePlaceholder}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full border border-[#dfd3bf] bg-white/80 px-5 py-4 focus:outline-none focus:border-[var(--gold)]"
              />

              <input
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#dfd3bf] bg-white/80 px-5 py-4 focus:outline-none focus:border-[var(--gold)]"
              />

              <textarea
                required
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full border border-[#dfd3bf] bg-white/80 px-5 py-4 focus:outline-none focus:border-[var(--gold)]"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="premium-button px-8 py-4 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? t.contact.sending : t.contact.submit}
              </button>

              {status === "sent" && (
                <p className="border-l-2 border-[var(--gold)] bg-[#fff8ec] px-4 py-3 text-[#3f3526]">
                  {t.contact.sent}
                </p>
              )}

              {status === "error" && (
                <p className="border-l-2 border-red-700 bg-red-50 px-4 py-3 text-red-900">
                  {t.contact.error}
                </p>
              )}

            </form>

          </div>

        </div>

        {/* WHATSAPP DESTACADO */}
        <div className="mt-24 border border-[#e7d7bb] bg-[#15110c] text-white p-10 text-center shadow-[0_24px_60px_rgba(32,24,14,0.12)]">

          <h2 className="font-display text-4xl md:text-5xl font-normal mb-4">
            {t.contact.immediateTitle}
          </h2>

          <p className="text-white/75 text-lg leading-8 mb-8 max-w-2xl mx-auto">
            {t.contact.immediateDescription}
          </p>

          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#2f8f54] px-8 py-4 text-white font-semibold transition hover:bg-[#3fae68]"
            >
              {t.contact.whatsapp}
            </a>
          ) : (
            <p className="text-white/60">
              {t.contact.fallback}
            </p>
          )}

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

      {/* BOTON FLOTANTE */}
      <WhatsAppButton />

    </main>
  );
}

"use client";

import { useTranslations } from "@/app/context/LanguageContext";

export default function WhatsAppButton() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const t = useTranslations();

  if (!whatsappNumber) {
    return null;
  }

  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 rounded-full bg-[#2f8f54] px-4 py-3 text-white shadow-[0_12px_30px_rgba(47,143,84,0.25)] transition hover:bg-[#3fae68]"
    >
      {t.whatsapp}
    </a>
  );
}

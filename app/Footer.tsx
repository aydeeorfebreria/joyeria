"use client";

import { useTranslations } from "@/app/context/LanguageContext";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="border-t border-[#efe7d8] bg-[#fffdf8] text-center py-6 text-[#8a7c68] text-sm">
      {t.footer.designedBy}
    </footer>
  );
}

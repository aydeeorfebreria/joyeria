import type { Metadata } from "next";
import { LanguageProvider } from "./context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aydee Orfebre | Joyería artesanal",
  description:
    "Joyas artesanales en oro y plata, piezas personalizadas y atención cercana desde Cali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

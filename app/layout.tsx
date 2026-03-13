import type { Metadata, Viewport } from "next";
import dynamic from "next/dynamic";
import { Header } from "@/components/ui/header-2";
import { Footer } from "@/components/Footer";
import { GlassFilter } from "@/components/ui/liquid-glass-button";
import { fontAmbit, fontInter } from "./fonts";
import "./globals.css";

const NeuralBackground = dynamic(
  () =>
    import("@/components/ui/neural-background").then((mod) => ({
      default: mod.NeuralBackground,
    })),
  { ssr: false }
);

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Data Rebels",
  description: "Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fontAmbit.variable} ${fontInter.variable} overflow-x-hidden`}>
      <body className="min-h-screen text-white antialiased font-sans bg-transparent overflow-x-hidden">
        <GlassFilter />
        <NeuralBackground />
        <Header />
        {/* pt-20 = 80px, compensa exactamente el header fijo */}
        <main className="relative z-10 pt-20 overflow-x-hidden bg-transparent min-h-screen flex flex-col">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
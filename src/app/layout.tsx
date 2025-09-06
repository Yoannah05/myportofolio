import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Yoannah Rajoelson',
    default: 'Yoannah Rajoelson - Développeuse Web et Mobile | Portfolio',
  },
  description: "Portfolio de Yoannah Rajoelson, développeuse web et mobile passionnée. Spécialisée en React Native, Spring Boot, Next.js. Découvrez mes projets et compétences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
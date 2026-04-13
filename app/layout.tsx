import type { Metadata } from "next";
import {
  Quantico as QuanticoFont,
  Questrial as QuestrialFont,
  Rasa as RasaFont,
  Rammetto_One as RammettoOneFont,
  Inter as InterFont,
  Racing_Sans_One as RacingSansOneFont,
  Montserrat as MontserratFont
} from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const Quantico = QuanticoFont({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Questrial = QuestrialFont({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

const Rasa = RasaFont({
  variable: "--font-rasa",
  subsets: ["latin"],
  weight: ["400"],
});

const RammettoOne = RammettoOneFont({
  variable: "--font-rammettoOne",
  subsets: ["latin"],
  weight: ["400"],
});

const Inter = InterFont({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
});

const Racing_Sans_One = RacingSansOneFont({
  variable: "--font-racingSansOne",
  subsets: ["latin"],
  weight: ["400"],
});

const Montserrat = MontserratFont({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Thekwane | Digital Solutions",
  description: "We build secure, scalable and innovative digital solutions.",
   icons: {
    icon: "/image/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${Quantico.variable} ${Questrial.variable} ${Rasa.variable} ${RammettoOne.variable} ${Inter.variable} ${Racing_Sans_One.variable} ${Montserrat.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer />
      </body>
    </html>
  );
}
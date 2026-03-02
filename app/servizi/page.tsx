import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { servizi } from "@/data/servizi";
import CalcolatoreStima from "@/components/shared/CalcolatoreStima";
import { getDataAggiornamento } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servizi di Ristrutturazione | Napoli Caserta",
  description: "Scopri i nostri 7 servizi di ristrutturazione: appartamento, cucina, bagno, tetto, pavimenti, impianti e cappotto termico. Stima indicativa gratuita.",
  alternates: {
    canonical: "https://ristrutturazionepreventivi.it/servizi/",
  },
  openGraph: {
    title: "Servizi di Ristrutturazione | Napoli Caserta",
    description: "7 servizi di ristrutturazione per la tua casa. Stima indicativa gratuita.",
    url: "https://ristrutturazionepreventivi.it/servizi/",
    images: [
      {
        url: "https://ristrutturazionepreventivi.it/images/servizi/ristrutturazione-appartamento-completo.jpg", // ← FOTO REALE
        width: 1200,
        height: 630,
        alt: "Ristrutturazione completa appartamento moderno luminoso con open space cucina e soggiorno, finiture di preg
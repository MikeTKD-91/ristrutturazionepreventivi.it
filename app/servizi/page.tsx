import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { servizi } from "@/data/servizi";
import ScopriIlCostoDellaTuaRistrutturazione from "@/components/shared/ScopriIlCostoDellaTuaRistrutturazione";
import { getDataAggiornamento } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Servizi Edili per Ristrutturazioni | Russo FE Costruzione",
  description: "Elenco completo dei servizi: ristrutturazioni complete, bagni, cucine, impianti, tetti e cappotto termico. Preventivi e sopralluoghi a Napoli, Caserta e Agro Aversano.",
  openGraph: {
    title: "Servizi Edili per Ristrutturazioni | Russo FE Costruzione",
    description: "Ristrutturazioni complete, bagni, cucine, impianti, tetti e cappotto termico. Unico referente dalla prima stima al cantiere.",
    type: "website",
    locale: "it_IT",
    siteName: "RistrutturazionePreventivi.it",
  },
};

export default function ServiziPage() {
  const dataAggiornamento = getDataAggiornamento();

  const servicePriceLabels: Record<string, string> = {
    "ristrutturazione-appartamento-completo": "Da 550 €/mq",
    "ristrutturazione-bagno": "Da 5.000 € completo",
    "pavimenti-rivestimenti": "Da 45 €/mq",
    "ristrutturazione-cucina": "Preventivo su sopralluogo",
    "rifacimento-tetto": "Preventivo su sopralluogo",
    "cappotto-termico": "Preventivo su sopralluogo",
    "impianti-elettrici-idraulici-termici": "Preventivo dopo verifica tecnica",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5">
              I Nostri Servizi di Ristrutturazione
            </h1>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Ristrutturazioni complete, bagni, cucine, impianti, tetti, pavimenti e efficientamento energetico: un unico referente dalla prima stima al cantiere.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servizi.map((s) => (
              <Link
                key={s.slug}
                href={`/servizi/${s.slug}/`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.immagine}
                    alt={s.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-white font-bold text-base leading-tight">
                      {s.slug === "ristrutturazione-appartamento-completo" ? "Ristrutturazione Casa e Appartamento" : s.titolo.split(":")[0]}
                    </h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{s.descrizioneCard ?? s.descrizione}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange font-semibold text-sm">
                      {servicePriceLabels[s.slug] ?? "Preventivo su richiesta"}
                    </span>
                    <span className="text-navy font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Scopri <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Vuoi sapere quanto costa il tuo intervento?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Scegli il servizio che ti interessa e richiedi un preventivo. Il sopralluogo conferma misure, lavorazioni e condizioni reali dell'immobile.
          </p>
          <a
            href="https://wa.me/393339809319"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
          >
            <ArrowRight className="h-5 w-5" />
            Richiedi preventivo
          </a>
          <p className="text-gray-400 text-sm mt-4">
            Costi aggiornati a {dataAggiornamento}
          </p>
        </div>
      </section>
    </div>
  );
}

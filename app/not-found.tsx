import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-gray-50 px-4 py-16 sm:py-24">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center rounded-3xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-navy text-white shadow-lg" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
            <path d="M9 21v-7h6v7" />
          </svg>
        </div>
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange">Errore 404</p>
        <h1 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">Ops, questa pagina non si trova</h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-600">
          Il link potrebbe essere cambiato oppure la pagina non è più disponibile. Torna alla home per trovare informazioni sui lavori e richiedere il tuo preventivo online.
        </p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange px-6 py-3 text-base font-semibold text-white shadow-md transition-colors hover:bg-orange/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy">
          Torna alla home
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </main>
  );
}

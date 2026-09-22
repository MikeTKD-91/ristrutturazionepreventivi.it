// ./data/comuni-testi.ts
// Tutti i testi specifici per comune per la pagina ristrutturazione appartamento

export interface ComuneTesti {
  // Sezione: Quanto dura il cantiere
  durataCantiereIntro: string;
  durataCantiereSequenza: string;
  durataCantiereConclusione: string;
  
  // Sezione: Cosa troviamo spesso (criticalità)
  tipoEdilizio: string;
  criticalita: string[];
  
  // Sezione: FAQ
  faq: { domanda: string; risposta: string }[];
  
  // Eventuali note aggiuntive
  noteCantiere?: string[];
}

export const comuniTesti: Record<string, ComuneTesti> = {
  // AGRO AVERSANO
  aversa: {
    durataCantiereIntro: `Se devi ristrutturare casa o appartamento a Aversa, conoscere in anticipo la durata del cantiere ti aiuta a organizzare trasloco, disponibilità dell'immobile e budget. Una ristrutturazione completa non ha un tempo uguale per tutti: il numero dei metri quadrati, lo stato degli impianti, le demolizioni, la modifica degli ambienti, la scelta dei materiali e l'accessibilità del cantiere possono cambiare il calendario dei lavori. Per questo una stima seria dei tempi deve essere collegata al preventivo e alle lavorazioni realmente necessarie.`,
    
    durataCantiereSequenza: `In genere il cantiere segue una sequenza precisa: demolizione e smaltimento, opere murarie, realizzazione degli impianti elettrico, idraulico e termico, massetti e preparazione dei sottofondi, posa di pavimenti e rivestimenti, rasature, tinteggiatura e montaggio degli elementi finali. Alcune attività possono procedere in parallelo, mentre altre richiedono tempi tecnici di attesa prima di continuare. Capire quanto dura la ristrutturazione di un appartamento significa quindi valutare l'intero processo e non soltanto i singoli giorni di lavoro.`,
    
    durataCantiereConclusione: `La tabella seguente fornisce una durata indicativa delle principali fasi di una ristrutturazione casa. Il programma definitivo viene definito dopo il sopralluogo tecnico, quando è possibile verificare lo stato dell'immobile, coordinare le maestranze e indicare nel preventivo sia le opere comprese sia le tempistiche previste per la consegna.`,
    
    tipoEdilizio: "Palazzi storici anni '50-'70 nel centro (alcuni con vincolo Soprintendenza), villette unifamiliari e case a schiera nelle zone di espansione anni '80-'00",
    
    criticalita: [
      "Canne fumarie in amianto negli edifici condominiali anni '60-'70: rimozione obbligatoria prima di qualsiasi intervento su cucine e bagni",
      "Abusi edilizi non condonati frequenti nelle zone di espansione: necessaria verifica catastale prima del sopralluogo",
      "Centro storico soggetto a vincolo paesaggistico e monumentale: alcune lavorazioni richiedono autorizzazione preventiva della Soprintendenza",
      "Umidità di risalita diffusa nei piani terra e seminterrati dei palazzi storici, spesso mascherata da interventi superficiali precedenti",
    ],
    
    faq: [
      {
        domanda: "Quanto costa ristrutturare un appartamento ad Aversa?",
        risposta: "Il costo base parte da 550 €/mq per una ristrutturazione completa standard. Il prezzo definitivo viene confermato dopo sopralluogo tecnico.",
      },
      {
        domanda: "Quanto dura un cantiere di ristrutturazione ad Aversa?",
        risposta: "Per un appartamento standard, la durata è in genere compresa tra 45 e 60 giorni lavorativi, ma può variare in base allo stato dell'immobile e alle lavorazioni richieste.",
      },
      {
        domanda: "Serve il permesso per ristrutturare ad Aversa?",
        risposta: "Dipende dal tipo di intervento. Per manutenzioni straordinarie serve CILA o SCIA. Nel centro storico possono servire autorizzazioni della Soprintendenza.",
      },
    ],
    
    noteCantiere: [],
  },
  
  // Esempio per caserta (da compilare)
  caserta: {
    durataCantiereIntro: `Se devi ristrutturare casa o appartamento a Caserta, conoscere in anticipo la durata del cantiere ti aiuta a organizzare trasloco, disponibilità dell'immobile e budget. Una ristrutturazione completa non ha un tempo uguale per tutti: metratura, stato degli impianti, demolizioni, modifica degli ambienti e accessibilità del cantiere cambiano il calendario dei lavori.`,
    
    durataCantiereSequenza: `Il cantiere segue in genere questa sequenza: demolizione e smaltimento, opere murarie, impianti elettrico/idraulico/termico, massetti e sottofondi, posa di pavimenti e rivestimenti, rasature e tinteggiatura, montaggio degli elementi finali. Alcune fasi procedono in parallelo, altre richiedono tempi tecnici di attesa.`,
    
    durataCantiereConclusione: `La tabella seguente fornisce una durata indicativa delle principali fasi di una ristrutturazione. Il programma definitivo viene definito dopo il sopralluogo tecnico.`,
    
    tipoEdilizio: "Palazzine anni '60-'80 nel centro e nella periferia, villette nelle zone residenziali più recenti, alcuni edifici storici vicino alla Reggia",
    
    criticalita: [
      "Impianti elettrici e idraulici spesso obsoleti nelle palazzine anni '70",
      "Umidità di risalita nei piani terra e seminterrati",
      "Verifica necessaria per eventuali abusi edilizi non condonati",
    ],
    
    faq: [
      {
        domanda: "Quanto costa ristrutturare un appartamento a Caserta?",
        risposta: "Il costo base parte da 550 €/mq per una ristrutturazione completa standard. Il prezzo definitivo viene confermato dopo sopralluogo tecnico.",
      },
      {
        domanda: "Quanto dura un cantiere di ristrutturazione a Caserta?",
        risposta: "Per un appartamento standard, la durata è in genere compresa tra 7 e 11 settimane, ma può variare in base allo stato dell'immobile.",
      },
    ],
    
    noteCantiere: [
      "Impianti esistenti: verificarne stato e adeguamenti necessari",
      "Bagno e cucina: definire prima spostamenti, scarichi e finiture",
      "Accesso al cantiere: organizzare consegne, demolizioni e smaltimento",
    ],
  },
  
  // Esempio per napoli (da compilare)
  napoli: {
    durataCantiereIntro: `Se devi ristrutturare casa o appartamento a Napoli, conoscere in anticipo la durata del cantiere ti aiuta a organizzare trasloco, disponibilità dell'immobile e budget. Una ristrutturazione completa non ha un tempo uguale per tutti: metratura, stato degli impianti, demolizioni, modifica degli ambienti e accessibilità del cantiere cambiano il calendario dei lavori.`,
    
    durataCantiereSequenza: `Il cantiere segue in genere questa sequenza: demolizione e smaltimento, opere murarie, impianti elettrico/idraulico/termico, massetti e sottofondi, posa di pavimenti e rivestimenti, rasature e tinteggiatura, montaggio degli elementi finali. Alcune fasi procedono in parallelo, altre richiedono tempi tecnici di attesa.`,
    
    durataCantiereConclusione: `La tabella seguente fornisce una durata indicativa delle principali fasi di una ristrutturazione. Il programma definitivo viene definito dopo il sopralluogo tecnico.`,
    
    tipoEdilizio: "Palazzine storiche nel centro, condomini anni '60-'80 nelle zone residenziali, villette nelle aree collinari",
    
    criticalita: [
      "Logistica complessa nel centro storico (ZTL, accesso limitato)",
      "Impianti molto datati nelle palazzine storiche",
      "Umidità e muffa frequenti nei piani bassi",
    ],
    
    faq: [
      {
        domanda: "Quanto costa ristrutturare un appartamento a Napoli?",
        risposta: "Il costo base parte da 550 €/mq per una ristrutturazione completa standard. Il prezzo definitivo viene confermato dopo sopralluogo tecnico.",
      },
      {
        domanda: "Quanto dura un cantiere di ristrutturazione a Napoli?",
        risposta: "Per un appartamento standard, la durata è in genere compresa tra 8 e 14 settimane, ma può variare in base alla zona e allo stato dell'immobile.",
      },
    ],
    
    noteCantiere: [
      "Accesso e logistica in centro possono allungare i tempi",
      "Smaltimento macerie e permessi condominiali da verificare",
      "Impianti vecchi e distribuzioni interne da controllare prima del preventivo",
    ],
  },
  
  // DEFAULT per comuni non mappati
  default: {
    durataCantiereIntro: `Se devi ristrutturare casa o appartamento, conoscere in anticipo la durata del cantiere ti aiuta a organizzare trasloco, disponibilità dell'immobile e budget. Una ristrutturazione completa non ha un tempo uguale per tutti: metratura, stato degli impianti, demolizioni, modifica degli ambienti e accessibilità del cantiere cambiano il calendario dei lavori.`,
    
    durataCantiereSequenza: `Il cantiere segue in genere questa sequenza: demolizione e smaltimento, opere murarie, impianti elettrico/idraulico/termico, massetti e sottofondi, posa di pavimenti e rivestimenti, rasature e tinteggiatura, montaggio degli elementi finali. Alcune fasi procedono in parallelo, altre richiedono tempi tecnici di attesa.`,
    
    durataCantiereConclusione: `La tabella seguente fornisce una durata indicativa delle principali fasi di una ristrutturazione. Il programma definitivo viene definito dopo il sopralluogo tecnico.`,
    
    tipoEdilizio: "Edilizia residenziale mista con palazzine e villette",
    
    criticalita: [
      "Verifica stato impianti esistenti",
      "Accessibilità del cantiere da confermare",
    ],
    
    faq: [
      {
        domanda: "Quanto costa ristrutturare un appartamento?",
        risposta: "Il costo base parte da 550 €/mq per una ristrutturazione completa standard. Il prezzo definitivo viene confermato dopo sopralluogo tecnico.",
      },
    ],
    
    noteCantiere: [],
  },
};

export function getComuneTesti(slug: string): ComuneTesti {
  return comuniTesti[slug] || comuniTesti.default;
}

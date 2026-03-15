// data/comuni.ts
// Aggiornato con contenuti differenziati per tutti i 33 comuni
// Legenda: [REALE] = dato confermato | [IPOTESI] = su base urbanistica/storica, da verificare

export interface ComuneFaq {
  domanda: string;
  risposta: string;
}

export interface Comune {
  slug: string;
  nome: string;
  provincia: "napoli" | "caserta";
  zona: "napoli" | "caserta" | "agro-aversano";
  metaTitle: string;
  metaDescription: string;
  descrizione: string;
  tipoEdilizio: string;
  criticalita: string[];
  caratteristicheBagni: string;
  caratteristicheCucine: string;
  faq: ComuneFaq[];
  vicini: string[];
  immagine?: string;
}

// ─────────────────────────────────────────────
// ZONA: AGRO AVERSANO (14 comuni)
// ─────────────────────────────────────────────

export const comuniAgroAversano: Comune[] = [
  {
    slug: "aversa",
    nome: "Aversa",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa ad Aversa | Costi e Preventivi",
    metaDescription: "Ristrutturazione ad Aversa: costi orientativi, criticità del centro storico e delle palazzine anni '60-'70. Stima gratuita senza impegno.",
    descrizione: "Aversa è il comune più popoloso dell'Agro Aversano, con un centro storico di origine normanna sottoposto a vincoli della Soprintendenza e un'ampia corona di espansione residenziale sviluppata tra gli anni '70 e i primi anni 2000. Questa doppia natura rende ogni intervento edilizio potenzialmente soggetto a iter autorizzativi differenti a seconda della zona.",
    tipoEdilizio: "Palazzi storici anni '50-'70 nel centro (alcuni con vincolo Soprintendenza), villette unifamiliari e case a schiera nelle zone di espansione anni '80-'00",
    criticalita: [
      "Canne fumarie in amianto negli edifici condominiali anni '60-'70: rimozione obbligatoria prima di qualsiasi intervento su cucine e bagni",
      "Abusi edilizi non condonati frequenti nelle zone di espansione: necessaria verifica catastale prima del sopralluogo",
      "Centro storico soggetto a vincolo paesaggistico e monumentale: alcune lavorazioni richiedono autorizzazione preventiva della Soprintendenza",
      "Umidità di risalita diffusa nei piani terra e seminterrati dei palazzi storici, spesso mascherata da interventi superficiali precedenti",
    ],
    caratteristicheBagni: "Bagni prevalentemente sotto i 6 mq con vasca da bagno degli anni '80-'90, spesso già oggetto di un primo rifacimento parziale non a norma. Nelle abitazioni del centro storico, impianti idrici in piombo ancora presenti nei condomini più vecchi.",
    caratteristicheCucine: "Cucine separate dal soggiorno, dimensioni medie 10-14 mq. Nelle palazzine anni '70, frequente presenza di cappa esterna non a norma collegata a canna fumaria in amianto.",
    faq: [
      {
        domanda: "Devo chiedere permessi per ristrutturare il bagno in un palazzo del centro storico di Aversa?",
        risposta: "Dipende dall'intervento. La sostituzione di sanitari e rivestimenti interni non richiede permessi. Se l'intervento tocca impianti o modifica la distribuzione degli spazi interni, serve almeno una CILA. In zona vincolata dalla Soprintendenza, qualsiasi intervento esterno richiede autorizzazione specifica. Il nostro tecnico verifica la situazione urbanistica prima del preventivo.",
      },
      {
        domanda: "Nel mio palazzo c'è ancora la canna fumaria in amianto. Cosa succede se rifaccio la cucina?",
        risposta: "Se la canna fumaria è in amianto, prima di installare una nuova cappa è obbligatorio procedere alla bonifica o all'incapsulamento, da eseguire da una ditta specializzata certificata. Il costo di bonifica va considerato nel preventivo complessivo. Non è possibile aggirare questo passaggio: le ditte serie non agganciano nuovi impianti a canne in amianto non bonificate.",
      },
      {
        domanda: "Ho un abuso edilizio non condonato. Posso ristrutturare lo stesso?",
        risposta: "Tecnicamente sì, se l'abuso riguarda parti diverse da quelle da ristrutturare. Nella pratica, prima di qualsiasi intervento soggetto a CILA o permesso di costruire, il Comune verifica la regolarità urbanistica. Un abuso pendente può bloccare l'iter. È consigliabile un confronto con un tecnico prima di procedere.",
      },
      {
        domanda: "Quanto tempo richiede la ristrutturazione di un bagno ad Aversa?",
        risposta: "Un bagno standard (4-6 mq) con sostituzione completa di sanitari, rivestimenti e impianti richiede mediamente 2-3 settimane lavorative. Se si aggiunge la bonifica dell'amianto o modifiche agli impianti condominiali, i tempi si allungano. I tempi definitivi emergono dal sopralluogo.",
      },
    ],
    vicini: ["lusciano", "carinaro", "teverola", "trentola-ducenta", "succivo"],
  },

  {
    slug: "lusciano",
    nome: "Lusciano",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Lusciano | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Lusciano: interventi su villette anni '80-'90, PEEP comunali e palazzine. Stima gratuita, preventivo con sopralluogo.",
    descrizione: "Lusciano è un comune a prevalente carattere residenziale, sviluppatosi principalmente tra gli anni '80 e i primi anni 2000 con un mix di villette unifamiliari, case a schiera e alcuni piani di edilizia economica popolare (PEEP). Il centro più antico conserva un nucleo di palazzi anni '50-'60, mentre la periferia è quasi interamente composta da edilizia privata recente.",
    tipoEdilizio: "Villette unifamiliari e case a schiera anni '80-'00 nella zona di espansione; PEEP comunali anni '80 in alcune aree; palazzi anni '50-'60 nel nucleo centrale",
    criticalita: [
      "Umidità di risalita diffusa nelle villette anni '80: fondazioni senza barriera impermeabilizzante, frequente nei piani terra e nei locali interrati",
      "Abusi edilizi nelle zone di espansione privata degli anni '90: verande, locali seminterrati, soppalchi spesso non condonati",
      "Impianti idrici in acciaio zincato nelle abitazioni degli anni '70-'80: corrosione interna che riduce portata e qualità dell'acqua",
      "Canne fumarie in amianto nei condomini più vecchi del centro: rilevamento obbligatorio prima di interventi su cucine",
    ],
    caratteristicheBagni: "Bagni di dimensioni standard (5-7 mq) nelle villette, spesso con vasca da incasso degli anni '80-'90 mai sostituita. Nei PEEP, bagni mono-sanitari sotto i 5 mq con impianti originali da aggiornare.",
    caratteristicheCucine: "Cucine in muratura degli anni '80-'90 con piastrelle a decoro tipiche del periodo. Nelle villette, frequente assenza di cappa a norma o collegamento a canna fumaria non certificata.",
    faq: [
      {
        domanda: "Ho una villetta degli anni '90 a Lusciano con umidità al piano terra. Prima di ristrutturare, cosa devo fare?",
        risposta: "L'umidità di risalita nelle villette anni '90 dell'Agro Aversano è molto comune e va trattata prima di qualsiasi rifinitura. Il nostro sopralluogo include la verifica delle cause (risalita capillare, infiltrazioni da fondazione, condensa). Il trattamento corretto dipende dall'origine: fare le rifiniture prima di risolvere l'umidità significa rifare tutto a distanza di 2-3 anni.",
      },
      {
        domanda: "Posso usare il Bonus Ristrutturazione 50% per il rifacimento del bagno nella mia villetta a Lusciano?",
        risposta: "Sì, la detrazione IRPEF al 50% si applica agli interventi di manutenzione straordinaria sugli immobili residenziali, incluso il rifacimento completo del bagno con sostituzione di impianti. Sono necessari: pagamenti tracciati (bonifico parlante), fatture in regola, e per alcuni interventi una CILA. Il nostro ufficio amministrativo supporta la gestione della pratica.",
      },
      {
        domanda: "Quanto costa rifare completamente un bagno in un PEEP di Lusciano?",
        risposta: "Un bagno in un appartamento PEEP è tipicamente sotto i 5 mq, il che lo rende uno degli interventi più intensivi in termini di costo per metro quadro. In base al Prezzario Regionale Campania, le stime orientative partono da circa 4.500-5.500 € per una finitura base, fino a 7.000-9.000 € per una finitura premium con impianti completamente rinnovati.",
      },
      {
        domanda: "Quanto tempo ci vuole per ristrutturare un bagno a Lusciano?",
        risposta: "Per un bagno standard (5-6 mq) con sostituzione completa di sanitari, rivestimenti e impianti, mediamente 2-3 settimane lavorative. Se si aggiungono lavori strutturali o la bonifica di impianti obsoleti, i tempi si allungano. Il cantiere viene organizzato per ridurre i giorni senza bagno funzionante.",
      },
    ],
    vicini: ["aversa", "carinaro", "teverola", "gricignano-di-aversa"],
  },

  {
    slug: "carinaro",
    nome: "Carinaro",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Carinaro | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Carinaro: costi orientativi per villette e palazzine. Criticità locali, stima gratuita e preventivo con sopralluogo.",
    descrizione: "Carinaro è un piccolo comune residenziale dell'Agro Aversano, con un tessuto edilizio composto prevalentemente da villette unifamiliari e case a schiera edificate tra gli anni '80 e i primi anni 2000. Il centro storico è contenuto, con alcune palazzine degli anni '60-'70.",
    tipoEdilizio: "Prevalenza di villette anni '80-'00 e case a schiera; nucleo centrale con palazzine anni '60-'70",
    criticalita: [
      "Umidità di risalita nei piani terra delle villette anni '80, comune in tutta la zona",
      "Abusi edilizi non condonati nelle espansioni private degli anni '90",
      "Impianti idrici vetusti nelle palazzine del centro anni '60-'70",
      "Coperture con guaine bituminose di prima generazione, spesso non più impermeabili nelle abitazioni con più di 25 anni",
    ],
    caratteristicheBagni: "Bagni standard 5-7 mq con sanitari e rivestimenti degli anni '80-'90. Nelle case a schiera più recenti, bagni già oggetto di primo rifacimento parziale non a norma.",
    caratteristicheCucine: "Cucine separate dal soggiorno, dimensioni medie. Frequente presenza di cucine in muratura degli anni '90 da demolire e ricostruire.",
    faq: [
      {
        domanda: "Quali permessi servono per ristrutturare un bagno a Carinaro?",
        risposta: "Per la sostituzione di sanitari e rivestimenti senza modificare la distribuzione degli spazi, nessun permesso. Se si spostano impianti o si modificano le tramezzature, serve una CILA da presentare al Comune di Carinaro prima dell'inizio lavori. Il nostro tecnico valuta la situazione specifica al sopralluogo.",
      },
      {
        domanda: "Ho una villetta anni '90 a Carinaro. Come capisco se c'è amianto prima di ristrutturare?",
        risposta: "L'amianto nelle villette degli anni '90 è meno comune rispetto ai condomini anni '60-'70, ma può essere presente in canne fumarie, lastre di copertura o guaine di isolamento. Un'ispezione visiva da parte di un tecnico esperto è il primo passo. In caso di dubbio, è possibile richiedere un'analisi campione certificata prima dell'inizio lavori.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Carinaro?",
        risposta: "In base al Prezzario Regionale Campania, per un bagno di 5-6 mq con rifacimento completo di impianti, rivestimenti e sanitari, le stime orientative vanno da circa 5.000 € (finitura base) a 9.000-10.000 € (finitura premium). Il costo preciso dipende dallo stato attuale degli impianti, che emerge al sopralluogo.",
      },
      {
        domanda: "Conviene sostituire anche i pavimenti del bagno oppure tenerli?",
        risposta: "Dipende dalle condizioni e dal tipo di posa. Se i pavimenti sono in buone condizioni, a volte è possibile posare il nuovo sopra il vecchio (sovrapposa) risparmiando su demolizione e smaltimento. Se ci sono problemi di umidità, rigonfiamenti o il pavimento è in vinile anni '80, la rimozione completa è necessaria. Lo valutiamo al sopralluogo insieme a te.",
      },
    ],
    vicini: ["aversa", "lusciano", "teverola", "gricignano-di-aversa"],
  },

  {
    slug: "teverola",
    nome: "Teverola",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Teverola | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Teverola: interventi su villette e palazzine, costi orientativi da Prezzario Campania. Stima gratuita senza impegno.",
    descrizione: "Teverola è un comune con vocazione mista residenziale e produttiva, situato lungo la SS7bis. Il tessuto abitativo è composto da villette e palazzine di diverse epoche, con una parte centrale più densa e zone periferiche a edilizia sparsa.",
    tipoEdilizio: "Mix di villette anni '80-'00 e palazzine anni '70; presenza di edilizia residenziale lungo le arterie principali",
    criticalita: [
      "Vibrazioni da traffico pesante sulla SS7bis: crepe e lesioni nei muri perimetrali nelle abitazioni prossime alla strada",
      "Umidità di risalita e infiltrazioni nei piani terra",
      "Abusi edilizi da regolarizzare frequenti nelle zone di espansione",
      "Canne fumarie in amianto nei condomini degli anni '70",
    ],
    caratteristicheBagni: "Bagni standard con sanitari anni '80-'90, spesso con vasca da bagno. Nelle palazzine più vecchie, impianti idrici da sostituire integralmente.",
    caratteristicheCucine: "Cucine separate, medie dimensioni. Nelle abitazioni lungo le strade principali, frequente necessità di miglioramento dell'isolamento acustico durante i lavori.",
    faq: [
      {
        domanda: "Ho delle crepe nei muri di casa a Teverola. Devo preoccuparmi prima di ristrutturare?",
        risposta: "Le crepe vanno sempre valutate prima di qualsiasi lavoro di rifinitura. Le lesioni superficiali (fessure nei rivestimenti, stacco di intonaco) sono spesso legate ad assestamenti normali. Le crepe passanti nei muri portanti o in diagonale agli angoli delle aperture richiedono una valutazione strutturale. Procedere con le rifiniture senza risolvere le cause significa rifare tutto a distanza di pochi anni.",
      },
      {
        domanda: "Posso usare il Bonus 50% per ristrutturare il bagno a Teverola?",
        risposta: "Sì, la detrazione IRPEF al 50% si applica agli interventi di manutenzione straordinaria su immobili residenziali, compreso il rifacimento completo del bagno. Sono necessari pagamenti con bonifico parlante e fatture in regola. Per interventi che richiedono CILA, va presentata prima dell'inizio lavori.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Teverola?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno di 5-6 mq vanno da circa 5.000 € per finitura base a 9.500 € per finitura premium con impianti nuovi. Il dato preciso emerge solo dal sopralluogo.",
      },
      {
        domanda: "Vivo vicino alla SS7bis e ho problemi di rumore. Posso migliorare l'isolamento acustico durante la ristrutturazione?",
        risposta: "Sì, la ristrutturazione è il momento ideale per intervenire sull'isolamento acustico. Le soluzioni più efficaci sono la sostituzione dei serramenti con doppi o tripli vetri, il miglioramento dell'isolamento delle pareti perimetrali, e in alcuni casi l'installazione di contropareti. Il costo dipende dall'estensione dell'intervento e viene incluso nel preventivo complessivo.",
      },
    ],
    vicini: ["aversa", "lusciano", "carinaro", "gricignano-di-aversa"],
  },

  {
    slug: "gricignano-di-aversa",
    nome: "Gricignano di Aversa",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Gricignano di Aversa | Preventivi",
    metaDescription: "Ristrutturazione a Gricignano di Aversa: costi orientativi, criticità edilizie e stima gratuita senza impegno.",
    descrizione: "Gricignano di Aversa è un comune di dimensioni ridotte con un tessuto edilizio misto, composto da un nucleo storico e zone di espansione residenziale sviluppate tra gli anni '70 e i primi anni 2000. La presenza della base militare statunitense (USAF) ha caratterizzato storicamente il comune.",
    tipoEdilizio: "Nucleo storico con palazzine anni '50-'70; espansione con villette e case a schiera anni '80-'00",
    criticalita: [
      "Umidità di risalita nelle abitazioni più datate del nucleo storico",
      "Canne fumarie in amianto nei condomini anni '60-'70",
      "Abusi edilizi non condonati nelle zone di espansione privata",
      "Impianti idrici vetusti nelle palazzine degli anni '60-'70",
    ],
    caratteristicheBagni: "Bagni standard nelle villette (5-7 mq); più compatti nelle palazzine storiche. Sanitari degli anni '80-'90 frequentemente da sostituire integralmente.",
    caratteristicheCucine: "Cucine separate, medie dimensioni. Nelle palazzine più vecchie, verifica obbligatoria della canna fumaria prima di interventi.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Gricignano di Aversa?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno di 5-6 mq con rifacimento completo vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle palazzine degli anni '60-'70 con impianti originali, il costo tende al limite superiore.",
      },
      {
        domanda: "Quanti giorni devo restare senza bagno durante la ristrutturazione?",
        risposta: "Con un'organizzazione del cantiere ben pianificata, i giorni senza bagno funzionante si riducono a 3-5 giorni (fase demolizione e impermeabilizzazione). Pianifichiamo sempre il cantiere per minimizzare il disagio: se in casa c'è un secondo bagno, questo non è un problema. Se è l'unico bagno, organizziamo i lavori in modo da renderlo parzialmente funzionante il prima possibile.",
      },
      {
        domanda: "Come faccio a sapere se i miei impianti idrici vanno sostituiti durante la ristrutturazione del bagno?",
        risposta: "I segnali evidenti sono: pressione bassa, acqua color ruggine all'apertura del rubinetto, perdite frequenti ai raccordi. Ma spesso le tubazioni in acciaio zincato sembrano ok dall'esterno e sono deteriorate internamente. Al sopralluogo verifichiamo lo stato delle tubazioni accessibili e ti diciamo chiaramente cosa conviene sostituire e cosa può essere mantenuto.",
      },
    ],
    vicini: ["aversa", "lusciano", "carinaro", "teverola"],
  },

  {
    slug: "trentola-ducenta",
    nome: "Trentola Ducenta",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Trentola Ducenta | Preventivi",
    metaDescription: "Ristrutturazione a Trentola Ducenta: costi orientativi da Prezzario Campania, criticità locali e stima gratuita.",
    descrizione: "Trentola Ducenta è un comune in forte crescita demografica, con un tessuto edilizio che va dalle palazzine degli anni '70 nel centro alle villette e ai nuovi complessi residenziali nelle zone di espansione. La presenza di attività commerciali e artigianali lo rende un comune vivace con una domanda abitativa costante.",
    tipoEdilizio: "Palazzine anni '70-'80 nel centro; villette e case a schiera anni '90-2000 nell'espansione; nuovi complessi residenziali nelle zone periferiche",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70-'80",
      "Umidità di risalita nelle palazzine più datate e nelle villette con fondazioni non impermeabilizzate",
      "Abusi edilizi frequenti nelle zone di espansione privata",
      "Impianti idrici in acciaio zincato negli edifici degli anni '70-'80: sostituzione spesso necessaria durante la ristrutturazione del bagno",
    ],
    caratteristicheBagni: "Bagni di dimensioni variabili: standard nelle villette (5-7 mq), più compatti nelle palazzine anni '70 (sotto i 5 mq). Frequente presenza di vasca da bagno da sostituire con doccia.",
    caratteristicheCucine: "Cucine separate nelle palazzine, cucine più ampie nelle villette. Nelle costruzioni degli anni '80, frequente impianto gas datato da adeguare.",
    faq: [
      {
        domanda: "Ho una palazzina anni '70 a Trentola Ducenta. Cosa include il rifacimento completo del bagno?",
        risposta: "In una palazzina degli anni '70, il rifacimento completo include: demolizione e smaltimento di rivestimenti e sanitari, sostituzione integrale delle tubazioni idriche (quasi certamente in acciaio zincato), nuovo impianto elettrico bagno a norma IP44, impermeabilizzazione, nuovi rivestimenti, nuovi sanitari e rubinetteria. La verifica della canna fumaria è necessaria se ci sono lavori collegati alla cucina.",
      },
      {
        domanda: "Voglio sostituire la vasca con una doccia a Trentola Ducenta. Ci sono particolari criticità?",
        risposta: "La sostituzione vasca-doccia è uno degli interventi più richiesti. I punti da verificare sono: la posizione degli scarichi (se la doccia va in posizione diversa dalla vasca, bisogna rifare le tracce), lo spazio disponibile per il box doccia, e la portata idrica (le docce a pioggia richiedono buona pressione). Al sopralluogo misuriamo tutto e progettiamo la soluzione migliore per il tuo spazio.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Trentola Ducenta?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno di 5-6 mq con rifacimento completo vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle palazzine anni '70 con impianti originali, il costo reale tende al limite superiore.",
      },
    ],
    vicini: ["aversa", "succivo", "casaluce", "san-marcellino"],
  },

  {
    slug: "san-marcellino",
    nome: "San Marcellino",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a San Marcellino | Preventivi",
    metaDescription: "Ristrutturazione a San Marcellino: costi orientativi, criticità edilizie locali e stima gratuita. Sopralluogo senza impegno.",
    descrizione: "San Marcellino è un piccolo comune dell'Agro Aversano con un tessuto edilizio prevalentemente residenziale, composto da un nucleo storico compatto e zone di espansione con villette e palazzine di piccole e medie dimensioni.",
    tipoEdilizio: "Nucleo storico con palazzine anni '50-'70; espansione con villette unifamiliari e case a schiera anni '80-'00",
    criticalita: [
      "Umidità di risalita diffusa nel nucleo storico, frequente nei piani terra",
      "Canne fumarie in amianto nelle palazzine degli anni '60-'70",
      "Abusi edilizi nelle zone di espansione",
      "Impianti idrici vetusti nelle abitazioni più datate",
    ],
    caratteristicheBagni: "Bagni di dimensioni ridotte nelle palazzine storiche (sotto i 5 mq); standard nelle villette. Impianti spesso originali da sostituire integralmente.",
    caratteristicheCucine: "Cucine separate, medie dimensioni. Nelle abitazioni storiche, frequente necessità di adeguamento scarichi e impianto gas.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a San Marcellino?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 4-5 mq vanno da circa 4.500 € (base) a 9.000 € (premium). Nelle palazzine storiche con impianti originali, il costo tende al limite superiore. Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "Il bagno del mio appartamento è molto piccolo (meno di 4 mq). Vale la pena ristrutturarlo?",
        risposta: "Assolutamente sì. I bagni piccoli beneficiano enormemente di una ristrutturazione ben progettata: sanitari sospesi, doccia al posto della vasca, grandi formati che ampliano visivamente lo spazio, e una distribuzione intelligente degli accessori. Il costo per metro quadro è più alto rispetto a bagni grandi, ma l'impatto sulla qualità della vita quotidiana è significativo.",
      },
      {
        domanda: "Posso ristrutturare il bagno senza svuotare completamente l'appartamento?",
        risposta: "Sì, la ristrutturazione del bagno richiede solo di svuotare il bagno stesso e proteggere il corridoio adiacente per il passaggio dei materiali. Il cantiere è delimitato e non interferisce con il resto dell'abitazione. L'unico disagio reale è il periodo senza bagno funzionante, che organizziamo per essere il più breve possibile.",
      },
    ],
    vicini: ["trentola-ducenta", "casal-di-principe", "aversa", "villa-di-briano"],
  },

  {
    slug: "casal-di-principe",
    nome: "Casal di Principe",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Casal di Principe | Preventivi",
    metaDescription: "Ristrutturazione a Casal di Principe: costi orientativi da Prezzario Campania, criticità locali e stima gratuita senza impegno.",
    descrizione: "Casal di Principe è un comune dell'Agro Aversano con un tessuto edilizio misto: il centro storico conserva palazzi e palazzine di varie epoche, mentre le zone periferiche mostrano un'edilizia prevalentemente degli anni '80-'90.",
    tipoEdilizio: "Centro con palazzi storici e palazzine anni '60-'80; periferia con villette e case a schiera anni '80-'00",
    criticalita: [
      "Umidità di risalita nelle abitazioni del centro storico e nei piani terra",
      "Canne fumarie in amianto nei condomini anni '60-'70",
      "Abusi edilizi non condonati nelle zone di espansione",
      "Impianti idrici in piombo o acciaio zincato nelle palazzine più datate",
    ],
    caratteristicheBagni: "Bagni compatti nel centro storico (sotto i 5 mq); standard nelle costruzioni successive. Frequente presenza di impianti originali mai aggiornati.",
    caratteristicheCucine: "Cucine separate, dimensioni variabili. Nelle palazzine anni '60-'70, canna fumaria condominiale da verificare obbligatoriamente.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Casal di Principe?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 4-5 mq vanno da circa 4.500 € (base) a 9.000 € (premium). Nelle abitazioni del centro con impianti d'epoca, il costo tende al limite superiore.",
      },
      {
        domanda: "Ho un appartamento datato con impianti idrici in piombo. Devo sostituirli durante la ristrutturazione?",
        risposta: "Le tubazioni in piombo vanno sostituite per ragioni di salute: il piombo è tossico e si dissolve nell'acqua, soprattutto quella stagnante. La sostituzione durante la ristrutturazione del bagno è il momento più conveniente, perché le tracce sono già aperte. Non farlo significa dover intervenire di nuovo a distanza di poco tempo.",
      },
      {
        domanda: "Posso fare la ristrutturazione del bagno abitando in casa?",
        risposta: "Sì, è possibile in molti casi. I lavori nel bagno sono circoscritti e non rendono inabitabile il resto dell'appartamento. L'unico vero disagio è il periodo senza bagno funzionante (3-5 giorni). Se c'è un secondo bagno in casa, il problema non si pone. Altrimenti, organizziamo il cantiere per minimizzare questo tempo.",
      },
    ],
    vicini: ["san-marcellino", "villa-di-briano", "trentola-ducenta", "parete"],
  },

  {
    slug: "casaluce",
    nome: "Casaluce",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Casaluce | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Casaluce: costi orientativi, criticità edilizie e stima gratuita. Preventivo con sopralluogo.",
    descrizione: "Casaluce è un comune residenziale dell'Agro Aversano con un tessuto edilizio prevalentemente composto da villette unifamiliari e palazzine di piccole dimensioni, sviluppato principalmente tra gli anni '80 e i primi anni 2000.",
    tipoEdilizio: "Prevalenza di villette unifamiliari anni '80-'00; alcune palazzine nel nucleo centrale",
    criticalita: [
      "Umidità di risalita nelle villette con fondazioni non impermeabilizzate",
      "Abusi edilizi nelle zone di espansione privata",
      "Coperture piane nelle villette anni '80: guaine bituminose spesso esaurite",
      "Impianti idrici in acciaio zincato nelle costruzioni degli anni '70-'80",
    ],
    caratteristicheBagni: "Bagni di dimensioni standard nelle villette (6-8 mq), con sanitari degli anni '80-'90. Frequente doppio bagno nelle villette, entrambi da aggiornare.",
    caratteristicheCucine: "Cucine ampie nelle villette, spesso con accesso diretto al giardino. Frequente richiesta di apertura verso il soggiorno in fase di ristrutturazione.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Casaluce?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 6-7 mq (tipico delle villette di Casaluce) vanno da circa 5.500 € (base) a 10.500 € (premium). Il costo preciso dipende dallo stato degli impianti e dai materiali scelti.",
      },
      {
        domanda: "Ho una villetta degli anni '80 con doppio bagno. Conviene rifarli entrambi nello stesso momento?",
        risposta: "In molti casi sì: l'impresa è già mobilizzata, la logistica è organizzata e il costo marginale del secondo bagno è inferiore rispetto a due interventi separati. Durante il sopralluogo valutiamo entrambi e forniamo preventivi separati e combinati, così decidi con i numeri in mano.",
      },
      {
        domanda: "La copertura piana della mia villetta perde. Posso fare solo le rifiniture interne o devo rifare prima il tetto?",
        risposta: "Se la guaina del tetto perde, fare le rifiniture interne prima è un errore: l'acqua rovina tutto nel giro di uno o due inverni. L'ordine corretto è: prima risolvere la causa (guaina, impermeabilizzazione), poi intervenire sulle rifiniture interne. Il nostro sopralluogo valuta entrambe le situazioni e ti dà una priorità chiara.",
      },
    ],
    vicini: ["trentola-ducenta", "succivo", "aversa", "cesa"],
  },

  {
    slug: "cesa",
    nome: "Cesa",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Cesa | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Cesa: costi orientativi da Prezzario Campania, criticità edilizie locali e stima gratuita senza impegno.",
    descrizione: "Cesa è un piccolo comune dell'Agro Aversano con un nucleo storico ben definito e zone di espansione residenziale degli anni '80-'90. Il comune è conosciuto per la produzione ortofrutticola e mantiene un carattere prevalentemente residenziale.",
    tipoEdilizio: "Nucleo storico con palazzine anni '50-'70; espansione con villette anni '80-'00",
    criticalita: [
      "Umidità di risalita nelle abitazioni storiche, frequente nei piani terra",
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Abusi edilizi nelle zone di espansione",
      "Impianti fognari datati nel nucleo storico",
    ],
    caratteristicheBagni: "Bagni di dimensioni ridotte nelle palazzine storiche; standard nelle villette. Sanitari e rivestimenti spesso originali.",
    caratteristicheCucine: "Cucine separate, dimensioni medie. Nelle abitazioni storiche, frequente assenza di canna fumaria dedicata.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Cesa?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il costo preciso dipende dallo stato degli impianti esistenti.",
      },
      {
        domanda: "Per la ristrutturazione del bagno serve sempre una CILA a Cesa?",
        risposta: "Non sempre. La sola sostituzione di sanitari, rivestimenti e rubinetteria senza spostare impianti è manutenzione ordinaria e non richiede pratiche edilizie. La CILA è necessaria quando si spostano impianti, si demoliscono o si creano tramezzi, o si modifica la distribuzione degli spazi. Il nostro tecnico chiarisce al sopralluogo cosa è necessario per il tuo intervento specifico.",
      },
    ],
    vicini: ["aversa", "casaluce", "succivo", "trentola-ducenta"],
  },

  {
    slug: "frignano",
    nome: "Frignano",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Frignano | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Frignano: costi orientativi da Prezzario Campania, criticità edilizie e stima gratuita senza impegno.",
    descrizione: "Frignano è un comune prevalentemente residenziale dell'Agro Aversano, con un patrimonio edilizio composto da un nucleo centrale e zone di espansione sviluppate tra gli anni '70 e i primi anni 2000.",
    tipoEdilizio: "Mix di palazzine anni '70-'80 e villette anni '90-2000; nucleo storico compatto",
    criticalita: [
      "Umidità di risalita nelle palazzine più datate",
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Abusi edilizi nelle zone di espansione privata",
      "Impianti idrici vetusti nelle costruzioni degli anni '70",
    ],
    caratteristicheBagni: "Bagni standard nelle palazzine (4-6 mq); più ampi nelle villette. Sanitari degli anni '80-'90 da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine; ampie nelle villette. Verifica impianto gas necessaria nelle costruzioni più datate.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Frignano?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito quantifica le variabili specifiche.",
      },
      {
        domanda: "Quanto dura una ristrutturazione bagno completa a Frignano?",
        risposta: "Un bagno standard 5-6 mq richiede mediamente 2-3 settimane lavorative dalla demolizione alla rifinitura finale. I tempi si allungano se è necessaria la bonifica di impianti in amianto o se emergono criticità strutturali al sopralluogo.",
      },
    ],
    vicini: ["villa-di-briano", "casal-di-principe", "san-marcellino", "parete"],
  },

  {
    slug: "parete",
    nome: "Parete",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Parete | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Parete: costi orientativi da Prezzario Campania, criticità locali e stima gratuita. Preventivo con sopralluogo.",
    descrizione: "Parete è un comune dell'Agro Aversano con un tessuto edilizio misto, dove convivono palazzine del centro storico degli anni '60-'70 e un'espansione residenziale più recente con villette e case a schiera.",
    tipoEdilizio: "Palazzine anni '60-'80 nel centro; villette e case a schiera anni '80-'00 nell'espansione",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di risalita frequente nelle palazzine e nelle villette più datate",
      "Abusi edilizi nelle zone di espansione",
      "Impianti idrici vetusti nelle palazzine del centro",
    ],
    caratteristicheBagni: "Bagni compatti nelle palazzine (sotto i 5 mq); standard nelle villette. Impianti spesso da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine, medie-grandi nelle villette. Canna fumaria da verificare prima di interventi.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Parete?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle palazzine degli anni '60-'70 con impianti originali, il costo tende al limite superiore.",
      },
      {
        domanda: "Ho un condominio anni '70 a Parete. Cosa devo sapere prima di ristrutturare il mio appartamento?",
        risposta: "Negli edifici condominiali anni '70 è importante verificare: lo stato delle colonne scarico condominiali (se intasate o deteriorate, il problema ricade su tutti i bagni), la presenza di amianto nelle canne fumarie, e il regolamento condominiale per orari e modalità dei lavori. Se l'intervento tocca parti comuni, è necessario informare l'amministratore.",
      },
    ],
    vicini: ["villa-di-briano", "casal-di-principe", "frignano", "aversa"],
  },

  {
    slug: "succivo",
    nome: "Succivo",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Succivo | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Succivo: costi orientativi da Prezzario Campania, criticità locali e stima gratuita senza impegno.",
    descrizione: "Succivo è un comune residenziale dell'Agro Aversano con un tenore abitativo mediamente più elevato rispetto agli altri comuni della zona, caratterizzato da villette e palazzine di medie dimensioni edificate principalmente tra gli anni '80 e i primi anni 2000.",
    tipoEdilizio: "Prevalenza di villette unifamiliari e palazzine anni '80-'00; nucleo storico con edifici anni '60-'70",
    criticalita: [
      "Umidità di risalita nelle villette più datate, frequente nei piani terra",
      "Abusi edilizi nelle espansioni private degli anni '90",
      "Impianti idrici in acciaio zincato nelle abitazioni degli anni '70-'80",
      "Coperture piane nelle villette degli anni '80: guaine di prima generazione spesso da sostituire",
    ],
    caratteristicheBagni: "Bagni di dimensioni standard o superiori nelle villette, con sanitari degli anni '80-'90. Nelle abitazioni più recenti, bagni già ristrutturati parzialmente ma con impianti da aggiornare.",
    caratteristicheCucine: "Cucine separate e ampie nelle villette. Frequente richiesta di apertura verso il soggiorno (cucina open space) in fase di ristrutturazione.",
    faq: [
      {
        domanda: "Voglio aprire la cucina sul soggiorno nella mia villetta a Succivo. È possibile?",
        risposta: "Dipende dalla struttura del muro di separazione. Se è un muro portante, l'apertura richiede una trave di sostegno e il progetto di un ingegnere strutturale, oltre al permesso di costruire. Se è una tramezza non portante, basta una CILA. Il nostro sopralluogo include la verifica della natura del muro prima di qualsiasi preventivo.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Succivo?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle villette con bagni già parzialmente ristrutturati, il costo dipende da quanto degli impianti esistenti è riutilizzabile: lo si capisce al sopralluogo.",
      },
      {
        domanda: "Ho intenzione di installare un riscaldamento a pavimento nel bagno. È compatibile con una ristrutturazione completa?",
        risposta: "Sì, il riscaldamento a pavimento nel bagno è uno degli upgrade più richiesti in fase di ristrutturazione completa, perché le tracce e il massetto sono già da rifare. Il costo aggiuntivo rispetto a un bagno standard è di 800-1.500 € a seconda della dimensione. Va pianificato dall'inizio perché richiede un massetto dedicato.",
      },
    ],
    vicini: ["aversa", "cesa", "casaluce", "trentola-ducenta"],
  },

  {
    slug: "villa-di-briano",
    nome: "Villa di Briano",
    provincia: "caserta",
    zona: "agro-aversano",
    metaTitle: "Ristrutturazione Casa a Villa di Briano | Preventivi",
    metaDescription: "Ristrutturazione a Villa di Briano: costi orientativi, criticità edilizie locali e stima gratuita. Sopralluogo senza impegno.",
    descrizione: "Villa di Briano è un piccolo comune residenziale dell'Agro Aversano, con un tessuto edilizio composto da un nucleo storico compatto e zone di espansione con villette e palazzine di piccole dimensioni, sviluppate tra gli anni '70 e i primi anni 2000.",
    tipoEdilizio: "Nucleo storico con palazzine anni '50-'70; periferia con villette anni '80-'00",
    criticalita: [
      "Umidità di risalita nelle abitazioni storiche, frequente nei piani terra",
      "Canne fumarie in amianto nei condomini anni '60-'70",
      "Abusi edilizi nelle zone di espansione",
      "Impianti fognari datati nel nucleo storico, spesso condivisi tra più abitazioni",
    ],
    caratteristicheBagni: "Bagni di dimensioni ridotte nelle palazzine storiche; standard nelle villette. Impianti spesso datati con necessità di aggiornamento completo.",
    caratteristicheCucine: "Cucine separate, medie dimensioni. Nelle abitazioni storiche, frequente necessità di adeguamento scarichi e impianto gas.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Villa di Briano?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle palazzine storiche con impianti originali, il costo tende al limite superiore. Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "Nel mio appartamento storico a Villa di Briano gli scarichi sono condivisi con il vicino. Posso comunque ristrutturare?",
        risposta: "Sì, ma con le dovute cautele. Gli scarichi condivisi sono una caratteristica degli edifici storici più datati. Durante il sopralluogo verifichiamo la configurazione degli scarichi e progettiamo l'intervento in modo da non interferire con i vicini. In alcuni casi può essere necessario concordare i lavori con il proprietario dell'appartamento adiacente.",
      },
    ],
    vicini: ["san-marcellino", "casal-di-principe", "frignano", "parete"],
  },
];

// ─────────────────────────────────────────────
// ZONA: NAPOLI E PROVINCIA (8 comuni)
// ─────────────────────────────────────────────

export const comuniNapoli: Comune[] = [
  {
    slug: "napoli",
    nome: "Napoli",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Napoli | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Napoli: costi orientativi per appartamenti nei quartieri serviti. Criticità locali, stima gratuita e sopralluogo.",
    descrizione: "Napoli è servita nelle zone periferiche nord e nord-ovest, con un tessuto edilizio prevalentemente condominiale degli anni '60-'80. Le caratteristiche edilizie variano significativamente da quartiere a quartiere: il nostro servizio copre principalmente le zone di Secondigliano, Piscinola e le aree limitrofe.",
    tipoEdilizio: "Condomini anni '60-'80 nelle periferie nord; edilizia popolare IACP; palazzine anni '50 nei quartieri più centrali dell'area servita",
    criticalita: [
      "Impianti idrici condominiali obsoleti: spesso le colonne montanti non sono state aggiornate dalla costruzione",
      "Canne fumarie in amianto nei condomini degli anni '60-'70: rilevamento obbligatorio",
      "Umidità di risalita e infiltrazioni da lastrico solare nei piani alti",
      "Interventi in condominio: necessario rispettare il regolamento condominiale e in alcuni casi ottenere delibera assembleare per lavori su parti comuni",
    ],
    caratteristicheBagni: "Bagni mono-sanitari sotto i 5 mq nei condomini IACP e nelle palazzine degli anni '60. Nelle abitazioni più recenti, bagni di dimensioni standard con sanitari da aggiornare.",
    caratteristicheCucine: "Cucine separate e compatte nei condomini degli anni '60-'70. Frequente presenza di canna fumaria condominiale in amianto collegata alle cucine.",
    faq: [
      {
        domanda: "Devo chiedere al condominio per ristrutturare il mio bagno a Napoli?",
        risposta: "Se l'intervento è interno al tuo appartamento e non tocca parti comuni, non serve una delibera. Devi però rispettare il regolamento condominiale per orari e modalità dei lavori. Se l'intervento richiede di collegare o modificare impianti condominiali, è necessario informare l'amministratore e in alcuni casi ottenere l'approvazione assembleare.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Napoli?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 4-5 mq vanno da circa 4.500 € (base) a 8.500 € (premium). I condomini degli anni '60-'70 con impianti obsoleti tendono al limite superiore. Il sopralluogo è il momento in cui emergono le variabili specifiche.",
      },
      {
        domanda: "Posso usare il Bonus 50% per un appartamento in condominio a Napoli?",
        risposta: "Sì, la detrazione IRPEF al 50% si applica agli interventi di manutenzione straordinaria sulle unità residenziali, indipendentemente dalla tipologia condominiale. Servono pagamenti tracciati con bonifico parlante e fatture in regola.",
      },
      {
        domanda: "Ho un appartamento IACP a Napoli. Posso ristrutturare anche se non sono proprietario?",
        risposta: "La ristrutturazione degli appartamenti IACP è soggetta a regole specifiche che dipendono dal tipo di contratto (locazione semplice, riscatto, piena proprietà). Se sei in fase di riscatto o già proprietario, hai piena libertà di intervento sugli interni. Se sei locatario, è necessaria l'autorizzazione dell'ente gestore per lavori di manutenzione straordinaria.",
      },
    ],
    vicini: ["giugliano-in-campania", "mugnano-di-napoli", "melito-di-napoli"],
  },

  {
    slug: "giugliano-in-campania",
    nome: "Giugliano in Campania",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Giugliano in Campania | Preventivi",
    metaDescription: "Ristrutturazione a Giugliano in Campania: costi orientativi, criticità edilizie e stima gratuita. Preventivo con sopralluogo.",
    descrizione: "Giugliano in Campania è uno dei comuni più popolosi della Campania, con un'espansione residenziale avvenuta molto rapidamente tra gli anni '80 e i primi anni 2000. Il tessuto edilizio è prevalentemente composto da palazzine e condomini di media altezza, con un nucleo storico relativamente contenuto.",
    tipoEdilizio: "Palazzine e condomini anni '80-'00 nelle zone di espansione; nucleo storico con edifici anni '50-'70; alcune ville e villette nelle zone periferiche",
    criticalita: [
      "Abusi edilizi non condonati molto frequenti, legati alla rapida espansione non sempre pianificata degli anni '80-'90",
      "Canne fumarie in amianto nei condomini degli anni '70-'80",
      "Umidità di risalita nelle abitazioni di piano terra, frequente nelle costruzioni su terreno argilloso",
      "Impianti condominiali non aggiornati in edifici di 30-40 anni: pressione idrica insufficiente ai piani alti",
    ],
    caratteristicheBagni: "Bagni di dimensioni variabili: standard nei condomini degli anni '80 (5-6 mq), più piccoli nelle palazzine del centro. Sanitari degli anni '80-'90 da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine, medie dimensioni. Nelle costruzioni degli anni '80, frequente presenza di impianto gas non a norma.",
    faq: [
      {
        domanda: "Ho un appartamento anni '90 a Giugliano. Cosa controllo prima di ristrutturare?",
        risposta: "Per gli appartamenti degli anni '90 a Giugliano è consigliabile verificare: la regolarità urbanistica (abusi frequenti nella zona), lo stato dell'impianto elettrico, la condizione degli scarichi condominiali, e la presenza di umidità nei muri perimetrali. Il nostro sopralluogo include una valutazione tecnica complessiva.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Giugliano in Campania?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Negli edifici degli anni '90 con impianti da sostituire integralmente, il costo tende al limite superiore.",
      },
      {
        domanda: "Vivo al terzo piano di un condominio anni '80 a Giugliano e ho poca pressione idrica. Si risolve con la ristrutturazione?",
        risposta: "La bassa pressione ai piani alti dipende quasi sempre dalle colonne montanti condominiali, non dall'impianto del tuo appartamento. È un problema che si risolve solo intervenendo sulle parti comuni, che richiede delibera condominiale. Nell'ambito della ristrutturazione del tuo appartamento, possiamo installare un mini-autoclave privato come soluzione temporanea o definitiva.",
      },
      {
        domanda: "Ho un abuso non condonato nella mia abitazione a Giugliano. Posso comunque fare lavori?",
        risposta: "Dipende dalla natura dell'abuso e dall'intervento che vuoi fare. Per lavori di manutenzione ordinaria (sostituzione sanitari, rivestimenti) non ci sono problemi. Per lavori soggetti a CILA o permesso, il Comune può bloccare l'iter se c'è un abuso pendente. È fondamentale una verifica preventiva della situazione urbanistica.",
      },
    ],
    vicini: ["napoli", "villaricca", "sant-antimo", "mugnano-di-napoli"],
  },

  {
    slug: "sant-antimo",
    nome: "Sant'Antimo",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Sant'Antimo | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Sant'Antimo: costi orientativi da Prezzario Campania, criticità edilizie e stima gratuita.",
    descrizione: "Sant'Antimo è un comune densamente popolato a nord di Napoli, con un tessuto edilizio prevalentemente composto da palazzine e condomini di media altezza. L'espansione residenziale rapida degli anni '70-'90 ha lasciato un patrimonio edilizio eterogeneo con livelli di qualità costruttiva molto variabili.",
    tipoEdilizio: "Condomini e palazzine anni '70-'90; alcune aree di edilizia popolare; nucleo storico con edifici anni '50-'60",
    criticalita: [
      "Umidità di risalita e infiltrazioni da lastrici solari nei piani alti",
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Abusi edilizi non condonati frequenti",
      "Impianti idrici condominiali vetusti: colonne montanti in piombo ancora presenti nei palazzi anni '60",
    ],
    caratteristicheBagni: "Bagni compatti nelle palazzine anni '70 (sotto i 5 mq), standard nelle costruzioni successive. Impianti spesso da aggiornare integralmente.",
    caratteristicheCucine: "Cucine separate, compatte. Canne fumarie condominiali collegate che richiedono verifica prima di qualsiasi intervento.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Sant'Antimo?",
        risposta: "Le stime orientative in base al Prezzario Regionale Campania per un bagno 4-5 mq vanno da circa 4.500 € (base) a 8.500 € (premium). Nei condomini degli anni '70 con impianti originali, il costo reale tende al limite superiore.",
      },
      {
        domanda: "Ho un appartamento in un condominio degli anni '70 a Sant'Antimo con infiltrazioni dal lastrico solare. Prima di ristrutturare, cosa faccio?",
        risposta: "Le infiltrazioni dal lastrico solare vanno risolte prima di qualsiasi lavoro interno, altrimenti le nuove rifiniture sono compromesse. Il lastrico solare è solitamente parte comune del condominio (salvo diverse disposizioni): il problema va segnalato all'amministratore e risolto con delibera condominiale. Solo dopo è sensato intervenire sugli interni dell'appartamento.",
      },
      {
        domanda: "Posso ristrutturare la cucina se la canna fumaria condominiale è in amianto?",
        risposta: "Non è possibile collegare una nuova cappa a una canna fumaria in amianto senza bonifica preventiva. La bonifica va eseguita da una ditta specializzata certificata, con notifica all'ASL e smaltimento in discarica autorizzata. Il costo va calcolato separatamente dal preventivo della cucina e va pianificato prima dell'inizio lavori.",
      },
    ],
    vicini: ["giugliano-in-campania", "napoli", "melito-di-napoli", "grumo-nevano"],
  },

  {
    slug: "melito-di-napoli",
    nome: "Melito di Napoli",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Melito di Napoli | Preventivi",
    metaDescription: "Ristrutturazione a Melito di Napoli: costi orientativi, criticità locali e stima gratuita. Sopralluogo senza impegno.",
    descrizione: "Melito di Napoli è un comune dell'area nord di Napoli con un tessuto edilizio prevalentemente condominiale, sviluppatosi rapidamente tra gli anni '60 e gli anni '90. La vicinanza a Napoli e la buona connessione viaria hanno favorito una forte crescita residenziale.",
    tipoEdilizio: "Condomini anni '60-'90; palazzine di media altezza; alcune aree di edilizia popolare",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di infiltrazione e risalita nei piani terra e seminterrati",
      "Impianti condominiali obsoleti: aggiornamento necessario in caso di interventi su bagni o cucine",
      "Abusi edilizi non condonati",
    ],
    caratteristicheBagni: "Bagni compatti (sotto i 5 mq) nei condomini più vecchi, standard nelle costruzioni degli anni '80-'90. Impianti originali spesso ancora in funzione.",
    caratteristicheCucine: "Cucine compatte e separate. Frequente presenza di cappa non a norma collegata a canna fumaria condominiale.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Melito di Napoli?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 4-5 mq vanno da circa 4.500 € (base) a 8.500 € (premium). Nei condomini degli anni '60-'70 con impianti originali da sostituire, il costo tende al limite superiore.",
      },
      {
        domanda: "Ho un seminterrato a Melito di Napoli con problemi di umidità. Posso ristrutturarlo?",
        risposta: "Sì, ma l'umidità va affrontata con metodo. Nei seminterrati dell'area nord di Napoli l'umidità ha spesso una doppia origine: risalita capillare dalle fondazioni e condensa da scarsa ventilazione. Trattarla superficialmente (solo impermeabilizzante) non risolve il problema. Il sopralluogo identifica la causa specifica e permette di progettare l'intervento corretto.",
      },
      {
        domanda: "Nell'appartamento di mia madre anni '60 a Melito il bagno è piccolo e con impianti originali. Quanto costerebbe rifarlo completamente?",
        risposta: "Un bagno degli anni '60 con impianti originali è quasi certamente da rifare integralmente: tubazioni in piombo o acciaio zincato, impianto elettrico non a norma, rivestimenti in mosaico con adesivo a base di catrame. La stima orientativa per un bagno sotto i 5 mq con rifacimento completo è di 4.500-7.500 € a seconda della finitura scelta. Il sopralluogo gratuito definisce il costo reale.",
      },
    ],
    vicini: ["napoli", "sant-antimo", "mugnano-di-napoli", "casandrino"],
  },

  {
    slug: "mugnano-di-napoli",
    nome: "Mugnano di Napoli",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Mugnano di Napoli | Preventivi",
    metaDescription: "Ristrutturazione a Mugnano di Napoli: costi orientativi, criticità edilizie locali e stima gratuita senza impegno.",
    descrizione: "Mugnano di Napoli è un comune dell'area nord-ovest di Napoli, con un tessuto edilizio prevalentemente condominiale degli anni '60-'80. La densità abitativa è elevata e le abitazioni sono in larga parte appartamenti in condominio.",
    tipoEdilizio: "Condomini anni '60-'80; palazzine di media altezza; edilizia compatta",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Impianti condominiali vetusti: colonne scarico e montanti idrici da decenni senza manutenzione",
      "Umidità da infiltrazione nei piani alti e da risalita nei piani terra",
      "Abusi edilizi non condonati nelle zone di espansione",
    ],
    caratteristicheBagni: "Bagni compatti nelle palazzine degli anni '60-'70 (sotto i 5 mq); standard nelle costruzioni degli anni '80. Impianti originali da sostituire.",
    caratteristicheCucine: "Cucine separate e compatte. Verifica canna fumaria obbligatoria prima di qualsiasi intervento.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Mugnano di Napoli?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 4-5 mq vanno da circa 4.500 € (base) a 8.500 € (premium). Nei condomini degli anni '60-'70 con impianti originali, il costo reale è tendenzialmente nel range superiore.",
      },
      {
        domanda: "Ho un appartamento al quinto piano di un condominio anni '70 a Mugnano. Ho problemi di scarico lento. È un problema condominiale?",
        risposta: "Gli scarichi lenti nei piani alti sono spesso un sintomo del deterioramento delle colonne scarico condominiali, non solo dell'impianto del singolo appartamento. Il problema può essere parzialmente risolto sostituendo i tratti di impianto interno all'appartamento, ma per una soluzione definitiva è necessario intervenire sulla colonna condominiale, che richiede delibera assembleare.",
      },
      {
        domanda: "Posso trasformare il bagno piccolo degli anni '70 in un bagno moderno funzionale senza aumentare lo spazio?",
        risposta: "Assolutamente sì. I bagni compatti anni '70 beneficiano moltissimo di una ristrutturazione ben progettata: sanitari sospesi al posto di quelli a terra (guadagni 15-20 cm a pavimento), doccia al posto della vasca, grande specchio e illuminazione ottimizzata, mensole integrate. Con 4-5 mq ben progettati si ottiene un bagno funzionale e piacevole. Lo progettiamo insieme al sopralluogo.",
      },
    ],
    vicini: ["napoli", "giugliano-in-campania", "melito-di-napoli", "villaricca"],
  },

  {
    slug: "villaricca",
    nome: "Villaricca",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Villaricca | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Villaricca: costi orientativi da Prezzario Campania, criticità edilizie e stima gratuita senza impegno.",
    descrizione: "Villaricca è un comune dell'area nord-ovest di Napoli con un tessuto edilizio misto: palazzine degli anni '70-'80 nel centro e una consistente espansione residenziale degli anni '90-2000 nelle zone periferiche con villette e condomini.",
    tipoEdilizio: "Palazzine anni '70-'80 nel centro; villette e condomini anni '90-2000 nell'espansione",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nei piani terra delle costruzioni più datate",
      "Abusi edilizi frequenti nelle zone di espansione degli anni '90",
      "Impianti idrici in acciaio zincato nelle palazzine degli anni '70-'80",
    ],
    caratteristicheBagni: "Bagni di dimensioni variabili: compatti nelle palazzine anni '70 (4-5 mq), standard nelle costruzioni successive (5-7 mq). Impianti da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine; ampie nelle villette. Canna fumaria da verificare prima di interventi nelle palazzine più vecchie.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Villaricca?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Nelle palazzine degli anni '70 con impianti originali, il costo tende al limite superiore.",
      },
      {
        domanda: "Devo fare la CILA per ristrutturare il bagno nella mia palazzina a Villaricca?",
        risposta: "Se sostituisci solo sanitari e rivestimenti senza spostare impianti o modificare tramezzi, la manutenzione ordinaria non richiede pratiche edilizie. La CILA è necessaria per interventi che modificano la distribuzione degli spazi o spostano impianti. Il nostro tecnico chiarisce cosa è necessario per il tuo intervento specifico prima del preventivo.",
      },
      {
        domanda: "Ho una villetta degli anni '90 a Villaricca. Voglio ristrutturare sia il bagno che la cucina. Conviene fare tutto insieme?",
        risposta: "Fare bagno e cucina insieme ha vantaggi concreti: l'impresa è già in casa, le pratiche burocratiche si gestiscono una sola volta, i costi di cantiere (ponteggi, smaltimento, trasferta) si dividono su due interventi. Il risparmio rispetto a due cantieri separati è di solito il 10-15% sull'importo totale.",
      },
    ],
    vicini: ["napoli", "giugliano-in-campania", "mugnano-di-napoli", "casandrino"],
  },

  {
    slug: "casandrino",
    nome: "Casandrino",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Casandrino | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Casandrino: costi orientativi da Prezzario Campania, criticità locali e stima gratuita senza impegno.",
    descrizione: "Casandrino è un comune dell'area nord di Napoli con un tessuto edilizio prevalentemente composto da palazzine degli anni '60-'80 e alcune zone di espansione recente. La prossimità a Napoli e a Giugliano in Campania ne fa un comune a forte vocazione residenziale.",
    tipoEdilizio: "Palazzine anni '60-'80 nel centro; espansione recente con condomini di qualità media",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di risalita nei piani terra, frequente nelle costruzioni più datate",
      "Impianti condominiali obsoleti nelle palazzine più vecchie",
      "Abusi edilizi non condonati nelle espansioni private",
    ],
    caratteristicheBagni: "Bagni compatti nelle palazzine degli anni '60-'70 (sotto i 5 mq); standard nelle costruzioni successive. Impianti spesso da aggiornare.",
    caratteristicheCucine: "Cucine separate e compatte. Verifica canna fumaria obbligatoria prima di interventi nelle palazzine più vecchie.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Casandrino?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 4-5 mq vanno da circa 4.500 € a 8.500 €. Il sopralluogo gratuito quantifica le variabili specifiche dell'immobile.",
      },
      {
        domanda: "Il mio appartamento a Casandrino ha il bagno e la cucina adiacenti. Posso abbatterli e ricavare un bagno più grande?",
        risposta: "È tecnicamente possibile se il muro tra i due ambienti non è portante. Serve però un progetto attento: lo spazio sottratto alla cucina va compensato, gli impianti vanno riprogettati, e per la modifica degli spazi interni serve una CILA o permesso di costruire a seconda dell'entità. Al sopralluogo verifichiamo la fattibilità strutturale e ti presentiamo le opzioni.",
      },
      {
        domanda: "Quanto dura il cantiere per la ristrutturazione di un bagno a Casandrino?",
        risposta: "Un bagno di 4-5 mq con rifacimento completo richiede mediamente 2-3 settimane lavorative. I tempi si allungano se è necessaria la bonifica di impianti in amianto, la sostituzione delle colonne condominiali o se emergono criticità strutturali al sopralluogo.",
      },
    ],
    vicini: ["napoli", "villaricca", "mugnano-di-napoli", "grumo-nevano"],
  },

  {
    slug: "grumo-nevano",
    nome: "Grumo Nevano",
    provincia: "napoli",
    zona: "napoli",
    metaTitle: "Ristrutturazione Casa a Grumo Nevano | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Grumo Nevano: costi orientativi, criticità edilizie e stima gratuita senza impegno.",
    descrizione: "Grumo Nevano è un comune dell'area nord di Napoli, al confine con la provincia di Caserta. Il tessuto edilizio è prevalentemente composto da palazzine degli anni '70-'90 con alcune aree di edilizia residenziale più recente. La posizione di confine tra le due province lo rende un comune con caratteristiche edilizie ibride.",
    tipoEdilizio: "Palazzine anni '70-'90; nucleo storico con edifici più datati; edilizia recente nelle zone periferiche",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nelle abitazioni di piano terra",
      "Abusi edilizi non condonati nelle espansioni private",
      "Impianti idrici vetusti nelle palazzine più datate",
    ],
    caratteristicheBagni: "Bagni standard nei condomini degli anni '80-'90; più compatti nelle palazzine storiche. Sanitari e rivestimenti degli anni '80-'90 frequentemente da aggiornare.",
    caratteristicheCucine: "Cucine separate di medie dimensioni. Canna fumaria condominiale da verificare nelle palazzine più vecchie.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Grumo Nevano?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito quantifica le variabili specifiche dell'immobile.",
      },
      {
        domanda: "Vivo a Grumo Nevano ma il confine comunale è vicino ad Aversa. Intervenite anche nella mia zona?",
        risposta: "Sì, operiamo su tutto il territorio di Grumo Nevano e nei comuni limitrofi sia in provincia di Napoli che di Caserta. La posizione al confine tra le due province non è un problema: il nostro intervento dipende dall'indirizzo specifico, non dalla provincia.",
      },
      {
        domanda: "Ho un appartamento degli anni '80 a Grumo Nevano con rivestimenti in ceramica fino a metà parete. Conviene toglierli o posarci sopra?",
        risposta: "La scelta tra rimozione e sovrapposa dipende da: spessore dei vecchi rivestimenti (se già sovrapposti una volta, una seconda volta può creare problemi di peso e planarità), adesione al supporto (se ci sono zone staccate, vanno rimosse), e tipo di intervento (se rifai anche gli impianti, è meglio rimuovere tutto). Al sopralluogo valutiamo la situazione e ti diciamo qual è la soluzione più conveniente.",
      },
    ],
    vicini: ["sant-antimo", "casandrino", "napoli", "aversa"],
  },
];

// ─────────────────────────────────────────────
// ZONA: CASERTA E PROVINCIA (9 comuni)
// ─────────────────────────────────────────────

export const comuniCaserta: Comune[] = [
  {
    slug: "caserta",
    nome: "Caserta",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Caserta | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Caserta: costi orientativi per appartamenti e ville, criticità locali e stima gratuita senza impegno.",
    descrizione: "Caserta è il capoluogo di provincia, con un tessuto edilizio che varia dalla zona del centro storico e delle ville storiche nei pressi della Reggia, alle palazzine degli anni '60-'80 nelle zone residenziali, fino alle villette dell'espansione periferica degli anni '90-2000. Ogni zona ha caratteristiche edilizie e iter autorizzativi differenti.",
    tipoEdilizio: "Centro storico con edifici d'epoca e palazzi signorili; palazzine anni '60-'80 nelle zone residenziali (Pietro Nenni, Acquaviva); villette anni '90-2000 in periferia",
    criticalita: [
      "Centro storico: alcune zone sono soggette a vincoli paesaggistici e della Soprintendenza (vicinanza Reggia e Belvedere)",
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di risalita nelle abitazioni del centro storico e nei piani terra dei condomini",
      "Impianti condominiali obsoleti: negli edifici degli anni '60-'70, frequente assenza di aggiornamento degli impianti idrici condominiali",
    ],
    caratteristicheBagni: "Bagni di dimensioni variabili: ampi negli appartamenti signorili del centro, compatti (sotto 5 mq) nelle palazzine degli anni '70. Nei condomini più vecchi, impianti idrici originali spesso in piombo o acciaio zincato.",
    caratteristicheCucine: "Cucine separate nelle palazzine; più ampie negli appartamenti del centro. Frequente necessità di aggiornamento impianto gas e cappa.",
    faq: [
      {
        domanda: "Ho un appartamento vicino alla Reggia di Caserta. Ci sono vincoli per ristrutturare?",
        risposta: "La vicinanza alla Reggia non implica automaticamente vincoli sugli interni. I vincoli della Soprintendenza riguardano prevalentemente facciate, prospetti e interventi visibili dall'esterno. Per lavori interni (bagno, cucina) senza modifiche strutturali, di solito è sufficiente una CILA. È sempre utile verificare la classificazione urbanistica specifica dell'immobile prima di procedere.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Caserta?",
        risposta: "In base al Prezzario Regionale Campania, le stime orientative per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Negli appartamenti del centro con impianti d'epoca, il costo tende al limite superiore. Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "Quanto tempo ci vuole per ristrutturare un bagno a Caserta?",
        risposta: "Un bagno standard (5-6 mq) con rifacimento completo richiede mediamente 2-3 settimane lavorative. Negli appartamenti condominiali, i tempi dipendono anche dalla logistica (accesso, orari condominio, smaltimento macerie). Il programma lavori viene definito al sopralluogo.",
      },
      {
        domanda: "Voglio ristrutturare un appartamento degli anni '70 nel quartiere Pietro Nenni a Caserta. Da dove conviene iniziare?",
        risposta: "Per un appartamento degli anni '70, l'ordine logico è: prima una verifica degli impianti (elettrico e idrico), poi una valutazione dell'umidità nelle pareti perimetrali, e infine la programmazione degli interventi. Spesso conviene fare impianti e rifiniture in sequenza unica per ottimizzare i costi. Il sopralluogo identifica le priorità e permette di pianificare in modo efficiente.",
      },
    ],
    vicini: ["casagiove", "san-prisco", "recale", "marcianise"],
  },

  {
    slug: "marcianise",
    nome: "Marcianise",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Marcianise | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Marcianise: costi orientativi da Prezzario Campania, criticità edilizie e stima gratuita.",
    descrizione: "Marcianise è un comune con una forte componente industriale e commerciale, ma con un nucleo residenziale significativo composto da palazzine degli anni '60-'80 nel centro e villette nelle zone periferiche. La prossimità all'autostrada e al casello A30 ha favorito l'espansione residenziale.",
    tipoEdilizio: "Palazzine anni '60-'80 nel centro; villette anni '80-'00 nelle zone periferiche; edilizia mista",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di risalita nei piani terra, frequente nelle costruzioni più datate",
      "Abusi edilizi non condonati nelle zone di espansione",
      "Vibrazioni da traffico pesante sulla SS7 Appia: possibili lesioni nei muri delle abitazioni prossime alla strada",
    ],
    caratteristicheBagni: "Bagni standard nelle palazzine degli anni '80; più compatti nei condomini anni '60-'70. Impianti spesso da aggiornare.",
    caratteristicheCucine: "Cucine separate, medie dimensioni. Canne fumarie da verificare nei condomini più vecchi.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Marcianise?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito quantifica le variabili specifiche dell'immobile.",
      },
      {
        domanda: "Ho crepe sui muri di casa a Marcianise vicino alla SS7. Cosa faccio prima di ristrutturare?",
        risposta: "Le abitazioni prossime ad arterie stradali ad alto traffico possono sviluppare lesioni da vibrazione nel tempo. Prima di qualsiasi rifinitura, è necessario valutare l'entità delle crepe: le fessure superficiali nell'intonaco si trattano con stucco elastico prima della tinteggiatura, ma le lesioni ai muri portanti richiedono una valutazione strutturale. Il nostro sopralluogo include questa verifica.",
      },
      {
        domanda: "Posso ristrutturare il bagno e la cucina contemporaneamente a Marcianise?",
        risposta: "Sì, e spesso conviene. L'impresa è già in casa, i costi fissi (trasferta, ponteggi interni, smaltimento) si distribuiscono su due interventi, e la logistica del cantiere è più efficiente. In media, fare bagno e cucina insieme costa il 10-15% in meno rispetto a due cantieri separati.",
      },
    ],
    vicini: ["caserta", "santa-maria-capua-vetere", "curti", "recale"],
  },

  {
    slug: "curti",
    nome: "Curti",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Curti | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Curti: costi orientativi da Prezzario Campania, criticità edilizie locali e stima gratuita senza impegno.",
    descrizione: "Curti è un comune di dimensioni ridotte nella provincia di Caserta, con un tessuto edilizio prevalentemente residenziale composto da palazzine degli anni '70-'80 e villette degli anni '90-2000. La sua posizione tra Caserta e Marcianise lo rende un comune a forte domanda abitativa.",
    tipoEdilizio: "Palazzine anni '70-'80 nel centro; villette e case a schiera anni '90-2000 nell'espansione",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nei piani terra delle costruzioni più datate",
      "Abusi edilizi nelle zone di espansione",
      "Impianti idrici in acciaio zincato nelle palazzine degli anni '70-'80",
    ],
    caratteristicheBagni: "Bagni standard nelle palazzine (4-6 mq); più ampi nelle villette. Sanitari degli anni '80-'90 da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine; ampie nelle villette. Frequente necessità di adeguamento impianto gas.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Curti?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "Ho una palazzina anni '70 a Curti. Devo sostituire le tubazioni durante la ristrutturazione del bagno?",
        risposta: "Nelle palazzine degli anni '70 le tubazioni idriche sono quasi certamente in acciaio zincato, che si corrode internamente nel tempo riducendo la portata e rilasciando impurità nell'acqua. Se il bagno è già aperto per la ristrutturazione, la sostituzione dei tratti di tubazione interni all'appartamento ha un costo marginale relativamente basso. Consigliamo quasi sempre di farlo per evitare di riaprire le tracce tra pochi anni.",
      },
    ],
    vicini: ["caserta", "marcianise", "santa-maria-capua-vetere", "recale"],
  },

  {
    slug: "santa-maria-capua-vetere",
    nome: "Santa Maria Capua Vetere",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Santa Maria Capua Vetere | Preventivi",
    metaDescription: "Ristrutturazione a Santa Maria Capua Vetere: costi orientativi, criticità del centro storico e stima gratuita senza impegno.",
    descrizione: "Santa Maria Capua Vetere è un comune di rilevanza storica, sede dell'antica Capua romana, con un centro storico ricco di reperti e vincoli archeologici. Il tessuto edilizio mescola edifici storici nel centro con palazzine degli anni '60-'80 nelle zone residenziali.",
    tipoEdilizio: "Centro storico con edifici d'epoca e zone di interesse archeologico; palazzine anni '60-'80; villette nelle zone periferiche",
    criticalita: [
      "Vincoli archeologici: scavi nel sottosuolo possono portare a scoperte che bloccano i lavori — fondamentale verificare la mappa dei vincoli prima di interventi strutturali",
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Umidità di risalita nelle abitazioni storiche, accentuata dalla presenza di falde acquifere superficiali",
      "Impianti idrici datati nelle costruzioni più vecchie",
    ],
    caratteristicheBagni: "Bagni di dimensioni variabili: compatti negli appartamenti storici del centro (sotto i 5 mq), standard nelle costruzioni successive. Impianti spesso originali.",
    caratteristicheCucine: "Cucine separate nelle palazzine; di dimensioni variabili nel centro storico. Canna fumaria da verificare prima di interventi.",
    faq: [
      {
        domanda: "Ho un appartamento nel centro storico di Santa Maria Capua Vetere. Ci sono vincoli per ristrutturare?",
        risposta: "A Santa Maria Capua Vetere i vincoli principali sono di natura archeologica: il sottosuolo è ricco di reperti romani e qualsiasi scavo o intervento che interessa le fondazioni può portare a scoperte che sospendono i lavori. Per interventi interni senza impatto sul sottosuolo (bagno, cucina, impianti a traccia) i vincoli sono generalmente limitati. Una verifica preventiva con il Comune è sempre consigliata.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Santa Maria Capua Vetere?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Negli appartamenti storici con impianti d'epoca, il costo tende al limite superiore.",
      },
      {
        domanda: "Ho umidità diffusa nel mio appartamento storico a Santa Maria Capua Vetere. Come si affronta?",
        risposta: "Gli edifici storici di Santa Maria Capua Vetere soffrono spesso di umidità da risalita capillare e da falde acquifere superficiali. Il trattamento corretto richiede un'analisi della causa: diversi tipi di umidità hanno soluzioni diverse. I trattamenti superficiali (pitture antimuffa, impermeabilizzanti) non risolvono il problema alla radice. Il sopralluogo include sempre la verifica delle cause.",
      },
    ],
    vicini: ["caserta", "marcianise", "curti", "capua"],
  },

  {
    slug: "casapulla",
    nome: "Casapulla",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Casapulla | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Casapulla: costi orientativi da Prezzario Campania, criticità locali e stima gratuita senza impegno.",
    descrizione: "Casapulla è un comune della provincia di Caserta con un tessuto edilizio prevalentemente residenziale, composto da palazzine degli anni '70-'80 e villette degli anni '90. Il comune è in posizione favorevole rispetto ai principali centri della provincia.",
    tipoEdilizio: "Palazzine anni '70-'80 nel centro; villette anni '90-2000 nelle zone di espansione",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nei piani terra delle palazzine più datate",
      "Abusi edilizi nelle zone di espansione",
      "Impianti idrici vetusti nelle costruzioni degli anni '70",
    ],
    caratteristicheBagni: "Bagni standard nelle palazzine (4-6 mq); più ampi nelle villette. Impianti degli anni '80-'90 spesso da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine; ampie nelle villette. Verifica impianto gas necessaria nelle costruzioni più datate.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Casapulla?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito quantifica le variabili specifiche.",
      },
      {
        domanda: "Posso fare la ristrutturazione del bagno senza preavviso al condominio a Casapulla?",
        risposta: "Puoi iniziare lavori di manutenzione ordinaria (sostituzione sanitari e rivestimenti) senza necessità di comunicazioni formali. Per lavori più invasivi con demolizioni e rumori continuativi, è buona pratica avvisare l'amministratore e i vicini con qualche giorno di anticipo. La maggior parte dei regolamenti condominiali limita i lavori rumorosi a determinati orari.",
      },
    ],
    vicini: ["caserta", "san-prisco", "recale", "capua"],
  },

  {
    slug: "recale",
    nome: "Recale",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Recale | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Recale: costi orientativi da Prezzario Campania, criticità edilizie e stima gratuita senza impegno.",
    descrizione: "Recale è un comune residenziale della provincia di Caserta, con un tessuto edilizio composto principalmente da palazzine degli anni '70-'80 e villette degli anni '90-2000. La sua posizione nelle immediate vicinanze di Caserta lo rende un polo residenziale attrattivo.",
    tipoEdilizio: "Mix di palazzine anni '70-'80 e villette anni '90-2000; alcune costruzioni recenti in zone di espansione",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nei piani terra",
      "Abusi edilizi non condonati nelle zone di espansione",
      "Impianti idrici vetusti nelle palazzine più datate",
    ],
    caratteristicheBagni: "Bagni standard nelle palazzine e nelle villette (5-7 mq). Sanitari degli anni '80-'90 da aggiornare.",
    caratteristicheCucine: "Cucine separate nelle palazzine; medie-grandi nelle villette. Canna fumaria da verificare.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Recale?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "Ho una villetta degli anni '90 a Recale. Conviene fare cappotto termico durante la ristrutturazione?",
        risposta: "Il cappotto termico è indipendente dalla ristrutturazione degli interni, ma spesso viene pianificato insieme per ottimizzare il cantiere e accedere alle detrazioni fiscali (Ecobonus). Se stai già ristrutturando gli interni, è un buon momento per valutare anche l'involucro esterno: i costi fissi del cantiere si ammortizzano meglio. Il sopralluogo include anche una valutazione dell'isolamento della facciata.",
      },
    ],
    vicini: ["caserta", "casagiove", "san-prisco", "marcianise"],
  },

  {
    slug: "san-prisco",
    nome: "San Prisco",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a San Prisco | Costi e Preventivi",
    metaDescription: "Ristrutturazione a San Prisco: costi orientativi da Prezzario Campania, criticità edilizie locali e stima gratuita.",
    descrizione: "San Prisco è un comune della provincia di Caserta con un tessuto edilizio prevalentemente residenziale. Il paese ospita la Cattedrale di San Prisco, uno dei più importanti edifici paleocristiani della Campania, e mantiene un nucleo storico interessante circondato da zone di espansione più recente.",
    tipoEdilizio: "Palazzine anni '70-'80 nel centro; villette negli anni '80-'00 nelle zone periferiche",
    criticalita: [
      "Canne fumarie in amianto nei condomini degli anni '70",
      "Umidità di risalita nei piani terra",
      "Abusi edilizi non condonati nelle zone di espansione",
      "Impianti idrici vetusti nelle palazzine più datate",
    ],
    caratteristicheBagni: "Bagni standard con sanitari anni '80-'90. Impianti da aggiornare nelle palazzine più datate.",
    caratteristicheCucine: "Cucine separate, medie dimensioni.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a San Prisco?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Il sopralluogo gratuito quantifica le variabili specifiche.",
      },
      {
        domanda: "Ho un appartamento con doppio bagno a San Prisco. Conviene rifarli entrambi?",
        risposta: "In molti casi sì: l'impresa è già mobilizzata, i costi di cantiere si distribuiscono su due interventi, e il risparmio rispetto a due cantieri separati è sensibile. Forniamo sempre preventivi separati e combinati così puoi decidere con i numeri in mano.",
      },
      {
        domanda: "Quali materiali sono più adatti per un bagno in una zona con acqua dura come quella di Caserta?",
        risposta: "L'acqua della zona di Caserta è tendenzialmente calcarea. Per la rubinetteria, consigliamo modelli con rompigetto anticalcare intercambiabile. Per i rivestimenti, i gres porcellanati levigati mostrano il calcare più degli opachi: tenere presente la manutenzione. Per la doccia, i box con profili minimi (zero profili) sono più facili da pulire. Lo discutiamo in dettaglio durante la scelta dei materiali al sopralluogo.",
      },
    ],
    vicini: ["caserta", "recale", "casapulla", "casagiove"],
  },

  {
    slug: "capua",
    nome: "Capua",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Capua | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Capua: costi orientativi per appartamenti nel centro storico e villette. Stima gratuita e sopralluogo.",
    descrizione: "Capua è un comune con un centro storico di origine medievale ben conservato, circondato dalle anse del Volturno. Il tessuto edilizio del centro è prevalentemente storico, mentre le zone periferiche ospitano palazzine degli anni '70-'80 e villette più recenti.",
    tipoEdilizio: "Centro storico medievale (sec. X-XVIII) con palazzi d'epoca; palazzine anni '70-'80 nelle zone residenziali; villette nelle periferie",
    criticalita: [
      "Centro storico: vincoli della Soprintendenza per interventi sulle facciate e sugli elementi storici; gli interni sono generalmente liberi da vincoli",
      "Umidità di risalita molto diffusa negli edifici storici del centro, spesso accentuata dalla vicinanza al Volturno",
      "Canne fumarie in amianto nei condomini degli anni '60-'70",
      "Impianti idrici e fognari datati nelle abitazioni del centro storico",
    ],
    caratteristicheBagni: "Bagni spesso aggiunti in un secondo momento negli edifici storici, con dimensioni e posizioni non ottimali. Nelle palazzine periferiche, bagni standard anni '80.",
    caratteristicheCucine: "Nelle abitazioni storiche del centro, cucine spesso ricavate in ambienti non originariamente destinati a tale uso. Nelle palazzine, cucine standard separate.",
    faq: [
      {
        domanda: "Ho un appartamento nel centro storico di Capua. Posso ristrutturare liberamente gli interni?",
        risposta: "In linea generale, gli interventi interni (bagno, cucina, rivestimenti) non soggetti a modifiche strutturali sono liberi da vincoli della Soprintendenza, che interviene principalmente sulle facciate e sugli elementi storico-architettonici. Una CILA è di solito sufficiente per lavori di manutenzione straordinaria interna. È sempre consigliabile una verifica preventiva con il Comune prima di iniziare.",
      },
      {
        domanda: "Ho umidità diffusa in un appartamento storico a Capua vicino al Volturno. Come la gestisco?",
        risposta: "L'umidità negli edifici storici vicino al Volturno può avere più cause: risalita capillare dai muri, infiltrazioni da falde acquifere superficiali, condensa da scarsa ventilazione. Trattarla con interventi superficiali non risolve il problema alla radice. Il sopralluogo permette di identificare la causa e progettare l'intervento corretto.",
      },
      {
        domanda: "Quanto costa ristrutturare un bagno a Capua?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 5-6 mq vanno da circa 5.000 € (base) a 9.500 € (premium). Negli edifici storici con impianti d'epoca, il costo tende al limite superiore. Il sopralluogo gratuito chiarisce la situazione specifica.",
      },
      {
        domanda: "La mia cucina nel centro storico di Capua non ha una canna fumaria. Come installo la cappa?",
        risposta: "In assenza di canna fumaria, le soluzioni sono: cappa a ricircolo (filtra l'aria senza canalizzarla all'esterno, meno efficace ma non richiede tracce), cappa canalizzata verso l'esterno attraverso il muro perimetrale (richiede foratura della facciata e in centro storico va verificata con il Comune), oppure creazione di una nuova canna fumaria interna. Il sopralluogo valuta la soluzione più adatta al tuo spazio.",
      },
    ],
    vicini: ["santa-maria-capua-vetere", "caserta", "marcianise"],
  },

  {
    slug: "casagiove",
    nome: "Casagiove",
    provincia: "caserta",
    zona: "caserta",
    metaTitle: "Ristrutturazione Casa a Casagiove | Costi e Preventivi",
    metaDescription: "Ristrutturazione a Casagiove: costi orientativi da Prezzario Campania, criticità locali e stima gratuita.",
    descrizione: "Casagiove è un comune residenziale adiacente a Caserta, con un tenore abitativo mediamente più elevato rispetto agli altri comuni della zona. Il tessuto edilizio comprende villette e palazzine di qualità costruttiva superiore alla media, edificate tra gli anni '80 e i primi anni 2000.",
    tipoEdilizio: "Villette unifamiliari e palazzine di qualità medio-alta anni '80-2000; alcuni condomini degli anni '70 nel centro",
    criticalita: [
      "Umidità di risalita nelle abitazioni di piano terra, anche in costruzioni di qualità",
      "Impianti idrici in acciaio zincato nelle palazzine degli anni '70-'80",
      "Abusi edilizi nelle zone di espansione privata degli anni '90",
      "Coperture piane delle villette anni '80: guaine esaurite da sostituire",
    ],
    caratteristicheBagni: "Bagni di dimensioni standard o superiori nelle villette, spesso con doppio bagno. Sanitari degli anni '80-'90 ancora in uso ma da aggiornare esteticamente e impiantisticamente.",
    caratteristicheCucine: "Cucine ampie nelle villette, spesso già oggetto di un primo rifacimento parziale. Frequente richiesta di apertura verso il soggiorno.",
    faq: [
      {
        domanda: "Quanto costa ristrutturare un bagno a Casagiove?",
        risposta: "Le stime orientative basate sul Prezzario Regionale Campania per un bagno 6-8 mq (tipico delle villette di Casagiove) vanno da circa 5.500 € (base) a 11.000 € (premium). Il costo preciso dipende dall'entità dell'intervento e dallo stato degli impianti, che emergono al sopralluogo.",
      },
      {
        domanda: "Ho una villetta degli anni '90 a Casagiove con doppio bagno. Conviene rifare entrambi insieme?",
        risposta: "In molti casi sì: l'impresa è già mobilizzata, i ponteggi interni sono installati, la logistica è organizzata. Il costo marginale del secondo bagno in contemporanea è significativamente inferiore rispetto a due interventi separati. Durante il sopralluogo valutiamo lo stato di entrambi e forniamo un preventivo separato per ognuno e uno combinato, così si può decidere con i numeri in mano.",
      },
      {
        domanda: "Voglio aprire cucina e soggiorno nella mia villetta a Casagiove. È possibile?",
        risposta: "Dipende dalla natura del muro divisorio. Se è portante, l'apertura richiede il progetto di un ingegnere strutturale e il permesso di costruire. Se è una tramezza, basta una CILA. Il nostro sopralluogo include la verifica della struttura e ti fornisce un quadro chiaro di costi e pratiche necessarie prima di qualsiasi preventivo.",
      },
      {
        domanda: "Ho la guaina del tetto piatto esaurita a Casagiove. Conviene rifare anche l'isolamento termico?",
        risposta: "Se il tetto è già da aprire per la guaina, aggiungere lo strato isolante ha un costo marginale basso rispetto al costo totale dell'intervento. L'isolamento termico del tetto è uno degli interventi con il miglior rapporto costo/beneficio in termini energetici, e può beneficiare dell'Ecobonus. Lo valutiamo al sopralluogo insieme al rifacimento della guaina.",
      },
    ],
    vicini: ["caserta", "recale", "san-prisco"],
  },
];

// ─────────────────────────────────────────────
// EXPORT AGGREGATO
// ─────────────────────────────────────────────

export const comuni: Comune[] = [
  ...comuniAgroAversano,
  ...comuniNapoli,
  ...comuniCaserta,
];

export function getComuneBySlug(slug: string): Comune | undefined {
  return comuni.find((c) => c.slug === slug);
}

export function getComuniByZona(
  zona: "napoli" | "caserta" | "agro-aversano"
): Comune[] {
  return comuni.filter((c) => c.zona === zona);
}

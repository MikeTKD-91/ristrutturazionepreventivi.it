import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { URL } from 'node:url';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const comuni = read('data/comuni.ts');
const faqCucina = [...comuni.matchAll(/domanda:\s*["'`]Quanto costa ristrutturare la cucina a [^"'`]+["'`],\s*risposta:\s*(["'`])([^\n]*?)\1/g)].map((match) => match[2]);

test('le risposte sui costi della cucina non descrivono un bagno', () => {
  assert.equal(faqCucina.length, 25, 'Controllare se il numero di FAQ cucina è cambiato');
  for (const risposta of faqCucina) {
    assert.match(risposta, /cucina/i);
    assert.doesNotMatch(risposta, /bagno|sanitari|doccia|vasca/i);
  }
});

const serviziNonPertinenti = [
  'cappotto-termico',
  'impianti-elettrici-idraulici-termici',
  'pavimenti-rivestimenti',
  'rifacimento-tetto',
];

test('i servizi non pertinenti non mostrano FAQ comunali né emettono FAQPage', () => {
  for (const slug of serviziNonPertinenti) {
    const path = `app/comune/[slug]/${slug}/page.tsx`;
    const page = read(path);
    assert.doesNotMatch(page, /comune\.faq|buildFaqSchema|faqSchema/i, path);
  }
});

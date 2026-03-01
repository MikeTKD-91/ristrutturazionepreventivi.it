import { MetadataRoute } from 'next'
import { articoli } from '@/data/blog'
import { servizi } from '@/data/servizi'
import { comuni } from '@/data/comuni'

export const dynamic = 'force-static' // forza generazione statica (più veloce)

const baseUrl = 'https://ristrutturazionepreventivi.it'

export default function sitemap(): MetadataRoute.Sitemap {
  // Pagine statiche (aggiungine altre se ne hai)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/servizi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/zone-servite`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/bonus-ristrutturazione`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Articoli del blog (si aggiornano automaticamente!)
  const blogRoutes = articoli.map((articolo) => ({
    url: `\( {baseUrl}/blog/ \){articolo.slug}`,
    lastModified: new Date(articolo.data),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Pagine comuni (es. /comune/napoli)
  const comuniRoutes = comuni.map((comune: any) => ({
    url: `\( {baseUrl}/comune/ \){comune.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  // Pagine servizi singole (es. /servizi/ristrutturazione-appartamento-completo)
  // Se non hai la cartella app/servizi/[slug], commenta questa parte
  const serviziRoutes = servizi.map((servizio) => ({
    url: `\( {baseUrl}/servizi/ \){servizio.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes, ...comuniRoutes, ...serviziRoutes]
}
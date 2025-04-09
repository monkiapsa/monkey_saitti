import { getAllServicePages } from '@/lib/sanity'

export default async function sitemap() {
  const baseUrl = 'https://monkiapsa.fi'
  const services = await getAllServicePages()

  const serviceRoutes = services?.map((service) => ({
    url: `${baseUrl}/palvelut/${service.slug.current}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) || []

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/palvelut`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...serviceRoutes,
  ]
} 
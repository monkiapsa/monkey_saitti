import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y55ynsue',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export const getHomePage = async () => {
  const query = `*[_type == "homePage"][0]`
  return await client.fetch(query)
}

export const getServicePage = async (slug: string) => {
  const query = `*[_type == "servicePage" && slug.current == $slug][0]`
  return await client.fetch(query, { slug })
}

export const getAllServicePages = async () => {
  const query = `*[_type == "servicePage"]`
  return await client.fetch(query)
} 
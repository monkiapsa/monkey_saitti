import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y55ynsue',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-03-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return { url: () => '' }
  return builder.image(source)
}

export const getHomePage = async () => {
  try {
    const query = `*[_type == "homePage"][0]`
    const data = await client.fetch(query)
    if (!data) {
      console.warn('No homepage data found in Sanity')
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching homepage data:', error)
    return null
  }
}

export const getServicePage = async (slug: string) => {
  try {
    const query = `*[_type == "servicePage" && slug.current == $slug][0]`
    const data = await client.fetch(query, { slug })
    if (!data) {
      console.warn(`No service page found for slug: ${slug}`)
      return null
    }
    return data
  } catch (error) {
    console.error('Error fetching service page:', error)
    return null
  }
}

export const getAllServicePages = async () => {
  try {
    const query = `*[_type == "servicePage"]`
    const data = await client.fetch(query)
    if (!data) {
      console.warn('No service pages found')
      return []
    }
    return data
  } catch (error) {
    console.error('Error fetching service pages:', error)
    return []
  }
} 
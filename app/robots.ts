export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'],
    },
    sitemap: 'https://monkiapsa.fi/sitemap.xml',
  }
} 
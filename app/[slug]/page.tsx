import { getServicePage, getAllServicePages } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

// Remove dynamic rendering since we're using static export
export const dynamic = 'error'
export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const services = await getAllServicePages()
    if (!services) return []
    
    return services.map((service: any) => ({
      slug: service.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return []
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getServicePage(params.slug)

  if (!service) {
    return (
      <main>
        <section className="hero">
          <h1>Palvelua ei löytynyt</h1>
          <p>Valitettavasti etsimääsi palvelua ei löytynyt.</p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <section 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(15, 17, 22, 0.9), rgba(15, 17, 22, 0.9)), url(${
            service.heroImage ? urlFor(service.heroImage).url() : ''
          })`
        }}
      >
        <h1>{service.pageTitle}</h1>
        <p>{service.pageDescription}</p>
      </section>

      <section className="features">
        <div className="container">
          {service.features?.map((feature: any, index: number) => (
            <div key={index} className="feature-card">
              {feature.icon && (
                <img src={urlFor(feature.icon).url()} alt={feature.title} />
              )}
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="service-details">
        <div className="container">
          {service.contentBlocks?.map((block: any, index: number) => {
            if (block.type === 'feature_with_image') {
              return (
                <div key={index} className={`feature-block ${block.imagePosition}`}>
                  <div className="feature-content">
                    <h2>{block.title}</h2>
                    <p>{block.description}</p>
                    {block.bulletPoints && (
                      <ul>
                        {block.bulletPoints.map((point: string, i: number) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="feature-image">
                    <img 
                      src={block.image ? urlFor(block.image).url() : ''} 
                      alt={block.title} 
                    />
                  </div>
                </div>
              )
            }
            if (block.type === 'pricing') {
              return (
                <div key={index} className="pricing-block">
                  <h2>{block.title}</h2>
                  <div className="pricing-grid">
                    {block.packages?.map((pkg: any, i: number) => (
                      <div key={i} className="pricing-card">
                        <h3>{pkg.name}</h3>
                        <p className="price">{pkg.price}</p>
                        <ul>
                          {pkg.features?.map((feature: string, j: number) => (
                            <li key={j}>{feature}</li>
                          ))}
                        </ul>
                        <button className="primary-btn">{pkg.ctaText}</button>
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </section>

      {service.ctaSection && (
        <section className="cta-section">
          <div className="container">
            <h2>{service.ctaSection.title}</h2>
            <p>{service.ctaSection.description}</p>
            <button className="primary-btn">{service.ctaSection.buttonText}</button>
          </div>
        </section>
      )}
    </main>
  )
} 
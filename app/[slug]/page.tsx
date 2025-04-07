import { getServicePage } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const page = await getServicePage(params.slug)

  if (!page) return <div>Loading...</div>

  return (
    <main>
      <section 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(15, 17, 22, 0.9), rgba(15, 17, 22, 0.9)), url(${
            page.heroImage ? urlFor(page.heroImage).url() : ''
          })`
        }}
      >
        <h1>{page.pageTitle}</h1>
        <p>{page.pageDescription}</p>
      </section>

      <section className="features">
        <div className="container">
          {page.features?.map((feature: any, index: number) => (
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
          {page.contentBlocks?.map((block: any, index: number) => {
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

      {page.ctaSection && (
        <section className="cta-section">
          <div className="container">
            <h2>{page.ctaSection.title}</h2>
            <p>{page.ctaSection.description}</p>
            <button className="primary-btn">{page.ctaSection.buttonText}</button>
          </div>
        </section>
      )}
    </main>
  )
} 
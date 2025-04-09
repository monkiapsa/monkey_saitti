import { getHomePage } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

export const dynamic = 'force-static'

export default async function Home() {
  const homePage = await getHomePage()

  if (!homePage) {
    return (
      <main>
        <section className="hero">
          <h1>Tervetuloa</h1>
          <p>Sisältöä ladataan...</p>
        </section>
      </main>
    )
  }

  const heroImage = homePage.heroSection?.heroImage 
    ? urlFor(homePage.heroSection.heroImage).url() 
    : ''

  return (
    <main>
      <section 
        className="hero" 
        style={{
          backgroundImage: heroImage 
            ? `linear-gradient(rgba(15, 17, 22, 0.3), rgba(15, 17, 22, 0.3)), url(${heroImage})`
            : 'linear-gradient(rgba(15, 17, 22, 0.3), rgba(15, 17, 22, 0.3))'
        }}
      >
        <h1>{homePage.heroSection?.title || 'Tervetuloa'}</h1>
        <p>{homePage.heroSection?.description || ''}</p>
        {homePage.heroSection?.primaryButton && homePage.heroSection?.secondaryButton && (
          <div className="cta-buttons">
            <a href={homePage.heroSection.primaryButton.url || '#'} className="primary-btn">
              {homePage.heroSection.primaryButton.text || 'Lue lisää'}
            </a>
            <a href={homePage.heroSection.secondaryButton.url || '#'} className="secondary-btn">
              {homePage.heroSection.secondaryButton.text || 'Ota yhteyttä'}
            </a>
          </div>
        )}
      </section>

      {homePage.aboutSection && (
        <section className="about" id="meista">
          <h2>{homePage.aboutSection.title || 'Meistä'}</h2>
          <p>{homePage.aboutSection.content || ''}</p>
        </section>
      )}

      {homePage.missionSection && (
        <section className="mission" id="missiomme">
          <div className="mission-content">
            <h2>{homePage.missionSection.title || 'Missiomme'}</h2>
            <p>{homePage.missionSection.content || ''}</p>
          </div>
          {homePage.missionSection.image && (
            <div className="mission-image">
              <img 
                src={urlFor(homePage.missionSection.image).url()} 
                alt="Missio kuva" 
              />
            </div>
          )}
        </section>
      )}

      {homePage.visionSection && (
        <section className="vision" id="visiomme">
          {homePage.visionSection.image && (
            <div className="vision-image">
              <img 
                src={urlFor(homePage.visionSection.image).url()} 
                alt="Visio kuva" 
              />
            </div>
          )}
          <div className="vision-content">
            <h2>{homePage.visionSection.title || 'Visiomme'}</h2>
            <p>{homePage.visionSection.content || ''}</p>
          </div>
        </section>
      )}

      <section className="services-container" id="palvelut">
        <h2>Palvelut</h2>
        <div className="services">
          {(homePage.services || []).map((service: any, index: number) => (
            <div key={index} className="service-card">
              <h3>{service.title || ''}</h3>
              <p>{service.description || ''}</p>
              <a href={service.link || '#'} className="read-more">Lue lisää</a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-form" id="yhteystiedot">
        <h2>Ota yhteyttä</h2>
        <div className="notion-embed">
          <iframe 
            src="https://faceted-can-fb55.notion.site/ebd/18133a087e46803ba58acde504724cb3?v=embed" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            allowFullScreen 
            loading="lazy" 
            style={{ display: 'block', width: '100%', maxWidth: '100%' }}
            title="Yhteysottolomake"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </section>
    </main>
  )
} 
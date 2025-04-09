import { getAllServicePages } from '@/lib/sanity'

export const metadata = {
  title: 'Palvelut',
  description: 'Tutustu palveluihimme',
}

export const dynamic = 'force-static'

export default async function ServicesPage() {
  const services = await getAllServicePages()

  return (
    <main>
      <section className="hero">
        <h1>Palvelut</h1>
        <p>Tutustu palveluihimme</p>
      </section>

      <section className="services">
        <div className="container">
          {services?.map((service: any) => (
            <div key={service.slug.current} className="service-card">
              <h2>{service.pageTitle}</h2>
              <p>{service.pageDescription}</p>
              <a href={`/${service.slug.current}`} className="read-more">
                Lue lisää
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
} 
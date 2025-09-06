import { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Education } from '@/components/Education'
import { Languages } from '@/components/Languages'
import { Footer } from '@/components/Footer'

// This metadata is specific to the homepage and is excellent.
export const metadata: Metadata = {
  title: 'Yoannah Rajoelson - Développeuse Web et Mobile | Portfolio',
  description: 'Portfolio de Yoannah Rajoelson, développeuse web et mobile passionnée. Spécialisée en React Native, Spring Boot, Next.js. Découvrez mes projets et compétences.',
  keywords: 'développeuse web, développeuse mobile, React Native, Spring Boot, Next.js, JavaScript, Java, Python, portfolio, Madagascar',
  authors: [{ name: 'Yoannah Rajoelson' }],
  creator: 'Yoannah Rajoelson',
  publisher: 'Yoannah Rajoelson',
  robots: 'index, follow',
  openGraph: {
    title: 'Yoannah Rajoelson - Développeuse Web et Mobile',
    description: 'Portfolio de Yoannah Rajoelson, développeuse web et mobile passionnée par les technologies modernes.',
    url: 'https://yoannah-portfolio.netlify.app',
    siteName: 'Portfolio Yoannah Rajoelson',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yoannah Rajoelson - Développeuse Web et Mobile',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yoannah Rajoelson - Développeuse Web et Mobile',
    description: 'Portfolio de Yoannah Rajoelson, développeuse web et mobile passionnée par les technologies modernes.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yoannah-portfolio.netlify.app',
  },
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Languages />
        </main>
        <Footer />
      </div>
    </>
  )
}
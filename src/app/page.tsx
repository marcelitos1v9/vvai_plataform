import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Technologies from '@/components/sections/Technologies';
import Team from '@/components/sections/Team';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';
import Script from 'next/script';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'VVAI - Inovação e Tecnologia para o Futuro',
  description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras. Desenvolvemos projetos com as mais modernas tecnologias.',
  keywords: 'VVAI, tecnologia, inovação, desenvolvimento, software, equipe, inteligência artificial, machine learning, web development, mobile development',
  authors: [{ name: 'VVAI Team' }],
  openGraph: {
    title: 'VVAI - Inovação e Tecnologia para o Futuro',
    description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'VVAI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VVAI - Inovação e Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VVAI - Inovação e Tecnologia para o Futuro',
    description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'seu-codigo-de-verificacao-google',
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'VVAI',
            url: 'https://vvai.com.br',
            logo: 'https://vvai.com.br/logo.svg',
            description: 'Somos a VVAI, uma equipe apaixonada por transformar ideias em soluções tecnológicas inovadoras.',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'BR',
            },
            sameAs: [
              'https://linkedin.com/company/vvai',
              'https://github.com/vvai',
              'https://twitter.com/vvai',
            ],
          }),
        }}
      />
      <ScrollProgress />
      <main className="min-h-screen relative">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Team />
        {/* <Blog /> */}
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}

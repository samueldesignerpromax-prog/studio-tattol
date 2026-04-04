import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Ink Master Studio | Arte que fala por si só',
  description: 'Estúdio de tatuagem premium com artistas renomados, ambiente profissional e técnicas inovadoras',
  keywords: 'tatuagem, tattoo, estúdio de tatuagem, ink master, tatuagem realista, tatuagem preto e cinza',
  openGraph: {
    title: 'Ink Master Studio - Tatuagem Premium',
    description: 'Arte que fala por si só',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

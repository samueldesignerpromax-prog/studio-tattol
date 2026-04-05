'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  const [artistas] = useState([
    { id: 1, nome: "Mike Ink Rodriguez", especialidade: "Realismo 3D", experiencia: "10 anos", imagem: "/images/artista1.jpg", rating: 5 },
    { id: 2, nome: "Ana Shadow Costa", especialidade: "Preto e Cinza", experiencia: "8 anos", imagem: "/images/artista2.jpg", rating: 5 },
    { id: 3, nome: "Lucas Black Santos", especialidade: "Old School", experiencia: "12 anos", imagem: "/images/artista3.jpg", rating: 5 },
  ])

  const trabalhos = [
    { id: 1, artista: "Mike Rodriguez", estilo: "Realismo", imagem: "/images/tattoo1.jpg", likes: 234 },
    { id: 2, artista: "Ana Costa", estilo: "Preto e Cinza", imagem: "/images/tattoo2.jpg", likes: 189 },
    { id: 3, artista: "Lucas Santos", estilo: "Old School", imagem: "/images/tattoo3.jpg", likes: 456 },
    { id: 4, artista: "Mike Rodriguez", estilo: "Aquarela", imagem: "/images/tattoo4.jpg", likes: 312 },
    { id: 5, artista: "Ana Costa", estilo: "Geométrico", imagem: "/images/tattoo5.jpg", likes: 278 },
    { id: 6, artista: "Lucas Santos", estilo: "Tribal", imagem: "/images/tattoo6.jpg", likes: 345 },
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
          ></div>
        </div>
        
        <div className="container-custom relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4 px-6 py-2 glass rounded-full">
              <span className="text-gold text-sm font-semibold tracking-wider">DESDE 2015</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Ink Master
              <span className="block gradient-text text-4xl md:text-5xl mt-4 animate-glow">
                Studio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              "Arte que fala por si só"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/orcamento">
                <button className="btn-primary">💰 Solicitar Orçamento</button>
              </Link>
              <Link href="/agendamento">
                <button className="btn-secondary">📅 Agendar Consulta</button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-ink-gray">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">5000+</div>
              <div className="text-gray-400">Tatuagens Realizadas</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">8+</div>
              <div className="text-gray-400">Anos de Experiência</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">6</div>
              <div className="text-gray-400">Artistas Especializados</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-gray-400">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Artistas Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Nossos Artistas</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Mestres da <span className="gradient-text">Tinta</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artistas.map((artista, index) => (
              <motion.div
                key={artista.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card group"
              >
                <div className="relative h-80 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${artista.imagem})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">
                    {artista.nome}
                  </h3>
                  <p className="text-gold mb-2">{artista.especialidade}</p>
                  <p className="text-gray-400 text-sm mb-3">{artista.experiencia}</p>
                  <div className="flex justify-center text-gold mb-4">
                    {'★'.repeat(artista.rating)}
                  </div>
                  <Link href={`/artistas/${artista.id}`}>
                    <button className="border border-gold text-gold px-6 py-2 rounded-md transition-all duration-300 hover:bg-gold hover:text-ink">Ver Portfólio →</button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-ink-gray">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase">Trabalhos Recentes</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Nossa <span className="gradient-text">Galeria</span>
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabalhos.map((trabalho, index) => (
              <motion.div
                key={trabalho.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 rounded-xl overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${trabalho.imagem})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-6">
                    <div>
                      <p className="text-gold font-semibold">{trabalho.artista}</p>
                      <p className="text-white text-sm">{trabalho.estilo}</p>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <span>❤️</span>
                      <span>{trabalho.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/galeria">
              <button className="btn-secondary">Ver Galeria Completa →</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para sua <span className="gradient-text">próxima tattoo</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Agende uma consulta gratuita com nossos artistas e transforme sua ideia em arte
          </p>
          <Link href="/orcamento">
            <button className="btn-primary text-lg">Solicitar Orçamento Gratuito</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

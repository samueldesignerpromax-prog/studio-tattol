'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const artistas = [
  {
    id: 1,
    nome: "Mike 'Ink' Rodriguez",
    especialidade: "Realismo 3D",
    experiencia: "10 anos",
    bio: "Especialista em retratos realistas e tatuagens em 3D. Premiado internacionalmente.",
    imagem: "/images/artista1.jpg",
    rating: 5,
    trabalhos: 847,
    instagram: "@mikeink",
    estilo: ["Realismo", "3D", "Retratos"]
  },
  {
    id: 2,
    nome: "Ana 'Shadow' Costa",
    especialidade: "Preto e Cinza",
    experiencia: "8 anos",
    bio: "Mestra do sombreamento e técnicas em preto e cinza. Referência em tatuagens fine line.",
    imagem: "/images/artista2.jpg",
    rating: 5,
    trabalhos: 623,
    instagram: "@anashadow",
    estilo: ["Preto e Cinza", "Fine Line", "Minimalista"]
  },
  {
    id: 3,
    nome: "Lucas 'Black' Santos",
    especialidade: "Old School",
    experiencia: "12 anos",
    bio: "Especialista em old school e neo tradicional. Cores vibrantes e traços marcantes.",
    imagem: "/images/artista3.jpg",
    rating: 5,
    trabalhos: 1245,
    instagram: "@lucasblack",
    estilo: ["Old School", "Neo Tradicional", "Colorido"]
  },
  {
    id: 4,
    nome: "Carlos 'Fine' Lima",
    especialidade: "Fine Line",
    experiencia: "6 anos",
    bio: "Especialista em tatuagens delicadas e minimalistas. Traços precisos e detalhados.",
    imagem: "/images/artista4.jpg",
    rating: 5,
    trabalhos: 456,
    instagram: "@carlosfine",
    estilo: ["Fine Line", "Geométrico", "Minimalista"]
  },
  {
    id: 5,
    nome: "Patricia 'Water' Souza",
    especialidade: "Aquarela",
    experiencia: "7 anos",
    bio: "Mestra da técnica aquarela, criando efeitos únicos e fluidos na pele.",
    imagem: "/images/artista5.jpg",
    rating: 5,
    trabalhos: 534,
    instagram: "@patriciasouza",
    estilo: ["Aquarela", "Floral", "Abstrato"]
  },
  {
    id: 6,
    nome: "Roberto 'Cover' Mendez",
    especialidade: "Cobertura",
    experiencia: "15 anos",
    bio: "Especialista em coberturas e reformas de tatuagens antigas.",
    imagem: "/images/artista6.jpg",
    rating: 5,
    trabalhos: 1890,
    instagram: "@robertocover",
    estilo: ["Cobertura", "Blackwork", "Tribal"]
  }
]

export default function Artistas() {
  const [selectedStyle, setSelectedStyle] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')

  const estilos = ['todos', 'Realismo', 'Preto e Cinza', 'Old School', 'Fine Line', 'Aquarela', 'Cobertura']

  const filteredArtistas = artistas.filter(artista => {
    const matchesSearch = artista.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artista.especialidade.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStyle = selectedStyle === 'todos' || artista.estilo.includes(selectedStyle)
    return matchesSearch && matchesStyle
  })

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/artistas-hero.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Nossos <span className="gradient-text">Artistas</span>
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up">
            Conheça os mestres que transformam pele em arte
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <input
              type="text"
              placeholder="🔍 Buscar artista..."
              className="input-field max-w-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-3 flex-wrap justify-center">
              {estilos.map(estilo => (
                <button
                  key={estilo}
                  onClick={() => setSelectedStyle(estilo)}
                  className={`px-4 py-2 rounded-md transition-all duration-300 text-sm ${
                    selectedStyle === estilo
                      ? 'bg-gold text-ink font-semibold'
                      : 'bg-ink-gray text-gray-300 hover:bg-gold/20'
                  }`}
                >
                  {estilo === 'todos' ? 'Todos os Estilos' : estilo}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtistas.map((artista, index) => (
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold group-hover:text-gold transition-colors">
                    {artista.nome}
                  </h3>
                  <div className="flex text-gold">
                    {'★'.repeat(artista.rating)}
                  </div>
                </div>
                <p className="text-gold mb-2">{artista.especialidade}</p>
                <p className="text-gray-400 text-sm mb-3">{artista.experiencia}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">{artista.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artista.estilo.map(est => (
                    <span key={est} className="text-xs bg-ink-light px-2 py-1 rounded-md text-gold">
                      {est}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-400">
                    🎨 {artista.trabalhos} trabalhos
                  </div>
                  <Link href={`/artistas/${artista.id}`}>
                    <button className="text-gold hover:text-white transition-colors">
                      Ver Portfólio →
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArtistas.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum artista encontrado</p>
          </div>
        )}
      </div>
    </div>
  )
}

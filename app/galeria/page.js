'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galeria = [
  { id: 1, titulo: "Leão Realista", artista: "Mike Rodriguez", estilo: "Realismo", imagem: "/images/tattoo1.jpg", likes: 234, data: "2024-01-15" },
  { id: 2, titulo: "Flor em Aquarela", artista: "Ana Costa", estilo: "Aquarela", imagem: "/images/tattoo2.jpg", likes: 189, data: "2024-01-20" },
  { id: 3, titulo: "Old School Coração", artista: "Lucas Santos", estilo: "Old School", imagem: "/images/tattoo3.jpg", likes: 456, data: "2024-01-25" },
  { id: 4, titulo: "Geometria Sagrada", artista: "Carlos Lima", estilo: "Geométrico", imagem: "/images/tattoo4.jpg", likes: 312, data: "2024-02-01" },
  { id: 5, titulo: "Retrato 3D", artista: "Mike Rodriguez", estilo: "Realismo", imagem: "/images/tattoo5.jpg", likes: 278, data: "2024-02-05" },
  { id: 6, titulo: "Mandalas", artista: "Patricia Souza", estilo: "Fine Line", imagem: "/images/tattoo6.jpg", likes: 345, data: "2024-02-10" },
  { id: 7, titulo: "Braço Fechado", artista: "Roberto Mendez", estilo: "Blackwork", imagem: "/images/tattoo7.jpg", likes: 567, data: "2024-02-15" },
  { id: 8, titulo: "Cobertura Floral", artista: "Roberto Mendez", estilo: "Cobertura", imagem: "/images/tattoo8.jpg", likes: 432, data: "2024-02-20" },
  { id: 9, titulo: "Fine Line Minimalista", artista: "Carlos Lima", estilo: "Fine Line", imagem: "/images/tattoo9.jpg", likes: 298, data: "2024-02-25" },
]

const estilos = ['todos', 'Realismo', 'Aquarela', 'Old School', 'Geométrico', 'Fine Line', 'Blackwork', 'Cobertura']
const artistasNomes = ['todos', ...new Set(galeria.map(t => t.artista))]

export default function Galeria() {
  const [selectedStyle, setSelectedStyle] = useState('todos')
  const [selectedArtist, setSelectedArtist] = useState('todos')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredGallery = galeria.filter(item => {
    const matchStyle = selectedStyle === 'todos' || item.estilo === selectedStyle
    const matchArtist = selectedArtist === 'todos' || item.artista === selectedArtist
    return matchStyle && matchArtist
  })

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/galeria-hero.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Nossa <span className="gradient-text">Galeria</span>
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up">
            Conheça nossos trabalhos e inspire-se
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 justify-between">
            <div className="flex gap-3 flex-wrap">
              <select 
                className="input-field w-auto"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
              >
                {estilos.map(estilo => (
                  <option key={estilo} value={estilo}>
                    {estilo === 'todos' ? 'Todos os Estilos' : estilo}
                  </option>
                ))}
              </select>
              <select 
                className="input-field w-auto"
                value={selectedArtist}
                onChange={(e) => setSelectedArtist(e.target.value)}
              >
                {artistasNomes.map(artista => (
                  <option key={artista} value={artista}>
                    {artista === 'todos' ? 'Todos os Artistas' : artista}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-gray-400">
              Mostrando {filteredGallery.length} trabalhos
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative h-80 rounded-xl overflow-hidden">
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.imagem})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{item.titulo}</h3>
                  <p className="text-gold text-sm">{item.artista}</p>
                  <div className="flex gap-4 mt-2 text-sm text-gray-300">
                    <span>🎨 {item.estilo}</span>
                    <span>❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum trabalho encontrado</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-ink-gray rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedImage.imagem})` }}
                ></div>
                <button
                  className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.titulo}</h3>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gold">Artista: {selectedImage.artista}</p>
                    <p className="text-gray-400">Estilo: {selectedImage.estilo}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold">❤️ {selectedImage.likes} curtidas</p>
                    <p className="text-gray-400 text-sm">{new Date(selectedImage.data).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
                <button className="btn-primary w-full" onClick={() => window.location.href = '/orcamento'}>
                  Quero uma tattoo assim →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

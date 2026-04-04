'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const estilos = [
  "Realismo", "Preto e Cinza", "Old School", "New School", 
  "Aquarela", "Geométrico", "Tribal", "Biomecânico", 
  "Lettering", "Oriental", "Trash Polka", "Blackwork"
]

const tamanhos = ["Pequeno (até 10cm)", "Médio (10-20cm)", "Grande (20-30cm)", "Muito Grande (30cm+)"]
const artistas = ["Mike Rodriguez", "Ana Costa", "Lucas Santos", "Carlos Lima", "Patricia Souza", "Roberto Mendez"]

export default function Orcamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    estilo: '',
    tamanho: '',
    artista: '',
    descricao: '',
    local: '',
    dataDesejada: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.email || !formData.estilo || !formData.tamanho || !formData.descricao) {
      setMessage('Por favor, preencha todos os campos obrigatórios')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setLoading(true)
    
    // Simular envio para API
    setTimeout(() => {
      const orcamento = {
        id: Date.now(),
        ...formData,
        status: 'pendente',
        dataCriacao: new Date().toISOString()
      }
      
      const orcamentos = JSON.parse(localStorage.getItem('orcamentos') || '[]')
      orcamentos.push(orcamento)
      localStorage.setItem('orcamentos', JSON.stringify(orcamentos))
      
      setMessage('✅ Orçamento solicitado com sucesso! Entraremos em contato em até 24h.')
      setFormData({
        nome: '', email: '', telefone: '', estilo: '', tamanho: '', artista: '', descricao: '', local: '', dataDesejada: ''
      })
      setLoading(false)
      
      setTimeout(() => setMessage(''), 5000)
    }, 1500)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/orcamento-hero.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up">
            Conte sua ideia e receba um orçamento personalizado
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-600/20 border border-green-600 rounded-md text-center text-green-400"
            >
              {message}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="bg-ink-gray rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="label-field">Nome Completo *</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  placeholder="Seu nome completo"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label-field">Email *</label>
                <input
                  type="email"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="label-field">Telefone/WhatsApp</label>
                <input
                  type="tel"
                  className="input-field"
                  value={formData.telefone}
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="form-group">
                <label className="label-field">Estilo Desejado *</label>
                <select
                  className="input-field"
                  value={formData.estilo}
                  onChange={(e) => setFormData({...formData, estilo: e.target.value})}
                  required
                >
                  <option value="">Selecione um estilo</option>
                  {estilos.map(estilo => (
                    <option key={estilo} value={estilo}>{estilo}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="label-field">Tamanho *</label>
                <select
                  className="input-field"
                  value={formData.tamanho}
                  onChange={(e) => setFormData({...formData, tamanho: e.target.value})}
                  required
                >
                  <option value="">Selecione o tamanho</option>
                  {tamanhos.map(tamanho => (
                    <option key={tamanho} value={tamanho}>{tamanho}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="label-field">Artista Preferido</label>
                <select
                  className="input-field"
                  value={formData.artista}
                  onChange={(e) => setFormData({...formData, artista: e.target.value})}
                >
                  <option value="">Qualquer artista</option>
                  {artistas.map(artista => (
                    <option key={artista} value={artista}>{artista}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="label-field">Local do Corpo</label>
                <input
                  type="text"
                  className="input-field"
                  value={formData.local}
                  onChange={(e) => setFormData({...formData, local: e.target.value})}
                  placeholder="Ex: Braço direito, Costas, Perna..."
                />
              </div>

              <div className="form-group">
                <label className="label-field">Data Desejada</label>
                <input
                  type="date"
                  className="input-field"
                  value={formData.dataDesejada}
                  onChange={(e) => setFormData({...formData, dataDesejada: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group md:col-span-2">
                <label className="label-field">Descreva sua Ideia *</label>
                <textarea
                  className="input-field resize-none"
                  rows="5"
                  value={formData.descricao}
                  onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                  placeholder="Conte-nos sobre sua ideia, referências, cores, elementos que deseja incluir..."
                  required
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="btn-primary w-full text-lg"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-ink"></div>
                    <span>Enviando...</span>
                  </div>
                ) : (
                  '💰 Solicitar Orçamento'
                )}
              </button>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
              * Campos obrigatórios. Entraremos em contato em até 24h.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

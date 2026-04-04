'use client'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const artistas = [
  { id: 1, nome: "Mike Rodriguez", especialidade: "Realismo" },
  { id: 2, nome: "Ana Costa", especialidade: "Preto e Cinza" },
  { id: 3, nome: "Lucas Santos", especialidade: "Old School" },
  { id: 4, nome: "Carlos Lima", especialidade: "Fine Line" },
  { id: 5, nome: "Patricia Souza", especialidade: "Aquarela" },
]

const horarios = [
  '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
]

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    artista: '',
    tipoConsulta: 'presencial',
    data: new Date(),
    horario: '',
    observacoes: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.nome || !formData.email || !formData.artista || !formData.horario) {
      setMessage('Por favor, preencha todos os campos obrigatórios')
      setTimeout(() => setMessage(''), 3000)
      return
    }

    setLoading(true)
    
    setTimeout(() => {
      const consulta = {
        id: Date.now(),
        ...formData,
        data: formData.data.toISOString(),
        status: 'agendado',
        dataCriacao: new Date().toISOString()
      }
      
      const consultas = JSON.parse(localStorage.getItem('consultas') || '[]')
      consultas.push(consulta)
      localStorage.setItem('consultas', JSON.stringify(consultas))
      
      setMessage('✅ Consulta agendada com sucesso! Entraremos em contato para confirmar.')
      setFormData({
        nome: '', email: '', telefone: '', artista: '', tipoConsulta: 'presencial',
        data: new Date(), horario: '', observacoes: ''
      })
      setLoading(false)
      
      setTimeout(() => setMessage(''), 5000)
    }, 1500)
  }

  return (
    <div className="animate-fade-in">
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ink to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/agendamento-hero.jpg')" }}
        ></div>
        <div className="container-custom relative z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            Agende sua <span className="gradient-text">Consulta</span>
          </h1>
          <p className="text-xl text-gray-300 animate-slide-up">
            Agende uma conversa gratuita com nossos artistas
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {message && (
            <div className={`mb-6 p-4 rounded-md text-center ${
              message.includes('✅') 
                ? 'bg-green-600/20 border border-green-600 text-green-400' 
                : 'bg-red-600/20 border border-red-600 text-red-400'
            }`}>
              {message}
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="bg-ink-gray rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label className="label-field">Nome Completo *</label>
                    <input
                      type="text"
                      className="input-field"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      placeholder="Seu nome"
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
                    <label className="label-field">Artista *</label>
                    <select
                      className="input-field"
                      value={formData.artista}
                      onChange={(e) => setFormData({...formData, artista: e.target.value})}
                      required
                    >
                      <option value="">Selecione um artista</option>
                      {artistas.map(artista => (
                        <option key={artista.id} value={artista.nome}>
                          {artista.nome} - {artista.especialidade}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="label-field">Tipo de Consulta</label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="presencial"
                          checked={formData.tipoConsulta === 'presencial'}
                          onChange={(e) => setFormData({...formData, tipoConsulta: e.target.value})}
                        />
                        <span>Presencial</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          value="online"
                          checked={formData.tipoConsulta === 'online'}
                          onChange={(e) => setFormData({...formData, tipoConsulta: e.target.value})}
                        />
                        <span>Online (Videochamada)</span>
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="label-field">Data *</label>
                    <DatePicker
                      selected={formData.data}
                      onChange={(date) => setFormData({...formData, data: date})}
                      minDate={new Date()}
                      className="input-field"
                      dateFormat="dd/MM/yyyy"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="label-field">Horário *</label>
                    <select
                      className="input-field"
                      value={formData.horario}
                      onChange={(e) => setFormData({...formData, horario: e.target.value})}
                      required
                    >
                      <option value="">Selecione um horário</option>
                      {horarios.map(horario => (
                        <option key={horario} value={horario}>{horario}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group md:col-span-2">
                    <label className="label-field">Observações</label>
                    <textarea
                      className="input-field resize-none"
                      rows="3"
                      value={formData.observacoes}
                      onChange={(e) => setFormData({...formData, observacoes: e.target.value})}
                      placeholder="Alguma informação adicional?"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full mt-6"
                  disabled={loading}
                >
                  {loading ? 'Agendando...' : '📅 Confirmar Agendamento'}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-ink-gray rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gold">📋 Informações</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>✓ Consulta gratuita</li>
                  <li>✓ Duração: 30-40 minutos</li>
                  <li>✓ Traga referências da sua ideia</li>
                  <li>✓ Sem compromisso</li>
                </ul>
              </div>

              <div className="bg-ink-gray rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-gold">💡 Dicas</h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Pesquise referências de tattoos</li>
                  <li>• Defina um orçamento aproximado</li>
                  <li>• Pense no local do corpo</li>
                  <li>• Anote suas dúvidas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

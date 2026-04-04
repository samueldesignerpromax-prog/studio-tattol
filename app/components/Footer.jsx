import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ink-gray border-t border-gold/20 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-cinzel font-bold mb-4">
              <span className="gradient-text">Ink Master</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Estúdio de tatuagem premium com artistas renomados e ambiente profissional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">📷 Instagram</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">💬 WhatsApp</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Terça - Sábado:</span>
                <span>11h - 20h</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo - Segunda:</span>
                <span>Fechado</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>contato@inkmaster.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>R. Augusta, 1000 - SP</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold">Newsletter</h4>
            <p className="text-gray-400 mb-3 text-sm">
              Receba novidades e promoções
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email"
                className="flex-1 px-3 py-2 bg-ink border border-gray-700 rounded-l-md text-sm focus:outline-none focus:border-gold"
              />
              <button className="bg-gold text-ink px-4 py-2 rounded-r-md font-semibold text-sm hover:bg-gold-dark transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ink Master Tattoo Studio. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            "Arte que fala por si só"
          </p>
        </div>
      </div>
    </footer>
  )
}

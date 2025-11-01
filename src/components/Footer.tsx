import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">
              Guerreiros da Cultura Negra
            </h3>
            <p className="text-gray-300 text-sm">
              Associação de Capoeira dedicada ao ensino e preservação da cultura
              afro-brasileira, formando cidadãos através da arte, esporte e
              educação.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Contato</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 flex-shrink-0 mt-1" />
                <p>
                  Rua A, nº 22 - Agripino Monteiro
                  <br />
                  Ibicaraí - BA, CEP: 45745-000
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <p>(73) 98157-5567 - Evaldo Xavier</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300 flex-shrink-0" />
                <p>(73) 98165-1657 - Rodrigo S. Silva</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300 flex-shrink-0" />
                <p>guerreirosdaculturanegra@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-300">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#projeto" className="hover:text-blue-300 transition-colors">
                  O Projeto
                </a>
              </li>
              <li>
                <a href="#objetivos" className="hover:text-blue-300 transition-colors">
                  Objetivos
                </a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-blue-300 transition-colors">
                  Conteúdo Programático
                </a>
              </li>
              <li>
                <a href="#cronograma" className="hover:text-blue-300 transition-colors">
                  Cronograma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Associação de Capoeira Guerreiros da Cultura Negra. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

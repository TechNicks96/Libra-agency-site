import { useState } from 'react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function CastingForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: '',
    contact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', age: '', city: '', contact: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="casting" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9D00FF] rounded-full blur-[150px] opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 uppercase tracking-tight">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent">
              Inscreva-se no Casting
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-6" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Preencha o formulário e nós entraremos em contato para contar todos os detalhes
          </p>
          
          {/* WhatsApp alternative */}
          <div className="mt-6">
            <p className="text-gray-500 text-sm mb-3">Ou fale conosco diretamente:</p>
            <a
              href="https://wa.me/5548920037886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: +55 48 92 003 7886</span>
            </a>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#D4AF37]/30 rounded-3xl p-8 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl" />
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-semibold">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome"
                    className="bg-black/40 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] transition-colors h-12"
                  />
                </div>

                <div>
                  <label htmlFor="age" className="block text-white mb-2 font-semibold">
                    Idade *
                  </label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    required
                    min="18"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Sua idade (18+)"
                    className="bg-black/40 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] transition-colors h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-white mb-2 font-semibold">
                    Cidade *
                  </label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Sua cidade"
                    className="bg-black/40 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] transition-colors h-12"
                  />
                </div>

                <div>
                  <label htmlFor="contact" className="block text-white mb-2 font-semibold">
                    Contato *
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="WhatsApp / Telegram / Instagram"
                    className="bg-black/40 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] transition-colors h-12"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-semibold">
                  Mensagem (Opcional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos um pouco sobre você e suas expectativas..."
                  className="bg-black/40 border-[#D4AF37]/30 text-white placeholder:text-gray-600 focus:border-[#D4AF37] transition-colors min-h-[120px] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]"
              >
                <span className="relative z-10 uppercase tracking-wide">Enviar Inscrição</span>
                <Send className="relative z-10 w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#D4AF37] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>

              <p className="text-center text-gray-500 text-sm">
                Entraremos em contato em até 24 horas • Todas as informações são confidenciais
              </p>
            </form>
          ) : (
            <div className="relative z-10 text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D4AF37]/20 border-2 border-[#D4AF37] rounded-full mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Inscrição Enviada!</h3>
              <p className="text-gray-400 text-lg mb-2">
                Obrigado pelo seu interesse, <span className="text-[#D4AF37]">{formData.name}</span>!
              </p>
              <p className="text-gray-500">
                Nossa equipe entrará em contato em breve para agendar uma conversa.
              </p>
            </div>
          )}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
            <span>100% Confidencial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
            <span>Resposta em 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
            <span>Sem Compromisso</span>
          </div>
        </div>
      </div>
    </section>
  );
}
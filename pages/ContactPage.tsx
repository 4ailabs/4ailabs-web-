import React, { useState } from 'react';
import { Mail, MapPin, Send, Loader2, FileText, MessageCircle } from 'lucide-react';
import { proposalGeneratorService, ProposalData } from '../services/proposalGeneratorService';
import ProposalGenerator from '../components/ProposalGenerator';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consulta empresarial',
    message: ''
  });
  const [proposal, setProposal] = useState<ProposalData | null>(null);
  const [isGeneratingProposal, setIsGeneratingProposal] = useState(false);
  const [showProposal, setShowProposal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateProposal = async () => {
    if (!formData.name || !formData.email || !formData.service) {
      alert('Por favor completa al menos el nombre, email y tipo de servicio para generar una propuesta');
      return;
    }

    setIsGeneratingProposal(true);
    try {
      const generatedProposal = await proposalGeneratorService.generateProposal(formData);
      setProposal(generatedProposal);
      setShowProposal(true);
    } catch (error) {
      console.error('Error generating proposal:', error);
      alert('Error al generar la propuesta. Por favor intenta de nuevo.');
    } finally {
      setIsGeneratingProposal(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
        // Simulate API call
        if (formData.email.includes('error')) {
            setFormState('error');
        } else {
            setFormState('success');
            setFormData({ name: '', email: '', service: 'Consulta empresarial', message: '' });
        }
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 transition-colors duration-300">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-slate-100/30 to-blue-50/50 dark:from-zinc-900 dark:to-zinc-950 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              <span className="text-xs text-slate-500 ml-1 sm:ml-2">3/3</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium animate-pulse">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="hidden sm:inline">🔥 PASO FINAL - Consultas gratuitas disponibles</span>
              <span className="sm:hidden">🔥 PASO FINAL</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white fade-in">
            Agenda tu Consulta GRATUITA de 15 minutos
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            Recibe un <strong>análisis personalizado y roadmap de implementación</strong> para automatizar tu negocio con IA. 
            <span className="text-slate-600 dark:text-slate-400 font-semibold"> Agencia especializada - Atención personalizada garantizada.</span>
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-700">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">15 min</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Duración</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-700">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">100% Gratis</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Sin compromisos</div>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-zinc-700">
              <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">Roadmap</div>
              <div className="text-sm text-zinc-600 dark:text-slate-400">Incluido</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in">
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/10 dark:to-slate-800/10 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/30 mb-8">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">¡Agenda tu consulta AHORA!</h2>
                <p className="text-zinc-600 dark:text-slate-300">Completa el formulario y te contactaremos en menos de 24 horas para agendar tu llamada gratuita.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-slate-300">Nombre Completo</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm py-3 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-slate-500 dark:focus:ring-cyan-500 focus:border-slate-500 dark:focus:border-cyan-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-slate-300">Correo Electrónico</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm py-3 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-slate-500 dark:focus:ring-cyan-500 focus:border-slate-500 dark:focus:border-cyan-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-700 dark:text-slate-300">Tipo de Consulta</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm py-3 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-slate-500 dark:focus:ring-cyan-500 focus:border-slate-500 dark:focus:border-cyan-500">
                    <option>Consulta GRATUITA de 15 min</option>
                    <option>Desarrollo de Agentes de IA</option>
                    <option>IA Médica y Healthcare</option>
                    <option>Context Engineering</option>
                    <option>Solicitud de cotización</option>
                    <option>Información de cursos</option>
                    <option>Contacto general</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-slate-300">Mensaje</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm py-3 px-4 text-zinc-900 dark:text-white focus:outline-none focus:ring-slate-500 dark:focus:ring-cyan-500 focus:border-slate-500 dark:focus:border-cyan-500"></textarea>
                </div>
                
                {/* Generador de Propuestas */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 rounded-xl p-4 border border-emerald-200 dark:border-emerald-700/30 mb-4">
                  <div className="relative">
                    {/* Badge móvil arriba del botón */}
                    <div className="flex justify-center mb-2 sm:hidden">
                      <div className="bg-emerald-300 text-emerald-900 text-xs font-bold px-2 py-1 rounded-full">
                        💰 VER PRECIOS
                      </div>
                    </div>
                    
                    <button
                      type="button"
                      onClick={generateProposal}
                      disabled={isGeneratingProposal}
                      className="w-full flex justify-center items-center gap-2 sm:gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 disabled:bg-zinc-400 dark:disabled:bg-zinc-600 text-white font-bold py-4 sm:py-5 px-6 rounded-2xl text-sm sm:text-base transition-all-smooth shadow-lg shadow-emerald-400/25 min-h-[56px] relative"
                    >
                      {/* Badge desktop */}
                      <div className="hidden sm:block absolute -top-2 -right-2 bg-blue-400 text-blue-900 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                        PRECIOS
                      </div>
                      
                      {isGeneratingProposal ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Generando...</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                          <span className="text-center leading-tight">
                            <span className="block text-sm sm:text-base">Generar Propuesta</span>
                            <span className="block text-xs sm:text-sm opacity-90">con Precios</span>
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-xs text-center text-zinc-500 dark:text-slate-500 mt-3 space-y-1 sm:space-y-0">
                    <div className="sm:hidden">
                      <div>• IA personalizada</div>
                      <div>• Precios y timeline</div>
                    </div>
                    <div className="hidden sm:block">
                      Propuesta personalizada con IA • Precios y timeline • Especificaciones técnicas
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900/10 dark:to-slate-800/10 rounded-xl p-4 border border-slate-200 dark:border-slate-700/30">
                  <div className="relative">
                    {/* Badge móvil arriba del botón */}
                    <div className="flex justify-center mb-3 sm:hidden">
                      <div className="bg-red-300 text-red-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                        🚨 RESERVAR AHORA
                      </div>
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={formState === 'loading'} 
                      className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 active:scale-95 disabled:bg-zinc-400 dark:disabled:bg-zinc-600 text-white font-bold py-5 sm:py-6 px-6 sm:px-8 rounded-2xl text-lg sm:text-xl transition-all-smooth shadow-xl shadow-red-400/30 pulse-cta min-h-[64px] relative"
                    >
                      {/* Badge desktop */}
                      <div className="hidden sm:block absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full border-2 border-white">
                        ¡AHORA!
                      </div>
                      
                      {formState === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin w-5 h-5" /> 
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 flex-shrink-0" />
                          <span className="text-center leading-tight">
                            <span className="block text-base sm:text-lg">Reservar Mi Consulta</span>
                            <span className="block text-sm sm:text-base opacity-90">100% GRATIS</span>
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="text-xs text-center text-zinc-500 dark:text-slate-500 mt-4 space-y-1 sm:space-y-0">
                    <div className="sm:hidden">
                      <div>✓ Respuesta en 24h</div>
                      <div>✓ Sin compromisos</div>
                      <div>✓ Roadmap incluido</div>
                    </div>
                    <div className="hidden sm:block">
                      Respuesta en 24h • Sin compromisos • Roadmap incluido
                    </div>
                  </div>
                </div>
                {formState === 'success' && <p className="text-slate-600 dark:text-slate-400 text-center">¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.</p>}
                {formState === 'error' && <p className="text-red-600 dark:text-red-400 text-center">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
              </form>
            </div>
            <div className="fade-in stagger-1">
              <div className="text-center sm:text-left mb-6">
                <div className="flex justify-center sm:justify-start mb-2 sm:hidden">
                  <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                    📞 CONTACTO DIRECTO
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Información de Contacto</h2>
              </div>
              <div className="space-y-6 text-zinc-600 dark:text-slate-300">
                <div className="flex items-start gap-4 p-4 bg-blue-50/50 dark:bg-zinc-800/50 rounded-lg border border-blue-200 dark:border-zinc-700">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Oficina Principal</h3>
                    <p>Ciudad de México</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50/50 dark:bg-zinc-800/50 rounded-lg border border-green-200 dark:border-zinc-700">
                  <MessageCircle className="w-8 h-8 text-green-600 dark:text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">WhatsApp</h3>
                    <a 
                      href="https://wa.me/525534403571?text=Hola! Me interesa conocer más sobre los servicios de IA de 4ailabs." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300"
                    >
                      +52 55 3440 3571
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-slate-400">Respuesta inmediata</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50/50 dark:bg-zinc-800/50 rounded-lg border border-purple-200 dark:border-zinc-700">
                  <Mail className="w-8 h-8 text-purple-600 dark:text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">Email</h3>
                    <p>info@4ailabs.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 h-64 bg-gradient-to-br from-slate-100 to-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden border border-slate-300 dark:border-zinc-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.1634!3d19.4194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8c8c8c8c8c8%3A0x1234567890abcdef!2sAcapulco%2036%2C%20Roma%20Nte.%2C%20Cuauht%C3%A9moc%2C%2006700%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1628000000000!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Maps Location"
                  className="grayscale invert-[90%]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generador de Propuestas Modal */}
      {showProposal && proposal && (
        <ProposalGenerator
          proposal={proposal}
          onClose={() => setShowProposal(false)}
        />
      )}
    </div>
  );
};

export default ContactPage;
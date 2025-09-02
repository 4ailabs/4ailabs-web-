import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Consulta empresarial',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    <div className="bg-zinc-950">
      <section className="py-20 sm:py-28 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white fade-in">Contacto</h1>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto fade-in stagger-1">
            ¿Tienes un proyecto en mente? Hablemos de cómo la IA puede transformar tu negocio.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nombre Completo</label>
                  <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Correo Electrónico</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300">Tipo de Consulta</label>
                  <select id="service" name="service" value={formData.service} onChange={handleChange} className="mt-1 block w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500">
                    <option>Consulta empresarial</option>
                    <option>Solicitud de cotización</option>
                    <option>Información de cursos</option>
                    <option>Propuestas académicas</option>
                    <option>Contacto general</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">Mensaje</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-zinc-900 border border-zinc-700 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={formState === 'loading'} className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:opacity-90 active:scale-95 disabled:bg-zinc-600 text-white font-bold py-3 px-6 rounded-full text-base sm:text-lg transition duration-300 shadow-lg touch-manipulation ripple btn-enhanced">
                    {formState === 'loading' ? <><Loader2 className="animate-spin" /> Procesando...</> : <>Enviar Mensaje <Send className="w-5 h-5" /></>}
                  </button>
                </div>
                {formState === 'success' && <p className="text-green-400 text-center">¡Gracias! Tu mensaje ha sido enviado. Nos pondremos en contacto pronto.</p>}
                {formState === 'error' && <p className="text-red-400 text-center">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
              </form>
            </div>
            <div className="fade-in stagger-1">
              <h2 className="text-3xl font-bold text-white mb-6">Información de Contacto</h2>
              <div className="space-y-6 text-slate-300">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Oficina Principal</h3>
                    <p>Dirección de la empresa, Ciudad, País</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Teléfono</h3>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p>info@4ailabs.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-10 h-64 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816999999999!2d-78.4913!3d-0.1839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7f3f2d2b5d%3A0x6f5d6f6e5e8e8e7a!2sQuito%2C%2D Ecuador!5e0!3m2!1sen!2sus!4v1628000000000!5m2!1sen!2sus"
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
    </div>
  );
};

export default ContactPage;
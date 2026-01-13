
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="soporte" className="py-32 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FFDE00]/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="inline-flex items-center space-x-3 mb-8 bg-[#f97316]/20 text-[#f97316] px-5 py-2 rounded-full border border-[#f97316]/30">
              <MessageSquare className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Atención Inmediata</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black italic mb-10 leading-[0.85] uppercase tracking-tighter">
              ¿DUDAS CON <br /> <span className="text-[#f97316]">SU MOTOR?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-xl font-medium italic leading-relaxed">
              Nuestro equipo técnico está listo para asesorarlo en la elección correcta de filtros y lubricantes según el manual de su fabricante.
            </p>

            <div className="space-y-10">
              <div className="flex items-center space-x-6 group">
                <div className="bg-[#1a1a1a] p-5 rounded-3xl border border-white/5 group-hover:border-[#FFDE00] transition-all">
                  <Phone className="text-[#FFDE00] w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Línea Directa</p>
                  <p className="text-2xl font-black italic text-white">+{CONTACT_INFO.whatsapp}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-[#1a1a1a] p-5 rounded-3xl border border-white/5 group-hover:border-[#006837] transition-all">
                  <MapPin className="text-[#006837] w-8 h-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Sede Principal</p>
                  <p className="text-2xl font-black italic text-white">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#151515] p-10 md:p-16 rounded-[3.5rem] border border-white/10 shadow-2xl relative">
            <h3 className="text-3xl font-black italic uppercase mb-10 tracking-tighter">Solicitar Cotización</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Nombre Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#FFDE00] transition-all font-bold italic" placeholder="Ej: Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">WhatsApp / Celular</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#FFDE00] transition-all font-bold italic" placeholder="310 000 0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Tipo de Maquinaria</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#FFDE00] transition-all font-bold italic appearance-none">
                  <option className="bg-[#0a0a0a]">Tractor / Cosechadora</option>
                  <option className="bg-[#0a0a0a]">Camión de Carga</option>
                  <option className="bg-[#0a0a0a]">Planta Eléctrica</option>
                  <option className="bg-[#0a0a0a]">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Mensaje / Repuestos Necesarios</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#FFDE00] transition-all font-bold italic resize-none" placeholder="Escriba aquí las referencias o lubricantes que necesita..."></textarea>
              </div>

              <button className="w-full bg-[#FFDE00] text-black py-6 rounded-2xl font-black text-sm uppercase tracking-[0.4em] hover:bg-white transition-all transform hover:-translate-y-1 shadow-xl flex items-center justify-center space-x-4">
                <span>ENVIAR SOLICITUD</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import React from 'react';
import { History, Users, Award, Target, MapPin, ShieldCheck } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-40 bg-white text-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#006837]/5 -skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="relative group">
          {/* Owners Photo Frame with Professional Demo Image */}
          <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transform transition-transform duration-1000 group-hover:scale-[1.01] border-[12px] border-white">
            <img 
              src="https://images.unsplash.com/photo-1590684153482-d3302273aa4a?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-[750px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-700"
              alt="Instalaciones Filtros y Lubricantes"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Overlay Branding */}
            <div className="absolute bottom-12 left-12 text-white">
              <div className="flex items-center space-x-3 mb-4">
                 <div className="bg-[#FFDE00] h-1.5 w-12"></div>
                 <p className="text-[#FFDE00] font-black uppercase tracking-[0.3em] text-[10px]">Liderazgo Regional</p>
              </div>
              <h3 className="text-5xl font-black italic uppercase leading-none tracking-tighter mb-4">COMPROMISO <br /> <span className="text-[#006837] brightness-150">TOTAL</span></h3>
              <p className="text-base text-white/60 font-bold flex items-center tracking-widest italic uppercase">
                <MapPin className="w-5 h-5 mr-3 text-[#FFDE00]" /> Puerto Gaitán • Meta
              </p>
            </div>
          </div>
          
          {/* Floating Decorative Items */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#FFDE00] rounded-full -z-0 opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#006837] rounded-[3rem] -z-0 transform -rotate-12 flex items-center justify-center shadow-2xl">
             <ShieldCheck className="text-white/40 w-24 h-24" strokeWidth={1} />
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <div className="inline-flex items-center space-x-4 mb-8 bg-[#006837]/10 px-6 py-2.5 rounded-full border border-[#006837]/20">
              <Users className="text-[#006837] w-5 h-5" />
              <span className="text-[#006837] font-black uppercase tracking-[0.3em] text-[10px]">Legado y Visión</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-black mb-10 italic leading-[0.85] uppercase tracking-tighter">
              GENTE DE <span className="text-[#006837]">CAMPO</span> <br /> 
              PARA GENTE <span className="text-[#f97316]">REAL</span>.
            </h2>
            <p className="text-2xl text-gray-500 font-medium leading-relaxed italic border-l-[10px] border-[#FFDE00] pl-10 py-4 max-w-xl">
              "En Filtros y Lubricantes del Llano, no solo vendemos repuestos. Entregamos la tranquilidad de saber que su motor está en las mejores manos."
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            {[
              { icon: History, title: 'EXPERIENCIA', desc: 'Más de 15 años resolviendo problemas técnicos en el sector agrícola.' },
              { icon: Award, title: 'EXCLUSIVIDAD', desc: 'Distribuidores oficiales de lubricantes y filtración de alta gama.' },
              { icon: Target, title: 'LOGÍSTICA', desc: 'Entregas en tiempo récord directo a su finca o proyecto.' },
              { icon: Users, title: 'CERCANÍA', desc: 'Asesoría experta personalizada por un equipo que conoce el llano.' }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-default">
                <div className="flex items-center space-x-4 mb-5">
                  <div className="bg-[#006837] p-3 rounded-2xl group-hover:bg-[#f97316] group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="font-black text-xl italic uppercase tracking-tighter">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-snug max-w-[240px] italic">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <a href="#soporte" className="inline-flex bg-black text-white px-16 py-6 rounded-[2rem] font-black text-sm uppercase tracking-[0.4em] hover:bg-[#006837] transition-all shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] group">
              NUESTRAS ALIANZAS
              <span className="ml-4 group-hover:translate-x-3 transition-transform text-[#FFDE00]">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

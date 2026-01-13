
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a] pt-20">
      {/* High-Quality Background Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920" 
          className="w-full h-full object-cover opacity-60"
          alt="Maquinaria agrícola llanera"
        />
        {/* Dynamic Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-20">
        <div className="max-w-5xl">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 rounded-full mb-10 animate-in fade-in slide-in-from-left duration-1000">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#f97316] animate-pulse"></span>
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FFDE00]">Puerto Gaitán • Meta • Líderes en el Llano</span>
          </div>
          
          {/* Main Title - Fixed Visibility and Spacing */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black leading-[0.82] tracking-tighter mb-12 italic uppercase select-none animate-in slide-in-from-bottom duration-700">
            <span className="text-white drop-shadow-2xl">FUERZA</span> <br /> 
            <span className="text-[#FFDE00] drop-shadow-2xl">LLANERA</span> <br />
            <span className="text-[#006837] drop-shadow-2xl brightness-125">EN TU MOTOR</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-white/80 mb-14 max-w-2xl leading-relaxed font-medium italic animate-in fade-in duration-1000 delay-300 drop-shadow-md">
            Prolongamos la vida útil de su maquinaria <span className="text-[#FFDE00] font-bold">John Deere, Case e International</span> con la más alta calidad en filtración y lubricación de grado industrial.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-in slide-in-from-bottom duration-1000 delay-500">
            <a href="#catálogo" className="group bg-[#FFDE00] text-black px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center hover:bg-white transition-all transform hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(255,222,0,0.5)]">
              EXPLORAR CATÁLOGO
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform w-6 h-6" />
            </a>
            <a href="https://wa.me/573143930345" target="_blank" rel="noreferrer" className="bg-[#f97316] text-white px-12 py-6 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#ea580c] transition-all flex items-center justify-center group transform hover:-translate-y-2 shadow-2xl shadow-orange-600/20">
              COTIZACIÓN RÁPIDA
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50 z-20">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-3 text-white">Deslizar</span>
        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Decorative Large Watermark - Using Sample Logo Silhouette */}
      <div className="hidden xl:block absolute -right-20 bottom-10 pointer-events-none opacity-5">
        <svg viewBox="0 0 120 100" className="w-[800px] h-[600px] text-white" fill="currentColor">
           <path d="M35 75V55H55L65 45H85V75H75M35 65H25V75H35" />
           <circle cx="45" cy="75" r="8" />
           <circle cx="75" cy="75" r="10" />
           <rect x="60" y="35" width="4" height="15" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

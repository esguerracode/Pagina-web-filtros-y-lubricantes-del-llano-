
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Decorative background logo silhouette as seen in user request */}
      <div className="absolute bottom-0 right-0 opacity-[0.05] translate-y-1/2 translate-x-1/4 pointer-events-none">
        <img 
          src="https://i.ibb.co/XrxjY9M/owners-discrete.png" 
          alt="Watermark" 
          className="w-[1000px] grayscale invert contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="light" className="mb-8" />
            <p className="text-gray-500 text-sm leading-relaxed mb-8 italic max-w-xs">
              "La más alta calidad para la más alta exigencia". Líderes en Puerto Gaitán para el mantenimiento de maquinaria pesada.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[#FFDE00] hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-[#FFDE00] hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-[#FFDE00] uppercase mb-8 tracking-widest text-xs border-b border-white/10 pb-2 inline-block">Categorías</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold uppercase tracking-tighter">
              <li className="hover:text-white cursor-pointer transition-colors">Catálogo Completo</li>
              <li className="hover:text-white cursor-pointer transition-colors">Lubricantes John Deere</li>
              <li className="hover:text-white cursor-pointer transition-colors">Filtros de Aire y Aceite</li>
              <li className="hover:text-white cursor-pointer transition-colors">Grasas de Alta Temperatura</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#FFDE00] uppercase mb-8 tracking-widest text-xs border-b border-white/10 pb-2 inline-block">Institucional</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold uppercase tracking-tighter">
              <li className="hover:text-white cursor-pointer transition-colors">Sobre Nosotros</li>
              <li className="hover:text-white cursor-pointer transition-colors">Sede Puerto Gaitán</li>
              <li className="hover:text-white cursor-pointer transition-colors">Alianzas Comerciales</li>
              <li className="hover:text-white cursor-pointer transition-colors">Mantenimiento Preventivo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#FFDE00] uppercase mb-8 tracking-widest text-xs border-b border-white/10 pb-2 inline-block">Ubicación</h4>
            <ul className="space-y-6 text-gray-400 text-sm font-bold uppercase tracking-tighter">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#006837] mt-1 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#006837] flex-shrink-0" />
                <span>{CONTACT_INFO.whatsapp}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#006837] flex-shrink-0" />
                <span className="lowercase">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
            © 2024 Filtros y Lubricantes del Llano SAS. Puerto Gaitán, Meta.
          </p>
          <div className="flex space-x-10 text-[10px] text-gray-600 font-black uppercase tracking-widest italic">
            <span className="hover:text-[#FFDE00] cursor-pointer transition-colors">Protección de Datos</span>
            <span className="hover:text-[#FFDE00] cursor-pointer transition-colors">Políticas de Garantía</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

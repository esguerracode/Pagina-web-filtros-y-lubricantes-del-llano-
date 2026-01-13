
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-white/10 py-2 shadow-2xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        <Logo variant="light" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {['Inicio', 'Catálogo', 'Nosotros', 'Soporte'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white hover:text-[#FFDE00] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFDE00] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="bg-[#f97316] hover:bg-white hover:text-black text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-600/20">
            COTIZAR AHORA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#0a0a0a] z-[110] transition-all duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full justify-center items-center space-y-10 p-10 relative">
          <button className="absolute top-8 right-8 text-white/50 hover:text-white" onClick={() => setIsOpen(false)}>
            <X className="w-12 h-12" />
          </button>
          
          <Logo variant="light" className="mb-12 scale-125" />
          
          <div className="flex flex-col space-y-8 text-center">
            {['Inicio', 'Catálogo', 'Nosotros', 'Soporte'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-4xl font-black italic uppercase text-white hover:text-[#FFDE00] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          
          <button className="bg-[#f97316] text-white px-12 py-5 rounded-2xl text-xl font-black uppercase w-full max-w-sm shadow-2xl">
            COTIZAR AHORA
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

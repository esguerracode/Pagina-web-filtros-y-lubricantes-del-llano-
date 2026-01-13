
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import AboutUs from './components/AboutUs';
import ContactSection from './components/ContactSection';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] selection:bg-[#FFDE00] selection:text-black">
      <Navbar />
      
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero />
        
        {/* Section 2: Statistics Banner with High Contrast */}
        <section className="bg-[#FFDE00] py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-[#006837] -skew-x-12 translate-x-32 opacity-10"></div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
            {[
              { val: '15+', label: 'AÑOS DE EXPERIENCIA', color: '#006837' },
              { val: '500k+', label: 'LITROS DESPACHADOS', color: '#006837' },
              { val: '24h', label: 'RESPUESTA TÉCNICA', color: '#006837' },
              { val: '100%', label: 'ORIGINALIDAD', color: '#006837' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-5xl md:text-7xl font-black mb-3 italic leading-none transform group-hover:scale-110 transition-transform duration-500" style={{ color: stat.color }}>
                  {stat.val}
                </p>
                <div className="h-1.5 w-10 bg-[#f97316] mx-auto mb-4"></div>
                <p className="text-[10px] font-black text-black tracking-[0.3em] uppercase opacity-80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Catalog with Top Transition */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FFDE00] to-transparent z-0 opacity-20"></div>
          <ProductCatalog />
        </div>
        
        {/* Section 4: About Us (Social & Human focus) */}
        <AboutUs />

        {/* Section 5: Brand Promise (Call to Action) */}
        <section className="py-40 bg-[#006837] relative overflow-hidden group">
          {/* Animated background text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] whitespace-nowrap pointer-events-none select-none">
             <span className="text-[30vw] font-black italic tracking-tighter text-white animate-pulse">POTENCIA • LLANO • FUERZA • </span>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-[#FFDE00] rounded-[2rem] flex items-center justify-center mb-12 shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
               <svg className="w-12 h-12 text-[#006837]" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2L1 21h22L12 2zm0 3.83L19.07 19H4.93L12 5.83zM13 16h-2v2h2v-2zm0-7h-2v5h2V9z"/>
               </svg>
            </div>
            <h2 className="text-6xl md:text-9xl font-black italic mb-12 uppercase leading-[0.8] tracking-tighter drop-shadow-2xl">
              ¿MOTOR <br /> <span className="text-[#FFDE00]">IMPARABLE?</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-16 max-w-3xl font-medium italic leading-tight">
              En Puerto Gaitán, la exigencia es extrema. Nosotros entregamos soluciones que superan el estándar.
            </p>
            <div className="flex flex-col sm:flex-row gap-8">
              <button className="bg-[#f97316] text-white px-16 py-7 rounded-2xl font-black text-xl hover:bg-white hover:text-black transition-all transform hover:scale-110 shadow-[0_20px_60px_-10px_rgba(249,115,22,0.5)] uppercase tracking-[0.3em] italic">
                SOPORTE TÉCNICO
              </button>
              <button className="bg-white/5 backdrop-blur-3xl border border-white/20 text-white px-16 py-7 rounded-2xl font-black text-xl hover:bg-white/10 transition-all uppercase tracking-[0.3em] italic">
                LISTA DE PRECIOS
              </button>
            </div>
          </div>
        </section>

        {/* Section 6: Full Contact Experience */}
        <ContactSection />

      </main>
      
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default App;

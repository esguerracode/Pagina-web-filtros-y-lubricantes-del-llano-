
import React, { useState } from 'react';
import { products } from '../data/products';
import { Category } from '../types';
import { Search, ShoppingCart, ArrowRight, Filter } from 'lucide-react';

const ProductCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = products.filter(p => {
    const matchesCategory = activeCategory === Category.ALL || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const initialCount = 6;
  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, initialCount);

  return (
    <section id="catálogo" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#006837]/20 text-[#006837] px-4 py-1 rounded-full mb-6 border border-[#006837]/30">
              <Filter className="w-3 h-3" />
              <span className="text-[10px] font-black uppercase tracking-widest">Equipamiento Premium</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic mb-6 leading-[0.9] uppercase tracking-tighter">
              NUESTRO <span className="text-[#FFDE00]">CATÁLOGO</span> <br /> 
              DE <span className="text-[#006837]">ALTO RENDIMIENTO</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium italic">
              Selección técnica de componentes críticos para mantener su maquinaria operando al 100%. Solo marcas líderes.
            </p>
          </div>

          <div className="relative group w-full lg:max-w-md">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFDE00] transition-colors" />
            <input 
              type="text" 
              placeholder="¿Qué pieza busca hoy?" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:outline-none focus:border-[#FFDE00] focus:ring-1 focus:ring-[#FFDE00]/30 transition-all placeholder:text-gray-600 font-medium italic"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-3 mb-16">
          {Object.values(Category).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all border transform active:scale-95 ${
                activeCategory === cat 
                  ? 'bg-[#FFDE00] text-black border-[#FFDE00] shadow-lg shadow-yellow-500/20' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid with improved cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, idx) => (
            <div 
              key={product.id} 
              className="group relative bg-gradient-to-b from-[#121212] to-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#006837]/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,104,55,0.2)]"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Image Section */}
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
                
                {/* Badge Category */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md text-[#FFDE00] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-white/10">
                  {product.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter group-hover:text-[#FFDE00] transition-colors leading-tight">{product.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 italic font-medium leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">Precio Referencial</span>
                    <span className="text-2xl font-black text-white italic">
                      ${product.price.toLocaleString()} <span className="text-[10px] text-[#006837]">COP</span>
                    </span>
                  </div>
                  <button className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#f97316] transition-all transform hover:rotate-12 group/btn">
                    <ShoppingCart className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Special Tag for Demo */}
              {product.id % 7 === 0 && (
                <div className="absolute top-6 right-6 bg-[#f97316] text-white px-4 py-1 font-black text-[9px] rounded-full uppercase tracking-widest italic shadow-lg">
                  TOP VENTAS
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {!showAll && filteredProducts.length > initialCount && (
          <div className="mt-20 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="group bg-white/5 border border-white/10 text-white px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all flex items-center space-x-4 shadow-2xl"
            >
              <span>VER CATÁLOGO COMPLETO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
               <Search className="w-8 h-8 text-gray-600" />
            </div>
            <p className="text-gray-500 text-2xl font-black italic uppercase tracking-widest">Sin resultados coincidentes</p>
            <button 
              onClick={() => {setActiveCategory(Category.ALL); setSearchTerm("");}}
              className="mt-6 text-[#FFDE00] font-black uppercase tracking-widest text-xs hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;

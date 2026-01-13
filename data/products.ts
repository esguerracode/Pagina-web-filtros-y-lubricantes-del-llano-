
import { Product } from '../types';

export const products: Product[] = Array.from({ length: 50 }).map((_, i) => {
  const categories: Product['category'][] = ['Filtros', 'Lubricantes', 'Grasas', 'Industrial'];
  const category = categories[i % categories.length];
  
  let name = "";
  let description = "";
  let image = "";

  if (category === 'Lubricantes') {
    name = i % 2 === 0 ? "Plus-50 II 15W-40" : "Hy-Gard Oil 20L";
    description = "Aceite de motor premium diseñado para condiciones extremas.";
    image = "https://images.unsplash.com/photo-1635338161570-55e10cc9d924?auto=format&fit=crop&q=80&w=400";
  } else if (category === 'Filtros') {
    name = i % 2 === 0 ? "Filtro Aceite AR10" : "Filtro Hidráulico RE5";
    description = "Filtración avanzada para máxima protección de componentes.";
    image = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400";
  } else if (category === 'Grasas') {
    name = "Grasa Multiusos HD";
    description = "Resistencia superior al agua y altas temperaturas.";
    image = "https://images.unsplash.com/photo-1631551634032-6a6873539958?auto=format&fit=crop&q=80&w=400";
  } else {
    name = "Kit Mantenimiento 500h";
    description = "Kit completo para maquinaria de gran calado.";
    image = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400";
  }

  return {
    id: i + 1,
    name: `${name} #${i + 1}`,
    category,
    description,
    price: Math.floor(Math.random() * 500000) + 50000,
    image,
    specs: ["Protección 500h", "Calidad Original", "Soporte Técnico"]
  };
});


import { Product } from '../types';

// Curated list of high-quality images per category to ensure no broken links
// Keys must match the Product['category'] type values exactly (Spanish)
const productImages = {
  Lubricantes: [
    "https://images.unsplash.com/photo-1635338161570-55e10cc9d924?auto=format&fit=crop&q=80&w=600", // Plastic oil jug
    "https://images.unsplash.com/photo-1563819865668-3e4492c300dc?auto=format&fit=crop&q=80&w=600", // Metallic oil can
    "https://images.unsplash.com/photo-1518970928929-281ce1c75c80?auto=format&fit=crop&q=80&w=600", // Industrial liquid
  ],
  Filtros: [
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=600", // Car parts/Filters
    "https://images.unsplash.com/photo-1507767357497-6d60c3260aa7?auto=format&fit=crop&q=80&w=600", // Engine closeup
    "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&q=80&w=600", // Round filter mechanism
  ],
  Grasas: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc7471?auto=format&fit=crop&q=80&w=600", // Thick texture
    "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600", // Paint/Grease texture
    "https://images.unsplash.com/photo-1599571340455-22d765799763?auto=format&fit=crop&q=80&w=600", // Industrial paste
  ],
  Industrial: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600", // Mechanic shop
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600", // Gears
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600", // Tools
  ]
};

export const products: Product[] = Array.from({ length: 50 }).map((_, i) => {
  const categories: Product['category'][] = ['Filtros', 'Lubricantes', 'Grasas', 'Industrial'];
  const category = categories[i % categories.length];
  
  let name = "";
  let description = "";
  
  // Select a rotating image from the curated list based on index
  // NOTE: This access is safe now that keys match
  const imageList = productImages[category]; 
  const image = imageList && imageList.length > 0 ? imageList[i % imageList.length] : "https://images.unsplash.com/photo-1500382017468-9049fed747ef";

  if (category === 'Lubricantes') {
    name = i % 2 === 0 ? "Plus-50 II 15W-40" : "Hy-Gard Oil 20L";
    description = "Aceite de motor premium diseñado para condiciones extremas de temperatura y carga.";
  } else if (category === 'Filtros') {
    name = i % 2 === 0 ? "Filtro Aceite AR10" : "Filtro Hidráulico RE5";
    description = "Filtración avanzada de micras reducidas para máxima protección de componentes internos.";
  } else if (category === 'Grasas') {
    name = "Grasa Multiusos HD";
    description = "Resistencia superior al agua y altas temperaturas. Ideal para rodamientos expuestos.";
  } else {
    name = "Kit Mantenimiento 500h";
    description = "Kit completo de sellos, o-rings y filtros para maquinaria de gran calado.";
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

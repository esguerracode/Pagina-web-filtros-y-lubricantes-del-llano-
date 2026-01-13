
export interface Product {
  id: number;
  name: string;
  category: 'Filtros' | 'Lubricantes' | 'Grasas' | 'Industrial';
  description: string;
  price: number;
  image: string;
  specs: string[];
}

export enum Category {
  ALL = 'Todos',
  FILTERS = 'Filtros',
  LUBRICANTS = 'Lubricantes',
  GREASES = 'Grasas',
  INDUSTRIAL = 'Industrial'
}

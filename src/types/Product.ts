export interface ProductColor { image: string, color: string, colorName: string }
export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number; // e.g. 4.8
  image: string;
  description: string;
  sizes: string[];
  colors: ProductColor[];
  selectedColor: ProductColor
}

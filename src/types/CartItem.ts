// types/CartItem.ts
export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
  size: string | null;

  colorName?: string;
  colorHex?: string;
};

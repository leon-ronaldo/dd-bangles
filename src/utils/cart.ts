import { type CartItem } from "../types/CartItem";
import keys from "./keys";
import type { Product } from "../types/Product";

/* ---------------- CART ---------------- */

export const getCart = (): CartItem[] => {
  const stored = localStorage.getItem(keys.CART_KEY);
  return JSON.parse(stored ?? "[]");
};

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(keys.CART_KEY, JSON.stringify(cart));
};

export const addToCart = (item: CartItem) => {
  const cart = getCart();

  const existingIndex = cart.findIndex(
    (c) => c.id === item.id && c.size === item.size
  );

  if (existingIndex !== -1) {
    cart[existingIndex].qty += item.qty;
  } else {
    cart.push(item);
  }

  saveCart(cart);
};

/* ---------------- FAVOURITES ---------------- */

export const getFavourites = (): Product[] => {
  const stored = localStorage.getItem(keys.FAVOURITES);
  return JSON.parse(stored ?? "[]");
};

export const saveFavourites = (favourites: Product[]) => {
  localStorage.setItem(keys.FAVOURITES, JSON.stringify(favourites));
};

export const addToFavourites = (item: Product) => {
  const favourites = getFavourites();

  const exists = favourites.some((fav) => fav.id === item.id);
  if (exists) return; // prevent duplicates

  favourites.push(item);
  saveFavourites(favourites);
};

export const removeFromFavourites = (item: Product) => {
  const favourites = getFavourites().filter(
    (fav) => fav.id !== item.id
  );

  saveFavourites(favourites);
};

export const isFavourite = (productId: number): boolean => {
  return getFavourites().some((fav) => fav.id === productId);
};

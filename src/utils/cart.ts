import { type CartItem } from "../types/CartItem";
import { products } from "../data/product_data";

import keys from "./keys"

/**
 * Get cart from localStorage
 * Fallback: create dummy cart using products
 */
export const getCart = (): CartItem[] => {
    const stored = localStorage.getItem(keys.CART_KEY);

    if (stored) {
        return JSON.parse(stored);
    }

    // Dummy data for now
    const dummyCart: CartItem[] = products.slice(0, 3).map((p, index) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        qty: index + 1,
        size: p.sizes?.[0]
    }));

    localStorage.setItem(keys.CART_KEY, JSON.stringify(dummyCart));
    return dummyCart;
};

export const saveCart = (cart: CartItem[]) => {
    localStorage.setItem(keys.CART_KEY, JSON.stringify(cart));
};

import type { HeroSlide } from "../types/HeroSlide";
import { products } from "./product_data";

export const heroslides: HeroSlide[] = [
    { image: "/images/hero-image-1.jpg", productName: products[2].name },
    { image: products[2].image, productName: products[1].name },
    { image: products[2].image, productName: products[3].name },
    { image: products[2].image, productName: products[6].name }
]
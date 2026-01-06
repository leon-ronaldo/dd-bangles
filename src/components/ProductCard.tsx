import React from "react";
import { type Product } from "../types/Product";

interface Props {
    product: Product;
    onViewProduct?: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onViewProduct }) => {
    return (
        <div className="bg-white rounded-xl relative flex flex-col">

            {/* Wishlist icon */}
            <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 shadow-2xl bg-white rounded-full w-8 h-8 flex justify-center items-center">
                <i className="bi bi-heart mt-1"></i>
            </button>

            {/* Product Image */}
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
            />

            {/* Product Name */}
            <h3 className="mt-3 text-sm font-medium text-gray-900 leading-tight text-left">
                {product.name}
            </h3>

            {/* Price + Rating */}
            <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-semibold text-gray-900">
                    ₹{product.price}
                </span>

                <div className="flex items-center text-xs text-gray-600">
                    <i className="bi bi-star-fill text-yellow-400 mr-1"></i>
                    {product.rating}
                </div>
            </div>

            {/* Add to Cart */}
            {onViewProduct && (
                <button
                    onClick={() => onViewProduct(product)}
                    className="mt-3 w-full bg-black text-white text-xs py-2.5 rounded-lg transition"
                >
                    View Product
                </button>
            )}
        </div>
    );
};

export default ProductCard;

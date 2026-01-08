import React, { useState } from "react";
import { type Product } from "../types/Product";
import { addToFavourites, isFavourite, removeFromFavourites } from "../utils/cart";

interface Props {
  product: Product;
  onViewProduct?: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onViewProduct }) => {

  const [isFav, setIsFav] = useState(isFavourite(product.id));

  const onFavClicked = () => {
    if (isFav) {
      removeFromFavourites(product)
      setIsFav(false);
    } else {
      addToFavourites(product)
      setIsFav(true);
    }
  }

  return (
    <div className="bg-white rounded-xl relative flex flex-col">
      {/* Wishlist icon */}
      <button
        className={`absolute top-2 cursor-pointer right-2 sm:top-3 sm:right-3 ${isFav ? "text-red-500 hover:text-gray-600" : "text-gray-600 hover:text-red-500"} shadow bg-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex justify-center items-center`}
        onClick={onFavClicked}
      >
        <i className="bi bi-heart-fill text-xs sm:text-sm mt-0.5" />
      </button>

      {/* Product Image */}
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-3 text-xs sm:text-sm font-medium text-gray-900 leading-snug text-left">
        {product.name}
      </h3>

      {/* Price + Rating */}
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm sm:text-base font-semibold text-gray-900">
          ₹{product.price}
        </span>

        <div className="flex items-center text-[10px] sm:text-xs text-gray-600">
          <i className="bi bi-star-fill text-yellow-400 mr-1" />
          {product.rating}
        </div>
      </div>

      {/* View Product */}
      {onViewProduct && (
        <button
          onClick={() => onViewProduct(product)}
          className="mt-3 w-full bg-black text-white text-xs sm:text-sm py-2.5 rounded-lg transition hover:opacity-90"
        >
          View Product
        </button>
      )}
    </div>
  );
};

export default ProductCard;
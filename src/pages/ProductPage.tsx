import { useParams } from "react-router-dom";
import { products } from "../data/product_data";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import type { CartItem } from "../types/CartItem";
import { addToCart } from "../utils/cart";
import { handleViewProduct } from "../utils/misc";
import toast from "react-hot-toast";

const ProductPage = () => {
    const { productName } = useParams();

    const product = products.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === productName
    );

    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const addItem = () => {
        if (!product || !selectedSize) return;

        const cartItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            qty: qty,
            size: selectedSize,
        };

        addToCart(cartItem);

        toast.success("Item added to cart!")
    };


    useEffect(() => {
        if (product) {
            document.title = `Buy ${product.name} at DD Bangles`;
        }
    }, [product]);

    if (!product) {
        return <p className="p-4">Product not found</p>;
    }

    return (
        <main className="min-h-screen bg-white flex flex-col items-center">
            <Navbar />

            <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 self-start">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden w-full">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-[3/4] object-cover"
                        />
                        <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 shadow bg-white rounded-full w-8 h-8 flex justify-center items-center">
                            <i className="bi bi-heart text-sm" />
                        </button>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        {/* Title & Price */}
                        <h1 className="text-xl sm:text-2xl font-semibold capitalize text-left">
                            {product.name}
                        </h1>
                        <p className="text-xl font-bold mt-1 text-left">₹{product.price}</p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-500 mt-3 text-left">
                            {product.description}
                        </p>

                        {/* Size Selector */}
                        <div className="mt-6">
                            <p className="text-sm font-medium mb-3 text-left">Bangle Size</p>
                            <div className="flex gap-3 flex-wrap">
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded-full border text-sm transition ${selectedSize === size
                                            ? "border-black bg-black text-white"
                                            : "border-gray-300 hover:border-black"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-6 max-w-full">
                            <button
                                onClick={() => setQty(Math.max(1, qty - 1))}
                                className="w-13.5 h-10 rounded-full border flex items-center justify-center"
                            >
                                −
                            </button>
                            <input
                                type="number"
                                className="border rounded-full px-4 py-2 text-center w-full"
                                value={qty}
                                onChange={(e) => setQty(Number(e.target.value))}
                            />
                            <button
                                onClick={() => setQty(qty + 1)}
                                className="w-13.5 h-10 rounded-full border flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <button
                            disabled={!selectedSize}
                            className={`mt-8 w-full py-3 rounded-xl text-white transition ${selectedSize
                                ? "bg-black hover:opacity-90"
                                : "bg-gray-300 cursor-not-allowed"
                                }`}
                            onClick={addItem}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>

            {/* More Products Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <h2 className="text-lg sm:text-xl font-semibold mb-4 text-left">You may also like</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {products
                        .filter((p) => p.name !== product.name)
                        .slice(0, 4)
                        .map((item, index) => (
                            <ProductCard product={item} key={index} onViewProduct={handleViewProduct} />
                        ))}
                </div>
            </section>

            {/* footer */}
            <Footer />
        </main>
    );
};

export default ProductPage;
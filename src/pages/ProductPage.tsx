import { useParams } from "react-router-dom";
import { products } from "../data/product_data";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const ProductPage = () => {
    const { productName } = useParams();

    const product = products.find(
        (p) =>
            p.name.toLowerCase().replace(/\s+/g, "-") === productName
    );

    if (!product) {
        return <p className="p-4">Product not found</p>;
    }

    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    if (!product) {
        return <p className="p-4">Product not found</p>;
    }

    useEffect(() => {
        document.title = `Buy ${productName} at DD Bangles`
    }, [])

    return (
        <main className="max-w-md mx-auto bg-white min-h-screen p-4 flex flex-col items-start text-left">
            <Navbar />

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden w-full mt-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                />
                <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500 shadow-2xl bg-white rounded-full w-8 h-8 flex justify-center items-center">
                    <i className="bi bi-heart mt-1"></i>
                </button>
            </div>

            {/* Title & Price */}
            <div className="mt-4">
                <h1 className="text-lg font-semibold capitalize">
                    {product.name}
                </h1>
                <p className="text-lg font-bold mt-1">₹{product.price}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-2">
                {product.description}
            </p>

            {/* Size Selector */}
            <div className="mt-5">
                <p className="text-sm font-medium mb-2">Bangle Size</p>

                <div className="flex gap-3 flex-wrap">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 rounded-full border text-sm transition
                ${selectedSize === size
                                    ? "border-black bg-black text-white"
                                    : "border-gray-300"
                                }
              `}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="flex items-stretch gap-2 mt-6 w-full">
                <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-10.5 rounded-full border flex items-center justify-center"
                >
                    −
                </button>
                <input type="number" className="border rounded-full p-2 px-4 text-center flex-1" value={qty} onChange={(e) => setQty(Number.parseInt(e.target.value))} name="" id="" />
                <button
                    onClick={() => setQty(qty + 1)}
                    className="w-10.5 rounded-full border flex items-center justify-center"
                >
                    +
                </button>
            </div>

            {/* Add to Cart */}
            <button
                disabled={!selectedSize}
                className={`mt-6 w-full py-3 rounded-xl text-white
          ${selectedSize
                        ? "bg-black"
                        : "bg-gray-300 cursor-not-allowed"
                    }
        `}
                onClick={() => window.location.href = "/cart"}
            >
                Add to cart
            </button>

        </main>
    );
};

export default ProductPage;

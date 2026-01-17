import { useEffect, useState } from "react";
import { type CartItem } from "../types/CartItem";
import { getCart, saveCart } from "../utils/cart";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setCart(getCart());
        document.title = "Your cart - DD Bangles";
    }, []);

    const updateQty = (product: CartItem, delta: number) => {
        const updated = cart.map((item) =>
            item.id === product.id &&
                item.size === product.size &&
                item.colorName === product.colorName
                ? { ...item, qty: Math.max(1, item.qty + delta) }
                : item
        );

        setCart(updated);
        saveCart(updated);
    };


    const removeItem = (product: CartItem) => {
        const updated = cart.filter(
            (item) => !(item.id === product.id && item.size === product.size)
        );

        setCart(updated);
        saveCart(updated);
    };


    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <main className="min-h-screen bg-white flex flex-col items-center">
            <Navbar />

            <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-lg sm:text-xl font-semibold mb-6 text-left">Shopping Bag</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cart.length === 0 && (
                            <p className="text-sm text-gray-500">Your cart is empty.</p>
                        )}

                        {cart.map((item, key) => (
                            <div
                                key={key}
                                className="flex gap-4 bg-gray-50 p-3 sm:p-4 rounded-xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg bg-white"
                                />

                                <div className="flex-1 flex flex-col text-left">
                                    <p className="text-sm sm:text-base font-medium leading-snug">
                                        {item.name}
                                    </p>
                                    <p className="text-sm font-semibold mt-1">₹{item.price}</p>
                                    {item.size && (
                                        <p className="text-xs text-gray-500 mt-1">Size: {item.size}</p>
                                    )}
                                    {item.colorName && (
                                        <p className="text-xs text-gray-500">
                                            Color: {item.colorName}
                                        </p>
                                    )}
                                </div>

                                {/* Desktop Actions */}
                                <div className="flex flex-col justify-between items-end">
                                    <button
                                        onClick={() => removeItem(item)}
                                        className="text-red-500"
                                    >
                                        <i className="bi bi-trash" />
                                    </button>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => updateQty(item, -1)}
                                            className="w-8 h-8 border rounded-full"
                                        >
                                            −
                                        </button>
                                        <span className="text-sm">{item.qty}</span>
                                        <button
                                            onClick={() => updateQty(item, 1)}
                                            className="w-8 h-8 border rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 h-fit">
                        <h2 className="text-sm font-semibold mb-4">Order Summary</h2>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span className="font-medium">FREE</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Subtotal ({cart.length} items)</span>
                                <span className="font-medium">₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-base pt-2 border-t">
                                <span>Total</span>
                                <span>₹{subtotal}</span>
                            </div>
                        </div>

                        <button
                            className={`mt-6 w-full bg-black text-white py-3 rounded-xl text-sm hover:opacity-90 ${cart.length === 0 && "opacity-60"}`}
                            onClick={() => (window.location.href = "/checkout")}
                            disabled={cart.length === 0}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default CartPage;

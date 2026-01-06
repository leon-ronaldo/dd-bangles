import { useEffect, useState } from "react";
import { type CartItem } from "../types/CartItem";
import { getCart, saveCart } from "../utils/cart";
import Navbar from "../components/Navbar";

const CartPage = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const updateQty = (id: number, delta: number) => {
        const updated = cart.map(item =>
            item.id === id
                ? { ...item, qty: Math.max(1, item.qty + delta) }
                : item
        );
        setCart(updated);
        saveCart(updated);
    };

    const removeItem = (id: number) => {
        const updated = cart.filter(item => item.id !== id);
        setCart(updated);
        saveCart(updated);
    };

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <main className="max-w-md mx-auto bg-white min-h-screen p-4">
            {/* Navbar */}
            <Navbar />

            {/* Header */}
            <div className="flex items-center justify-between my-6">
                <h1 className="text-lg font-semibold">Shopping Bag</h1>
            </div>

            {/* Cart Items */}
            <div className="space-y-4">
                {cart.map(item => (
                    <div
                        key={item.id}
                        className="flex items-stretch gap-3 bg-gray-50 p-3 rounded-xl"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg bg-white"
                        />

                        <div className="flex-1 flex flex-col items-start text-left">
                            <p className="text-sm font-medium">{item.name}{item.name}</p>
                            <p className="text-sm font-semibold">₹{item.price}</p>
                            {item.size && (
                                <p className="text-xs text-gray-500">
                                    Size: {item.size}
                                </p>
                            )}
                        </div>


                        <div className="flex flex-col justify-between items-end">
                            {/* Remove */}
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500"
                            >
                                <i className="bi bi-trash"></i>
                            </button>

                            {/* Qty Controls */}
                            <div className="flex items-center gap-3 mt-2">
                                <button
                                    onClick={() => updateQty(item.id, -1)}
                                    className="w-6 h-6 border rounded-full text-sm"
                                >
                                    −
                                </button>
                                <span className="text-sm">{item.qty}</span>
                                <button
                                    onClick={() => updateQty(item.id, 1)}
                                    className="w-6 h-6 border rounded-full text-sm"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-medium">FREE</span>
                </div>

                <div className="flex justify-between">
                    <span>Subtotal ({cart.length} items)</span>
                    <span className="font-medium">₹{subtotal}</span>
                </div>

                <div className="flex justify-between font-semibold text-base">
                    <span>Total</span>
                    <span>₹{subtotal}</span>
                </div>
            </div>

            {/* Checkout */}
            <button className="mt-6 w-full bg-black text-white py-3.5 rounded-xl text-sm" onClick={() => window.location.href = "/checkout"}>
                Proceed to Checkout
            </button>

        </main>
    );
};

export default CartPage;

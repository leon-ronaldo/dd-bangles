import { useEffect, useState } from "react";
import { type CartItem } from "../types/CartItem";
import { getCart } from "../utils/cart";
import { type CheckoutForm } from "../types/CheckoutForm";
import Navbar from "../components/Navbar";

const CheckoutPage = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [form, setForm] = useState<CheckoutForm>({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "Tamil Nadu",
        pinCode: "",
        phone: "",
        email: ""
    });

    useEffect(() => {
        setCart(getCart());
        document.title = `Checkout your orders at DD Bangles`
    }, []);

    const subtotal = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    const shipping = 0;
    const total = subtotal + shipping;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-6">
            <Navbar />

            {/* LEFT — ORDER FORM */}
            <div className="bg-white rounded-xl">
                <div className="mb-6 text-left">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Complete your order
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Enter your details below to place your order securely via WhatsApp.
                    </p>
                </div>


                <div className="grid grid-cols-2 gap-3">
                    <input
                        name="firstName"
                        placeholder="First Name *"
                        className="input"
                        onChange={handleChange}
                    />
                    <input
                        name="lastName"
                        placeholder="Last Name *"
                        className="input"
                        onChange={handleChange}
                    />
                </div>

                <select
                    name="country"
                    className="input mt-3"
                    disabled
                >
                    <option>India</option>
                </select>

                <input
                    name="address1"
                    placeholder="House number and street name *"
                    className="input mt-3"
                    onChange={handleChange}
                />

                <input
                    name="address2"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="input mt-3"
                    onChange={handleChange}
                />

                <input
                    name="city"
                    placeholder="Town / City *"
                    className="input mt-3"
                    onChange={handleChange}
                />

                <select
                    name="state"
                    className="input mt-3"
                    onChange={handleChange}
                >
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                </select>

                <input
                    name="pinCode"
                    placeholder="PIN Code *"
                    className="input mt-3"
                    onChange={handleChange}
                />

                <input
                    name="phone"
                    placeholder="Phone *"
                    className="input mt-3"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email *"
                    className="input mt-3"
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-center items-center bg-black rounded-full px-4 py-4 w-full text-xs text-gray-400 gap-4">
                <span className="text-white font-medium">
                    Shipping
                </span>

                <span className="opacity-50">—</span>

                <span className="text-white font-medium">
                    Review
                </span>

            </div>

            {/* RIGHT — ORDER SUMMARY */}
            <div className="mt-6 text-left">
                <h2 className="text-xl font-semibold text-gray-900">
                    Review your order
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    Take a moment to check your items and total before placing the order.
                </p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-lg">
                <div className="space-y-3 text-sm">
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between text-left">
                            <span>
                                {item.name} <br />
                                <span className="text-gray-400">
                                    Size {item.size} × {item.qty}
                                </span>
                            </span>
                            <span>₹{item.price * item.qty}</span>
                        </div>
                    ))}
                </div>

                <hr className="my-4" />

                <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm mt-2">
                    <span>Shipping</span>
                    <span className="font-medium">FREE</span>
                </div>

                <div className="flex justify-between font-semibold text-base mt-4">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>

                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-600 mb-3 mt-8">
                    <i className="bi bi-shield-check mr-1"></i>
                    Secure order via WhatsApp
                </div>

                <button className="mt-6 w-full bg-black text-white py-3 rounded-xl text-xs">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;

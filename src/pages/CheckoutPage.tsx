import { useEffect, useState } from "react";
import { type CartItem } from "../types/CartItem";
import { clearCart, getCart } from "../utils/cart";
import { type CheckoutForm } from "../types/CheckoutForm";
import Navbar from "../components/Navbar";
import { sendOrderToWhatsApp } from "../types/whatsapp";
import toast from "react-hot-toast";

/* ------------------ STEPS ------------------ */
const CheckoutSteps = () => (
  <div className="flex justify-center mb-8">
    <div className="flex items-center gap-4 bg-black rounded-full px-6 py-3 text-xs sm:text-sm">
      <span className="text-white font-medium">Shipping</span>
      <span className="text-gray-400">—</span>
      <span className="text-gray-400">Review</span>
    </div>
  </div>
);

/* ------------------ PAGE ------------------ */
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
    email: "",
  });

  const [errors, setErrors] =
    useState<Partial<Record<keyof CheckoutForm, string>>>({});
  const [touched, setTouched] =
    useState<Partial<Record<keyof CheckoutForm, boolean>>>({});

  /* ------------------ EFFECTS ------------------ */
  useEffect(() => {
    setCart(getCart());
    document.title = "Checkout your orders at DD Bangles";
  }, []);

  /* ------------------ TOTALS ------------------ */
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  /* ------------------ VALIDATION ------------------ */
  const validateForm = (data: CheckoutForm) => {
    const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};

    if (!data.firstName.trim()) newErrors.firstName = "First name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!data.address1.trim()) newErrors.address1 = "Address is required";
    if (!data.city.trim()) newErrors.city = "City is required";

    if (!/^\d{6}$/.test(data.pinCode)) {
      newErrors.pinCode = "Enter a valid 6-digit PIN code";
    }

    if (!/^[6-9]\d{9}$/.test(data.phone)) {
      newErrors.phone = "Enter a valid Indian mobile number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Enter a valid email address";
    }

    return newErrors;
  };

  /* ------------------ HANDLERS ------------------ */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    if (touched[name as keyof CheckoutForm]) {
      setErrors(validateForm(updatedForm));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors(validateForm(form));
  };

  const handlePlaceOrder = () => {
    const validationErrors = validateForm(form);
    setErrors(validationErrors);
    setTouched({
      firstName: true,
      lastName: true,
      address1: true,
      city: true,
      pinCode: true,
      phone: true,
      email: true,
    });

    if (Object.keys(validationErrors).length > 0) return;

    toast.success("Redirecting to WhatsApp…");

    setTimeout(() => {
      sendOrderToWhatsApp(form, cart, total);
      clearCart();
    }, 800);
  };



  /* ------------------ RENDER ------------------ */
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="hidden md:block">
          <CheckoutSteps />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ---------- FORM ---------- */}
          <div className="bg-white rounded-2xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold">
              Complete your order
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              Enter your details to place your order securely via WhatsApp.
            </p>

            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="firstName"
                  placeholder="First Name *"
                  className={`input ${errors.firstName ? "border-red-400" : ""}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1 text-left">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  className={`input ${errors.lastName ? "border-red-400" : ""}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-500 mt-1 text-left">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <select className="input mt-4" disabled>
              <option>India</option>
            </select>

            {/* Address */}
            <div className="mt-4">
              <input
                name="address1"
                placeholder="House number and street name *"
                className={`input ${errors.address1 ? "border-red-400" : ""
                  }`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address1 && (
                <p className="text-xs text-red-500 mt-1 text-left">
                  {errors.address1}
                </p>
              )}
            </div>

            <input
              name="address2"
              placeholder="Apartment, suite, unit (optional)"
              className="input mt-4"
              onChange={handleChange}
            />

            {/* City */}
            <div className="mt-4">
              <input
                name="city"
                placeholder="Town / City *"
                className={`input ${errors.city ? "border-red-400" : ""}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.city && (
                <p className="text-xs text-red-500 mt-1 text-left">{errors.city}</p>
              )}
            </div>

            <select
              name="state"
              className="input mt-4"
              onChange={handleChange}
            >
              <option>Tamil Nadu</option>
              <option>Kerala</option>
              <option>Karnataka</option>
            </select>

            {/* PIN */}
            <div className="mt-4">
              <input
                name="pinCode"
                placeholder="PIN Code *"
                className={`input ${errors.pinCode ? "border-red-400" : ""}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.pinCode && (
                <p className="text-xs text-red-500 mt-1 text-left">
                  {errors.pinCode}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="mt-4">
              <input
                name="phone"
                placeholder="Phone *"
                className={`input ${errors.phone ? "border-red-400" : ""}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 text-left">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mt-4">
              <input
                name="email"
                placeholder="Email *"
                className={`input ${errors.email ? "border-red-400" : ""}`}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 text-left">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Mobile Steps */}
          <div className="block md:hidden">
            <CheckoutSteps />
          </div>

          {/* ---------- SUMMARY ---------- */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 h-fit">
            <h2 className="text-lg sm:text-xl font-semibold">
              Review your order
            </h2>
            <p className="text-sm text-gray-500 mt-1 mb-6">
              Check your items before placing the order.
            </p>

            <div className="space-y-3 text-sm">
              {cart.map((item, key) => (
                <div key={key} className="flex justify-between text-left">
                  <span>
                    {item.name}
                    <br />
                    <span className="text-gray-400 text-xs">
                      Size {item.size}
                      {item.colorName && ` | ${item.colorName}`}
                      × {item.qty}
                    </span>
                  </span>
                  <span>₹{item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <hr className="my-4" />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium">FREE</span>
              </div>
              <div className="flex justify-between font-semibold text-base pt-2 border-t">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600 mt-6">
              <i className="bi bi-shield-check" /> Secure order via WhatsApp
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cart.length === 0}
              className="mt-6 w-full bg-black text-white py-3 rounded-xl text-sm hover:opacity-90 disabled:opacity-50"
            >
              Place Order
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckoutPage;

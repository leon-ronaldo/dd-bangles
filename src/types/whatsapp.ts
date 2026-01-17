import type { CartItem } from "../types/CartItem";
import type { CheckoutForm } from "../types/CheckoutForm";

const SHOP_PHONE = "919787416631"; // replace

export const sendOrderToWhatsApp = (
    customer: CheckoutForm,
    cart: CartItem[],
    total: number
) => {
    if (!cart.length) return;

    const lines: string[] = [];

    lines.push("NEW ORDER – DD BANGLES");
    lines.push("");

    lines.push("CUSTOMER DETAILS");
    lines.push(`${customer.firstName} ${customer.lastName}`);
    lines.push(`Phone: ${customer.phone}`);
    lines.push(`Email: ${customer.email}`);
    lines.push("");

    lines.push("DELIVERY ADDRESS");
    lines.push(customer.address1);
    if (customer.address2) lines.push(customer.address2);
    lines.push(`${customer.city}, ${customer.state}`);
    lines.push(`PIN: ${customer.pinCode}`);
    lines.push("");

    lines.push("ORDER ITEMS");

    cart.forEach((item, i) => {
        lines.push(`${i + 1}. ${item.name}`);

        if (item.colorName) {
            lines.push(`   - Color: ${item.colorName}`);
        }

        lines.push(
            `   - Size: ${item.size}`,
            `   - Qty: ${item.qty}`,
            `   - Amount: ₹${item.price * item.qty}`
        );

        // Image preview link
        if (item.image) {
            const imageUrl = item.image.startsWith("http")
                ? item.image
                : `${window.location.origin}${item.image}`;

            lines.push(`   - Image: ${imageUrl}`);
        }

        lines.push("");
    });


    lines.push("--------------------------------");
    lines.push(`TOTAL: ₹${total}`);
    lines.push("");
    lines.push("Order placed via DD Bangles website");

    const message = lines.join("\n");

    const url = `https://wa.me/${SHOP_PHONE}?text=${encodeURIComponent(
        message
    )}`;

    window.open(url, "_blank");
};

// types/Checkout.ts
export interface CheckoutForm {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    pinCode: string;
    phone: string;
    email: string;
  }
  
"use client"

import { CartProvider } from "use-shopping-cart";

function Providers({children} : {children : React.ReactNode}) {

    
    return ( <CartProvider 
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY! as string}
        successUrl={`${process.env.NEXT_PUBLIC_VERCEL_URL}/stripe/success`}
        cancelUrl={`${process.env.NEXT_PUBLIC_VERCEL_URL}/stripe/error`}
        currency="USD"
        billingAddressCollection={true}
        shouldPersist
        language="en-US"
    >
        {children}
    </CartProvider> );
}

export default Providers;
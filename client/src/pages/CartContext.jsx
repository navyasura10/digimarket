import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [purchased, setPurchased] = useState([]); // ✅ For Downloads
    const [earnings, setEarnings] = useState(0); // ✅ For Seller Earnings

    // 🛒 Add to Cart
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // ❌ Remove from Cart
    const removeFromCart = (id) =>
        setCart((prev) => prev.filter((item) => item.id !== id));

    // 🧹 Clear entire cart
    const clearCart = () => setCart([]);

    // 💾 Add to Purchased (after checkout)
    const addToPurchased = (product) => {
        setPurchased((prev) => [...prev, product]);
    };

    // 💰 Add to Earnings (when a product is sold)
    const addEarnings = (amount) => {
        setEarnings((prev) => prev + amount);
    };

    // 🧠 Clear all purchased
    const clearPurchased = () => setPurchased([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                purchased,
                addToPurchased,
                clearPurchased,
                earnings,
                addEarnings,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

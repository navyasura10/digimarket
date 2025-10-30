import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";

function CartPage() {
    const { cart, removeFromCart, clearCart, addToPurchased } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((acc, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return acc + price * item.quantity;
    }, 0);

    const handleCheckout = () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Move items to purchased list
        cart.forEach((item) => addToPurchased(item));
        clearCart();
        alert("✅ Purchase successful! Your downloads are ready.");
        navigate("/downloads");
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

            {cart.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty 😕</p>
            ) : (
                <>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-32 h-24 object-cover rounded-md"
                                />
                                <div className="ml-4 flex-1">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-700">
                                        {item.price} × {item.quantity}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 font-semibold hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-right">
                        <h2 className="text-2xl font-semibold">
                            Total: <span className="text-blue-600">${total.toFixed(2)}</span>
                        </h2>
                        <button
                            onClick={clearCart}
                            className="mt-4 bg-gray-300 text-black px-6 py-2 rounded-md hover:bg-gray-400"
                        >
                            Clear Cart
                        </button>
                        <button
                            onClick={handleCheckout}
                            className="mt-4 ml-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                        >
                            Proceed to Checkout
                        </button>
                    </div>

                    <div className="mt-6 text-center">
                        <Link to="/" className="text-blue-600 hover:underline">
                            ← Continue Shopping
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;

import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductData";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product)
        return <div className="text-center py-10 text-gray-600">Product not found.</div>;

    return (
        <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover"
                />
            </div>

            {/* Product Details */}
            <div>
                <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
                <p className="text-gray-600 mb-2">
                    by <span className="font-semibold">{product.seller}</span>
                </p>

                <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < product.rating ? "text-yellow-500" : "text-gray-300"
                                }`}
                        />
                    ))}
                    <span className="text-sm text-gray-500">
                        ({product.reviews.length} reviews)
                    </span>
                </div>

                <p className="text-lg text-gray-700 mb-4">{product.description}</p>
                <p className="text-2xl font-semibold mb-6 text-indigo-600">
                    {product.price}
                </p>

                <div className="flex gap-4">
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-700">
                        <ShoppingCart className="w-5 h-5" /> Buy Now
                    </button>

                    <button className="border border-gray-400 px-4 py-2 rounded-md hover:bg-gray-100 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-500" /> Wishlist
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-2">💬 Customer Reviews</h2>
                    {product.reviews.length === 0 ? (
                        <p className="text-gray-500">No reviews yet.</p>
                    ) : (
                        <ul className="space-y-2">
                            {product.reviews.map((r, index) => (
                                <li key={index} className="bg-gray-100 p-3 rounded-md">
                                    <p className="font-medium">{r.user}</p>
                                    <p className="text-sm text-gray-600">{r.comment}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

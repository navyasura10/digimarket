import React from "react";
import { Link } from "react-router-dom";
import products from "./ProductData";

export default function ProductPage() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg shadow hover:shadow-lg transition p-4"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover rounded-md"
                        />
                        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                        <p className="text-gray-600">{product.price}</p>
                        <Link
                            to={`/product/${product.id}`}
                            className="mt-3 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

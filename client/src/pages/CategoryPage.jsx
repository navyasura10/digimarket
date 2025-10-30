import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const allProducts = [
    { id: 1, name: "UI Kit Design", price: "$10", category: "UI/UX Designs", image: "/images/ui.png" },
    { id: 2, name: "Research Paper", price: "$8", category: "Research Papers", image: "/images/research.png" },
    { id: 3, name: "Study Notes", price: "$5", category: "Notes", image: "/images/notes.png" },
    { id: 4, name: "Resume Template", price: "$6", category: "Templates", image: "/images/resume.png" },
];

const CategoryPage = () => {
    const { categoryName } = useParams();
    const decodedCategory = decodeURIComponent(categoryName); // ✅ Decode special characters

    const filteredProducts = allProducts.filter(
        (product) => product.category === decodedCategory
    );

    return (
        <section className="px-6 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                {decodedCategory}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products found.</p>
                )}
            </div>
        </section>
    );
};

export default CategoryPage;

import React from "react";
import { Link } from "react-router-dom";

const categories = [
    { name: "UI/UX Designs", image: "/images/ui.png" },
    { name: "Research Papers", image: "/images/research.png" },
    { name: "Notes", image: "/images/notes.png" },
    { name: "Templates", image: "/images/templates.png" },
];

export default function Categories() {
    return (
        <section className="px-6 py-10 bg-[#fafafa]">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
                Explore Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {categories.map((cat, index) => (
                    <Link
                        key={index}
                        to={`/category/${encodeURIComponent(cat.name)}`}
                        className="flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="w-20 h-20 mb-3 object-contain rounded-lg"
                        />
                        <h3 className="text-gray-700 font-medium text-base">{cat.name}</h3>
                    </Link>
                ))}
            </div>
        </section>
    );
}

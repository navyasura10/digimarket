import React, { useState } from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { id: 1, name: "UI Kit Design", price: "$10", image: "/images/ui.png" },
    { id: 2, name: "Research Paper", price: "$8", image: "/images/research.png" },
    { id: 3, name: "Study Notes", price: "$5", image: "/images/notes.png" },
    { id: 4, name: "Resume Template", price: "$6", image: "/images/resume.png" },
    { id: 5, name: "Landing Page Template", price: "$9", image: "/images/landing.png" },
    { id: 6, name: "Data Science Report", price: "$12", image: "/images/datascience.png" },
    { id: 7, name: "Infographic Design", price: "$8", image: "/images/infographic.png" },
    { id: 8, name: "Poster Design", price: "$5", image: "/images/poster.png" },
    { id: 9, name: "Presentation Slides", price: "$10", image: "/images/presentation.png" },
    { id: 10, name: "Ebook Template", price: "$7", image: "/images/ebook.png" },
  ];

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <Hero />
      <Categories />

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-10 mb-6">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-3/4 sm:w-1/2 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none dark:bg-gray-800 dark:text-white dark:border-gray-700 transition"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 🛍️ Product Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🛍️ Explore Our Products
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-6">
            No products found matching "{searchTerm}"
          </p>
        )}
      </section>
    </div>
  );
};

export default Home;

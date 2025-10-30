import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, ShoppingCart, User, Search, Moon, Sun } from "lucide-react";
import { useCart } from "../pages/CartContext";

function Navbar({ darkMode, setDarkMode }) {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // 🧭 Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔍 Handle search (navigates to search results page)
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? darkMode
            ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* 🌸 Logo */}
        <Link
          to="/"
          className={`text-2xl font-semibold transition-colors ${darkMode ? "text-gray-100" : "text-gray-800"
            }`}
        >
          DigiMarket
        </Link>

        {/* 🔍 Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 w-72"
        >
          <Search size={18} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 w-full"
          />
        </form>

        {/* 🧿 Navigation Icons */}
        <div className="flex items-center gap-6">
          {/* 🏠 Home */}
          <Link to="/" className="hover:scale-110 transition">
            <Home
              size={22}
              className={`${darkMode ? "text-gray-200" : "text-gray-700"
                } hover:text-indigo-500 transition-colors`}
            />
          </Link>

          {/* 🛒 Cart */}
          <Link to="/cart" className="relative group hover:scale-110 transition">
            <ShoppingCart
              size={22}
              className={`${darkMode ? "text-gray-200" : "text-gray-700"
                } group-hover:text-indigo-500 transition-colors`}
            />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full px-1.5">
                {cart.length}
              </span>
            )}
          </Link>

          {/* 👤 Profile */}
          <Link to="/profile" className="hover:scale-110 transition">
            <User
              size={22}
              className={`${darkMode ? "text-gray-200" : "text-gray-700"
                } hover:text-indigo-500 transition-colors`}
            />
          </Link>

          {/* ☀️ / 🌙 Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

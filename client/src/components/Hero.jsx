import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section
            className="relative flex items-center justify-center text-center py-24 px-6 overflow-hidden"
        >
            {/* Glossy dusky cement background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.9)_0%,_rgba(230,230,230,0.8)_25%,_rgba(210,210,210,0.8)_50%,_rgba(180,180,180,0.7)_75%,_rgba(160,160,160,0.6)_100%)] dark:bg-[radial-gradient(circle_at_bottom_right,_rgba(60,60,60,0.9)_0%,_rgba(40,40,40,0.8)_50%,_rgba(30,30,30,0.7)_100%)] backdrop-blur-lg"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-gray-900 dark:text-gray-100">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
                    Discover & Sell Premium Digital Products 💻
                </h1>
                <p className="text-lg md:text-xl mb-10 text-gray-700 dark:text-gray-300">
                    Explore high-quality notes, research papers, and UI/UX designs shared by talented creators like you.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link
                        to="/"
                        className="bg-white/90 text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Marketplace
                    </Link>

                    <Link
                        to="/seller"
                        className="bg-indigo-600/90 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
                    >
                        Become a Seller
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

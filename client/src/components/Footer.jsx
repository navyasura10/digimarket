import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6 text-center mt-auto">
            <p>© {new Date().getFullYear()} DigiMarket. All Rights Reserved.</p>
        </footer>
    );
}

import React from "react";

const AboutPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl font-bold mb-6 text-indigo-500">About DigiStore</h1>
            <p className="text-lg max-w-3xl text-center leading-relaxed text-gray-700 dark:text-gray-300">
                DigiStore is a digital product marketplace where creators can sell their
                digital assets like UI/UX designs, research papers, resumes, notes, posters,
                presentations, eBooks, and more.
            </p>

            <p className="text-lg max-w-3xl text-center mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                Our platform allows buyers to explore various categories, purchase quality digital
                content, and support talented creators. Sellers can easily upload their products
                and manage their sales through their dashboards.
            </p>

            <p className="text-lg max-w-3xl text-center mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                Built with the MERN stack (MongoDB, Express, React, Node.js), DigiStore ensures
                a fast, responsive, and secure experience for both buyers and sellers.
            </p>
        </div>
    );
};

export default AboutPage;

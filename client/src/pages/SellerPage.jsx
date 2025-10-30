import React from "react";

function SellerPage() {
    return (
        <div className="px-8 py-10">
            <h1 className="text-3xl font-bold mb-6">Become a Seller</h1>
            <p className="text-gray-700 mb-4">
                Share your digital creations with the world! Upload your designs, notes,
                research papers, or templates and start earning.
            </p>
            <form className="space-y-4 max-w-md">
                <input
                    type="text"
                    placeholder="Product Name"
                    className="border p-2 w-full rounded"
                />
                <input
                    type="text"
                    placeholder="Price"
                    className="border p-2 w-full rounded"
                />
                <input
                    type="file"
                    className="border p-2 w-full rounded"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                    Upload Product
                </button>
            </form>
        </div>
    );
}

export default SellerPage;

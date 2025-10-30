import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Heart,
    LogOut,
    Download,
    DollarSign,
    Settings,
} from "lucide-react";
import { useWishlist } from "../pages/WishlistContext"; // ✅ Ensure path matches your folder

function ProfilePage() {
    const [activeTab, setActiveTab] = useState("wishlist");
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();
    const { wishlist } = useWishlist();

    // 💾 Dummy user data
    const [userDetails, setUserDetails] = useState({
        name: "Navya Sura",
        email: "navya@example.com",
        password: "********",
    });

    // 🛍️ Dummy Data
    const downloadedItems = [
        {
            id: 1,
            name: "UI Kit - Modern Dashboard",
            price: "$10",
            image: "/images/ui.png",
        },
        {
            id: 2,
            name: "AI Research Paper Template",
            price: "$8",
            image: "/images/research.png",
        },
        {
            id: 3,
            name: "Engineering Notes - DBMS",
            price: "$5",
            image: "/images/notes.png",
        },
    ];

    const earningsData = [
        { id: 1, name: "Poster Template Pack", price: "$12" },
        { id: 2, name: "Portfolio UI Kit", price: "$15" },
        { id: 3, name: "Resume Template", price: "$7" },
    ];

    const sampleWishlist =
        wishlist.length > 0
            ? wishlist
            : [
                {
                    id: 1,
                    name: "3D Illustration Pack",
                    price: "$14",
                    image: "/images/templates.png",
                },
                {
                    id: 2,
                    name: "Minimal Portfolio UI",
                    price: "$9",
                    image: "/images/ui.png",
                },
            ];

    const totalEarnings = earningsData.reduce(
        (acc, item) => acc + parseFloat(item.price.replace("$", "")),
        0
    );

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        alert("Logged out successfully!");
        navigate("/login");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleSave = () => {
        alert("Your profile details have been updated!");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center p-6">
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 border-b pb-6">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt="User"
                        className="w-24 h-24 rounded-full border-2 border-gray-200"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {userDetails.name}
                        </h2>
                        <p className="text-gray-600">{userDetails.email}</p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    {[
                        { name: "wishlist", label: "Wishlist", icon: <Heart /> },
                        { name: "downloads", label: "Downloads", icon: <Download /> },
                        { name: "earnings", label: "Earnings", icon: <DollarSign /> },
                        { name: "settings", label: "Settings", icon: <Settings /> },
                        { name: "logout", label: "Logout", icon: <LogOut /> },
                    ].map((tab) => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === tab.name
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Wishlist */}
                {activeTab === "wishlist" && (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-pink-600 flex items-center gap-2">
                            <Heart className="text-pink-500" /> Your Wishlist
                        </h3>
                        {sampleWishlist.length > 0 ? (
                            <div className="grid sm:grid-cols-2 gap-4">
                                {sampleWishlist.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded-md w-full h-32 object-cover mb-3"
                                        />
                                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                        <p className="text-gray-600">{item.price}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-600">Your wishlist is empty.</p>
                        )}
                    </div>
                )}

                {/* Downloads */}
                {activeTab === "downloads" && (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center gap-2">
                            <Download className="text-blue-500" /> Your Downloads
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {downloadedItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="rounded-md w-full h-32 object-cover mb-3"
                                    />
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-gray-600">{item.price}</p>
                                    <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 text-sm">
                                        Download Again
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Earnings */}
                {activeTab === "earnings" && (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-green-600 flex items-center gap-2">
                            <DollarSign className="text-green-500" /> Your Earnings
                        </h3>
                        <ul className="space-y-3">
                            {earningsData.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex justify-between bg-gray-100 px-4 py-2 rounded-md"
                                >
                                    <span>{item.name}</span>
                                    <span className="text-green-600">{item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-right mt-4 text-lg font-semibold">
                            Total Earned:{" "}
                            <span className="text-green-600">${totalEarnings.toFixed(2)}</span>
                        </div>
                    </div>
                )}

                {/* Settings */}
                {activeTab === "settings" && (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center gap-2">
                            <Settings className="text-purple-500" /> Edit Your Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={userDetails.password}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                            <button
                                onClick={handleSave}
                                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                )}

                {/* Logout */}
                {activeTab === "logout" && (
                    <div className="text-center mt-6">
                        {!showLogout ? (
                            <button
                                onClick={() => setShowLogout(true)}
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
                            >
                                Logout
                            </button>
                        ) : (
                            <div className="space-x-3">
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                                >
                                    Confirm Logout
                                </button>
                                <button
                                    onClick={() => setShowLogout(false)}
                                    className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;

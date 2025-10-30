import { Heart, Eye, ShoppingCart } from "lucide-react";
import { useCart } from "../pages/CartContext";
import { useWishlist } from "../pages/WishlistContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full h-48 object-cover mb-3 hover:opacity-90 transition"
        />
      </Link>

      {/* Product Info */}
      <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
      <p className="text-gray-500 text-sm">{product.price}</p>

      {/* Actions */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Buy Now
        </button>

        <div className="flex gap-3 text-gray-500">
          {/* ❤️ Add to Wishlist */}
          <Heart
            onClick={() => addToWishlist(product)}
            className="w-5 h-5 cursor-pointer hover:text-red-500 transition"
          />

          {/* 👁️ View Details */}
          <Link to={`/product/${product.id}`}>
            <Eye className="w-5 h-5 cursor-pointer hover:text-blue-500 transition" />
          </Link>

          {/* 🛒 Add to Cart */}
          <ShoppingCart
            onClick={() => addToCart(product)}
            className="w-5 h-5 cursor-pointer hover:text-green-500 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

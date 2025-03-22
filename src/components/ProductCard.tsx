import { Product } from "../models/Product";

const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

const ProductCard = ({ product, onAddToCart }: { product: Product; onAddToCart: (product: Product) => void }) => {
  const imageUrl = product.image ? `${baseUrl}/${product.image}` : null;

  return (
    <div className="bg-white rounded-sm shadow-md transition-transform transform relative overflow-hidden border border-gray-200 hover:scale-105 group">
      <div className="relative bg-gray-100 rounded-sm">
        {product.labels && product.labels.length > 0 && (
          <div className="absolute top-2 left-2 flex space-x-2">
            {product.labels.map((label, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-bold px-2 py-1 rounded-md capitalize"
              >
                {label}
              </span>
            ))}
          </div>
        )}

        {imageUrl ? (
          <div>
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-60 object-cover rounded shadow-sm"
            />
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-4">No image available</p>
        )}
      </div>

      <div className="mt-2 text-left ml-3 transition-transform duration-500 ease-out group-hover:-translate-x-full opacity-100 group-hover:opacity-0">
        <h2 className="text-md font-semibold text-gray-800">{product.name}</h2>
        <p className="text-gray-500 text-sm truncate">{product.description}</p>
        <p className="text-gray-500 font-semibold mt-1 text-sm">{product.category.name}</p>
        <div className="mt-2 mb-3">
          {product.discountPrice ? (
            <p className="text-lg font-bold text-gray-600">
              LKR {product.price}{" "}
              <span className="text-red-500 line-through text-sm ml-2">LKR {product.discountPrice}</span>
            </p>
          ) : (
            <p className="text-lg font-bold">LKR {product.price}</p>
          )}
        </div>
      </div>

      {/* Add to Cart Popup on Hover */}
      <div className="absolute bottom-0 left-0 right-0 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none group-hover:pointer-events-auto">
        <div className="bg-white shadow-lg p-3 rounded-t-md text-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

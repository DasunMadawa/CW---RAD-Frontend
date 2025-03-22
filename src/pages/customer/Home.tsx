// import { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { fetchActiveProducts } from "../../services/productService";
// import { Product } from "../../models/Product";

import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import { Product } from "../../models/Product";
import { fetchActiveProducts } from "../../services/productService";

// const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001";

// const Home = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const data = await fetchActiveProducts();
//       setProducts(data);
//     };
//     loadProducts();
//   }, []);


//   return (
//     <div>
//       <Navbar />
//       <div className="p-8">
//         <h1 className="text-3xl font-bold text-center mb-6">Popular Products</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {products.map((product) => {

//             const imageUrl = product.image ? `${baseUrl}/${product.image}` : null;

//             return (
//               <div
//                 key={product._id}
//                 className="bg-white rounded-sm shadow-md transition-transform transform relative overflow-hidden border border-gray-200"
//               >
//                 <div className="relative bg-gray-100 rounded-sm">
//                   {product.labels && product.labels.length > 0 && (
//                     <div className="absolute top-2 left-2 flex space-x-2">
//                       {product.labels.map((label, index) => (
//                         <span
//                           key={index}
//                           className="bg-gradient-to-r from-gray-700 to-black text-white text-xs font-bold px-2 py-1 rounded-md capitalize"
//                         >
//                           {label}
//                         </span>
//                       ))}
//                     </div>
//                   )}

//                   {imageUrl ? (
//                     <div className="">
//                       <img
//                         src={imageUrl}
//                         alt={product.name}
//                         className="w-full h-60 object-cover rounded shadow-sm"
//                       />
//                     </div>
//                   ) : (
//                     <p className="text-gray-500 text-center mt-4">No image available</p>
//                   )}
//                 </div>
//                 <div className="mt-2 text-left ml-3">
//                   <h2 className="text-md font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-500 text-sm truncate">{product.description}</p>
//                   <p className="text-gray-500 font-semibold mt-1 text-sm">{product.category.name}</p>
//                   <div className="mt-2 mb-3">
//                     {product.discountPrice ? (
//                       <p className="text-lg font-bold text-gray-600">
//                         LKR {product.price}{" "}
//                         <span className="text-red-500 line-through text-sm ml-2">LKR {product.discountPrice}</span>
//                       </p>
//                     ) : (
//                       <p className="text-lg font-bold">LKR {product.price}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;



const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchActiveProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Cart:", [...cart, product]);
  };

  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
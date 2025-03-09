import React from "react";

const AllProducts = () => {
  const products = [
    {
      id: 1,
      productName: "Burger",
      price: 150,
      category: ["Veg"],
      bestSeller: true,
      image: "https://static.vecteezy.com/system/resources/thumbnails/023/809/530/small/a-flying-burger-with-all-the-layers-ai-generative-free-photo.jpg",
    },
    {
      id: 2,
      productName: "Pizza",
      price: 300,
      category: ["Non-Veg"],
      bestSeller: false,
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      productName: "Pasta",
      price: 200,
      category: ["Veg"],
      bestSeller: true,
      image: "https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9tYXRvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full h-[88vh] min-h-screen bg-gray-200 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">All Products</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Best Seller</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">
                  <img src={product.image} alt={product.productName} className="w-12 h-12 object-cover mx-auto" />
                </td>
                <td className="border border-gray-300 px-4 py-2">{product.productName}</td>
                <td className="border border-gray-300 px-4 py-2">₹{product.price}</td>
                <td className="border border-gray-300 px-4 py-2">{product.category.join(", ")}</td>
                <td className="border border-gray-300 px-4 py-2">{product.bestSeller ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;


// THE BELOW CODE IS API CODE
// import React, { useEffect, useState } from "react";

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch(`${API_URL}/product/all-products`);
//         const data = await response.json();
//         if (response.ok) {
//           setProducts(data);
//         } else {
//           console.error("Failed to fetch products");
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h2 className="text-2xl font-semibold mb-4 text-center">All Products</h2>
//       {loading ? (
//         <p className="text-center">Loading products...</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-300">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="py-2 px-4 border">Product Name</th>
//                 <th className="py-2 px-4 border">Price</th>
//                 <th className="py-2 px-4 border">Category</th>
//                 <th className="py-2 px-4 border">Best Seller</th>
//                 <th className="py-2 px-4 border">Image</th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product) => (
//                 <tr key={product.id} className="text-center border-b">
//                   <td className="py-2 px-4 border">{product.productName}</td>
//                   <td className="py-2 px-4 border">${product.price}</td>
//                   <td className="py-2 px-4 border">{product.category.join(", ")}</td>
//                   <td className="py-2 px-4 border">{product.bestSeller ? "Yes" : "No"}</td>
//                   <td className="py-2 px-4 border">
//                     <img
//                       src={product.imageUrl}
//                       alt={product.productName}
//                       className="w-16 h-16 object-cover mx-auto rounded"
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AllProducts;

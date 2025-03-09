import React, { useState } from "react";
import { API_URL } from '../../data/apiPath';
import { ThreeCircles } from 'react-loader-spinner';


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    if (category.includes(value)) {
      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
    }
  };

  const handleBestSeller = (event) => {
    const value = event.target.value === "true";
    setBestSeller(value);
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginToken = localStorage.getItem("loginToken");
      const firmId = localStorage.getItem("firmId");
      if (!loginToken || !firmId) {
        console.error("user not authenticated");
      }
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("bestSeller", bestSeller);
      formData.append("image", image);

      category.forEach((value) => {
        formData.append("category", value);
      });
      const response = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        alert("Product added successfully");
      }
      setProductName("");
      setPrice("");
      setCategory([]);
      setBestSeller(false);
      setImage(null);
      setDescription("");
    } catch (error) {
      alert("Failed to add Product");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[88vh] min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Add Product</h2>
        <form onSubmit={handleAddProduct} className="space-y-3">
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="veg"
                  checked ={category.includes('veg')} 
                  onChange={handleCategoryChange}
                  className="mr-2 w-5 h-5"
                />
                Veg
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="non-veg" 
                  checked ={category.includes('non-veg')} 
                  onChange={handleCategoryChange}
                  className="mr-2 w-5 h-5"
                />
                Non-Veg
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageUpload}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label className="block text-gray-700">Best Seller</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bestSeller"
                  value="true"
                  checked={bestSeller === true}
                  onChange={handleBestSeller}
                  className="mr-2 w-5 h-5"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="bestSeller"
                  value="false"
                  checked={bestSeller === false}
                  onChange={handleBestSeller}
                  className="mr-2 w-5 h-5"
                />
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-1.5 border border-gray-300 rounded mt-1"
              rows="3"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

import React from "react";

export default function AddProduct() {
  return (
    <div className="mt-25 my-10 max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-2xl">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add New Product
      </h1>

      {/* Product Form */}
      <form className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Description
          </label>
          <textarea
            placeholder="Enter product description"
            className="w-full border border-gray-300 rounded-lg p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Sale Price
            </label>
            <input
              type="number"
              placeholder="Enter sale price"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Category
          </label>
          <input
            type="text"
            placeholder="Enter category"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

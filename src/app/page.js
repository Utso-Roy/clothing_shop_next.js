import React from "react";
import Image from "next/image";
import { FaTshirt, FaShoppingBag, FaUserFriends } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

export default function Home() {
  return (
    <div className="lg:mt-20 max-w-7xl my-10 mx-auto px-6">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl lg:text-7xl font-extrabold mb-6">
          Trendy <span className="text-indigo-600">Clothing Shop</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Discover the latest fashion collections for men, women, and kids at
          unbeatable prices. Style that speaks for you.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition font-semibold shadow-md">
          Shop Now
        </button>
      </section>

      {/* Categories */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
        <div className="p-8 bg-white shadow-md rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <FaTshirt className="text-5xl text-indigo-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Men</h3>
        </div>
        <div className="p-8 bg-white shadow-md rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <FaShoppingBag className="text-5xl text-indigo-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Women</h3>
        </div>
        <div className="p-8 bg-white shadow-md rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <FaUserFriends className="text-5xl text-indigo-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Kids</h3>
        </div>
        <div className="p-8 bg-white shadow-md rounded-2xl text-center hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
          <MdLocalOffer className="text-5xl text-indigo-600 mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Offers</h3>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src="https://i.ibb.co/3YPwQ5n4/panjabi-1.jpg"
                alt="Product 1"
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="font-semibold text-lg">Casual Denim Shirt</h3>
            <p className="text-gray-600">BDT 2490</p>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src="https://i.ibb.co/JW4R1yZJ/image44.jpg"
                alt="Product 2"
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="font-semibold text-lg">Classic Polo T-Shirt</h3>
            <p className="text-gray-600">BDT 1990</p>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition">
            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src="https://i.ibb.co/TBX9V7dX/images-4.jpg"
                alt="Product 3"
                fill
                className="object-cover hover:scale-105 transition"
              />
            </div>
            <h3 className="font-semibold text-lg">Stylish Panjabi</h3>
            <p className="text-gray-600">BDT 2890</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 text-gray-600 text-center py-16 mt-16 rounded-2xl">
        <h2 className="text-4xl font-bold mb-4">Join Our Fashion Club</h2>
        <p className="mb-8 text-lg">
          Get exclusive discounts, early access to new arrivals, and more.
        </p>
        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-md">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}

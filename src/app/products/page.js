import dbConnect from "@/lib/dbConnect";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export default async function Products() {
  const collection = await dbConnect("ShopData");
  const data = await collection.find({}).toArray();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          {/* Product Image */}
       {/* Product Image */}
<div className="relative w-full h-48 md:h-56 lg:h-64">
  <Image
    src={item.images}
    alt={item.name}
    fill 
    className="object-cover rounded-t-2xl"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>


          {/* Product Info */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            <p className="text-sm text-gray-500">
              {item.category} • {item.subcategory}
            </p>
            <p className="mt-2 text-gray-700 text-sm line-clamp-2">
              {item.description}
            </p>

            {/* Price Section */}
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xl font-bold text-green-600">
                {item.salePrice} {item.currency}
              </span>
              {item.salePrice < item.price && (
                <span className="line-through text-gray-400">
                  {item.price} {item.currency}
                </span>
              )}
            </div>

            {/* Rating & Stock */}
            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
              <span>
                ⭐ {item.rating} ({item.reviewsCount} reviews)
              </span>
              <span
                className={item.stock > 0 ? "text-green-600" : "text-red-600"}
              >
                {item.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Details Button */}
            <div className="mt-4">
              <Link  className="w-full bg-blue-400 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition" href={`/products/${item._id}`}>
             
                  View Details
                
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

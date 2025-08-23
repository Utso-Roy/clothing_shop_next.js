import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = params;

  const collection = await dbConnect("ShopData");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

      {/* Product Image */}
      <div className="relative w-full h-70 md:h-80 lg:h-96 mb-4 rounded-2xl overflow-hidden">
        <Image
          src={product.images}
          alt={product.name}
          width={500}       // desired width
          height={800}      // desired height
          className="object-contain w-full h-full"
        />
      </div>

      <p className="text-gray-700  mb-2">{product.description}</p>
      <p className="text-green-600 font-bold text-xl">
        {product.salePrice} {product.currency}
      </p>
      {product.salePrice < product.price && (
        <span className="line-through text-gray-400">
          {product.price} {product.currency}
        </span>
      )}
    </div>
  );
}

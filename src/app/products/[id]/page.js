import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai"; 
export default async function ProductDetails({ params }) {
  const { id } = params;

  const collection = await dbConnect("ShopData");
  const product = await collection.findOne({ _id: new ObjectId(id) });

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-3xl my-20 mx-auto p-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
        >
          <AiOutlineArrowLeft size={22} />
          Back to Products
        </Link>
      </div>

      <h1 className="text-2xl font-bold text-blue-500 text-center mb-4">{product.name}</h1>

      {/* Product Image */}
      <div className="relative w-full h-70 md:h-80 lg:h-96 mb-4 rounded-2xl overflow-hidden">
        <Image
          src={product.images}
          alt={product.name}
          width={500}
          height={800}
          className="object-contain w-full h-full"
        />
      </div>

      <p className="text-gray-700 mb-2">{product.description}</p>

      <p className="text-blue-800 font-semibold">
        Product sizes:{" "}
        {product.sizes?.map((size, index) => (
          <span key={index} className="mr-2">
            {size}
          </span>
        ))}
      </p>

      <p className="text-blue-800 font-semibold">
        Product colors:{" "}
        {product.colors?.map((color, index) => (
          <span key={index} className="mr-2">
            {color}
          </span>
        ))}
      </p>

      <p className="text-blue-800 font-semibold">Stock: {product.stock}</p>

      <p className="text-green-600 font-bold text-xl">
        <p>Product Material: {product.material}</p>
        {product.salePrice} {product.currency}
      </p>

      {product.salePrice < product.price && (
        <span className="line-through text-gray-400">
          {product.price} {product.currency}
        </span>
      )}

      <p className="text-yellow-500 font-semibold">
        Reviews Count: {product.reviewsCount}
      </p>
    </div>
  );
}

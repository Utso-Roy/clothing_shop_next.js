import dbConnect from "../../../../src/lib/dbConnect";
export async function POST(req) {
  try {
    const data = await req.json();
    const collection = await dbConnect("ShopData"); 

    const result = await collection.insertOne(data);

    return new Response(
      JSON.stringify({ message: "Product added", id: result.insertedId }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}

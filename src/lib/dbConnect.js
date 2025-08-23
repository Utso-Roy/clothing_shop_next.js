import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export default async function dbConnect(collectionName) {
  try {
    if (!client.isConnected?.()) await client.connect();
    const db = client.db(process.env.DB_NAME);
    return db.collection(collectionName);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

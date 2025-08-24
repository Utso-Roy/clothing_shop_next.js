// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs"; // password hash compare করার জন্য

const client = new MongoClient(process.env.MONGODB_URI);

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@email.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await client.connect();
          const db = client.db(process.env.DB_NAME);
          const usersCollection = db.collection("users");

          // email দিয়ে ইউজার খুঁজবো
          const user = await usersCollection.findOne({ email: credentials.email });

          if (!user) {
            throw new Error("No user found with this email");
          }

          // password মিলাচ্ছি
          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

          if (!isPasswordCorrect) {
            throw new Error("Invalid password");
          }

          // সব ঠিক থাকলে ইউজার রিটার্ন করবো
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        } catch (err) {
          console.error("Authorize Error:", err);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // লগইন পেজ override
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

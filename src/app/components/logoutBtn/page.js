"use client";
import { signOut } from "next-auth/react";
import React from "react";

export default function LogoutBtn() {
  return (
    <div>
      <button onClick={() => signOut()} className="text-red-500 font-semibold">
        {" "}
        Logout
      </button>
    </div>
  );
}

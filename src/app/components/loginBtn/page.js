"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function LoginBtn() {
  return (
    <div>
      <button className="btn bg-blue-500 text-white" onClick={() => signIn()}>
        Login
      </button>
    </div>
  );
}

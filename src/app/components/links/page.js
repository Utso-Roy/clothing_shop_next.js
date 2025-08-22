"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Links() {
  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={pathname === "/" ? "text-blue-500 font-bold" : ""}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={pathname === "/products" ? "text-blue-500 font-bold" : ""}
        >
          Products
        </Link>
      </li>
    </>
  );
  return links;
}

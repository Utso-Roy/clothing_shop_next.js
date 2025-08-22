"use client";
import React from "react";
import Login from "../loginBtn/page";
import Links from "../links/page";
import Link from "next/link";
import LoginBtn from "../loginBtn/page";
// import { useSession } from "next-auth/react";

export default function Navbar() {
  // const { data: session } = useSession()
  // console.log(session)
  
  return (
    <div className="navbar bg-gray-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Links></Links>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {" "}
          <Links></Links>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link href="/login">
          <button className="btn">
            
            Login
        </button>
        </Link> */}
        <LoginBtn></LoginBtn>
      </div>
    </div>
  );
}

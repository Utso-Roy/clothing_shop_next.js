import React from "react";
import Links from "../links/page";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import Image from "next/image";
import image from "../../../../public/image.png";
import { FaTachometerAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import Link from "next/link";

export default async function Navbar() {
  const session = await getServerSession(authOption);

  return (
    <div className="navbar fixed z-50 top-0 bg-gray-100 shadow-sm">
      {/* Left Side */}
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
            <Links />
          </ul>
        </div>
        <div>
          <Image
            src={image}
            alt="Logo"
            width={60}
            height={20}
            className="object-contain"
          />
        </div>
      </div>

      {/* Center Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        {session && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full ring-2 ring-offset-2 ring-primary">
                <Image
                  src={
                    session.user?.image || "https://i.ibb.co/QFCKhZX1/dog.jpg"
                  }
                  width={40}
                  height={40}
                  alt="User Avatar"
                  className="rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="px-2 py-1 rounded-md cursor-pointer  ">
                
                <Link
                  href="/dashboard/add-product"
                  className="font-semibold flex gap-1 text-lg text-gray-700"
                >
                  <MdDashboardCustomize className="text-indigo-600" />
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

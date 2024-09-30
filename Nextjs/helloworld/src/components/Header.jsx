"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className="flex justify-center items-center
    gap-5 py-3 bg-fuchsia-200"
    >
      <Link href={"/blogs"}>
        <h1
          className={`font-semibold cursor-pointer hover:underline
           ${pathname.includes("blogs") ? "underline font-bold" : ""}`}
        >
          Blogs
        </h1>
      </Link>
      <Link href={"/users"}>
        <h1 className="font-semibold cursor-pointer hover:underline">Users</h1>
      </Link>
      <Link href={"/contact"}>
        <h1 className="font-semibold cursor-pointer hover:underline">
          Contact
        </h1>
      </Link>
      <Link href={"/dashboard/profile"}>
        <h1 className="font-semibold cursor-pointer hover:underline">
          Dashboard
        </h1>
      </Link>
      <Link href={"/about"}>
        <h1 className="font-semibold cursor-pointer hover:underline">About</h1>
      </Link>
    </div>
  );
};

export default Header;

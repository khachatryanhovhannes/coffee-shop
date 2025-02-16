"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "./../../public/logo.png";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const pathName = usePathname();

  const links = [
    {
      id: 1,
      label: "Home",
      link: "/",
    },
    {
      id: 2,
      label: "Our Coffee",
      link: "/our-coffee",
    },
    {
      id: 3,
      label: "Products",
      link: "/products",
    },
    {
      id: 4,
      label: "About Us",
      link: "/about-us",
    },
    {
      id: 5,
      label: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <div className="px-1 md:px-20 flex justify-between items-center w-full h-20 text-white bg-black nav">
      <div className="max-w-20 px-2">
        <Link
          className="link-underline link-underline-black"
          href="/"
          rel="noreferrer"
        >
          <Image src={logo} objectFit="cover" alt="Logo" />
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, label }) => {
          const isActiveColorClass =
            pathName == link ? "text-gray-300" : "text-gray-500";
          return (
            <li
              key={id}
              className={
                "nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-white duration-200 link-underline " +
                isActiveColorClass
              }
            >
              <Link href={link}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;

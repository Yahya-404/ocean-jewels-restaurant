"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";

import { useLogicProvider } from "@/context/ContextProvider";
import { Logo, NavbarLinks } from "./shared/routes";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isMenuActive, setIsMenuActive, wishlistIds, cartIds } =
    useLogicProvider();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuToggle = () => setIsMenuActive((prev) => !prev);

  return (
    <nav
      className={`z-30 pos-fixed max-lg:bg-[#ffffffe6] max-lg:shadow-navbar border-b border-solid transition-500 ${
        scrolled
          ? "bg-[#ffffffcc] backdrop-blur-xl py-4 border-[#f2f2f2]"
          : "py-4 lg:py-6 border-transparent"
      }`}
    >
      <div className="container flex-between">
        <Logo />

        {/* Toggle-Menu-Links */}
        <div
          className={`z-20 pos-absolute h-screen bg-[#f3f3f5] bg-[url(/assets/images/blog-pattern-bg.png)] bg-cover flex-start pt-32 ${
            isMenuActive
              ? "translate-y-0 cubic-bezier"
              : "-translate-y-full transition-300"
          }`}
        >
          <NavbarLinks customClass="flex flex-col gap-8" />
        </div>

        {/* btn */}
        <div className="flex items-center gap-12">
          <NavbarLinks customClass="max-lg:hidden" />
          <div id="navbar-btn" className="flex items-center gap-4">
            {/* Wishlist */}
            <Link href="/wishlist" className="p-2.5 rounded-md">
              <LuHeart />
              <span className="absolute -top-2.5 -right-1.5 bg-[#ffffff] font-medium w-5 h-5 flex-center text-xs border border-solid border-[#bfbfbf] rounded-full">
                {wishlistIds.length}
              </span>
            </Link>
            {/* Cart */}
            <Link href="/cart" className="p-2.5 rounded-md">
              <BsCart />
              <span className="absolute -top-2.5 -right-1.5 bg-[#ffffff] font-medium w-5 h-5 flex-center text-xs border border-solid border-[#bfbfbf] rounded-full">
                {cartIds.length}
              </span>
            </Link>
            {/* Menu-Toggle */}
            <button
              className={`lg:hidden z-20 w-9 h-9 px-2 rounded-md`}
              onClick={handleMenuToggle}
            >
              <span
                className={`mb-1 relative bg-accent block w-full h-1 rounded-full transition-all duration-300 ease-linear ${
                  isMenuActive && "rotate-45 top-1"
                }`}
              ></span>
              <span
                className={`relative bg-accent block w-full h-1 rounded-full transition-all duration-300 ease-linear ${
                  isMenuActive && "-rotate-45 -top-1"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

"use client";

import Image from "next/image";
import { useLogicProvider } from "@/context/ContextProvider";
import { RiStarSLine } from "react-icons/ri";
import { LuHeart, LuPlus } from "react-icons/lu";

export const MenuCard = ({
  id,
  name,
  img,
  type,
  pieces,
  price,
  rate,
}: {
  id: number;
  name: string;
  img: string;
  type: string;
  pieces: number;
  price: number;
  rate: number;
}) => {
  const { toggleWishlist, toggleCart, wishlistIds } = useLogicProvider();

  const handleWishlistClicked = () => {
    toggleWishlist(id);
  };

  const handleCartClicked = () => {
    toggleCart(id);
  };

  return (
    <div className="w-full max-w-[290px] relative rounded-3xl p-6 bg-menu-card shadow-card cubic-bezier-2">
      {/* card-img */}
      <div className="relative p-2">
        <button
          className="absolute top-0 left-0 cursor-pointer"
          onClick={handleWishlistClicked}
        >
          <LuHeart
            className={`text-accent text-2xl transition-500 hover:fill-accent ${
              wishlistIds.includes(id) ? "fill-accent" : "fill-none"
            }`}
          />
        </button>
        <Image
          src={img}
          alt="food"
          width={170}
          height={170}
          className="mx-auto shadow-card rounded-full"
        />
      </div>

      {/* Rate */}
      <div className="flex-center gap-0.5 text-xl mt-6 mb-4">
        <span className="text-primary-100 font-medium text-xl">{rate}</span>
        <RiStarSLine className="text-accent text-2xl" />
      </div>

      {/* card-title */}
      <h1 className="capitalize text-center text-3xl mb-8">{name}</h1>

      {/* card-options */}
      <div className="mb-4">
        <div className="flex-between">
          <p>Type:</p>
          <p className="font-medium capitalize">{type}</p>
        </div>
        <div className="flex-between">
          <p>Pieces:</p>
          <p className="font-medium">{pieces}</p>
        </div>
      </div>

      <hr className="h-0.5 w-full bg-[#cccccc4d]" />

      {/* cart-add-btn */}
      <div className="flex-between mt-4">
        <span className="text-primary-100 text-xl font-semibold w-full">
          {price} EGP
        </span>
        <button
          className="bg-cart-btn p-1.5 rounded-lg shadow-inset-cart-btn hover:bg-cart-btn-hover"
          onClick={handleCartClicked}
        >
          <LuPlus className="text-2xl text-white" />
        </button>
      </div>
    </div>
  );
};

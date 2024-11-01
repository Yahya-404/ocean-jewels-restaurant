"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLogicProvider } from "@/context/ContextProvider";
import CartCard from "@/components/ui/CartCard";
import { Navbar } from "@/components/Navbar";

const Page = () => {
  const [totalPrices, setTotalPrices] = useState(0);
  const { menuItems, toggleCart, cartIds } = useLogicProvider();

  const [piecesMap, setPiecesMap] = useState<{ [id: number]: number }>({});

  const filteredProducts = menuItems.filter((items) =>
    cartIds.includes(items.id)
  );

  useEffect(() => {
    const total = filteredProducts.reduce((accumulator, item) => {
      const pieces = piecesMap[item.id] || 1; // عدد القطع
      return accumulator + item.price * pieces;
    }, 0);
    setTotalPrices(total);
  }, [filteredProducts, piecesMap]);

  // تحديث حالة القطع بناءً على الـ id
  const updatePieces = (id: number, newPieces: number) => {
    setPiecesMap((prev) => ({ ...prev, [id]: newPieces }));
    if (newPieces === 0) {
      toggleCart(id);
    }
  };

  return (
    <main className="relative h-full">
      <Navbar />
      {/* parallax Scene */}
      <div className="-z-10 pos-absolute hidden lg:block">
        <div className="max-w-32 absolute top-20 right-8 blur-sm">
          <Image
            src="/assets/images/berry.png"
            alt="berry"
            width={300}
            height={300}
          />
        </div>
        <div className="absolute -left-28 top-96 blur-sm">
          <Image
            src="/assets/images/leaf.png"
            alt="leaf"
            width={400}
            height={400}
          />
        </div>
      </div>

      <div className="container h-full">
        {cartIds.length > 0 ? (
          <div className="max-xl:pt-40 max-xl:pb-28 xl:py-52">
            <div className="mb-8 text-opacity-70 text-xl font-semibold">
              {cartIds.length} <h5 className="inline-block">Items In cart</h5>
            </div>
            <div className="flex-start max-md:flex-col gap-12">
              <div className="w-full flex flex-col gap-4">
                {filteredProducts.map((item) => (
                  <CartCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    img={item.image}
                    type={item.type}
                    price={item.price}
                    dishes={item.pieces}
                    pieces={piecesMap[item.id] || 1}
                    updatePieces={updatePieces}
                  />
                ))}
              </div>
              <div className="max-md:ml-auto w-full max-w-52 bg-chef-card shadow-chef-card border border-solid border-[#bfbfbf] p-2 rounded-md">
                <div>
                  <div className="flex-between">
                    <p className="font-medium">TOTAL:</p>
                    <span className="text-accent font-medium">
                      {totalPrices}
                    </span>
                  </div>
                  <div className="flex-between">
                    <p className="font-medium">SHIPPING:</p>
                    <span className="text-accent font-medium">FREE</span>
                  </div>
                </div>
                <hr className="h-0.5 w-full bg-[#cccccc4d] my-2" />
                <button className="w-full font-medium text-white bg-cart-btn p-2 rounded-xl hover:bg-cart-btn-hover">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex-center flex-col gap-8 text-center">
            <h1 className="text-4xl uppercase leading-snug">
              your <span className="text-accent">cart</span> is currently empty
            </h1>
            <Link href="/#menu" className="primary-btn">
              check our menu
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;

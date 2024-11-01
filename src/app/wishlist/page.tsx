"use client";
import Image from "next/image";
import Link from "next/link";
import { useLogicProvider } from "@/context/ContextProvider";
import { MenuCard } from "@/components/shared/MenuCard";
import { Navbar } from "@/components/Navbar";

const Page = () => {
  const { menuItems, wishlistIds } = useLogicProvider();

  const filteredProducts = menuItems.filter((items) =>
    wishlistIds.includes(items.id)
  );

  return (
    <main className="relative h-fit overflow-hidden">
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

      {/* Container */}
      <div className="container">
        {/* Content */}
        {wishlistIds.length > 0 ? (
          <div className="max-xl:pt-40 max-xl:pb-28 xl:py-52">
            <div className="mb-8 text-opacity-70 text-xl font-semibold">
              {wishlistIds.length}{" "}
              <h5 className="inline-block">Items In wishlist</h5>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
              {filteredProducts.map((item) => (
                <MenuCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.image}
                  type={item.type}
                  price={item.price}
                  rate={item.rating}
                  pieces={item.pieces}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex-center flex-col gap-8 text-center">
            <h1 className="text-4xl leading-snug uppercase">
              your <span className="text-accent">wishlist</span> is currently
              empty
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

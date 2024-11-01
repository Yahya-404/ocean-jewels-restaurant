import Image from "next/image";
import Link from "next/link";
import { ParallaxScene } from "./shared/ParallaxScene";

export const HeroSection = () => {
  return (
    <section
      id="hero-sec"
      className="relative min-h-screen max-xl:pt-40 max-xl:pb-28 xl:py-52"
    >
      <ParallaxScene />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-20">
        {/* Hero-Description */}
        <div className="col-span-1 max-w-xl max-lg:mx-auto lg:max-w-md">
          <h1 className="leading-snug text-5xl sm:text-6xl lg:text-7xl">
            Welcome To{" "}
            <span className="text-accent leading-snug">Ocean Jewels</span>{" "}
            Restaurant.
          </h1>
          <p className="max-w-md sm:max-w-xl lg:max-w-md mt-6">
            Taste the True Flavor of the Sea, We offer you a unique seafood
            dining experience with the most delicious ocean-inspired dishes.
          </p>
          <button>
            <Link href="#menu" className="mt-6 primary-btn">
              check our menu
            </Link>
          </button>
        </div>
        {/* Hero-Image */}
        <div className="col-span-1">
          <div className="relative max-lg:mx-auto w-full max-w-lg h-full max-sm:h-[55vh] sm:h-[75vh] lg:h-[70vh] select-none pointer-events-none">
            <Image
              src="/assets/images/hero-img.jpg"
              alt="sushi"
              fill
              className="animate-jelly shadow-hero-banner-img"
            />
          </div>
          <h5 className="mt-4 text-primary-2 text-xl text-center">Sushi</h5>
        </div>
      </div>
    </section>
  );
};

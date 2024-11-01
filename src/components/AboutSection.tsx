"use client";

import Image from "next/image";

import { PiPlayBold } from "react-icons/pi";

import { useLogicProvider } from "@/context/ContextProvider";
import { Topics } from "./shared/routes";
import { AboutMedia } from "./ui/AboutMedia";

export const AboutSection = () => {
  const { setIsVideoActive } = useLogicProvider();

  const handleMediaClicked = () => setIsVideoActive((prev) => !prev);

  return (
    <>
      <AboutMedia />
      <section id="about" className="all-sections">
        {/* Container */}
        <div className="container">
          <Topics
            secName={"about us"}
            title={
              <>
                discover our <br /> restaurant history
              </>
            }
            description={
              "Our commitment to quality extends beyond our food. We pride ourselves on exceptional service, ensuring that every visit is memorable. Join us at and embark on a culinary journey that captures the essence of the ocean."
            }
          />
          {/* About-Img */}
          <div className="relative mx-auto max-w-2xl h-[30vh] min-h-72 sm:h-[55vh] sm:min-h-96">
            <Image
              src="/assets/images/about.jpg"
              alt="about-us"
              fill
              className="object-cover rounded-3xl"
            />
          </div>
          {/* About-Btn */}
          <div className="flex-center gap-6 mt-12">
            <button
              className="p-8 shadow-circle-btn bg-[#f3f3f3] text-amber-500 rounded-full hover:shadow-play-btn"
              onClick={handleMediaClicked}
            >
              <PiPlayBold fontSize={25} />
            </button>
            <h3 className="text-primary-100 opacity-70 text-xl font-custom font-medium uppercase">
              discover more
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

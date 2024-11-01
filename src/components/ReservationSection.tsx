import Image from "next/image";
import { Topics } from "./shared/routes";
import { LuPhone } from "react-icons/lu";
import { Gallery } from "./ui/Gallery";

export const ReservationSection = () => {
  return (
    <section id="reservation-sec" className="all-sections">
      {/* Shape-Image */}
      <div>
        <Image
          src="/assets/images/table-leaves-shape.png"
          alt="leaves-shape"
          width={350}
          height={350}
          className="absolute top-0 left-0"
        />
      </div>
      <div>
        <Image
          src="/assets/images/table-leaves-shape.png"
          alt="leaves-shape"
          width={350}
          height={350}
          className="absolute top-0 right-0 scale-x-[-1]"
        />
      </div>
      {/* Container */}
      <div className="container">
        <Topics secName={"book table"} title={"opening table"} />
        {/* reservation-info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 text-center mb-24">
          {/*  */}
          <div className="tracking-widest flex-center flex-col">
            <h3 className="capitalize font-custom font-semibold text-2xl md:text-3xl">
              monday to thursday
            </h3>
            <span className="text-xl mt-2">9:00 Am - 22:00 Pm</span>
          </div>
          {/*  */}
          <div className="max-md:p-8 md:px-6 md:py-3 border-dotted border-primary-100 border-opacity-50 max-md:border-y-2 md:border-x-2 mx-auto">
            <button className="p-6 bg-[#f3f3f5] shadow-circle-btn text-accent rounded-full mb-8">
              <LuPhone fontSize={25} />
            </button>
            <span className="block text-3xl tracking-wide">
              +20 - 8877998855
            </span>
          </div>
          {/*  */}
          <div className="tracking-widest flex-center flex-col">
            <h3 className="capitalize font-custom font-semibold text-2xl md:text-3xl">
              friday to sunday
            </h3>
            <span className="text-xl mt-2">11:00 Am - 20:00 Pm</span>
          </div>
        </div>
      </div>
      <Gallery />
    </section>
  );
};

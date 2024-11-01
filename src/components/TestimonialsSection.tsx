import Image from "next/image";
import { Topics } from "./shared/Topics";

export const TestimonialsSection = () => {
  const cards = [
    {
      name: "nilay hirpara",
      img: "/assets/images/testimonials/t1.jpg",
      statement:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam.",
    },
    {
      name: "ravi kumawat",
      img: "/assets/images/testimonials/t2.jpg",
      statement:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam.",
    },
    {
      name: "navnit kumar",
      img: "/assets/images/testimonials/t3.jpg",
      statement:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam.",
    },
    {
      name: "somyadeep bhowmik",
      img: "/assets/images/testimonials/t4.jpg",
      statement:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quisquam.",
    },
  ];

  return (
    <section id="testimonials-sec" className="all-sections bg-[#f8f9fa]">
      <Topics
        secName={"what they say"}
        title={
          <>
            what our customers <br /> say about us
          </>
        }
      />
      {/* Container */}
      <div className="container flex items-start max-lg:flex-col gap-8 gap-y-24 mt-32">
        {/* Banner-img */}
        <Image
          src="/assets/images/testimonial-img.png"
          alt="testimonial"
          width={400}
                  height={400}
          className="max-lg:hidden max-w-sm"
        />
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16">
          {cards.map((card, index) => (
            // Card
            <div
              key={index}
              className="relative bg-testimonials p-8 shadow-testimonials rounded-xl cubic-bezier-2 hover:scale-105"
            >
              {/* Card-img */}
              <Image
                src={card.img}
                alt=""
                width={400}
                  height={400}
                className="absolute -top-8 w-20 rounded-full ring-4 ring-accent"
              />
              {/* Card-rate */}
              <div>
                <span></span>
              </div>
              <h3 className="text-xl capitalize mt-8">
                {card.name}
              </h3>
              <p className="text-primary-200 mt-3">{card.statement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

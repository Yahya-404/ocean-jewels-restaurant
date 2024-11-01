import Image from "next/image";

export const BrandsSection = () => {
  const brands = [
    "/assets/images/brands/b1.png",
    "/assets/images/brands/b2.png",
    "/assets/images/brands/b5.png",
    "/assets/images/brands/b3.png",
    "/assets/images/brands/b4.png",
  ];

  return (
    <section id="brands-Sec" className="all-sections">
      {/* Container */}
      <div className="container">
        <h5 className="text-opacity-70 font-medium text-xl tracking-widest uppercase mb-16">
          trusted by +70 company
        </h5>
        {/* Brands */}
        <div className="flex-between gap-4">
          {/* Brand */}
          {brands.map((brand, index) => (
            <div
              key={index}
              className="max-w-52 transition-all duration-300 ease-in-out hover:brightness-50"
            >
              <Image src={brand} width={250} height={250} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

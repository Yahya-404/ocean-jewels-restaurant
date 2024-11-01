import Image from "next/image";

export const ParallaxScene = () => {
  return (
    <div className="-z-10 pos-absolute hidden lg:block">
      <div className="max-w-36 absolute top-20 right-8 blur-sm">
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
  );
};

import Image from "next/image";

export const Logo = () => {
  return (
    <div className="select-none pointer-events-none">
      <Image
        src="/assets/images/logo.png"
        width={100}
        height={100}
        alt="logo"
      />
    </div>
  );
};

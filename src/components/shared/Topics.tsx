import Image from "next/image";

interface TopicsProps {
  secName: string;
  title: JSX.Element | string;
  description?: string;
}
export const Topics = ({ secName, title, description }: TopicsProps) => {
  return (
    <div className="text-center mb-14">
      <span className="inline-block text-sm shadow-sec-name text-accent uppercase py-2 px-5 bg-[#f3f3f3] rounded-full">
        {secName}
      </span>
      <h2 className="leading-snug text-4xl capitalize my-4">{title}</h2>
      <Image
        src="/assets/images/title-shape.svg"
        alt="shape"
        width={100}
        height={100}
        className="mx-auto mb-4"
      />
      <p className="text-primary-200">{description}</p>
    </div>
  );
};

import { MdClose } from "react-icons/md";
import { useLogicProvider } from "@/context/ContextProvider";

export const AboutMedia = () => {
  const { isVideoActive, setIsVideoActive } = useLogicProvider();

  return (
    <div
      className={`fixed inset-0 w-screen h-screen z-50 bg-black bg-opacity-80 ${
        isVideoActive ? "block" : "hidden"
      }`}
    >
      <span
        className="block w-fit ml-auto bg-black bg-opacity-40 p-2.5 mr-2 text-2xl text-white hover:text-white cursor-pointer"
        onClick={() => setIsVideoActive(false)}
      >
        <MdClose />
      </span>
      {/* Content */}
      <div className="container h-2/3 max-w-2xl flex-center mt-16">
        <video controls autoPlay loop className="object-cover w-full h-full">
          <source src="/assets/images/AboutUs-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

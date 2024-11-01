import Image from "next/image";
import { Topics } from "./shared/Topics";
import { NewsLetter } from "./ui/NewsLetter";

export const BlogSection = () => {
  const blogs = [
    {
      img: "/assets/images/blog/blog1.jpg",
      date: "September 15, 2024",
      title: "energy drink which you can make at home.",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae!",
    },
    {
      img: "/assets/images/blog/blog2.jpg",
      date: "October 15, 2024",
      title: "fresh veggie and rice combo for dinner.",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae!",
    },
    {
      img: "/assets/images/blog/blog3.jpg",
      date: "November 15, 2024",
      title: "chicken burger with double nuggets",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae!",
    },
  ];

  return (
    <section id="blog" className="all-sections bg-[#f8f9fa]">
      <Topics secName="our blog" title="latest publications" />

      {/* Container */}
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="max-w-[300px] sm:max-w-sm mx-auto bg-blogs shadow-blog-sec p-6 rounded-3xl cubic-bezier-2 sm:hover:scale-105"
          >
            <div className="relative w-full h-[30vh]">
              <Image
                src={blog.img}
                alt="blog"
                fill
                className="object-cover rounded-3xl"
              />
            </div>
            <div>
              <span className="inline-block text-xs text-primary-200 px-4 py-1.5 bg-[#f8f9fa] shadow-inset-blog-date my-4 rounded-lg">
                {blog.date}
              </span>
              <h3 className="text-xl hover:text-accent cursor-pointer">
                {blog.title}
              </h3>
              <p className="text-primary-200 mt-3 mb-6">{blog.details}</p>
              <button className="primary-btn text-sm">read more</button>
            </div>
          </div>
        ))}
      </div>

      <NewsLetter />
    </section>
  );
};

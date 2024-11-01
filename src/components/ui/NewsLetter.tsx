"use client";
import { useState } from "react";

export const NewsLetter = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="relative">
      {/* Container */}
      <div className="z-10 relative w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl sm:mx-auto bg-[url(/assets/images/news.jpg)] bg-cover bg-center bg-no-repeat sm:rounded-3xl px-4 py-10 text-white text-center">
        {/* Overlay */}
        <div className="-z-10 absolute top-0 left-0 w-full h-full bg-[#0d0d25] opacity-50 sm:rounded-3xl"></div>
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl text-white mb-3">
            Subscribe Our Newsletter
          </h2>
          <p className="text-sm sm:text-base">
            This is Lorem ipsum dolor sit amet consectetur adipisicing elit ad
            veritatis.
          </p>
        </div>
        {/* Form */}
        <div className="w-full sm:w-11/12 md:w-9/12 sm:mx-auto bg-newsletter-form px-2 flex-between rounded-full">
          <input
            type="email"
            value={message}
            placeholder="Enter your Email here"
            className="text-sm sm:text-base w-full p-4 text-primary-100"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="text-sm bg-newsletter-btn text-white shadow-newsletter-btn bg-accent px-8 p-3 rounded-full hover:bg-newsletter-btn-hover">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

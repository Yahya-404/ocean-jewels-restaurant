"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Filter {
  img: string;
  label: string;
}

interface FiltersProps {
  filters: Filter[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const Filters = ({
  filters,
  selectedCategory,
  setSelectedCategory,
}: FiltersProps) => {
  const [backgroundPosition, setBackgroundPosition] = useState<number>(0);
  const [backgroundWidth, setBackgroundWidth] = useState<number>(0); // لحجم الخلفية
  const categoryRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const selectedIndex = filters.findIndex(
      (filter) => filter.label === selectedCategory
    );
    if (categoryRefs.current[selectedIndex]) {
      const selectedElement = categoryRefs.current[selectedIndex]!;
      setBackgroundPosition(selectedElement.offsetLeft);
      setBackgroundWidth(selectedElement.offsetWidth);
    }
  }, [selectedCategory, filters]);

  return (
    <ul className="flex-between gap-2 sm:gap-4 relative mb-20 p-4 mx-auto w-fit rounded-full bg-menu-tap shadow-filter">
      <div
        className="z-10 absolute top-1/2 -translate-y-1/2 h-12 bg-filter-active rounded-full transition-all duration-500"
        style={{ left: backgroundPosition, width: backgroundWidth }}
      />
      {/* قائمة الفلاتر */}
      {filters.map((filter, index) => (
        <li
          key={index}
          ref={(el) => {
            categoryRefs.current[index] = el;
          }}
          className={`cursor-pointer flex items-center gap-1 px-1 sm:gap-3 sm:px-3 ${
            selectedCategory === filter.label ? "text-white" : ""
          }`}
          onClick={() => setSelectedCategory(filter.label)}
        >
          <Image
            src={filter.img}
            alt="filters"
            width={150}
            height={150}
            className="z-20 w-14 rounded-full"
          />
          <h3 className="z-20 font-medium max-sm:text-sm">{filter.label}</h3>
        </li>
      ))}
    </ul>
  );
};

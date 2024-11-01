"use client";

import { useState } from "react";
import { useLogicProvider } from "@/context/ContextProvider";
import { MenuCard, Topics } from "./shared/routes";
import { Filters } from "./ui/Filters";

export const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { menuItems } = useLogicProvider();

  const filters = [
    { label: "All", img: "/assets/images/menu-1.png" },
    { label: "Breakfast", img: "/assets/images/menu-2.png" },
    { label: "Lunch", img: "/assets/images/menu-3.png" },
    { label: "Dinner", img: "/assets/images/menu-4.png" },
  ];

  let filteredProducts = menuItems;
  if (selectedCategory !== "All") {
    filteredProducts = menuItems.filter(
      (items) => items.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  return (
    <div
      id="menu"
      className="all-sections bg-light bg-[url('/assets/images/menu-bg.png')] bg-repeat"
    >
      <Topics
        secName={"our menu"}
        title={
          <>
            wake up early, <br /> eat fresh & healthy
          </>
        }
      />
      {/* container */}
      <div className="container">
      <Filters filters={filters} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        {/* menu-cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {filteredProducts.map((item) => (
            <MenuCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.image}
              type={item.type}
              price={item.price}
              rate={item.rating}
              pieces={item.pieces}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

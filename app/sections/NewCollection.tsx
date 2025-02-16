import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowRight } from "lucide-react";
import FurnitureCard from "../components/FurnitureCard";

//NewCollection PRODUCTS SECTION
const NewCollection = () => {
  const furnitureItems = [
    {
      name: "Modern Lounge Chair",
      price: 1299,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-28-img-1.jpg",
      colors: ["#DCE0E4", "#1A1F2C", "#8E9196"],
    },
    {
      name: "Minimalist Sofa",
      price: 1.899,
      image:
        "https://mononova.ru/wp-content/uploads/2022/12/base_a_main-1270x1270.png",
      colors: ["#E5DEFF", "#1A1F2C", "#D6BCFA"],
    },
    {
      name: "Scandinavian Dining Table",
      price: 1899,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-5-img-1.jpg",
      colors: ["#DCE0E4", "#8E9196"],
    },
    {
      name: "Artisan Coffee Table",
      price: 400,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-8-img-1.jpg",
      colors: ["#1A1F2C", "#8E9196"],
    },
    {
      name: "Designer Bookshelf",
      price: 350,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-18-img-1.jpg",
      colors: ["#FAF72F", "#1A1F2C", "#8E9196"],
    },
    {
      name: "Executive Desk",
      price: 800,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-2-img-1.jpg",
      colors: ["#DCE0E4", "#1A1F2C"],
    },
  ];

  return (
    <Bounded className="h-auto pt-8 md:pt-14 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="flex justify-center md:justify-between items-end">
        <div className="flex flex-col max-md:items-center gap-y-1">
          <h2 className="text-3xl   lg:text-4xl font-medium">
            {" "}
            New Collection
          </h2>
          <p className="text-black/75 md:pl-0.5">
            Shop our new collection of products
          </p>
        </div>
        <span className="hidden md:flex items-center gap-x-2">
          View All
          <ArrowRight className="size-4 " />
        </span>
      </div>
      <section className="pt-14 grid grid-cols-1 md:px-2 lg:grid-cols-3 gap-3 md:gap-6 2xl:mx-6">
        {" "}
        {furnitureItems.map((item, index) => (
          <FurnitureCard
            key={index}
            {...item}
            className=""
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          />
        ))}
      </section>
    </Bounded>
  );
};

export default NewCollection;

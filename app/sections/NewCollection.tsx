import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowRight } from "lucide-react";
import FurnitureCard from "../components/FurnitureCard";

//NewCollection PRODUCTS SECTION
const NewCollection = () => {
  const furnitureItems = [
    {
      name: "Minimalist Sofa",
      price: 1450,
      image:
        "https://mononova.ru/wp-content/uploads/2022/12/base_a_main-1270x1270.png",
      colors: ["#800000", "#8E9196", "#1A1F2C"],
    },

    {
      name: "Modern Lounge Chair",
      price: 1299,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-28-img-1.jpg",
      colors: ["#228B22", "#1A1F2C", "#8E9196"],
    },

    {
      name: "Study Chair",
      price: 800,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-2-img-1.jpg",
      colors: ["#8E9196", "#1A1F2C"],
    },
    {
      name: "Designer Chair",
      price: 350,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-18-img-1.jpg",
      colors: ["#55392c", "#1A1F2C", "#008080"],
    },
    {
      name: "Scandinavian Table",
      price: 699,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-5-img-1.jpg",
      colors: ["#F4A460", "#C0C0C0"],
    },
    {
      name: "Artisan Coffee Table",
      price: 400,
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-8-img-1.jpg",
      colors: ["#C0C0C0", "#8E9196"],
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
      <section className="pt-14 grid grid-cols-1 md:mx-4 lg:grid-cols-3 gap-3 md:gap-6 xl:mx-10">
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

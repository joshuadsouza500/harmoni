import React from "react";
import { Bounded } from "../components/Bounded";
import CategoryCard from "../components/CategoryCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/shadcnComponents/ui/carousel";

const Categories = () => {
  const categories = [
    {
      name: "Sofas",
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-02.jpg",
    },

    {
      name: "Chairs",
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-28-img-1.jpg",
    },

    {
      name: "Lamps",
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-11-img-1.jpg",
    },
    {
      name: "Home Decor",
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-cat-04.jpg",
    },
    {
      name: "Beds",
      image:
        "https://mononova.ru/wp-content/uploads/2022/07/frame-209-768x768.jpg",
    },
    {
      name: "Tables",
      image:
        "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-18-img-1.jpg",
    },
  ];
  return (
    <Bounded className="h-auto pt-8 md:pt-14 2xl:pt-16  pb-16  xl:pb-20 font-mono">
      <Carousel>
        <div className="flex justify-center md:justify-between items-end">
          <div className="flex flex-col max-md:items-center gap-y-1">
            <h2 className="text-3xl   lg:text-4xl font-medium">
              {" "}
              Shop by Category
            </h2>
            <p className="text-black/75 md:pl-0.5">
              Shop by products categories
            </p>
          </div>
          <span className="hidden md:flex items-center gap-x-3 w-auto">
            <CarouselPrevious className=" size-10   rounded-full bg-white/80 backdrop-blur-sm text-gray-800 transition-all duration-300 shadow-sm hover:bg-white hover:shadow-md flex items-center justify-center" />
            <CarouselNext className=" size-10   rounded-full bg-white/80 backdrop-blur-sm text-gray-800 transition-all duration-300 shadow-sm hover:bg-white hover:shadow-md flex items-center justify-center" />
          </span>
        </div>

        <section className="pt-14   w-full">
          {" "}
          <CarouselContent className="relative md:mx-4 xl:mx-10 basis-auto space-x-4 md:space-x-6 xl:space-x-8">
            {categories.map((item, index) => (
              <CategoryCard
                key={index}
                index={index}
                name={item.name}
                image={item.image}
              />
            ))}
          </CarouselContent>
        </section>
      </Carousel>
    </Bounded>
  );
};

export default Categories;

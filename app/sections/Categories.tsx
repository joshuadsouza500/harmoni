import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Categories = () => {
  return (
    <Bounded className="h-auto pt-8 md:pt-14 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="flex justify-center md:justify-between items-end">
        <div className="flex flex-col max-md:items-center gap-y-1">
          <h2 className="text-3xl   lg:text-4xl font-medium">
            {" "}
            Shop by Category
          </h2>
          <p className="text-black/75 md:pl-0.5">Shop by products categories</p>
        </div>
        <span className="hidden md:flex items-center gap-x-1 ">
          <ArrowLeftCircle className="size-7 " />
          <ArrowRightCircle className="size-7 " />
        </span>
      </div>
    </Bounded>
  );
};

export default Categories;

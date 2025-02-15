import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowRight } from "lucide-react";

//NewCollection PRODUCTS SECTION
const NewCollection = () => {
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
      <section></section>
    </Bounded>
  );
};

export default NewCollection;

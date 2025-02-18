import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Image from "next/image";

const Collection = () => {
  return (
    <Bounded className="h-auto pt-8 pb-8  md:pt-14  md:pb-16  xl:pb-20 2xl:pt-16 ">
      <div className="flex justify-center md:justify-between items-end">
        <div className="flex flex-col max-md:items-center gap-y-1 max-md:text-center">
          <h2 className="text-3xl   lg:text-4xl font-medium"> Shop By Look</h2>
          <p className="text-black/75 md:pl-0.5 max-md:w-[75%]">
            Shop some of our looks curated by designers
          </p>
        </div>
        <span className="hidden md:flex items-center gap-x-2">
          <ArrowLeftCircle className="size-7 " />
          <ArrowRightCircle className="size-7 " />
        </span>
      </div>
      <section className="w-full h-[35vh] md:h-[40vh] lg:h-[85vh] pt-14 xl:px-8">
        <Image
          height={1600}
          width={1600}
          alt="Furniture items"
          src="/images/Collection.jpeg"
          className="objext-center w-full h-full object-cover rounded-md shadow-md"
          loading="lazy"
        />
      </section>
    </Bounded>
  );
};

export default Collection;

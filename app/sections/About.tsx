import React from "react";
import { Bounded } from "../components/Bounded";

const About = () => {
  return (
    <Bounded className="h-auto pt-14 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="grid lg:grid-cols-3   text-center w-full lg:justify-between lg:content-center   lg:text-left ">
        <h2 className="lg:col-span-1 text-3xl   lg:text-4xl pb-6   font-medium">
          About Us
        </h2>
        <p className="lg:col-span-2 text-xl lg:text-2xl 2xl:text-3xl font-medium">
          {`"We believe that exceptional furniture is the cornerstone of
          a beautiful and functional home. With a deep passion for design and
          craftsmanship, we strive to blend modern aesthetics with timeless
          elegance."`}
        </p>
      </div>
      <div className="flex pt-8 md:pt-10 lg:pt-14 2xl:pt-16  items-center justify-between w-[95%] md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl  mx-auto">
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold"> 400+</h1>
          <p className="max-md:text-xs text-black/50">Products Available</p>
        </div>
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold"> 300+</h1>
          <p className="max-md:text-xs text-black/50">Happy Customers</p>
        </div>
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold"> 10+</h1>
          <p className="max-md:text-xs text-black/50">Years of Experience</p>
        </div>
      </div>
    </Bounded>
  );
};

export default About;

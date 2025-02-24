import React from "react";
import { Bounded } from "../components/Bounded";
import Logo from "@/public/images/Logo";
const About = () => {
  return (
    <Bounded className="h-auto pt-14 2xl:pt-16  pb-16  xl:pb-20 bg- [#F3F0EA]">
      <div className="grid lg:grid-cols-3   text-center w-full lg:justify-between lg:content-center   lg:text-left ">
        <h2 className="lg:col-span-1 text-3xl   lg:text-4xl pb-6   font-medium text-[#533f32]">
          About Us
        </h2>
        <p className=" md:hidden text-xl  font-medium">
          {`"Exceptional furniture creates beautiful, functional homes. We combine modern aesthetics with timeless elegance and expert craftsmanship."`}
        </p>
        <p className="hidden md:block lg:col-span-2 text-xl lg:text-2xl xl:leading-snug xl:text-3xl font-medium text-[#8a634b]">
          {`"We believe that exceptional furniture is the cornerstone of
          a beautiful and functional home. With a deep passion for design and
          craftsmanship, we strive to blend modern aesthetics with timeless
          elegance."`}
        </p>
      </div>
      <div className="flex pt-10 md:pt-14 lg:pt-16 2xl:pt-20  items-center justify-between sm:w-[95%] md:max-w-4xl lg:max-w-5xl 2xl:max-w-6xl  mx-auto">
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-4xl md:text-5xl  2xl:text-6xl font-bold flex items-center  gap-x-2.5">
            {" "}
            400
            <Logo className="rotate-45 transition-transform" />
          </h1>
          <p className=" max-sm:w-[80%] mx-auto max-md:text-xs  text-black/50">
            Products Available
          </p>
        </div>
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-4xl md:text-5xl  2xl:text-6xl font-bold">
            {" "}
            300+
          </h1>
          <p className=" max-sm:w-[80%] mx-auto max-md:text-xs text-black/50">
            Happy Customers
          </p>
        </div>
        <div className="text-center gap-y-1 md:gap-y-2 2xl:gap-y-3">
          <h1 className="text-4xl md:text-5xl  2xl:text-6xl font-bold"> 10+</h1>
          <p className=" max-sm:w-[80%] mx-auto max-md:text-xs text-black/50">
            Years of Experience
          </p>
        </div>
      </div>
    </Bounded>
  );
};

export default About;

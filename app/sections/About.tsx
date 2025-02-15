import React from "react";
import { Bounded } from "../components/Bounded";

const About = () => {
  return (
    <Bounded className="h-auto pt-14 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="grid lg:grid-cols-3   text-center w-full lg:justify-between lg:content-center   lg:text-left ">
        <h2 className="lg:col-span-1 text-3xl   lg:text-4xl pb-6   font-medium">
          About Us
        </h2>
        <p className="lg:col-span-2 text-xl lg:text-2xl font-medium">
          {`"We believe that exceptional furniture is the cornerstone of
          a beautiful and functional home. With a deep passion for design and
          craftsmanship, we strive to blend modern aesthetics with timeless
          elegance."`}
        </p>
      </div>
    </Bounded>
  );
};

export default About;

import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/images/Hero2.jpeg')] h-[70vh] lg:h-screen xl:h-[95vh]  bg-no-repeat bg-center bg-cover relative mx-1 md:mx-2 2xl:mx-4 rounded-xl ">
      {" "}
      {/** <div className="absolute inset-0 rounded-xl bg-black/25 h-full w-full z-0" /> */}
      <div className=" flex flex-col justify-center items-center  h-full gap-y-1  z-10 relative ">
        <h1 className="text-7xl md:text-[96px] black text-white text-center font-kugile font-medium">
          Harmoni
        </h1>
        <h6 className="text-white lg:w-[50%] pl-28 md:pl-48 lg:pl-80 ">
          Elevating your home with a perfect blend of style, comfort, and love
          for a more harmonious lifestyle
        </h6>
      </div>
      <div className="hidden md:flex absolute bg-white/50 backdrop-blur-sm rounded-md aspect-video  h-48 w-[265px]  bottom-7 right-20  items-center justify-center 2xl:bottom-10 2xl:right-40 shadow-md">
        <Image
          src="/images/Hero1.jpeg"
          alt="Hero image"
          height={250}
          width={250}
          className="rounded-md shadow-inner"
        />
        <PlayCircle className="size-8  text-white/80 bg-white/40 backdrop-blur-sm  rounded-full absolute " />
      </div>
    </section>
  );
};

export default Hero;

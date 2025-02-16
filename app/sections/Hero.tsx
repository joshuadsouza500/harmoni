import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/images/Hero2.jpeg')] h-[70vh] lg:h-screen  bg-no-repeat bg-center bg-cover relative mx-1 md:mx-2 rounded-xl ">
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
    </section>
  );
};

export default Hero;

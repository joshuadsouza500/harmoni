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
          Your destination for stylish and durable furniture, designed to help
          you create a home that reflects your unique taste and lifestyle.
        </h6>
      </div>
    </section>
  );
};

export default Hero;

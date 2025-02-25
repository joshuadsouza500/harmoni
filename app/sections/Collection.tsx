import React from "react";
import { Bounded } from "../components/Bounded";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import CollectionLook from "../components/CollectionLook";

const Collection = () => {
  const looks = [
    {
      id: 1,
      image: "/images/Collection.jpeg",
      title: "Modern Living Room",
      products: [
        {
          name: "Rico Lazy Sofa",
          price: 1299,
          image: "/images/Collection.jpeg",
          x: 50,
          y: 45,
        },
        {
          name: "Jute Area Rug",
          price: 299,
          image: "/images/Collection.jpeg",
          x: 50,
          y: 85,
        },
        {
          name: "Ceramic Plant Pot",
          price: 89,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 15,
          y: 75,
        },
      ],
    },
    {
      id: 2,
      image: "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
      title: "Cozy Bedroom",
      products: [
        {
          name: "Queen Platform Bed",
          price: 899,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 50,
          y: 50,
        },
        {
          name: "Bedside Table",
          price: 249,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 75,
          y: 45,
        },
        {
          name: "Table Lamp",
          price: 129,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 80,
          y: 35,
        },
      ],
    },
    {
      id: 3,
      image: "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
      title: "Minimalist Office",
      products: [
        {
          name: "Ergonomic Desk Chair",
          price: 599,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 45,
          y: 55,
        },
        {
          name: "Standing Desk",
          price: 799,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 50,
          y: 45,
        },
        {
          name: "Desk Organizer",
          price: 49,
          image:
            "public/lovable-uploads/2c096add-daeb-48cc-97f0-3091a6d59310.png",
          x: 65,
          y: 40,
        },
      ],
    },
  ];
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
      {/**The error message indicates that you are trying to assign an array of objects with a specific structure to a type that expects an empty array... solved by creating a type for product */}
      <section className="w-full h-[35vh] md:h-[40vh] lg:h-[85vh] pt-14 xl:px-8">
        {looks.map((look) => (
          <CollectionLook
            key={look.id}
            products={look.products}
            title={look.title}
            image={look.image}
          />
        ))}
      </section>
    </Bounded>
  );
};

export default Collection;

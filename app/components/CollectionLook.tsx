import React from "react";
import ProductHotspot from "./ProductHotspot";
import { CarouselItem } from "@/shadcnComponents/ui/carousel";

export interface Product {
  name: string;
  price: number;
  image: string;
  x: number;
  y: number;
}

interface CollectionProps {
  title?: string;
  image: string;
  products: Product[];
}

const CollectionLook = ({ image, products }: CollectionProps) => {
  return (
    <CarouselItem className=" w-full  ">
      <div
        style={{ backgroundImage: `url(${image})`, position: "relative" }}
        className="w-full md:w-[95%] h-full bg-no-repeat bg-center bg-cover rounded-md mx-1  md:mx-8 xl:mx-10"
      >
        {products.map((product, index) => (
          <ProductHotspot key={index} product={product} />
        ))}
      </div>
    </CarouselItem>
  );
};

export default CollectionLook;

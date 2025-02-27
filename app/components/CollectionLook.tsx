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
    <CarouselItem
      style={{ backgroundImage: `url(${image})`, position: "relative" }}
      className="w-full h-full bg-no-repeat bg-center bg-cover rounded-md"
    >
      {products.map((product, index) => (
        <ProductHotspot key={index} product={product} />
      ))}
    </CarouselItem>
  );
};

export default CollectionLook;

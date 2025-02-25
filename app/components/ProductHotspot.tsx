import React from "react";
import { Product } from "./CollectionLook";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

{
  /**When you destructure from the props, you are not getting a single Product object; you're actually getting an object that contains a property named product. */
}
const ProductHotspot = ({ product }: { product: Product }) => {
  const { name, price, image, x, y } = product;
  return (
    <div className="absolute" style={{ left: `${x}%`, top: `${y}%` }}>
      <HoverCard>
        <HoverCardTrigger>
          <div
            className="w-6 h-6 rounded-full bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg cursor-pointer 
                    flex items-center justify-center
                    transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <div className="w-2 h-2 rounded-full bg-black/70" />
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-64 p-3 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl">
          <div className="flex items-center gap-3">
            <Image
              height={200}
              width={200}
              src={image}
              alt={name}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="font-medium text-sm text-gray-900">{name}</h3>
              <p className="text-sm text-gray-500">${price.toLocaleString()}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ProductHotspot;

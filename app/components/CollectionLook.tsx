import React from "react";
import ProductHotspot from "./ProductHotspot";

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
    <div style={{ backgroundImage: image }}>
      {products.map((product, index) => (
        <ProductHotspot key={index} product={product} />
      ))}
    </div>
  );
};

export default CollectionLook;

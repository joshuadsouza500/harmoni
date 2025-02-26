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
          image:
            "https://spaze.com/cdn/shop/files/Regrading2100x1400_Bella_Sofa_BirchIvory_WhiteBackground_DSC_9425.jpg?v=1732827303&width=1200",
          x: 49,
          y: 70,
        },
        {
          name: "Picture Frame",
          price: 299,
          image:
            "https://www.ikea.com/gb/en/images/products/knoppaeng-frame-black__0756626_pe748998_s5.jpg?f=u",
          x: 49,
          y: 25,
        },
        {
          name: "Jute Plant Pot",
          price: 89,
          image:
            "https://www.ikea.com/bh/en/images/products/vallmofroen-plant-pot-seagrass__0705486_pe725616_s5.jpg?f=s",
          x: 83,
          y: 78,
        },
      ],
    },
    {
      id: 2,
      image: "/images/Collection2.jpg",
      title: "Cozy Kitchen",
      products: [
        {
          name: "Kitchen Table",
          price: 899,
          image:
            "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-39-img-1.jpg",
          x: 32,
          y: 50,
        },
        {
          name: "Table Vase",
          price: 249,
          image:
            "https://eskil.qodeinteractive.com/wp-content/uploads/2022/04/h3-item-01.jpg",
          x: 50,
          y: 45,
        },
        {
          name: "Table Chair",
          price: 129,
          image:
            "https://eskil.qodeinteractive.com/wp-content/uploads/2022/04/h3-item-03.jpg",
          x: 75,
          y: 70,
        },
      ],
    },
    {
      id: 3,
      image: "/images/Collection3.jpg",
      title: "Minimalist Bedroom",
      products: [
        {
          name: "Cozy Queen Bed",
          price: 1200,
          image: "https://mononova.ru/wp-content/uploads/2022/08/nuvo-3-1.jpeg",
          x: 45,
          y: 55,
        },
        {
          name: "Hanging Pendant Light",
          price: 299,
          image:
            "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-4-img-1.jpg",
          x: 50,
          y: 45,
        },
        {
          name: "Bedside Table",
          price: 49,
          image:
            "https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/shop-5-img-1.jpg",
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
      <section className="w-full h-[35vh] md:h-[40vh] lg:h-[85vh] xl:h-dvh pt-14 xl:px-8 z-10 relative">
        {looks.slice(0, 3).map((look) => (
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

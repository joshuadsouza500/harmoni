import { Package, PenTool, Shield, Wrench } from "lucide-react";
import React from "react";
import FeaturesCard from "../components/FeaturesCard";
import { Bounded } from "../components/Bounded";

const Services = () => {
  const features = [
    {
      icon: Package,
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders over $500.",
    },
    {
      icon: Wrench,
      title: "Free Assembly",
      description: "Professional assembly service included with your purchase.",
    },
    {
      icon: Shield,
      title: "Extended Warranty",
      description:
        "Protect your investment with our comprehensive furniture warranty.",
    },
    {
      icon: PenTool,
      title: "Design Consultation",
      description:
        "Work with our experts to tailor your space to your needs and budget.",
    },
  ];

  return (
    <Bounded className="h-auto pt-8 md:pt-14 bg-[#ebebebf8] 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Why Choose Us
        </h2>
        <p className="text-gray-600">Shop our new collection of products</p>
      </div>
      <section className="grid grid-cols-2 md:px-6 lg:grid-cols-4 gap-3 md:gap-6 2xl:mx-10">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </Bounded>
  );
};

export default Services;

import React from "react";
import { Bounded } from "../components/Bounded";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What is your delivery timeframe?",
    answer:
      "We typically deliver within 3-5 business days for in-stock items. Custom furniture may take 2-3 weeks.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for unused items in original packaging. Custom orders are non-returnable.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Yes, we offer professional assembly services for an additional fee. Our trained technicians ensure your furniture is properly assembled.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship to select countries. Please contact our customer service for specific shipping information.",
  },
];

const FAQ = () => {
  return (
    <Bounded className="h-auto pt-8 md:pt-14 2xl:pt-16  pb-16  xl:pb-20 ">
      <div className="flex flex-col lg:flex-row items-start justify-between  gap-16 lg:mx-2">
        <div className="w-full lg:w-1/2 pt-10 ">
          <h1 className="max-lg:text-center text-3xl md:text-4xl font-medium mb-10 lg:mb-12 text-gray-900">
            Frequently Asked Questions
          </h1>
          <div className="w-full max-w-3xl lg:pl-4 max-lg:px-2 ">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="lg:pt-2 lg:pb-2"
                >
                  <AccordionTrigger className="text-lg lg:text-xl font-medium text-gray-900 hover:text-gray-800 ">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pl-0.5 tracking-wider mr-2 lg:mr-6 xl:mr-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="hidden lg:block  w-1/2 2xl:w-2/5 max-2xl:pl-6">
          <div className="relative aspect-square bg-gray-50 rounded-2xl overflow-hidden 2xl:h-[500px] shadow-md">
            <Image
              height={400}
              width={400}
              src="/images/Hero1.jpeg"
              alt="Modern furniture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default FAQ;

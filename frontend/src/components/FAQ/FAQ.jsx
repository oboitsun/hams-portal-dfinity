import React from "react";
import FaqItem from "./FaqItem";
import "./faq.scss";

const faqs = [
  { qstn: "How do I buy a Dino World?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Dino World on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Dino World NFT?", answr: "The Answer" },
  { qstn: "How many Dino World caan I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq" className="relative">
      <div className="my-container relative">
        <div className=""></div>
        <div className="grid grid-cols-1  gap-5 lg:gap-10 w-full">
          {faqs.map((f, i) => (
            <FaqItem key={i} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}

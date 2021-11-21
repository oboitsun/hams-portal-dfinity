import React, { useState, useRef } from "react";

export default function FaqItem({ qstn, answr }) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
  }
  return (
    <div className="lg:w-full text-white">
      <div onClick={toggleAccordion} className="faq-question">
        <p className="faq-question-heading">{qstn}</p>
        <img
          className={`arrow-down transform ${setActive ? "rotate-180" : "rotate-0"}`}
          src="assets/expand-arrow.svg"
          alt="expand"
        />
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className=" transition-all overflow-hidden "
      >
        <p className="pt-5 px-10 font-mont font-medium">{answr}</p>
      </div>
    </div>
  );
}

import React from "react";

export default function MainSlide({ slide, bg }) {
  return (
    <div className="slide-wrapper h-full relative ">
      {/* {bg && (
        <img
          className="slide-bg main-slider-bg"
          src="../../assets/slider1-bg.png"
          alt="bg"
        />
      )} */}
      <div className="absolute top-10 flex flex-col items-center">
        <p className="text-border text-2xl text-white">{slide.name}</p>
        <div className="relative -top-1">
          <img src="../../assets/age-pic.png" alt="age" />
          <span className="top-1/2 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xs max-w-max w-full">
            {slide.age}
          </span>
        </div>
      </div>
      <img className="w-full" src={slide.pic} alt={slide.name} />
    </div>
  );
}

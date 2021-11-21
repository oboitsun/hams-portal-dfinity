import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);

import "./home-slider.scss";
import ThumbSlide from "../ThumbsSlide";
import MainSlide from "../MainSlide";
export default function HomeSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [
    {
      name: "Green dino",
      age: "10 days",
      pic: "assets/dino-slide.png",
    },
    {
      name: "purple dino",
      age: "15 days",
      pic: "assets/dino-slide.png",
    },
    {
      name: "orange dino",
      age: "20 days",
      pic: "assets/dino-slide.png",
    },
    {
      name: "pink dino",
      age: "5 days",
      pic: "assets/dino-slide.png",
    },
  ];
  return (
    <div id="home-slider" className=" h-full overflow-hidden relative">
      <div id="home-slider-prev" className="slider-button prev">
        <img src="../../assets/arrow-next.svg" alt="prev" />
      </div>
      <div className="slider-button next">
        <img id="home-slider-next" src="../../assets/arrow-next.svg" alt="prev" />
      </div>
      <Swiper
        // autoplay={{ delay: 2500 }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
        navigation={{
          nextEl: "#home-slider-next",
          prevEl: "#home-slider-prev",
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <MainSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <ThumbSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

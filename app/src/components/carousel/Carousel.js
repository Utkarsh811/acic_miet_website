import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = (props) => {
  const slides = [];
  for (let i = 0; i < 10; i++) {
    slides.push(
      <SwiperSlide key={i}>
        <img
          src={`https://picsum.photos/id/${i}/700/300`}
          alt={`${i}`}
          styles={{ width: 200, height: 300 }}
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Carousel;

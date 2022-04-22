import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
import Car1  from "../../assets/Car1.jpeg";
import Car2  from "../../assets/Car2.jpeg";
import Car3  from "../../assets/Car3.jpeg";
import Car4  from "../../assets/Car4.jpeg";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Carousel = (props) => {
  // const slides = [];
  // for (let i = 0; i < 10; i++) {
  //   slides.push(
  //     <SwiperSlide key={i}>
  //       <img
  //         src={`https://picsum.photos/id/${i}/700/300`}
  //         alt={`${i}`}
  //         styles={{ width: 200, height: 300 }}
  //       />
  //     </SwiperSlide>
  //   );
  // }
  const Images = [Car1,Car2,Car3,Car4];

  const slides =[]
  for(let i=0 ;i<Images.length;i++)
  {


  slides.push(
    <SwiperSlide >
      <img
     
      src={Images[i]}
      alt="nothing"
      styles={{ width: 200, height: 100 }}
      
      />
    </SwiperSlide>

  )
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

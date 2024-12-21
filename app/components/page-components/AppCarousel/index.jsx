"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import Image from "next/image";

export default function AppCarousel({
  delayTime = 2500,
  data,
  backgroundColor = "transparent",
}) {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: delayTime,
        disableOnInteraction: false,
      }}
      style={{
        background: backgroundColor,
      }}
      modules={[Autoplay]}
    >
      {data.map((_) => {
        return (
          <SwiperSlide key={_.id} style={{ position: "relative", ..._?.style }}>
            {_?.src && <Image src={_.src} sizes="100vw" fill alt="Example" />}
            {_.textComponent}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

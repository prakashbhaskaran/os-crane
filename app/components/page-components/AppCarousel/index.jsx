"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import Image from "next/image";

export default function AppCarousel() {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1668114375111-e90b5e975df6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          sizes="100vw"
          layout="fill"
          alt="Example"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={
            "https://images.unsplash.com/photo-1601758176175-45914394491c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          sizes="100vw"
          layout="fill"
          alt="Example"
        />
      </SwiperSlide>
    </Swiper>
  );
}

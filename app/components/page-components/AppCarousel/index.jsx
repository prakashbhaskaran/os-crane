"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
import Image from "next/image";
import AppText from "@components/material-components/AppText";
import AppBox from "@components/material-components/AppBox";
import AppButton from "@components/material-components/AppButton";
import AppVstack from "@components/material-components/AppVstack";
import AppLink from "../AppLink";
import { style } from "@mui/system";
import { cssStyle } from "@constants/style";

export default function AppCarousel({ delayTime = 2500, data }) {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: delayTime,
        disableOnInteraction: false,
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

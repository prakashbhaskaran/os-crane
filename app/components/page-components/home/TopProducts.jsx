"use client";
import React from "react";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppText from "@components/material-components/AppText";
import AppBox from "@components/material-components/AppBox";
import AppGrid from "../AppGrid";
import Image from "next/image";
import { motion } from "framer-motion";
import { topProducts } from "@constants/data.jsx";
import AppLink from "../AppLink";
import { customPalette } from "@constants/style";
import AppHstack from "@components/material-components/AppHstack";

const TopProducts = () => {
  const MotionImage = motion.create(Image);
  const MotionBox = motion.create(AppBox);
  return (
    <AppBox>
      <AppVstack alignItems="center" textAlign="center">
        <AppHeader heading="TOP PRODUCTS" />
      </AppVstack>
      <AppGrid
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, minmax(300px, auto))",
          },
          justifyContent: "center",
          gap: "20px",
          mt: "2rem",
        }}
      >
        {topProducts.map((item, index) => {
          return (
            <MotionBox
              sx={{ position: "relative", height: "300px", overflow: "hidden" }}
              key={index}
            >
              <MotionImage
                alt="Crane Parts"
                fill
                style={{ objectFit: "cover" }}
                src={item.image}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                transition={{
                  duration: 0.5,
                }}
              />
              <AppHstack
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background: customPalette.global.quinary,
                  justifyContent: "center",
                  py: "5px",
                }}
              >
                <AppLink
                  href={item.image}
                  sx={{
                    color: customPalette.global.white,
                  }}
                >
                  {item.title}
                </AppLink>
              </AppHstack>
            </MotionBox>
          );
        })}
      </AppGrid>
    </AppBox>
  );
};

export default TopProducts;

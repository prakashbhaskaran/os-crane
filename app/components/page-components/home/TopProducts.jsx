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
import { Card } from "@mui/material";
import AppButton from "@components/material-components/AppButton";

const TopProducts = () => {
  const MotionImage = motion.create(Image);
  return (
    <AppBox sx={{ pt: "1rem", pb: "2rem" }}>
      <AppGrid
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, minmax(300px, auto))",
          },
          gap: "20px",
        }}
      >
        {topProducts.map((item, index) => {
          return (
            <Card
              sx={{ position: "relative", height: "450px", overflow: "hidden" }}
              key={index}
            >
              <AppBox
                sx={{
                  height: "330px",
                  width: "100%",
                  position: "relative",
                  overFlow: "hidden",
                }}
              >
                <MotionImage
                  alt="Crane Parts"
                  fill
                  style={{ objectFit: "cover" }}
                  src={item.image}
                />
              </AppBox>
              <AppVstack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "1rem",
                  gap: "1rem",
                }}
              >
                <AppText
                  sx={{
                    color: customPalette.global.black,
                    fontWeight: "700",
                  }}
                >
                  {item.title}
                </AppText>
                <AppLink href={item.image} target="_blank">
                  <AppButton
                    color="secondary"
                    sx={{
                      color: customPalette.global.black,
                      fontWeight: "700",
                    }}
                  >
                    View full image
                  </AppButton>
                </AppLink>
              </AppVstack>
            </Card>
          );
        })}
      </AppGrid>
    </AppBox>
  );
};

export default TopProducts;

"use client";
import React from "react";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppText from "@components/material-components/AppText";
import AppBox from "@components/material-components/AppBox";
import AppGrid from "../AppGrid";
import Image from "next/image";
import { motion } from "framer-motion";
import { ourProducts } from "@constants/data.jsx";
import { customPalette } from "@constants/style";

const OurProducts = () => {
  const MotionImage = motion.create(Image);
  return (
    <AppBox>
      <AppVstack alignItems="center" textAlign="center">
        <AppHeader heading="OUR PRODUCTS" />
        <AppText
          sx={{
            color: "grey",
            fontWeight: "600",
          }}
          text={
            "For 5 years we are devoted to serving clients in construction machinery spare parts business"
          }
        />
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
        {ourProducts.map((item, index) => {
          return (
            <AppBox
              sx={{
                position: "relative",
                height: "300px",
                overflow: "hidden",
              }}
              key={index}
            >
              <MotionImage
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                transition={{
                  duration: 0.5,
                }}
                alt="Crane"
                fill
                style={{ objectFit: "unset" }}
                src={item.image}
              />

              <AppBox
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  zIndex: 10,
                }}
              >
                <AppBox>
                  <AppText
                    text={item.title || "Crane Parts"}
                    sx={{
                      color: customPalette.global.black,
                      fontWeight: "700",
                      fontSize: "1.1rem",
                      // background: customPalette.global.black,
                      borderLeft: `3px solid yellow`,
                      padding: "2px 6px",
                      backdropFilter: "blur(16px)",
                    }}
                  />
                  {/* <AppBox
                    sx={{
                      height: "10px",
                      width: "70px",
                      borderBottom: "5px solid yellow",
                    }}
                  /> */}
                </AppBox>
              </AppBox>
              {/* <AppBox
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  top: "0px",
                  right: "0px",
                  background:
                    "linear-gradient(230deg,  rgba(255,255,255,0.1) 80%,rgba(255,255,255,0.2) 20%)",
                }}
              ></AppBox> */}
            </AppBox>
          );
        })}
      </AppGrid>
    </AppBox>
  );
};

export default OurProducts;

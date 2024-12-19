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
              sx={{ position: "relative", height: "300px", overflow: "hidden" }}
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
                style={{ objectFit: "cover" }}
                src={
                  "https://images.unsplash.com/photo-1514203043587-ee4a5149f470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              />
              {/* <AppBox
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
                      color: customPalette.global.secondary,
                      fontWeight: "700",
                      fontSize: "1.1rem",
                    }}
                  />
                  <AppBox
                    sx={{
                      height: "10px",
                      width: "70px",
                      borderBottom: "5px solid yellow",
                    }}
                  />
                </AppBox>
              </AppBox>
              <AppBox
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  top: "0px",
                  right: "0px",
                  //   background: "url(https://aliyun-hk04-cdn.hcwebsite.com/b825742be64ded4850a6819b1f5f7d80/tpl/en_xcmgshantui/assets/images/index-pro-bg.png)",
                  background:
                    "linear-gradient(230deg, rgba(71,71,71,0.241421568627451) 55%, rgba(24,74,255,0.333858543417367) 74%)",
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

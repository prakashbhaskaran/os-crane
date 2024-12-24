import AppVstack from "@components/material-components/AppVstack";
import React from "react";
import AppHeader from "../AppHeader";
import AppBox from "@components/material-components/AppBox";
import AppHstack from "@components/material-components/AppHstack";
import Image from "next/image";
import { brands } from "@constants/data";
import AppGrid from "../AppGrid";

const Brands = () => {
  return (
    <AppBox>
      <AppVstack justifyContent="center" alignItems="center">
        <AppHeader heading="SUPPORTING BRANDS" />
      </AppVstack>
      <AppGrid
        sx={{
          gridTemplateColumns: {
            xs: "repeat(2, minmax(150px, auto))",
            md: "repeat(4, minmax(200px, auto))",
          },

          justifyContent: "center",
          gap: "4px",
          mt: "2rem",
        }}
      >
        {brands.map((item) => {
          return (
            <AppBox
              sx={{
                position: "relative",
                height: "100px",
                overflow: "hidden",
                background: "white",
              }}
              key={item.image}
            >
              <Image
                alt="Crane"
                fill
                style={{ objectFit: "contain" }}
                src={item.image}
              />
            </AppBox>
          );
        })}
      </AppGrid>
    </AppBox>
  );
};

export default Brands;

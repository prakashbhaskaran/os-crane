"use client";
import { Card, CardContent, Chip } from "@mui/material";
import React from "react";
import AppText from "../../material-components/AppText";
import Image from "next/image";
import AppBox from "../../material-components/AppBox";

const ProductCard = () => {
  return (
    <Card sx={{ width: "300px", padding: "0px" }}>
      <AppBox
        sx={{
          position: "relative",
          height: "300px",
          width: "100%",
        }}
      >
        <Image
          src={
            "https://images.unsplash.com/photo-1601758176175-45914394491c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          sizes="100%"
          style={{ objectFit: "cover" }}
          layout="fill"
          alt="Example"
        />
      </AppBox>
      <AppBox p="10px">
        <AppText variant="h6" component="div">
          Heading
        </AppText>
        <AppText variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </AppText>
        <AppText text={"$22"} />
      </AppBox>
    </Card>
  );
};

export default ProductCard;

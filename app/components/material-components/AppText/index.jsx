"use client";
import { Typography } from "@mui/material";
import React from "react";

const AppText = ({ children, text, sx, ...rest }) => {
  return (
    <Typography sx={sx} {...rest}>
      {children || text}
    </Typography>
  );
};

export default AppText;

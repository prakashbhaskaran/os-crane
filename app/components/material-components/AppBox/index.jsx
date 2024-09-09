"use client";
import { Box } from "@mui/material";
import React from "react";

const AppBox = ({ children, ref, sx, ...rest }) => {
  return (
    <Box sx={sx} ref={ref} {...rest}>
      {children}
    </Box>
  );
};

export default AppBox;

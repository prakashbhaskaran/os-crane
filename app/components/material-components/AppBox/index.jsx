"use client";
import { Box } from "@mui/material";
import React from "react";

const AppBox = React.forwardRef(function AppBox(props, ref) {
  return (
    <Box ref={ref} {...props}>
      {props.children}
    </Box>
  );
});

export default AppBox;

"use client";
import { Stack } from "@mui/material";
import React from "react";

const AppVstack = ({ children, sx, ...rest }) => {
  return (
    <Stack sx={sx} direction={"column"} {...rest}>
      {children}
    </Stack>
  );
};

export default AppVstack;

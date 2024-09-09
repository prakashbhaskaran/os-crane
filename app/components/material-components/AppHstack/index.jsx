"use client";
import { Stack } from "@mui/material";
import React from "react";

const AppHstack = ({ children, alignItems = "center", sx, ...rest }) => {
  return (
    <Stack sx={sx} direction={"row"} alignItems={alignItems} {...rest}>
      {children}
    </Stack>
  );
};

export default AppHstack;

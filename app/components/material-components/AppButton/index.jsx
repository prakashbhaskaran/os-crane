"use client";
import { Button } from "@mui/material";
import React from "react";

const AppButton = ({ children, sx, variant = "contained", ...rest }) => {
  return (
    <Button sx={sx} variant={variant} {...rest}>
      {children}
    </Button>
  );
};

export default AppButton;

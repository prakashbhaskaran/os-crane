"use client";
import { Drawer } from "@mui/material";
import React from "react";

const AppDrawer = ({ children, open, handleClose, sx, ...rest }) => {
  return (
    <Drawer open={open} onClose={handleClose} sx={sx} {...rest}>
      {children}
    </Drawer>
  );
};

export default AppDrawer;

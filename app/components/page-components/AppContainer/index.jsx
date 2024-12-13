"use client";
import React from "react";
import AppBox from "../../material-components/AppBox";

const AppContainer = ({ children }) => {
  return (
    <AppBox sx={{ maxWidth: "1440px", margin: "auto", px: "10px" }}>
      {children}
    </AppBox>
  );
};

export default AppContainer;

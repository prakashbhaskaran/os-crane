import AppBox from "@components/material-components/AppBox";
import React from "react";

const AppGrid = ({ children, sx, ...rest }) => {
  return (
    <AppBox sx={{ display: "grid", ...sx }} {...rest}>
      {children}
    </AppBox>
  );
};

export default AppGrid;

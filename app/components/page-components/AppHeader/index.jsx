import AppText from "@components/material-components/AppText";
import { customPalette } from "@constants/style";
import React from "react";

const AppHeader = ({ heading = "Heading", sx }) => {
  return (
    <AppText
      sx={{
        fontWeight: "800",
        fontSize: "1.4rem",
        color: customPalette.global.black,
        ...sx,
      }}
    >
      {heading}
    </AppText>
  );
};

export default AppHeader;

import AppText from "@components/material-components/AppText";
import React from "react";

const AppHeader = ({ heading = "Heading", sx }) => {
  return (
    <AppText sx={{ fontWeight: "600", fontSize: "1.4rem" }}>{heading}</AppText>
  );
};

export default AppHeader;

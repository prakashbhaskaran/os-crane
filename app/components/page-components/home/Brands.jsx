import AppVstack from "@components/material-components/AppVstack";
import React from "react";
import AppHeader from "../AppHeader";
import AppBox from "@components/material-components/AppBox";

const Brands = () => {
  return (
    <AppBox>
      <AppVstack>
        <AppHeader heading="PARTNER BRANDS" />
      </AppVstack>
    </AppBox>
  );
};

export default Brands;

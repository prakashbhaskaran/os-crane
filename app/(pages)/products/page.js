import AppBox from "@components/material-components/AppBox";
import AppContainer from "@components/page-components/AppContainer";
import AppHeader from "@components/page-components/AppHeader";
import TopProducts from "@components/page-components/home/TopProducts";
import React from "react";

const Products = () => {
  return (
    <AppBox>
      <AppContainer>
        <AppHeader heading="Products" />

        <TopProducts />
      </AppContainer>
    </AppBox>
  );
};

export default Products;

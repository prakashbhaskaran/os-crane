import AppBox from "@components/material-components/AppBox";
import AppText from "@components/material-components/AppText";
import AppContainer from "@components/page-components/AppContainer";
import AppHeader from "@components/page-components/AppHeader";
import TopProducts from "@components/page-components/home/TopProducts";
import React from "react";

const Products = () => {
  return (
    <AppBox mt="5rem">
      <AppContainer>
        <AppHeader heading="Products" />
        <AppText
          sx={{ color: "grey" }}
          text={
            "Below are the list of products. You can also enquire us for more."
          }
        />

        <TopProducts />
      </AppContainer>
    </AppBox>
  );
};

export default Products;

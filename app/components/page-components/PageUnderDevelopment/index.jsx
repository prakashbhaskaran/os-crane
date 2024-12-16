import AppBox from "@components/material-components/AppBox";
import AppButton from "@components/material-components/AppButton";
import AppVstack from "@components/material-components/AppVstack";
import AppLink from "@components/page-components/AppLink";
import React from "react";

const PageUnderDevelopment = ({ text = "PAGE UNDER DEVELOPMENT" }) => {
  return (
    <AppBox sx={{ height: "calc(100vh - 345px)" }}>
      <AppVstack
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {text}{" "}
        <AppBox>
          <AppLink href="/">
            <AppButton color="primary">Go Home</AppButton>
          </AppLink>
        </AppBox>
      </AppVstack>
    </AppBox>
  );
};

export default PageUnderDevelopment;

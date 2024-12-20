import AppBox from "@components/material-components/AppBox";
import About from "@components/page-components/About";
import AppContainer from "@components/page-components/AppContainer";
import AppHeader from "@components/page-components/AppHeader";
import React from "react";

const AboutPage = () => {
  return (
    <AppBox mt="5rem">
      <AppContainer>
        <AppHeader heading="About Us" />
        <About />
      </AppContainer>
    </AppBox>
  );
};

export default AboutPage;

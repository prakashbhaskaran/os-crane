import AppBox from "@components/material-components/AppBox";
import AppContainer from "@components/page-components/AppContainer";
import AppHeader from "@components/page-components/AppHeader";
import Contact from "@components/page-components/Contact";
import React from "react";

const ContactPage = () => {
  return (
    <AppBox mt="5rem">
      <AppContainer>
        <AppHeader heading="Contact" />
        <Contact />
      </AppContainer>
    </AppBox>
  );
};

export default ContactPage;

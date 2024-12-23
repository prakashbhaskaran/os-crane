import AppBox from "@components/material-components/AppBox";
import AppContainer from "@components/page-components/AppContainer";
import AppHeader from "@components/page-components/AppHeader";
import Contact from "@components/page-components/Contact";
import React from "react";
export const metadata = {
  title: "Contact",
  description: "OS CRANE PARTS contact details",
  openGraph: {
    title: "Contact",
    description: "OS CRANE PARTS contact details",
  },
};

const ContactPage = () => {
  return (
    <AppBox mt="5rem" pb="2rem">
      <AppContainer>
        <AppHeader heading="Contact" />
        <Contact />
      </AppContainer>
    </AppBox>
  );
};

export default ContactPage;

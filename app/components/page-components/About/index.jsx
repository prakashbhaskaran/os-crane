import AppBox from "@components/material-components/AppBox";
import AppHstack from "@components/material-components/AppHstack";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import React from "react";

const About = () => {
  return (
    <AppBox>
      <AppHstack justifyContent="center">
        <AppHeader heading="ABOUT US" />
      </AppHstack>
      <AppVstack
        sx={{
          mt: "14px",
          gap: "20px",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        <AppBox sx={{ fontSize: "1.1rem", fontWeight: "600", color: "grey" }}>
          Welcome to OS CRANE PARTS, your trusted partner for high-quality crane
          parts and solutions. With years of experience in the industry, we
          specialize in providing durable and reliable parts for a wide range of
          crane models, ensuring your equipment operates at peak efficiency.
        </AppBox>
        <AppBox sx={{ fontSize: "1.1rem", fontWeight: "600", color: "grey" }}>
          Our mission is to deliver exceptional products and services tailored
          to meet the specific needs of our clients, from construction and heavy
          lifting to industrial applications. We understand the critical role
          cranes play in your operations, which is why we focus on quality,
          innovation, and customer satisfaction.
        </AppBox>
        <AppBox sx={{ fontSize: "1.1rem", fontWeight: "600", color: "grey" }}>
          At OS CRANE PARTS, we pride ourselves on building long-term
          partnerships with our clients, providing the support you need to keep
          your projects moving smoothly.
        </AppBox>
        <AppBox sx={{ fontSize: "1.1rem", fontWeight: "600", color: "grey" }}>
          Let us help you power your operations with confidence. Get in touch
          with us today to explore our products and services!
        </AppBox>
      </AppVstack>
    </AppBox>
  );
};

export default About;

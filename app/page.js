import AppBox from "./components/material-components/AppBox";

import AppContainer from "@components/page-components/AppContainer";
import CounterSection from "@components/page-components/home/CounterSection";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppCarousel from "@components/page-components/AppCarousel";
import { heroSection } from "@constants/data";
import About from "@components/page-components/About";
import OurProducts from "@components/page-components/home/OurProducts";
import ChooseUs from "@components/page-components/home/ChooseUs";
import TopProducts from "@components/page-components/home/TopProducts";
import Brands from "@components/page-components/home/Brands";

export default function Home() {
  const greySection = {
    background: "#f9f9f9",
    pt: "2rem",
    pb: "6rem",
    mt: "4rem",
  };
  const normalSection = {
    pt: "2rem",
    pb: "6rem",
    mt: "4rem",
  };
  return (
    <AppBox>
      <AppBox
        id="home"
        sx={{
          height: { xs: "320px", md: "700px" },
          borderRadius: "0.5rem",
        }}
      >
        <AppCarousel data={heroSection} />
      </AppBox>

      <AppBox sx={{ ...greySection, mt: 0, pt: "6rem !important" }}>
        <AppContainer>
          <CounterSection />
        </AppContainer>
      </AppBox>
      <AppBox sx={normalSection} id="products">
        <AppContainer>
          <OurProducts />
        </AppContainer>
      </AppBox>
      <AppBox sx={greySection}>
        <AppContainer>
          <TopProducts />
        </AppContainer>
      </AppBox>
      <AppBox mt="4rem" id="service">
        <AppContainer>
          <ChooseUs />
        </AppContainer>
      </AppBox>
      <AppVstack mt="4rem" sx={greySection}>
        <AppContainer>
          <Brands />
        </AppContainer>
      </AppVstack>
      <AppVstack sx={normalSection} id="about">
        <AppContainer>
          <About />
        </AppContainer>
      </AppVstack>
      {/* <AppVstack mt="4rem" id="contact">
        <Contact />
      </AppVstack> */}
    </AppBox>
  );
}

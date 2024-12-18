import AppBox from "./components/material-components/AppBox";

import AppContainer from "@components/page-components/AppContainer";
import CounterSection from "@components/page-components/home/CounterSection";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppCarousel from "@components/page-components/AppCarousel";
import { heroSection } from "@constants/data";

import Contact from "@components/page-components/Contact";
import About from "@components/page-components/About";
import OurProducts from "@components/page-components/home/OurProducts";
import ChooseUs from "@components/page-components/home/ChooseUs";

export default function Home() {
  return (
    <AppBox>
      <AppBox sx={{ height: { xs: "420px", md: "700px" } }}>
        <AppCarousel data={heroSection} />
      </AppBox>
      <AppContainer>
        <AppBox mt="4rem">
          <CounterSection />
        </AppBox>
        <AppBox mt="4rem" id="products">
          <OurProducts />
        </AppBox>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="TOP PRODUCTS" />
        </AppVstack>
        <AppBox mt="4rem" id="service">
          <ChooseUs />
        </AppBox>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="PARTNER BRANDS" />
        </AppVstack>
        <AppVstack mt="4rem" id="about">
          <About />
        </AppVstack>
        {/* <AppVstack mt="4rem" id="contact">
          <Contact />
        </AppVstack> */}
      </AppContainer>
    </AppBox>
  );
}

import AppBox from "./components/material-components/AppBox";
import AppContainer from "@components/page-components/AppContainer";
import CounterSection from "@components/page-components/home/CounterSection";
import AppCarousel from "@components/page-components/AppCarousel";
import { heroSection } from "@constants/data";
import OurProducts from "@components/page-components/home/OurProducts";
import ChooseUs from "@components/page-components/home/ChooseUs";
import Warehouse from "@components/page-components/home/Warehouse";

export default function Home() {
  const greySection = {
    background: "#f9f9f9",
    py: "3.2rem",
  };
  const normalSection = {
    py: "3.2rem",
  };
  return (
    <AppBox mt="3.6rem">
      <AppBox
        sx={{
          height: { xs: "233px", sm: "355px", md: "505px", lg: "700px" },
        }}
      >
        <AppCarousel data={heroSection} />
      </AppBox>

      <AppBox sx={{ ...greySection }}>
        <AppContainer>
          <CounterSection />
        </AppContainer>
      </AppBox>
      <AppBox sx={normalSection}>
        <AppContainer>
          <OurProducts />
        </AppContainer>
      </AppBox>

      <AppBox sx={normalSection}>
        <AppContainer>
          <ChooseUs />
        </AppContainer>
      </AppBox>
      <AppBox sx={normalSection}>
        <AppContainer>
          <Warehouse />
        </AppContainer>
      </AppBox>
      {/* <AppVstack sx={greySection}>
        <AppContainer>
          <Brands />
        </AppContainer>
      </AppVstack> */}
    </AppBox>
  );
}

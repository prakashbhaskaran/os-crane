import AppBox from "./components/material-components/AppBox";
import AppButton from "./components/material-components/AppButton";
import AppDivider from "./components/material-components/AppDivider";
import AppHstack from "./components/material-components/AppHstack";
import AppText from "./components/material-components/AppText";
import AppCarousel from "./components/page-components/AppCarousel";
import AppContainer from "./components/page-components/AppContainer";
import AppNavbar from "./components/page-components/AppNavbar";
import ProductCard from "./components/page-components/ProductCard";

export default function Home() {
  return (
    <AppBox>
      <AppNavbar />
      <AppContainer>
        <AppBox sx={{ height: "500px", mt: "20px" }}>
          <AppCarousel />
        </AppBox>
        <AppDivider sx={{ mt: "40px" }} />
        <AppBox mt="40px" pb="20px">
          <AppText variant="h4" fontWeight="700" letterSpacing="-0.9px">
            Products
          </AppText>
          <AppText>
            Below is a list of products we have available for you.
          </AppText>
          <AppHstack flexWrap="wrap" gap="20px" mt="20px">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </AppHstack>
        </AppBox>
      </AppContainer>
    </AppBox>
  );
}

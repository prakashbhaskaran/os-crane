import AppBox from "./components/material-components/AppBox";

import AppContainer from "@components/page-components/AppContainer";
import CounterSection from "@components/page-components/home/CounterSection";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppText from "@components/material-components/AppText";
import AppCarousel from "@components/page-components/AppCarousel";
import { Card } from "@mui/material";
import { chooseUs } from "@constants/data";
import AppGrid from "@components/page-components/AppGrid";
import { upperCase } from "lodash";
import Contact from "@components/page-components/Contact";
import About from "@components/page-components/About";

export default function Home() {
  return (
    <AppBox>
      {/* <AppBox sx={{ height: { xs: "420px", md: "600px" } }}>
        <AppCarousel />
      </AppBox> */}
      <AppContainer>
        <AppBox mt="4rem">
          <CounterSection />
        </AppBox>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="OUR PRODUCTS" />
          <AppText
            text={
              "For 15 years we are devoted to serving clients in construction machinery spare parts business"
            }
          />
        </AppVstack>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="TOP PRODUCTS" />
        </AppVstack>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="WHY CHOOSE US" />
          <AppText
            text={
              "For 15 years we are devoted to serving clients in construction machinery spare parts business"
            }
          />
          <AppGrid
            sx={{
              gridTemplateColumns: {
                xs: "auto",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              },
              justifyContent: "center",
              gap: "20px",
              mt: "2rem",
            }}
          >
            {chooseUs.map((item) => {
              return (
                <Card
                  key={item.title}
                  sx={{ p: "16px", boxShadow: 0, border: `1px solid` }}
                >
                  <AppText
                    sx={{ fontWeight: "600", fontSize: "1.2rem" }}
                    text={upperCase(item.title)}
                  />
                  {item.list.length > 0 && (
                    <AppVstack>
                      {item.list.map((_) => {
                        return (
                          <AppText key={_.description} text={_.description} />
                        );
                      })}
                    </AppVstack>
                  )}
                </Card>
              );
            })}
          </AppGrid>
        </AppVstack>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="PARTNER BRANDS" />
        </AppVstack>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <About />
        </AppVstack>
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <Contact />
        </AppVstack>
      </AppContainer>
    </AppBox>
  );
}

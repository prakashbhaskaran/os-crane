import AppBox from "./components/material-components/AppBox";

import AppContainer from "@components/page-components/AppContainer";
import CounterSection from "@components/page-components/home/CounterSection";
import AppVstack from "@components/material-components/AppVstack";
import AppHeader from "@components/page-components/AppHeader";
import AppText from "@components/material-components/AppText";

export default function Home() {
  return (
    <AppBox>
      <AppContainer>
        <CounterSection />
        <AppVstack alignItems="center" mt="4rem" textAlign="center">
          <AppHeader heading="OUR PRODUCTS" />
          <AppText
            text={
              "For 15 years we are devoted to serving clients in construction machinery spare parts business"
            }
          />
        </AppVstack>
      </AppContainer>
    </AppBox>
  );
}

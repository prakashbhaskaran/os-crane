import AppBox from "@components/material-components/AppBox";
import AppHstack from "@components/material-components/AppHstack";
import AppVstack from "@components/material-components/AppVstack";
import { warehouse } from "@constants/data";
import Image from "next/image";
import React from "react";
import AppHeader from "../AppHeader";
import AppText from "@components/material-components/AppText";

const Warehouse = () => {
  return (
    <AppBox>
      <AppVstack alignItems="center" textAlign="center">
        <AppHeader heading="INVENTORY CENTER" />
        <AppText
          sx={{
            color: "grey",
            fontWeight: "600",
          }}
          text={
            "Stock of machinery spares organized for quick and efficient access"
          }
        />
      </AppVstack>
      <AppHstack mt="1rem" sx={{ height: { xs: "600px" }, gap: "10px" }}>
        <AppVstack width="50%" height="100%" gap="10px">
          <AppBox sx={{ position: "relative", height: "400px", width: "100%" }}>
            <Image
              src={warehouse[0].img}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </AppBox>
          <AppBox sx={{ position: "relative", height: "400px", width: "100%" }}>
            <Image
              src={warehouse[1].img}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </AppBox>
        </AppVstack>
        <AppHstack width="50%" height="100%">
          <AppBox sx={{ position: "relative", height: "600px", width: "100%" }}>
            <Image
              src={warehouse[2].img}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </AppBox>
        </AppHstack>
      </AppHstack>
    </AppBox>
  );
};

export default Warehouse;

import AppVstack from "@components/material-components/AppVstack";
import React from "react";
import AppHeader from "../AppHeader";
import AppText from "@components/material-components/AppText";
import AppGrid from "../AppGrid";
import { Card, IconButton } from "@mui/material";
import { chooseUs } from "@constants/data";
import { upperCase } from "lodash";
import { customPalette } from "@constants/style";

const ChooseUs = () => {
  return (
    <AppVstack alignItems="center" mt="4rem" textAlign="center">
      <AppHeader heading="WHY CHOOSE US" />
      <AppText
        sx={{
          color: "grey",
          fontWeight: "600",
        }}
        text={
          "For 5 years we are devoted to serving clients in construction machinery spare parts business"
        }
      />
      <AppGrid
        sx={{
          gridTemplateColumns: {
            xs: "auto",
            sm: "repeat(2, 1fr)",
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
              sx={{
                p: "16px",
                boxShadow: 1,
                height: "220px",
              }}
            >
              <IconButton
                sx={{ fontSize: "40px", color: customPalette.global.teritiary }}
              >
                {item.icon}
              </IconButton>
              <AppText
                sx={{
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  color: customPalette.global.black,
                }}
                text={upperCase(item.title)}
              />
              {item.list.length > 0 && (
                <AppVstack mt="1rem">
                  {item.list.map((_) => {
                    return (
                      <AppText
                        key={_.description}
                        sx={{ color: "grey", fontWeight: "600" }}
                        text={_.description}
                      />
                    );
                  })}
                </AppVstack>
              )}
            </Card>
          );
        })}
      </AppGrid>
    </AppVstack>
  );
};

export default ChooseUs;

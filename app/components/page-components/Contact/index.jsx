"use client";
import AppBox from "@components/material-components/AppBox";
import React from "react";
import AppHeader from "../AppHeader";
import AppVstack from "@components/material-components/AppVstack";
import AppHstack from "@components/material-components/AppHstack";
import AppText from "@components/material-components/AppText";

import { IconButton } from "@mui/material";
import AppGrid from "../AppGrid";
import { customPalette } from "@constants/style";
import { contactList } from "@constants/data";

const Contact = () => {
  const handler = (value, name) => {
    if (name === "Email") {
      window.location.href = `mailto:${value}`;
    } else if (name === "Mobile") {
      window.location.href = `tel:${value}`;
    } else if (name === "WhatsApp") {
      window.location.href = `https://wa.me/${value}`;
    }
  };
  return (
    <AppBox>
      <AppGrid
        sx={{
          gap: "20px",
          gridTemplateColumns: {
            xs: "auto",
          },
        }}
        mt="20px"
      >
        {contactList
          .filter((item) => item.label !== "Enquire")
          .map((_) => {
            return (
              <AppBox key={_.label} sx={{ width: { xs: "100%", md: "400px" } }}>
                <AppHstack gap={"10px"} alignItems="start">
                  <AppBox
                    sx={{
                      padding: "8px",
                      cursor: "pointer",
                    }}
                    onClick={() => handler(_.description, _.label)}
                  >
                    <IconButton sx={{ color: customPalette.global.primary }}>
                      {_.icon}
                    </IconButton>
                  </AppBox>
                  <AppVstack alignItems="start">
                    <AppText
                      sx={{
                        fontWeight: "700",
                        fontSize: {
                          xs: "1rem",
                          md: "1.3rem",
                          color: customPalette.global.teritiary,
                        },
                      }}
                      text={`${_.label}`}
                    />

                    <AppText
                      sx={{
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        fontWeight: "700",
                        color: "grey",
                      }}
                      text={_.value || _.description}
                    />
                  </AppVstack>
                </AppHstack>
              </AppBox>
            );
          })}
      </AppGrid>
    </AppBox>
  );
};

export default Contact;

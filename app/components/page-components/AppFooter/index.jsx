"use client";
import React from "react";
import AppBox from "@components/material-components/AppBox";
import AppText from "@components/material-components/AppText";
import AppVstack from "@components/material-components/AppVstack";
import AppHstack from "@components/material-components/AppHstack";
import AppContainer from "@components/page-components/AppContainer";
import AppLink from "../AppLink";
import AppLogo from "../AppLogo";
import { customPalette } from "@constants/style";

const AppFooter = () => {
  const d = new Date();
  let year = d.getFullYear();
  const links = [
    {
      name: "RESOURCES",
      list: [
        { name: "Products", link: "/products" },
        { name: "About", link: "/about" },
      ],
    },
    {
      name: "GET IN TOUCH",
      list: [
        { name: "Enquire", link: "/enquire" },
        { name: "Contact", link: "/contact" },
      ],
    },
  ];
  return (
    <AppBox as="footer" sx={{ background: customPalette.global.primary }}>
      <AppBox
        sx={{
          px: "20px",
          py: "40px",
        }}
      >
        <AppContainer>
          <AppHstack
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            gap={{ xs: "1rem", md: "initial" }}
            justifyContent={{ md: "space-between" }}
          >
            <AppVstack width={{ xs: "100%", md: "initial", gap: "6px" }}>
              <AppBox>
                <AppLogo
                  textSx={{
                    fontSize: "1.4rem",
                    color: customPalette.global.white,
                  }}
                  imageSize="30px"
                  imageSrc="/assets/images/os_white_logo.png"
                  sx={{ gap: "6px" }}
                />
              </AppBox>

              <AppText sx={{ color: customPalette.global.white }}>
                © {year}. All Rights Reserved
              </AppText>
            </AppVstack>

            <AppHstack
              gap={"1.2rem"}
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="start"
              width={{ xs: "100%", md: "initial" }}
            >
              {links.map((item) => {
                return (
                  <AppVstack
                    width={{ xs: "100%", md: "initial" }}
                    key={item.name}
                    gap="10px"
                  >
                    <AppText
                      sx={{
                        fontWeight: "700",
                        fontSize: "1.1rem",
                        color: customPalette.global.white,
                      }}
                    >
                      {item.name}
                    </AppText>
                    <AppVstack gap="6px">
                      {item.list.map((_) => {
                        return (
                          <AppLink
                            href={_?.link}
                            key={_.name}
                            text={_.name}
                            textSx={{
                              color: customPalette.global.white,

                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                          />
                        );
                      })}
                    </AppVstack>
                  </AppVstack>
                );
              })}
            </AppHstack>
          </AppHstack>
        </AppContainer>
      </AppBox>
    </AppBox>
  );
};

export default AppFooter;

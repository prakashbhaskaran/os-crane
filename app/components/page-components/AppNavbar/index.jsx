"use client";
import React, { useContext, useState } from "react";
import AppBox from "@components/material-components/AppBox";
import AppHstack from "@components/material-components/AppHstack";
import { cssStyle, customPalette } from "@constants/style";
import { Badge, IconButton } from "@mui/material";
import AppContainer from "../AppContainer";
import { ThemeContext } from "@providers/MaterialThemeProvider";
import { GiHamburgerMenu } from "react-icons/gi";
import NavDrawer from "@components/page-components/AppNavbar/NavDrawer";
import SearchDrawer from "@components/page-components/AppNavbar/SearchDrawer";
import { usePathname, useRouter } from "next/navigation";
import AppLogo from "@components/page-components/AppLogo";
import AppButton from "@components/material-components/AppButton";
import { navbarLinks } from "@constants/links";
import AppLink from "../AppLink";

const AppNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { handleDarkMode, dark } = useContext(ThemeContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };
  const handleSearchClose = () => {
    setOpenSearch(false);
  };
  const handleSearchOpen = () => {
    setOpenSearch(true);
  };

  let bgcolor = customPalette.global.primary;
  let color = customPalette.global.white;
  return (
    <AppBox
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 1000,
      }}
    >
      <AppBox
        sx={{
          background: bgcolor,
          boxShadow: dark ? cssStyle.dividerColor : cssStyle.shadow.bottom,
          borderBottom: dark ? `1px solid ${cssStyle.dividerColor}` : "none",
          py: { xs: "6px", md: "10px" },
          px: "10px",
        }}
      >
        <AppContainer>
          <AppHstack justifyContent="space-between">
            {/* <AppHstack
              // width={{ xs: "20%", lg: "0%" }}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <IconButton onClick={handleDrawerOpen}>
                <GiHamburgerMenu color={color} size={23} />
              </IconButton>
            </AppHstack> */}
            <AppHstack
              // width={{ xs: "60%", lg: "80%" }}
              justifyContent={{ xs: "center", lg: "start" }}
            >
              <AppBox>
                <AppLogo
                  textSx={{
                    color: color,
                  }}
                  imageSrc="/assets/images/os_white_logo.png"
                  imageSize="30px"
                />
              </AppBox>
            </AppHstack>
            <AppHstack
              justifyContent="center"
              sx={{
                display: { xs: "none", md: "flex" },
                gap: "20px",
              }}
            >
              {navbarLinks.main.map((_) => {
                return (
                  <AppHstack
                    key={_.link}
                    sx={{
                      "&:hover": {},
                    }}
                  >
                    <AppLink
                      href={_.link}
                      sx={{
                        height: "100%",
                        color: color,
                        fontWeight: "700",
                        borderBottom:
                          pathname === _.link ? `3px solid ${color}` : "",
                      }}
                      textSx={{ color: customPalette.global.black }}
                    >
                      {_.label}
                    </AppLink>
                  </AppHstack>
                );
              })}
            </AppHstack>

            <AppHstack justifyContent="end" /* width="20%" */>
              <IconButton
                onClick={handleDrawerOpen}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <GiHamburgerMenu color={color} size={23} />
              </IconButton>
              <AppHstack
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                }}
              >
                <AppLink href="/enquire">
                  <AppButton color="secondary">
                    <AppBox
                      sx={{
                        color: customPalette.global.black,
                      }}
                    >
                      Enquire
                    </AppBox>
                  </AppButton>
                </AppLink>
              </AppHstack>
            </AppHstack>
          </AppHstack>
        </AppContainer>
        <NavDrawer open={openDrawer} handleClose={handleDrawerClose} />
        <SearchDrawer open={openSearch} handleClose={handleSearchClose} />
      </AppBox>
    </AppBox>
  );
};

export default AppNavbar;

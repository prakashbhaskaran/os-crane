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
import { usePathname } from "next/navigation";
import { IoSearch } from "react-icons/io5";
import AppLogo from "@components/page-components/AppLogo";
import AppButton from "@components/material-components/AppButton";
import { navbarLinks } from "@constants/links";
import AppLink from "../AppLink";

const AppNavbar = () => {
  const pathname = usePathname();
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
  const is_home = pathname === "/";
  // let bgcolor = is_home ? customPalette.global.white : cssStyle.mainColor;
  let bgcolor = customPalette.global.white;
  // let color = is_home ? cssStyle.mainColor : customPalette.global.white;
  let color = cssStyle.mainColor;

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
          py: "10px",
          px: "10px",
        }}
      >
        <AppContainer>
          <AppHstack justifyContent="space-between">
            <AppHstack
              width={{ xs: "20%", lg: "0%" }}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <IconButton onClick={handleDrawerOpen}>
                <GiHamburgerMenu color={color} size={23} />
              </IconButton>
            </AppHstack>
            <AppHstack
              width={{ xs: "60%", lg: "80%" }}
              justifyContent={{ xs: "center", lg: "start" }}
            >
              <AppBox>
                <AppLogo
                  image={
                    is_home
                      ? "/logo-without-bg-primarycolor.png"
                      : "/logo-without-bg.png"
                  }
                  textSx={{
                    color: color,
                  }}
                  imageSize="30px"
                />
              </AppBox>
            </AppHstack>

            <AppHstack gap="10px" justifyContent="end" width="20%">
              <AppLink href="/enquire">
                <AppButton>Enquire</AppButton>
              </AppLink>
            </AppHstack>
          </AppHstack>
        </AppContainer>
        <NavDrawer open={openDrawer} handleClose={handleDrawerClose} />
        <SearchDrawer open={openSearch} handleClose={handleSearchClose} />
      </AppBox>
      {pathname !== "/enquire" && (
        <AppHstack
          justifyContent="center"
          sx={{
            display: { xs: "none", lg: "flex" },
            background: customPalette.global.primary,
          }}
        >
          {navbarLinks.main.map((_) => {
            return (
              <AppHstack
                key={_.link}
                sx={{
                  height: "50px",
                  background:
                    pathname === _.link
                      ? customPalette.global.quinary
                      : "initial",
                  "&:hover": {
                    background: customPalette.global.quinary,
                  },
                }}
              >
                <AppLink
                  href={_.link}
                  sx={{
                    width: "200px",
                    height: "100%",
                  }}
                >
                  <AppHstack
                    sx={{
                      height: "100%",
                      color: "white",
                      justifyContent: "center",
                    }}
                  >
                    {_.label}
                  </AppHstack>
                </AppLink>
              </AppHstack>
            );
          })}
        </AppHstack>
      )}
    </AppBox>
  );
};

export default AppNavbar;

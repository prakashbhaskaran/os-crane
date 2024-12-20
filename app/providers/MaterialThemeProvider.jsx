"use client";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material";
import { createContext, useState } from "react";
import { cssStyle, customPalette } from "@constants/style";
import { lato_font } from "@utils/theme";

export const ThemeContext = createContext();

const MaterialThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const handleDarkMode = () => {
    setTheme(!dark);
    setDark(!dark);
  };
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      text: {
        primary: customPalette.global.primary,
      },
      primary: {
        main: customPalette.global.primary,
      },
      secondary: {
        main: customPalette.global.secondary,
      },
      teritiary: {
        main: customPalette.global.teritiary,
        light: alpha(customPalette.global.teritiary, 0.5),
        dark: alpha(customPalette.global.teritiary, 0.9),
        contrastText:
          getContrastRatio(
            customPalette.global.teritiary,
            customPalette.global.white
          ) > 4.5
            ? customPalette.global.white
            : customPalette.global.teritiary,
      },
      light: {
        main: customPalette.global.white,
        light: alpha(customPalette.global.white, 0.5),
        dark: alpha(customPalette.global.white, 0.9),
        contrastText:
          getContrastRatio(
            customPalette.global.white,
            customPalette.global.white
          ) > 4.5
            ? customPalette.global.white
            : cssStyle.mainColor,
      },
    },
    components: {},

    typography: {
      fontFamily: lato_font.style.fontFamily,
    },
  });
  return (
    <ThemeContext.Provider value={{ handleDarkMode, dark }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MaterialThemeProvider;

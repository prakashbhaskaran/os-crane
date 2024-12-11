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
        primary: customPalette.global.black,
      },
      primary: {
        main: customPalette.global.black,
      },
      secondary: {
        main: customPalette.global.secondary,
      },
      teritiary: {
        main: customPalette.global.quaternary,
        light: alpha(customPalette.global.quaternary, 0.5),
        dark: alpha(customPalette.global.quaternary, 0.9),
        contrastText:
          getContrastRatio(
            customPalette.global.quaternary,
            customPalette.global.white
          ) > 4.5
            ? customPalette.global.quaternary
            : customPalette.global.white,
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

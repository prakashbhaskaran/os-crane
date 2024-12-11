import React from "react";
import { CircularProgress } from "@mui/material";
import AppVstack from "@components/material-components/AppVstack";
import AppText from "@components/material-components/AppText";
import MainAnimation from "@components/page-components/MainAnimation";
const AppLoader = ({ children, loading = false, text = "Loading..." }) => {
  if (!loading && children) {
    return <MainAnimation>{children}</MainAnimation>;
  }
  return (
    <AppVstack
      justifyContent="center"
      alignItems="center"
      height="40vh"
      gap="10px"
    >
      <CircularProgress />
      <AppText text={text} />
    </AppVstack>
  );
};

export default AppLoader;

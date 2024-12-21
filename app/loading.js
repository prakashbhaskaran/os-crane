import AppHstack from "@components/material-components/AppHstack";
import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <AppHstack
      sx={{ justifyContent: "center", alignItems: "center", height: "90vh" }}
    >
      <CircularProgress />
    </AppHstack>
  );
};

export default Loading;

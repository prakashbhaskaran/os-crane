import Link from "next/link";
import React from "react";
import AppText from "@components/material-components/AppText";

const AppLink = ({ href = "", sx, textSx, text = "", children, ...rest }) => {
  return (
    <Link href={href} style={{ textDecoration: "none", ...sx }} {...rest}>
      {children || <AppText sx={textSx} text={text} />}
    </Link>
  );
};

export default AppLink;

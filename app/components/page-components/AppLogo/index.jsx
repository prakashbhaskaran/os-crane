import React from "react";
import AppLink from "@components/page-components/AppLink";
import AppText from "@components/material-components/AppText";
import Image from "next/image";
import AppBox from "@components/material-components/AppBox";

const AppLogo = ({
  handleClose = () => {},
  link = "/",
  textSx = {},
  imageSize = "40px",
  imageSrc = "/assets/images/os_red_logo.png",
  sx,
}) => {
  return (
    <AppLink
      onClick={handleClose}
      href={link}
      sx={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        height: "100%",
        width: "100%",
        ...sx,
      }}
    >
      <AppBox
        sx={{
          position: "relative",
          height: { xs: "30px", md: imageSize },
          width: { xs: "30px", md: imageSize },
        }}
      >
        <Image
          src={imageSrc}
          alt="LOGO"
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </AppBox>
      <AppText
        text={"OS CRANE PARTS"}
        sx={{
          fontWeight: "700",
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          ...textSx,
        }}
      />
    </AppLink>
  );
};

export default AppLogo;

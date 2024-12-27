import AppBox from "@components/material-components/AppBox";
import { contactList } from "@constants/data";
import { cssStyle, customPalette } from "@constants/style";
import { IconButton } from "@mui/material";
import React from "react";
import AppGrid from "../AppGrid";
import { useRouter } from "next/navigation";

const ContactFloat = () => {
  const router = useRouter();
  const handler = (value, name) => {
    if (name === "Email") {
      window.location.href = `mailto:${value}`;
    } else if (name === "Mobile") {
      window.location.href = `tel:${value}`;
    } else if (name === "WhatsApp") {
      window.location.href = `https://wa.me/${value}`;
    } else if (name === "Enquire") {
      router.push(value);
    } else if (name === "Instagram") {
      window.open(value, "_blank");
    }
  };
  return (
    <AppBox
      sx={{
        position: "sticky",
        bottom: 0,
        width: "100%",
        background: customPalette.global.primary,
        borderTop: `1px solid ${customPalette.global.white}`,
        zIndex: 1000,
        display: { xs: "block", md: "none" },
      }}
    >
      <AppGrid
        sx={{
          gridTemplateColumns: "auto auto auto auto auto",
          alignContent: "center",
        }}
      >
        {contactList
          .filter((item) => item.label !== "Address")
          .map((_, index) => {
            return (
              <AppBox
                sx={{
                  padding: "8px",
                  cursor: "pointer",
                  textAlign: "center",
                  borderLeft:
                    index !== 0
                      ? `1px solid ${customPalette.global.white}`
                      : "none",
                }}
                key={_.label}
                onClick={() => handler(_.description, _.label)}
              >
                <IconButton sx={{ color: customPalette.global.white }}>
                  {_.icon}
                </IconButton>
              </AppBox>
            );
          })}{" "}
      </AppGrid>
    </AppBox>
  );
};

export default ContactFloat;

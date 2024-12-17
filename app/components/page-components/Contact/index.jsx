"use client";
import AppBox from "@components/material-components/AppBox";
import React from "react";
import AppHeader from "../AppHeader";
import AppVstack from "@components/material-components/AppVstack";
import AppHstack from "@components/material-components/AppHstack";
import AppText from "@components/material-components/AppText";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IconButton } from "@mui/material";
import AppGrid from "../AppGrid";

const Contact = () => {
  const data = [
    {
      label: "Address",
      description:
        "No. 78, Verkadu Village Bypass, Gummudipoondi, Chennai - 601202",
      icon: <FaLocationDot size={20} />,
    },
    {
      label: "Mobile",
      description: "+91 8056220468",
      icon: <FaMobileAlt size={20} />,
    },
    {
      label: "Email",
      description: "oscraneparts20@gmail.com",
      icon: <MdEmail size={20} />,
    },
  ];
  const handler = (value, name) => {
    if (name === "Email") {
      window.location.href = `mailto:${value}`;
    } else if (name === "Mobile") {
      window.location.href = `tel:${value}`;
    }
  };
  return (
    <AppBox>
      <AppVstack justifyContent="center" alignItems="center">
        <AppHeader heading="CONTACT" />
        <AppText text={"Please contact us for more queries."} />
      </AppVstack>
      <AppGrid
        sx={{
          gap: "20px",
          justifyContent: "center",
          gridTemplateColumns: { xs: "auto", md: "auto auto auto" },
        }}
        mt="20px"
      >
        {data.map((_) => {
          return (
            <AppBox key={_.label} sx={{ width: { xs: "100%", md: "400px" } }}>
              <AppHstack
                gap={"10px"}
                alignItems="start"
                justifyContent="center"
              >
                <AppBox
                  sx={{
                    border: `2px solid`,
                    borderRadius: "100%",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => handler(_.description, _.label)}
                >
                  <IconButton>{_.icon}</IconButton>
                </AppBox>
                <AppVstack alignItems="start">
                  <AppText
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "1rem", md: "1.3rem" },
                    }}
                    text={`${_.label}`}
                  />

                  <AppText
                    sx={{
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      fontWeight: "700",
                      color: "grey",
                    }}
                    text={_.description}
                  />
                </AppVstack>
              </AppHstack>
            </AppBox>
          );
        })}
      </AppGrid>
    </AppBox>
  );
};

export default Contact;

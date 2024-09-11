"use client";
import React from "react";
import Link from "next/link";
import AppBox from "../../material-components/AppBox";
import AppHstack from "../../material-components/AppHstack";
import AppText from "../../material-components/AppText";
import { usePathname } from "next/navigation";
import { Autocomplete, TextField } from "@mui/material";
import AppButton from "../../material-components/AppButton";
import { IoMdLogIn } from "react-icons/io";

const AppNavbar = () => {
  const pathname = usePathname();
  const links = [
    { label: "Products", link: "/products" },
    { label: "Categories", link: "/categories" },
  ];
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
  ];
  return (
    <AppBox
      sx={{
        boxShadow: "0 0.8px #d8d8d8",
        py: "10px",
      }}
    >
      <AppHstack
        sx={{
          maxWidth: "1280px",
          margin: "auto",
          px: "10px",
        }}
      >
        <AppHstack gap="16px" width="50%">
          <AppBox>
            <Link href={"/"} style={{ textDecoration: "none" }}>
              <AppText fontWeight="600">Store</AppText>
            </Link>
          </AppBox>
          <AppBox>
            <AppHstack gap={"16px"}>
              {links.map((_) => {
                return (
                  <Link
                    href={_?.link}
                    key={_?.link}
                    style={{ textDecoration: "none" }}
                  >
                    <AppText
                      text={_?.label}
                      sx={
                        {
                          //   borderBottom: pathname.includes(_?.link)
                          //     ? `3px solid #7b2ade`
                          //     : "none",
                        }
                      }
                    />
                  </Link>
                );
              })}
            </AppHstack>
          </AppBox>
        </AppHstack>
        <AppHstack width="50%" gap="16px" justifyContent="end">
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            sx={{ width: "50%" }}
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search..." size="small" />
            )}
          />
          <AppButton sx={{ background: "black" }} startIcon={<IoMdLogIn />}>
            Login
          </AppButton>
        </AppHstack>
      </AppHstack>
    </AppBox>
  );
};

export default AppNavbar;

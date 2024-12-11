"use client";
import { TextField } from "@mui/material";
import React from "react";

const AppInput = ({
  variant = "outlined",
  size = "small",
  label = "name",
  changeHandler = () => {},
  sx,
  type = "text",
  name = "name",
  formValues,
  ...rest
}) => {
  return (
    <TextField
      id={name}
      label={label}
      variant={variant}
      type={type}
      name={name}
      size={size}
      sx={sx}
      onWheel={(e) => {
        if (type === "number") {
          e.target.blur();
        }
      }}
      onChange={changeHandler}
      {...rest}
    />
  );
};

export default AppInput;

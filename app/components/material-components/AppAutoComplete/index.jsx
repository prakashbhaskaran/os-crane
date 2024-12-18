"use client";
import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const AppAutoComplete = ({
  options = [],
  label = "Search...",
  size = "small",
  changeHandler = () => {},
  sx,
  helperText,
  error = false,
  name = "name",
  renderInput = (params) => (
    <TextField
      {...params}
      label={label}
      helperText={helperText}
      error={error}
      size={size}
      name={name}
    />
  ),
  ...rest
}) => {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      options={options}
      getOptionLabel={(option) => option.name || ""}
      sx={sx}
      onChange={changeHandler}
      {...rest}
      renderInput={renderInput}
    />
  );
};

export default AppAutoComplete;

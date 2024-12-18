"use client";

import React from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthSessionProvider = ({ children }) => {
  return (
    <ReactQueryProvider>
      {children}
      <ToastContainer position="top-center" />
    </ReactQueryProvider>
  );
};

export default AuthSessionProvider;

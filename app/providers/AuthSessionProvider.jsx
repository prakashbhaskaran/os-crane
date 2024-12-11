"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import ReactQueryProvider from "./ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthSessionProvider = ({ children }) => {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        {children}
        <ToastContainer position="top-center" />
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default AuthSessionProvider;

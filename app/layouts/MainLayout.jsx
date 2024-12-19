"use client";
import React, { useEffect } from "react";
import AppBox from "@components/material-components/AppBox";
import AppNavbar from "@components/page-components/AppNavbar";
import { usePathname } from "next/navigation";

import AppFooter from "@components/page-components/AppFooter";
const MainLayout = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    handleRouteChange();
  }, [pathname]);

  return (
    <AppBox className="main-container">
      <AppNavbar />
      <AppBox pt={{ xs: "60px", lg: "100px" }} pb="20px">
        {children}
      </AppBox>
      <AppFooter />
    </AppBox>
  );
};

export default MainLayout;

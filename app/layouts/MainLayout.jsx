"use client";
import React, { useEffect } from "react";
import AppBox from "@components/material-components/AppBox";
import AppNavbar from "@components/page-components/AppNavbar";
import { usePathname } from "next/navigation";

import AppFooter from "@components/page-components/AppFooter";
import ContactFloat from "@components/page-components/Contact/ContactFloat";

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
      <AppBox pb="20px">{children}</AppBox>
      <AppFooter />
      <ContactFloat />
    </AppBox>
  );
};

export default MainLayout;

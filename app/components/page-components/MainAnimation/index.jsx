"use client";
import React from "react";
import { motion } from "framer-motion";

const MainAnimation = ({ children, sx }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={sx}>
      {children}
    </motion.div>
  );
};

export default MainAnimation;

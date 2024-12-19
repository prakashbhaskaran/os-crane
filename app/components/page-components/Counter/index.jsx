"use client";
import {
  motion,
  useMotionValue,
  animate,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import AppBox from "@components/material-components/AppBox";
import { customPalette } from "@constants/style";

function Counter({ value = 0 }) {
  const Box = motion.create(AppBox);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = isInView
      ? animate(count, value, { duration: 2 })
      : animate(count, 0, { duration: 2 });

    return () => controls.stop();
  }, [count, value, isInView]);
  return (
    <Box
      sx={{
        fontSize: {
          xs: "1.2rem",
          md: "2.2rem",
          color: customPalette.global.teritiary,
        },
        fontWeight: 700,
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        ref={ref}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        {rounded}
      </motion.span>
      +
    </Box>
  );
}
export default Counter;

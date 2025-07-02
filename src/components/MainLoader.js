"use client";

import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import loaderAnimation from "@/../public/loaderAnimation.json";

export default function LoaderScreen() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setStartAnimation(true); // Start after full page load

      const animationTimer = setTimeout(() => {
        setAnimationDone(true);
      }, 3000); // Start transition at 3s

      const hideTimer = setTimeout(() => {
        setHideLoader(true); // Fully hide after 4s
      }, 4000);

      return () => {
        clearTimeout(animationTimer);
        clearTimeout(hideTimer);
      };
    };

    if (document.readyState === "complete") {
      // Page already loaded
      handlePageLoad();
    } else {
      // Wait for window load
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (!startAnimation && !hideLoader) {
    // Prevent rendering until fully loaded
    return null;
  }

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          className="fixed top-0 left-0 z-[999] h-screen w-screen bg-background overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              scale: 1,
            }}
            animate={
              animationDone
                ? {
                    top: "1.25rem",
                    left: "4rem",
                    x: 0,
                    y: 0,
                    width: "144px",
                  }
                : {}
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute z-50"
          >
            <Lottie animationData={loaderAnimation} loop={false} autoplay />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";

const SIZES = {
  LARGE: 1024,
  TABLET: 640,
  MOBILE_L: 425,
  MOBILE_M: 375,
  MOBILE_S: 320,
};

export const useResponsive = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return {
    isMobile: width <= SIZES.TABLET,
    isTablet: width <= SIZES.LARGE && width >= SIZES.TABLET,
  };
};

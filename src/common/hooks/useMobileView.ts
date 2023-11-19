import { useEffect, useState } from "react";

const SIZES = {
  TABLET: 640,
  MOBILE_L: 425,
  MOBILE_M: 375,
  MOBILE_S: 320,
};

export const useMobileView = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => setWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return width <= SIZES.TABLET;
};

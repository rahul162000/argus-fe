import React, { useRef } from "react";
import useOnScreen from "../../helpers/onScreen";

const SideLine = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div
      ref={ref}
      style={{ zIndex: 10 }}
      className={`z-10  h-auto min-w-8 w-8-px max-w-8 bg-red-1 mr-7 rounded-full ${
        isVisible
          ? "transition ease-out delay-300 duration-500 transform origin-top scale-100"
          : "transition ease-out delay-750 duration-500 transform origin-top scale-0"
      }  motion-safe:animate-scaleIn`}
    ></div>
  );
};

export default SideLine;

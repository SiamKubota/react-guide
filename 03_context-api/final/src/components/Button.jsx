import { useContext } from "react";

import { ModeContext } from "../../context/ModeContext";

const Button = () => {
  const modeCtx = useContext(ModeContext);
  console.log("[Button] modeCtx: ", modeCtx);

  return (
    <button
      onClick={() => {
        modeCtx.setMode({ name: "rainbow", icon: "looks" });
      }}
    >
      RAINBOW
    </button>
  );
};

export default Button;

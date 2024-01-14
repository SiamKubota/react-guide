import { useContext } from "react";

import { ModeContext } from "../../context/ModeContext";

import Button from "../components/Button";

import classes from "./Home.module.css";

const Home = () => {
  const modeCtx = useContext(ModeContext);
  console.log("[Home] modeCtx: ", modeCtx);

  return (
    <div className={classes[modeCtx.mode.name]}>
      <h1>Hello React with Context API</h1>
      {/* <p>I'm using context</p> */}
      <span className="material-symbols-outlined">{modeCtx.mode.icon}</span>
      <span>{modeCtx.mode.name}</span>
      <br />
      <br />
      <button
        onClick={() => {
          switch (modeCtx.mode.name) {
            case "light":
              modeCtx.setMode({ name: "dark", icon: "dark_mode" });
              break;
            case "dark":
              modeCtx.setMode({ name: "rainbow", icon: "looks" });
              break;
            case "rainbow":
              modeCtx.setMode({ name: "light", icon: "light_mode" });
              break;
            default:
              modeCtx.setMode({ name: "light", icon: "light_mode" });
          }
        }}
      >
        CHANGE MODE!
      </button>
      <Button />
    </div>
  );
};

export default Home;

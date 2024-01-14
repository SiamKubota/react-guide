import { createContext, useState } from "react";

const initialMode = {
  name: "",
  icon: "",
};

export const ModeContext = createContext(initialMode);

const ModeProvider = (props) => {
  const [mode, setMode] = useState({
    name: "light",
    icon: "light_mode",
  });

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {props.children}
    </ModeContext.Provider>
  );
};

export default ModeProvider;

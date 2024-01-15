import ModeProvider from "./context/ModeContext";
// import { useState } from "react";
// import "./App.css";

import Home from "./pages/Home";

function App() {
  const defaultMode = {
    name: "light",
    icon: "light_mode",
  };
  return (
    <ModeProvider value={defaultMode}>
      <Home />
    </ModeProvider>
  );
}

export default App;

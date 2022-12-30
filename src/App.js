import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  return <div className="app"></div>;
}

export default App;

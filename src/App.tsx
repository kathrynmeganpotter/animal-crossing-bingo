import { createTheme, Grid } from "@mui/material";
import Header from "./features/layout/Header.tsx";
import Bingo from "./features/bingo/Bingo.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";

export default function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={mode === "light" ? createTheme({ palette: { mode: "light" } }) : createTheme({ palette: { mode: "dark" } })}>
      <CssBaseline />
      <BrowserRouter>
        <Grid>
          <Header mode={mode} toggleTheme={() => setMode(prev => prev === "light" ? "dark" : "light")} />
          <Bingo />
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

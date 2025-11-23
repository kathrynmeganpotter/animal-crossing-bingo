import { Grid } from "@mui/material";
import Header from "./features/layout/Header.tsx";
import Bingo from "./features/bingo/Bingo.tsx";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Grid>
        <Header />
        <Bingo />
      </Grid>
    </BrowserRouter>
  );
}

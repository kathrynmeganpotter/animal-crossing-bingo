import { Grid } from "@mui/material";
import Header from "./features/layout/Header/Header.tsx";
import Bingo from "./features/bingo/Bingo.tsx";

export default function App() {
  return (
    <Grid>
      <Header/>
      <Bingo />
    </Grid>
  );
}

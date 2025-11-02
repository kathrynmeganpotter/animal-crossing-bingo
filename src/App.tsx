import { Grid } from "@mui/material";
import Header from "./Layout/Header/Header.tsx";
import Bingo from "./Bingo/Components/Bingo.tsx";

export default function App() {
  return (
    <Grid>
      <Header/>
      <Bingo />
    </Grid>
  );
}

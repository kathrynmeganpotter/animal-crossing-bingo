import { Typography, AppBar } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Typography
          variant="h2"
          sx={{ flexGrow: 1, p: 2, textAlign: "center" }}
        >
          Animal Crossing Bingo
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ flexGrow: 1, pb: 2, textAlign: "center" }}
        >
          Find the villagers and get bingo!
        </Typography>
      </AppBar>
    </>
  );
}

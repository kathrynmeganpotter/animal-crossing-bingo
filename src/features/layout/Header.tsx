import { Typography, AppBar } from "@mui/material";
import ThemeToggle from "./ThemeToggle.tsx";

export default function Header({ toggleTheme, mode }: { toggleTheme: () => void; mode: string }) {
  return (
    <>
      <AppBar position="static">
        <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
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

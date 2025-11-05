import { Alert } from "@mui/material";

export default function HowToPlay() {
  return (
    <Alert severity="info" variant="outlined">
      How to play
      <ol>
        <li>
          Select villagers that you want to be excluded from the bingo card
        </li>
        <li>Click the generate button</li>
        <li>When you find a villager click on the square</li>
      </ol>
    </Alert>
  );
}

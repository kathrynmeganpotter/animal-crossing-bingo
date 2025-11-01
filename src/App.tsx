import Card from "./Card/Card.tsx";
import { useState } from "react";
import { villagers } from "animal-crossing";
import Options from "./Options/Options.tsx";
import AppBar from "@mui/material/AppBar";
import { Typography, Alert, Grid, Box, Button } from "@mui/material";

export default function App() {
  const [bingoCard, setBingoCard] = useState(Array(24).fill(null));
  const [excludedVillagers, setExcludedVillagers] = useState([]);

  /**
   * Generate a list of all the villagers excluding any that have been selected by the user/ sanrio villagers
   * @returns an array consisting of all the villagers name
   */
  function generateNameArray() {
    // villagers to ignore (sanrio)
    var villagersToIgnore = [
      "Rilla",
      "Marty",
      "Étoile",
      "Chai",
      "Chelsea",
      "Toby",
    ];
    // combine villagers to ignore array with any excluded villagers
    villagersToIgnore = villagersToIgnore.concat(excludedVillagers);
    // return a list of villagers excluding any ignored villagers
    return villagers
      .filter((x) => !villagersToIgnore.includes(x.name))
      .map((x) => x.name);
  }

  /**
   * Update the excluded villagaers array
   * @param items list of villagers to exclude
   */
  function updateExcludedVillagersArray(items: string[]) {
    setExcludedVillagers(items);
  }

  function generateBingoCard() {
    let cardArray = [];
    let villagerNameArray = generateNameArray();

    for (let i = 0; i <= 24; i++) {
      if (i === 12) {
        cardArray.push("Free");
      } else {
        const random =
          villagerNameArray[
            Math.floor(Math.random() * villagerNameArray.length)
          ];
        villagerNameArray = villagerNameArray.filter((item) => item !== random);
        cardArray.push(random);
      }
    }
    setBingoCard(cardArray);
  }

  return (
    <Grid>
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
      <Grid size={12} sx={{ margin: 2.5 }}>
        <br />
        <Alert severity="info" variant="outlined">
          How to play
          <ol>
            <li>
              Select villagers that you want to be excluded from the bingo card
            </li>
            <li>Click the generate button</li>
            <li>
              When you find a villager click on the square
            </li>
          </ol>
        </Alert>
        <br />
        <Box>
          <Options
            villagers={generateNameArray()}
            updateExcludedVillagersArray={updateExcludedVillagersArray}
          />
          <Button variant="contained" onClick={() => generateBingoCard()}>
            Generate
          </Button>
        </Box>
        <div className="main-content">
          {bingoCard.filter((value) => value != null).length !== 0 && (
            <Card bingoCard={bingoCard} />
          )}
        </div>
      </Grid>
    </Grid>
  );
}

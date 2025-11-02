import BingoBoard from "./BingoBoard/BingoBoard.tsx";
import { useState } from "react";
import { villagers } from "animal-crossing";
import Header from "./Header/Header.tsx";
import { Grid } from "@mui/material";
import HowToPlay from "./HowToPlay/HowToPlay.tsx";
import BingoControls from "./BingoControls/BingoControls.tsx";

export default function App() {
  const [bingoCard, setBingoCard] = useState(Array(24).fill(null));
  const [excludedVillagers, setExcludedVillagers] = useState([]);
  const [reset, setReset] = useState(false);

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
    setReset(true); 
  }

  return (
    <Grid>
      <Header/>
      <Grid size={12} sx={{ margin: 2.5 }}>
        <HowToPlay />  
        <BingoControls nameArray={generateNameArray()} generateBingoCard={generateBingoCard} setExcludedVillagers={setExcludedVillagers}/>
        <div className="main-content">
          {bingoCard.filter((value) => value != null).length !== 0 && (
            <BingoBoard bingoCard={bingoCard} reset={reset} setReset={setReset}/>
          )}
        </div>
      </Grid>
    </Grid>
  );
}

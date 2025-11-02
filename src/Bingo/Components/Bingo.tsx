import { Grid } from "@mui/material";
import { useState, useMemo } from "react";
import { villagers } from "animal-crossing";
import HowToPlay from "./HowToPlay/HowToPlay.tsx";
import BingoControls from "./Controls/Controls.tsx";
import Board from "./Board/Board.tsx";
import { useGenerateBingoCard } from "../Hooks/useGenerateBingoCard.tsx";

export default function Game() {
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

  const [bingoCard, generateBingoCard] = useGenerateBingoCard(generateNameArray);
  const nameArray = useMemo(() => generateNameArray(), [excludedVillagers]);

  return (
    <Grid size={12} sx={{ margin: 2.5 }}>
      <HowToPlay />
      <BingoControls
        nameArray={nameArray}
        generateBingoCard={generateBingoCard}
        setExcludedVillagers={setExcludedVillagers}
      />
      <div className="main-content">
        {bingoCard.length > 0 && (
          <Board bingoCard={bingoCard} reset={reset} setReset={setReset} />
        )}
      </div>
    </Grid>
  );
}

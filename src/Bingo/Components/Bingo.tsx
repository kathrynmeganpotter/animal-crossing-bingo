import { Grid } from "@mui/material";
import { useState, useMemo } from "react";
import { villagers } from "animal-crossing";
import HowToPlay from "./HowToPlay/HowToPlay.tsx";
import BingoControls from "./Controls/Controls.tsx";
import Board from "./Board/Board.tsx";
import { useGenerateBingoCard } from "../Hooks/useGenerateBingoCard.tsx";
import { DEFAULT_IGNORED_VILLAGERS } from "../../Constants/SanrioVillagers.ts";

export default function Game() {
  const [excludedVillagers, setExcludedVillagers] = useState([]);
  const [reset, setReset] = useState(false);

  /**
   * Generate a list of all the villagers excluding any that have been selected by the user/ sanrio villagers
   * @returns an array consisting of all the villagers name
   */
  function getAvailableVillagers() {
    // combine villagers from default ignore array with any excluded villagers
    const ignored = new Set<string>([...DEFAULT_IGNORED_VILLAGERS, ...excludedVillagers]);
    // return a list of available villagers excluding any ignored villagers
    return villagers.filter((v) => !ignored.has(v.name)).map((v) => ({ name: v.name, photoImage: v.photoImage }));
  }

  const [bingoCard, generateBingoCard] = useGenerateBingoCard(getAvailableVillagers);
  const nameArray = useMemo(() => getAvailableVillagers(), [excludedVillagers]);

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

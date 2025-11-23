import { Grid } from "@mui/material";
import { useState, useMemo } from "react";
import { villagers } from "animal-crossing";
import HowToPlay from "./components/HowToPlay.tsx";
import Controls from "./components/Controls.tsx";
import Board from "./components/Board.tsx";
import { useGenerateBingoCard } from "./hooks/useGenerateBingoCard.tsx";
import { DEFAULT_IGNORED_VILLAGERS } from "./consts/index.ts";

type VillagerOption = {
  name: string;
  photoImage: string;
};

export default function Bingo() {
  const [excludedVillagers, setExcludedVillagers] = useState<VillagerOption[]>([]);
  const [reset, setReset] = useState(false);

  /**
   * Generate a list of all the villagers excluding any that have been selected by the user/ sanrio villagers
   * @returns an array consisting of all the villagers name
   */
  function getAvailableVillagers() {
    // combine villagers from default ignore array with any excluded villagers
    const ignoredNames = new Set([...DEFAULT_IGNORED_VILLAGERS,...excludedVillagers.map(v => v.name),]);
    // return a list of available villagers excluding any ignored villagers
    const availableVillagers: VillagerOption[] = villagers.filter(v => !ignoredNames.has(v.name)).map(v => ({
      name: v.name,
      photoImage: v.photoImage,
    }));
    return availableVillagers;
  }

  const [hasFreeSpace, setHasFreeSpace] = useState(true);
  const [size, setSize] = useState(5);
  const [bingoCard, generateBingoCard] = useGenerateBingoCard(getAvailableVillagers);
  
  const availableVillagers = useMemo(() => getAvailableVillagers(), [excludedVillagers]);

  const handleGenerateBingoCard = (hasFreeSpace: boolean, size: number) => {
    setReset(true);
    generateBingoCard(hasFreeSpace, size);
  };

  return (
    <Grid size={12} sx={{ margin: 2.5 }}>
      <HowToPlay />
      <Controls
        villagers={availableVillagers}
        generateBingoCard={handleGenerateBingoCard}
        setExcludedVillagers={setExcludedVillagers}
        freeSpace={hasFreeSpace}
        setHasFreeSpace={setHasFreeSpace}
        size={size}
        setSize={setSize}
      />
      <div className="main-content">
        {bingoCard.length > 0 && (
          <Board bingoCard={bingoCard} reset={reset} setReset={setReset} size={size}/>
        )}
      </div>
    </Grid>
  );
}

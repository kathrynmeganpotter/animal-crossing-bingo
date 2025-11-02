import VillagerSelector from "../VillagerSelector/VillagerSelector.tsx";
import { Box, Button } from "@mui/material";

export default function BingoControls({
  nameArray,
  generateBingoCard,
  setExcludedVillagers,
}) {
  return (
    <Box sx={{ textAlign: "center", padding: 2 }}>
      <VillagerSelector
        villagers={nameArray}
        setExcludedVillagers={setExcludedVillagers}
      />
      <Button variant="contained" onClick={() => generateBingoCard()}>
        Generate
      </Button>
    </Box>
  );
}

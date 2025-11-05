import VillagerSelector from "../VillagerSelector/VillagerSelector.tsx";
import { Box, Button } from "@mui/material";
import { VillagerOption } from "../../types";

interface ControlsProps {
  nameArray: { name: string; photoImage: string }[];
  generateBingoCard: () => void;
  setExcludedVillagers: (villagers: VillagerOption[]) => void;
}

export default function Controls({
  nameArray,
  generateBingoCard,
  setExcludedVillagers,
} : ControlsProps) {
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

import VillagerSelector from "./VillagerSelector.tsx";
import {
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { VillagerOption } from "../types/index.ts";
import { useState } from "react";

interface ControlsProps {
  nameArray: { name: string; photoImage: string }[];
  generateBingoCard: (hasFreeSpace: boolean, size: number) => void;
  setExcludedVillagers: (villagers: VillagerOption[]) => void;
  freeSpace: boolean;
  setHasFreeSpace: (freeSpace: boolean) => void;
  size: number;
  setSize: (size: number) => void;
}

export default function Controls({
  nameArray,
  generateBingoCard,
  setExcludedVillagers,
  freeSpace,
  setHasFreeSpace,
  size,
  setSize,
}: ControlsProps) {
  const [pendingSize, setPendingSize] = useState(size);
  const [pendingFreeSpace, setPendingFreeSpace] = useState(freeSpace);

  const handleChange = (event: any) => {
    setPendingSize(event.target.value);
    if (event.target.value === 4 || event.target.value === 6) {
      setHasFreeSpace(false);
    }
  };

  return (
    <Box sx={{ textAlign: "center", padding: 2, display: "flex", flexDirection: "column", gap: 1, alignItems: "center" }}>
      <VillagerSelector
        villagers={nameArray}
        setExcludedVillagers={setExcludedVillagers}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={pendingFreeSpace}
              disabled={pendingSize === 4 || pendingSize === 6}
              onChange={(event) => setPendingFreeSpace(event?.target.checked)}
            />
          }
          label="Include free space"
        />
      </FormGroup>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="size-select">Size</InputLabel>
        <Select
          labelId="size-select"
          id="size-select"
          value={pendingSize}
          label="size"
          onChange={handleChange}
        >
          <MenuItem value={3}>3x3</MenuItem>
          <MenuItem value={4}>4x4</MenuItem>
          <MenuItem value={5}>5x5</MenuItem>
          <MenuItem value={6}>6x6</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={() => {
         setSize(pendingSize);
         setHasFreeSpace(pendingFreeSpace);
         generateBingoCard(pendingFreeSpace, pendingSize);
        }}>
        Generate
      </Button>
    </Box>
  );
}

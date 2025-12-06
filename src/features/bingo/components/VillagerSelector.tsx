import { useState, useMemo } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Box,
  Chip,
  Autocomplete,
} from "@mui/material";
import { VillagerOption } from "../types";
interface VillagerSelectorProps {
  villagers: VillagerOption[];
  selectedVillagers: string[];
  setSelectedVillagers: React.Dispatch<React.SetStateAction<string[]>>;
  setExcludedVillagers: React.Dispatch<React.SetStateAction<VillagerOption[]>>;
}

export default function VillagerSelector({
  villagers,
  selectedVillagers,
  setSelectedVillagers,
  setExcludedVillagers,
}: VillagerSelectorProps) {

  const [searchText, setSearchText] = useState<string>("");

  const availableVillagers = useMemo(() => {
    return villagers.filter((v) => !selectedVillagers.includes(v.name));
  }, [villagers, selectedVillagers]);

  function handleDeleteVillager(value: string) {
    const updatedSelected = selectedVillagers.filter(v => v !== value);
    setSelectedVillagers(updatedSelected);
    setExcludedVillagers(villagers.filter(v => updatedSelected.includes(v.name)));
  }

  return (
    <>
      <Typography variant="h6">Select villagers</Typography>
      <Typography variant="body2">
        Select villagers to be excluded from the bingo card
      </Typography>
      <Box>
        <FormControl sx={{ minWidth: 300 }}>
          <Autocomplete
            freeSolo
            options={availableVillagers.map((option) => option.name)}
            inputValue={searchText}
            onInputChange={(_, newInputValue) => setSearchText(newInputValue)}
            onChange={(_, newValue: string | null) => {
              if (newValue && !selectedVillagers.includes(newValue)) {
                const updatedSelected = [...selectedVillagers, newValue];
                setSelectedVillagers(updatedSelected);
                const excludedVillagers = villagers.filter((v) =>
                  updatedSelected.includes(v.name)
                );
                setExcludedVillagers(excludedVillagers);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search villagers"
                variant="outlined"
                helperText={
                  selectedVillagers.length >= 10
                    ? "Maximum 10 villagers allowed"
                    : ""
                }
              />
            )}
            sx={{ minWidth: 300 }}
            disabled={selectedVillagers.length >= 10}
          />
        </FormControl>
      </Box>
      <Box>
        {selectedVillagers.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              justifyContent: "center",
              paddingBottom: 2,
            }}
          >
            {selectedVillagers.map((value) => (
              <Chip
                tabIndex={0}
                key={value}
                label={value}
                onDelete={() => handleDeleteVillager(value)}
              />
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

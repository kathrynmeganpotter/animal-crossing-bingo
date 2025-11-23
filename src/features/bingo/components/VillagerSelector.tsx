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
  setExcludedVillagers: (villagers: VillagerOption[]) => void;
}

export default function VillagerSelector({
  villagers,
  setExcludedVillagers,
}: VillagerSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const availableVillagers = useMemo(() => {
    return villagers.filter(v => !selected.includes(v.name));
  }, [villagers, selected]);

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
              if (newValue && !selected.includes(newValue)) {
                const updatedSelected = [...selected, newValue];
                setSelected(updatedSelected);
                const excludedVillagers = villagers.filter(v =>
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
                helperText={selected.length >= 10 ? "Maximum 10 villagers allowed" : ""}
              />
            )}
            sx={{ minWidth: 300 }}
            disabled={selected.length >= 10}
          />
        </FormControl>
      </Box>
      <Box>
        {selected.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.5,
              justifyContent: "center",
              paddingBottom: 2,
            }}
          >
            {selected.map((value) => (
              <Chip key={value} label={value} onDelete={() => { setSelected(prev => prev.filter(item => item !== value))}}/>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
}

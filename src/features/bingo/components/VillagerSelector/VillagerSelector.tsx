import { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Box,
  Chip,
  Autocomplete,
} from "@mui/material";
import { VillagerOption } from "../../types";

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

  return (
    <>
      <Typography variant="h6">Select villagers</Typography>
      <Typography variant="body2">
        Select villagers to be excluded from the bingo card
      </Typography>
      <br />
      <Box sx={{ paddingBottom: 2 }}>
        <FormControl sx={{ minWidth: 300 }}>
          <Autocomplete
            freeSolo
            options={villagers.map((option) => option.name)}
            inputValue={searchText}
            onInputChange={(_, newInputValue) => setSearchText(newInputValue)}
            onChange={(_, newValue: string | null) => {
              // if (newValue && !selected.includes(newValue.name)) {
              //   const updatedSelected = [...selected, newValue.name];
              //   setSelected(updatedSelected);
              //   const excludedVillagers = villagers.filter(v =>
              //     updatedSelected.includes(v.name)
              //   );
              //   setExcludedVillagers(excludedVillagers);
              // }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search villagers"
                variant="outlined"
              />
            )}
            disableClearable
            sx={{ minWidth: 300 }}
          />
        </FormControl>
      </Box>
      <div>
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
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      </div>
    </>
  );
}

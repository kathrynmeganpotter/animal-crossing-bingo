import { useState } from "react";
import {
  Typography,
  FormControl,
  TextField,
  Box,
  Chip,
  Autocomplete,
} from "@mui/material";

export default function VillagerSelector ({ villagers, updateExcludedVillagersArray }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  return (
    <>
      <Typography variant="h6">Select villagers</Typography>
      <Typography variant="body2">
        Select villagers to be excluded from the bingo card
      </Typography>
      <br />
      <div>
        <FormControl sx={{ minWidth: 300 }}>
          <Autocomplete
            freeSolo
            options={villagers}
            inputValue={searchText}
            onInputChange={(_, newInputValue) =>
              setSearchText(newInputValue)
            }
            onChange={(_, newValue : { label : string }) => {
              let valueToAdd = typeof newValue === "string" ? newValue : newValue?.label || "";
              if (valueToAdd && !selected.includes(valueToAdd)) {
                setSelected([...selected, valueToAdd]);
                updateExcludedVillagersArray([...selected, newValue]);
                setSearchText("");
              }
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
      </div>
      <br />
      <div>
        {selected.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, justifyContent: "center" }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      </div>
      <br />
    </>
  );
}

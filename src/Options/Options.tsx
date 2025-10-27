import { useState } from "react";
import {
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  Select,
  Box,
  Chip,
} from "@mui/material";

export default function Options({ villagers, updateExcludedVillagersArray }) {
  const [selected, setSelected] = useState<string[]>([]);

  let anySelected = selected.length >= 1;

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelected(typeof value === "string" ? value.split(",") : value);
    updateExcludedVillagersArray(value);
  };

  return (
    <>
      <Typography variant="h6">Select villagers</Typography>
      <Typography variant="body2">
        Select villagers to be excluded from the bingo card
      </Typography>
      <br/>
      <div>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="villager-multiselect">Villagers</InputLabel>
          <Select
            multiple
            value={selected}
            onChange={handleChange}
            labelId="villager-multiselect"
          >
            {villagers.map((villager: string) => (
              <MenuItem key={villager} value={villager}>
                {villager}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <br/>
      <div>
        {anySelected && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      </div>
      <br/>
    </>
  );
}

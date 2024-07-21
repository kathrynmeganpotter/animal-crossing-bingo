import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";

export default function Options({villagers, updateExcludedVillagersArray}) {
  const [selected, setSelected] = useState([]);
  let anySelected = selected.length >= 1; 

  /**
   * For each villager in the villager array generate a label & value for a dropdown list
   * @param villagers 
   * @returns 
   */
  function generateNameDropdownOptions(villagers : []) {
    let options = []; 
    villagers.forEach(function(villager : string) {
      options.push({
        label: villager, 
        value: villager
      });
    })

    return options;
  }

  return (
    <div>
      <h3 className="font-weight-normal">Select villagers</h3>
      <p>Select villagers to be excluded from the bingo card</p>
      {anySelected && <pre>{JSON.stringify(selected.map(x => x.value))}</pre> }
      <MultiSelect
        options={generateNameDropdownOptions(villagers)}
        value={selected}
        onChange={(i : any) => {
          setSelected(i);
          updateExcludedVillagersArray(i)
        }}
        labelledBy="Select"
        hasSelectAll={false}
      />
  </div>
  )
}
import { MultiSelect } from "react-multi-select-component";
import { useState } from "react";

export default function Options({options, handleClick}) {
  const [selected, setSelected] = useState([]);
  let anySelected = selected.length >= 1; 

  function onSelectClick(i) {
    setSelected(i);
    handleClick(i);
  }

  return (
    <div>
      <p>Select villagers</p>
      {anySelected && <pre>{JSON.stringify(selected)}</pre> }
      <MultiSelect
        options={options}
        value={selected}
        onChange={onSelectClick}
        labelledBy="Select"
      />
  </div>
  )
}
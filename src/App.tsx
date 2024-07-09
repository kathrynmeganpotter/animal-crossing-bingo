import Card from './Card/Card.tsx'; 
import { useState } from "react";
import { villagers } from "animal-crossing";
import Options from "./Options/Options.tsx";
import "./app.scss"; 

export default function App() {
  const [bingoCard, setBingoCard] = useState(Array(24).fill(null)); 
  const [generate, setGenerate] = useState(false); 
  const [excludedVillagers, setExcludedVillagers] = useState([]);

  function generateNameArray() {
    var options = []; 

    // villagers to ignore (sanrio)
    var villagersToIgnore = ["Rilla", "Marty", "Étoile", "Chai", "Chelsea", "Toby"]

    if(excludedVillagers.length >= 1) {
      for (let i=0; i<excludedVillagers.length; i++) {
        villagersToIgnore.push(excludedVillagers[i]);
      }
    }

    console.log(villagersToIgnore);

    for(let i=0; i<villagers.length; i++) {
      if(!villagersToIgnore.includes(villagers[i].name)) {
          options.push(villagers[i].name); 
      }
    }

    return options;
  }

  function generateNameDropdownOptions() {
    var options = []; 
    for(let i=0; i<villagers.length; i++) {
      // villagers to ignore (sanrio)
      var villagersToIgnore = ["Rilla", "Marty", "Étoile", "Chai", "Chelsea"]
  
      if(!villagersToIgnore.includes(villagers[i].name)) {
        options.push({
          label: villagers[i].name, 
          value: villagers[i].name
        });
      }
    }
    return options;
  }

  function generateBingoCard() {
      let cardArray = [];
      let villagerNameArray = generateNameArray(); 
      
      for (let i=0; i<=24; i++) {
        if(i === 12) {
          cardArray.push("Free Space");    
        } else {
          const random = villagerNameArray[Math.floor(Math.random()* villagerNameArray.length)]
          villagerNameArray = villagerNameArray.filter(item => item !== random);
          cardArray.push(random);
        }
      }
      setBingoCard(cardArray); 
      setGenerate(true);
  }

  function handleClick(items) {
    let excludedVillagersArray = [];
    for(let item of items) {
      excludedVillagersArray.push(item.label); 
    }
    setExcludedVillagers(excludedVillagersArray);
  }

  return (
    <>
      <div className="position-relative overflow-hidden text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Animal Crossing Bingo</h1>
          <p className="lead font-weight-normal">Select villagers to exclude & click the generate button to generate an Animal Crossing Bingo card</p>
        </div>
      </div>
      <div className='main-content'>
        <Options options={generateNameDropdownOptions()} handleClick={handleClick}/>
        <br/>
        <a className="btn btn-outline-secondary" onClick={() => generateBingoCard()}>Generate</a>
        {generate && <Card bingoCard={bingoCard}/>}
      </div>
    </>
  )
}
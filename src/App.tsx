import Card from './Card/Card.tsx'; 
import { useState } from "react";
import { villagers } from "animal-crossing";
import Options from "./Options/Options.tsx";

export default function App() {
  const [bingoCard, setBingoCard] = useState(Array(24).fill(null)); 
  const [excludedVillagers, setExcludedVillagers] = useState([]);

  /**
   * Generate a list of all the villagers excluding any that have been selected by the user/ sanrio villagers
   * @returns an array consisting of all the villagers name
   */
  function generateNameArray() {
    // villagers to ignore (sanrio)
    var villagersToIgnore = ["Rilla", "Marty", "Étoile", "Chai", "Chelsea", "Toby"]
    // combine villagers to ignore array with any excluded villagers
    villagersToIgnore = villagersToIgnore.concat(excludedVillagers); 
    // return a list of villagers excluding any ignored villagers
    return villagers.filter(x => !villagersToIgnore.includes(x.name)).map(x => x.name);
  }

  /**
   * Update the excluded villagaers array
   * @param items list of villagers to exclude
   */
  function updateExcludedVillagersArray(items : any) {
    let excludedVillagersArray = items.flatMap((x : any) => x.label)
    setExcludedVillagers(excludedVillagersArray);
  }
  
  function generateBingoCard() {
    console.log(bingoCard);

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
}

  return (
    <>
      <div className="position-relative overflow-hidden text-center bg-light border">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-3 font-weight-normal">Animal Crossing Bingo</h1>
          <p className="lead font-weight-normal">Select villagers to exclude & click the generate button to generate an Animal Crossing Bingo card</p>
        </div>
      </div>
      <br/>
      <div className='bg-light border px-4 mx-4'>
        <h2 className='font-weight-normal'>How to play</h2>
        <ol>
          <li className='font-weight-normal'>Select villagers that you want to be excluded from the bingo card</li>
          <li className='font-weight-normal'>Click the generate button</li>
          <li className='font-weight-normal'>When you find a villager click on the square</li>
        </ol>
      </div>
      <br/>
      <div className="bg-light border px-4 mx-4">
        <Options villagers={generateNameArray()} updateExcludedVillagersArray={updateExcludedVillagersArray}/>
        <a className="btn btn-outline-secondary m-1" onClick={() => generateBingoCard()}>Generate</a>
      </div>
      <div className='main-content'>
        {bingoCard.filter(value => value != null).length !== 0 && <Card bingoCard={bingoCard}/>}
      </div>
    </>
  )
}
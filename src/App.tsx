import Card from './Card/Card.tsx'; 
import { useState } from "react";
import { villagers } from "animal-crossing";

export default function App() {
  const [bingoCard, setBingoCard] = useState(Array(24).fill(null)); 
  const [generate, setGenerate] = useState(false); 

  function generateBingoCard() {
      let cardArray = [];
      let villagerNameArray = []; 

      for(let i=0; i<villagers.length; i++) {
          // villagers to ignore (sanrio)
          var villagersToIgnore = ["Rilla", "Marty", "Étoile", "Chai", "Chelsea"]

          if(!villagersToIgnore.includes(villagers[i].name)) {
              villagerNameArray.push(villagers[i].name); 
          }
      }
      
      for (let i=0; i<=24; i++) {
          const random = villagerNameArray[Math.floor(Math.random()* villagerNameArray.length)]
          villagerNameArray = villagerNameArray.filter(item => item !== random);
          cardArray.push(random);
      }
      setBingoCard(cardArray); 
      setGenerate(true);
  }


  return (
    <>
      <div className="position-relative overflow-hidden text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Animal Crossing Bingo</h1>
          <p className="lead font-weight-normal">Click the generate button to generate an Animal Crossing Bingo card</p>
          <a className="btn btn-outline-secondary" onClick={() => generateBingoCard()}>Generate</a>
        </div>
      </div>
      {generate && <Card bingoCard={bingoCard}/>}
    </>
  )
}
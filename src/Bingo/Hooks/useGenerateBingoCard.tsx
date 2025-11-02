import { useState } from "react"; 

export function useGenerateBingoCard(getNames : () => string []): [string[], () => void] {
  const [bingoCard, setBingoCard] = useState<string[]>([]);

  function generateCard() {
    console.log("Generating bingo card");

    const villagerNameArray = [...getNames()];
    const cardArray: string[] = [];

    for (let i = 0; i <= 24; i++) {
      if (i === 12) {
        cardArray.push("Free");
      } else {
        const randomIndex = Math.floor(Math.random() * villagerNameArray.length);
        const random = villagerNameArray[randomIndex];
        villagerNameArray.splice(randomIndex, 1); 
        cardArray.push(random);
      }
    }
    console.log(cardArray);
    setBingoCard(cardArray);
  }

  return [bingoCard, generateCard];
}

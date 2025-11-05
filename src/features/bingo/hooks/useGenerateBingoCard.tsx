import { useState } from "react"; 
import { VillagerOption } from "../types";

export function useGenerateBingoCard(getAvailableVillagers: () => VillagerOption[]): [VillagerOption[], () => void] {
  const [bingoCard, setBingoCard] = useState<VillagerOption[]>([]);

  function generateCard() {
    const villagersArray: { name: string; photoImage: string }[] = [...getAvailableVillagers()];
    const cardArray: { name: string; photoImage: string }[] = [];

    for (let i = 0; i <= 24; i++) {
      if (i === 12) {
        cardArray.push({name: "Free", photoImage: ""});
      } else {
        const randomIndex = Math.floor(Math.random() * villagersArray.length);
        const random = villagersArray[randomIndex];
        villagersArray.splice(randomIndex, 1); 
        cardArray.push({name: random.name, photoImage: random.photoImage});
      }
    }
    setBingoCard(cardArray);
  }

  return [bingoCard, generateCard];
}

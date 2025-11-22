import { useState, useCallback } from "react";
import { VillagerOption } from "../types";

export function useGenerateBingoCard(
  getAvailableVillagers: () => VillagerOption[]
): [VillagerOption[], (hasFreeSpace: boolean, size: number) => void] {
  const [bingoCard, setBingoCard] = useState<VillagerOption[]>([]);

  const generateCard = useCallback(
    (hasFreeSpace: boolean, size: number) => {
      console.log("Generating new bingo card with:", { hasFreeSpace, size });

      // Get a copy of the available villagers to choose from
      const villagersArray = [...getAvailableVillagers()];
      const cardArray: VillagerOption[] = [];

      // Get the total size of the bingo card
      const totalSize = size * size;

      // Determine the middle index for free space if needed 
      const middleValue =
        hasFreeSpace && (size === 3 || size === 5)
          ? Math.floor(totalSize / 2)
          : -1;

      //  Build the bingo card
      for (let i = 0; i < totalSize; i++) {
        // If it's the middle square and we want a free space, add it, else find a random villager
        if (i === middleValue && hasFreeSpace) {
          cardArray.push({ name: "Free", photoImage: "" });
        } else {
          const randomIndex = Math.floor(Math.random() * villagersArray.length);
          const random = villagersArray[randomIndex];
          villagersArray.splice(randomIndex, 1);
          cardArray.push(random);
        }
      }

      setBingoCard(cardArray);
    },
    [getAvailableVillagers]
  );

  return [bingoCard, generateCard];
}

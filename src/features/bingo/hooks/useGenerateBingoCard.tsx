import { useState, useCallback } from "react";
import { VillagerOption } from "../types";

export function useGenerateBingoCard(
  getAvailableVillagers: () => VillagerOption[]
): [VillagerOption[], (hasFreeSpace: boolean, size: number) => void] {
  const [bingoCard, setBingoCard] = useState<VillagerOption[]>([]);

  const generateBingoCard = useCallback(
    (hasFreeSpace: boolean, size: number) => {
      // Get a copy of the available villagers to choose from
      const villagersArray = [...getAvailableVillagers()];
      const cardArray: VillagerOption[] = [];

      // Get the total size of the bingo card
      const totalSize = size * size;

      // Determine the middle index for free space if needed 
      const middleValue =
        hasFreeSpace && size % 2 === 1
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

  return [bingoCard, generateBingoCard];
}

import { useState, useCallback } from "react";
import { VillagerOption } from "../types";

export function useGenerateBingoCard(
  getAvailableVillagers: () => VillagerOption[]
): [VillagerOption[], (hasFreeSpace: boolean, size: number) => void] {
  const [bingoCard, setBingoCard] = useState<VillagerOption[]>([]);

  const generateCard = useCallback(
    (hasFreeSpace: boolean, size: number) => {
      console.log("Generating new bingo card with:", { hasFreeSpace, size });

      const villagersArray = [...getAvailableVillagers()];
      const cardArray: VillagerOption[] = [];

      const totalSize = size * size;
      const middleValue =
        hasFreeSpace && (size === 3 || size === 5)
          ? Math.floor(totalSize / 2)
          : -1;

      for (let i = 0; i < totalSize; i++) {
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

import { useMemo } from "react";

/**
 * Check for bingo on a square grid (default 5x5)
 * @param tiles - a flat boolean array representing selected tiles
 * @param size - number of columns/rows in the grid (default 5)
 */
export function useBingoCheck(tiles: boolean[], size = 5): boolean {
  return useMemo(() => {
    if (!tiles?.length) return false;

    // Helper to check if all values in a line are true
    const allMarked = (indexes: number[]) => indexes.every(i => tiles[i]);

    const lines: number[][] = [];

    // Do we have a bingo in any row?
    for (let i = 0; i < size; i++) {
        const row = Array.from({ length: size }, (_, j) => i * size + j);
        lines.push(row);
    }

    // Do we have a bingo in any column?
    for (let i = 0; i < size; i++) {
        const column = Array.from({ length: size }, (_, j) => j * size + i);
        lines.push(column);
    }

    // Do we have a bingo in either diagonal?
    lines.push(Array.from({ length: size }, (_, i) => i * (size + 1)));       
    lines.push(Array.from({ length: size }, (_, i) => (i + 1) * (size - 1))); 

    // Check for any complete line
    return lines.some(allMarked);
  }, [tiles, size]);
}

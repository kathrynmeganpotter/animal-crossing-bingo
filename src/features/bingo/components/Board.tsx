import { Snackbar, Box } from "@mui/material";
import Square from "./Square.tsx";
import { useBingoCheck } from "../hooks/useBingoCheck.tsx";
import { useEffect, useState } from "react";

interface BoardProps {
  bingoCard: { name: string; photoImage: string }[];
  reset: boolean;
  setReset: (reset: boolean) => void;
  size: number;
}

export default function Board({
  bingoCard,
  reset,
  setReset,
  size,
}: BoardProps) {
  const [squares, setSquares] = useState(Array(size * size).fill(false));
  const [bingo, setBingo] = useState(false);

  const { hasBingo, bingoLines } = useBingoCheck(squares, size);
  const [previousBingoLines, setPreviousBingoLines] = useState<number[][]>([]);

  useEffect(() => {
    setSquares(Array(size * size).fill(false));
    setBingo(false);
    setPreviousBingoLines([]);
    setReset(false);
  }, [reset]);

  useEffect(() => {
    // Check if there are any new bingo lines
    const newBingos = bingoLines.filter(
      (line) =>
        !previousBingoLines.some((prev) => prev.toString() === line.toString())
    );
    // If there are new bingo lines, set bingo to true
    if (newBingos.length > 0 && hasBingo) {
      setBingo(true);
    }
    setPreviousBingoLines(bingoLines);
  }, [bingoLines]);

  function handleClick(i: number, state: boolean) {
    setSquares((prev) => {
      const nextSquares = [...prev];
      nextSquares[i] = !state;
      return nextSquares;
    });
  }

  return (
    <>
      {bingo && (
        <Snackbar
          open={bingo}
          autoHideDuration={5000}
          onClose={() => setBingo(false)}
          message="Bingo!!!"
        />
      )}
      <Box
        className="bingo-card"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {[...Array(size)].map((_, rowIndex) => (
          <Box className="bingo-card__row" key={rowIndex}>
            {[...Array(size)].map((_, colIndex) => {
              const squareIndex = rowIndex * size + colIndex;
              return (
                <Square
                  size={size}
                  key={squareIndex}
                  name={bingoCard[squareIndex].name}
                  photoImage={bingoCard[squareIndex].photoImage}
                  onBingoSquareClick={() =>
                    handleClick(squareIndex, squares[squareIndex])
                  }
                  selected={squares[squareIndex]}
                />
              );
            })}
          </Box>
        ))}
      </Box>
    </>
  );
}

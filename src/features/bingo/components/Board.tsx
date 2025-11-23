import { Snackbar, Box } from "@mui/material";
import Square from "./Square/Square.tsx";
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

  const hasBingo = useBingoCheck(squares, size);

  useEffect(() => {
    if (hasBingo && !bingo) {
      setBingo(true);
    }
  }, [hasBingo]);

  useEffect(() => {
    setSquares(Array(size * size).fill(false));
    setReset(false);
  }, [reset]);

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
      <Box className="bingo-card" sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {[...Array(size)].map((_, rowIndex) => (
          <Box className="bingo-card__row" key={rowIndex}>
            {[...Array(size)].map((_, colIndex) => {
              const squareIndex = colIndex * size + rowIndex;
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

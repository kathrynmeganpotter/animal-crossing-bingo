import { Snackbar } from "@mui/material";
import Square from "../Square/Square.tsx";
import "./board.scss";
import { useBingoCheck } from "../../hooks/useBingoCheck.tsx";
import { useEffect, useState } from "react";

interface BoardProps {
  bingoCard: { name: string; photoImage: string }[];
  reset: boolean;
  setReset: (reset: boolean) => void;
}

export default function Board({ bingoCard, reset, setReset } : BoardProps) {
  const [Squares, setSquares] = useState(Array(25).fill(false));
  const [bingo, setBingo] = useState(false);

  const hasBingo = useBingoCheck(Squares);

  useEffect(() => {
    if (hasBingo && !bingo) {
      setBingo(true);
    }
  }, [hasBingo]);

  useEffect(() => {
    setSquares(Array(25).fill(false));
    setReset(false);
  }, [reset]);

  function handleClick(i: number, state: boolean) {
    setSquares((prev) => {
      const nextSquares = [...prev];
      nextSquares[i] = !state;
      return nextSquares;
    });
  }

  const rows = 5;
  const cols = 5;

  return (
    <>
      <div className="success-message px-4">
        {bingo && (
          <Snackbar
            open={bingo}
            autoHideDuration={5000}
            onClose={() => setBingo(false)}
            message="Bingo!!!"
          />
        )}
      </div>
      <div className="bingo-card">
        <div className="board">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="bingo-card__row" key={rowIndex}>
              {[...Array(cols)].map((_, colIndex) => {
                const squareIndex = colIndex * cols + rowIndex;
                return (
                  <Square
                    name={bingoCard[squareIndex].name}
                    photoImage={bingoCard[squareIndex].photoImage}
                    onBingoSquareClick={() =>
                      handleClick(squareIndex, Squares[squareIndex])
                    }
                    selected={Squares[squareIndex]}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

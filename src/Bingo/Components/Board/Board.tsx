import { Snackbar } from "@mui/material";
import Square from "../Square/Square.tsx";
import "./board.scss";
import { useBingoCheck } from "../../Hooks/useBingoCheck.tsx";
import { useEffect, useState } from "react";

export default function Board({ bingoCard, reset, setReset }) {
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
        <div className="bingo-card__row">
          <Square
            name={bingoCard[0].name}
            photoImage={bingoCard[0].photoImage}
            onBingoSquareClick={() => handleClick(0, Squares[0])}
            selected={Squares[0]}
          />
          <Square
            name={bingoCard[1].name}
            photoImage={bingoCard[1].photoImage}
            onBingoSquareClick={() => handleClick(1, Squares[1])}
            selected={Squares[1]}
          />
          <Square
            name={bingoCard[2].name}
            photoImage={bingoCard[2].photoImage}
            onBingoSquareClick={() => handleClick(2, Squares[2])}
            selected={Squares[2]}
          />
          <Square
            name={bingoCard[3].name}
            photoImage={bingoCard[3].photoImage}
            onBingoSquareClick={() => handleClick(3, Squares[3])}
            selected={Squares[3]}
          />
          <Square
            name={bingoCard[4].name}
            photoImage={bingoCard[4].photoImage}
            onBingoSquareClick={() => handleClick(4, Squares[4])}
            selected={Squares[4]}
          />
        </div>
        <div className="bingo-card__row">
          <Square
            name={bingoCard[5].name}
            photoImage={bingoCard[5].photoImage}
            onBingoSquareClick={() => handleClick(5, Squares[5])}
            selected={Squares[5]}
          />
          <Square
            name={bingoCard[6].name}
            photoImage={bingoCard[6].photoImage}
            onBingoSquareClick={() => handleClick(6, Squares[6])}
            selected={Squares[6]}
          />
          <Square
            name={bingoCard[7].name}
            photoImage={bingoCard[7].photoImage}
            onBingoSquareClick={() => handleClick(7, Squares[7])}
            selected={Squares[7]}
          />
          <Square
            name={bingoCard[8].name}
            photoImage={bingoCard[8].photoImage}
            onBingoSquareClick={() => handleClick(8, Squares[8])}
            selected={Squares[8]}
          />
          <Square
            name={bingoCard[9].name}
            photoImage={bingoCard[9].photoImage}
            onBingoSquareClick={() => handleClick(9, Squares[9])}
            selected={Squares[9]}
          />
        </div>
        <div className="bingo-card__row">
          <Square
            name={bingoCard[10].name}
              photoImage={bingoCard[10].photoImage}
            onBingoSquareClick={() => handleClick(10, Squares[10])}
            selected={Squares[10]}
          />
          <Square
            name={bingoCard[11].name}
            photoImage={bingoCard[11].photoImage}
            onBingoSquareClick={() => handleClick(11, Squares[11])}
            selected={Squares[11]}
          />
          <Square
            name={bingoCard[12].name}
            photoImage={bingoCard[12].photoImage}
            onBingoSquareClick={() => handleClick(12, Squares[12])}
            selected={Squares[12]}
          />
          <Square
            name={bingoCard[13].name}
            photoImage={bingoCard[13].photoImage}
            onBingoSquareClick={() => handleClick(13, Squares[13])}
            selected={Squares[13]}
          />
          <Square
            name={bingoCard[14].name}
            photoImage={bingoCard[14].photoImage}
            onBingoSquareClick={() => handleClick(14, Squares[14])}
            selected={Squares[14]}
          />
        </div>
        <div className="bingo-card__row">
          <Square
            name={bingoCard[15].name}
              photoImage={bingoCard[15].photoImage}
            onBingoSquareClick={() => handleClick(15, Squares[15])}
            selected={Squares[15]}
          />
          <Square
            name={bingoCard[16].name}
            photoImage={bingoCard[16].photoImage}
            onBingoSquareClick={() => handleClick(16, Squares[16])}
            selected={Squares[16]}
          />
          <Square
            name={bingoCard[17].name}
            photoImage={bingoCard[17].photoImage}
            onBingoSquareClick={() => handleClick(17, Squares[17])}
            selected={Squares[17]}
          />
          <Square
            name={bingoCard[18].name}
            photoImage={bingoCard[18].photoImage}
            onBingoSquareClick={() => handleClick(18, Squares[18])}
            selected={Squares[18]}
          />
          <Square
            name={bingoCard[19].name}
            photoImage={bingoCard[19].photoImage} 
            onBingoSquareClick={() => handleClick(19, Squares[19])}
            selected={Squares[19]}
          />
        </div>
        <div className="bingo-card__row">
          <Square
            name={bingoCard[20].name}
            photoImage={bingoCard[20].photoImage}
            onBingoSquareClick={() => handleClick(20, Squares[20])}
            selected={Squares[20]}
          />
          <Square
            name={bingoCard[21].name}
            photoImage={bingoCard[21].photoImage}
            onBingoSquareClick={() => handleClick(21, Squares[21])}
            selected={Squares[21]}
          />
          <Square
            name={bingoCard[22].name}
            photoImage={bingoCard[22].photoImage}
            onBingoSquareClick={() => handleClick(22, Squares[22])}
            selected={Squares[22]}
          />
          <Square
            name={bingoCard[23].name}
            photoImage={bingoCard[23].photoImage}
            onBingoSquareClick={() => handleClick(23, Squares[23])}
            selected={Squares[23]}
          />
          <Square
            name={bingoCard[24].name}
            photoImage={bingoCard[24].photoImage}
            onBingoSquareClick={() => handleClick(24, Squares[24])}
            selected={Squares[24]}
          />
        </div>
      </div>
    </>
  );
}

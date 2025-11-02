import { Snackbar } from "@mui/material";
import Tile from "../Square/Square.js";
import "./board.scss";
import { useBingoCheck } from "../../Hooks/useBingoCheck.js";
import { useEffect, useState } from "react";

export default function BingoBoard({ bingoCard, reset, setReset }) {
  const [tiles, setTiles] = useState(Array(25).fill(false));
  const [bingo, setBingo] = useState(false);

  const hasBingo = useBingoCheck(tiles);

  useEffect(() => {
    if (hasBingo && !bingo) {
      setBingo(true);
    }
  }, [hasBingo]);

  useEffect(() => {
    setTiles(Array(25).fill(false));
    setReset(false);
  }, [reset]);

  function handleClick(i: number, state: boolean) {
    setTiles((prev) => {
      const nextTiles = [...prev];
      nextTiles[i] = !state;
      return nextTiles;
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
          <Tile
            name={bingoCard[0]}
            onBingoSquareClick={() => handleClick(0, tiles[0])}
            selected={tiles[0]}
          />
          <Tile
            name={bingoCard[1]}
            onBingoSquareClick={() => handleClick(1, tiles[1])}
            selected={tiles[1]}
          />
          <Tile
            name={bingoCard[2]}
            onBingoSquareClick={() => handleClick(2, tiles[2])}
            selected={tiles[2]}
          />
          <Tile
            name={bingoCard[3]}
            onBingoSquareClick={() => handleClick(3, tiles[3])}
            selected={tiles[3]}
          />
          <Tile
            name={bingoCard[4]}
            onBingoSquareClick={() => handleClick(4, tiles[4])}
            selected={tiles[4]}
          />
        </div>
        <div className="bingo-card__row">
          <Tile
            name={bingoCard[5]}
            onBingoSquareClick={() => handleClick(5, tiles[5])}
            selected={tiles[5]}
          />
          <Tile
            name={bingoCard[6]}
            onBingoSquareClick={() => handleClick(6, tiles[6])}
            selected={tiles[6]}
          />
          <Tile
            name={bingoCard[7]}
            onBingoSquareClick={() => handleClick(7, tiles[7])}
            selected={tiles[7]}
          />
          <Tile
            name={bingoCard[8]}
            onBingoSquareClick={() => handleClick(8, tiles[8])}
            selected={tiles[8]}
          />
          <Tile
            name={bingoCard[9]}
            onBingoSquareClick={() => handleClick(9, tiles[9])}
            selected={tiles[9]}
          />
        </div>
        <div className="bingo-card__row">
          <Tile
            name={bingoCard[10]}
            onBingoSquareClick={() => handleClick(10, tiles[10])}
            selected={tiles[10]}
          />
          <Tile
            name={bingoCard[11]}
            onBingoSquareClick={() => handleClick(11, tiles[11])}
            selected={tiles[11]}
          />
          <Tile
            name={bingoCard[12]}
            onBingoSquareClick={() => handleClick(12, tiles[12])}
            selected={tiles[12]}
          />
          <Tile
            name={bingoCard[13]}
            onBingoSquareClick={() => handleClick(13, tiles[13])}
            selected={tiles[13]}
          />
          <Tile
            name={bingoCard[14]}
            onBingoSquareClick={() => handleClick(14, tiles[14])}
            selected={tiles[14]}
          />
        </div>
        <div className="bingo-card__row">
          <Tile
            name={bingoCard[15]}
            onBingoSquareClick={() => handleClick(15, tiles[15])}
            selected={tiles[15]}
          />
          <Tile
            name={bingoCard[16]}
            onBingoSquareClick={() => handleClick(16, tiles[16])}
            selected={tiles[16]}
          />
          <Tile
            name={bingoCard[17]}
            onBingoSquareClick={() => handleClick(17, tiles[17])}
            selected={tiles[17]}
          />
          <Tile
            name={bingoCard[18]}
            onBingoSquareClick={() => handleClick(18, tiles[18])}
            selected={tiles[18]}
          />
          <Tile
            name={bingoCard[19]}
            onBingoSquareClick={() => handleClick(19, tiles[19])}
            selected={tiles[19]}
          />
        </div>
        <div className="bingo-card__row">
          <Tile
            name={bingoCard[20]}
            onBingoSquareClick={() => handleClick(20, tiles[20])}
            selected={tiles[20]}
          />
          <Tile
            name={bingoCard[21]}
            onBingoSquareClick={() => handleClick(21, tiles[21])}
            selected={tiles[21]}
          />
          <Tile
            name={bingoCard[22]}
            onBingoSquareClick={() => handleClick(22, tiles[22])}
            selected={tiles[22]}
          />
          <Tile
            name={bingoCard[23]}
            onBingoSquareClick={() => handleClick(23, tiles[23])}
            selected={tiles[23]}
          />
          <Tile
            name={bingoCard[24]}
            onBingoSquareClick={() => handleClick(24, tiles[24])}
            selected={tiles[24]}
          />
        </div>
      </div>
    </>
  );
}

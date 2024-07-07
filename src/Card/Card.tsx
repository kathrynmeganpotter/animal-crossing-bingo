import Tile from "../Tile/Tile.js";
import "./card.scss"; 
import { useState } from 'react';

export default function Card({bingoCard}) {
    const [tiles, setTiles] = useState(Array(25).fill(false));

    function handleClick(i, state) {
        const nextTiles = tiles.slice();
        nextTiles[i] = state ? false : true; 
        setTiles(nextTiles);
    }

    return (
        <div className="bingo-card">
            <div className="bingo-card__row">
                <Tile name={bingoCard[0]} onTileClick={() => handleClick(0, tiles[0])} selected={tiles[0]}/>
                <Tile name={bingoCard[1]} onTileClick={() => handleClick(1, tiles[1])} selected={tiles[1]}/>
                <Tile name={bingoCard[2]} onTileClick={() => handleClick(2, tiles[2])} selected={tiles[2]}/>
                <Tile name={bingoCard[3]} onTileClick={() => handleClick(3, tiles[3])} selected={tiles[3]}/>
                <Tile name={bingoCard[4]} onTileClick={() => handleClick(4, tiles[4])} selected={tiles[4]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[5]} onTileClick={() => handleClick(5, tiles[5])} selected={tiles[5]}/>
                <Tile name={bingoCard[6]} onTileClick={() => handleClick(6, tiles[6])} selected={tiles[6]}/>
                <Tile name={bingoCard[7]} onTileClick={() => handleClick(7, tiles[7])} selected={tiles[7]}/>
                <Tile name={bingoCard[8]} onTileClick={() => handleClick(8, tiles[8])} selected={tiles[8]}/>
                <Tile name={bingoCard[9]} onTileClick={() => handleClick(9, tiles[9])} selected={tiles[9]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[10]} onTileClick={() => handleClick(10, tiles[10])} selected={tiles[10]}/>
                <Tile name={bingoCard[11]} onTileClick={() => handleClick(11, tiles[11])} selected={tiles[11]}/>
                <Tile name={bingoCard[12]} onTileClick={() => handleClick(12, tiles[12])} selected={tiles[12]}/>
                <Tile name={bingoCard[13]} onTileClick={() => handleClick(13, tiles[13])} selected={tiles[13]}/>
                <Tile name={bingoCard[14]} onTileClick={() => handleClick(14, tiles[14])} selected={tiles[14]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[15]} onTileClick={() => handleClick(15, tiles[15])} selected={tiles[15]}/>
                <Tile name={bingoCard[16]} onTileClick={() => handleClick(16, tiles[16])} selected={tiles[16]}/>
                <Tile name={bingoCard[17]} onTileClick={() => handleClick(17, tiles[17])} selected={tiles[17]}/>
                <Tile name={bingoCard[18]} onTileClick={() => handleClick(18, tiles[18])} selected={tiles[18]}/>
                <Tile name={bingoCard[19]} onTileClick={() => handleClick(19, tiles[19])} selected={tiles[19]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[20]} onTileClick={() => handleClick(20, tiles[20])} selected={tiles[20]}/>
                <Tile name={bingoCard[21]} onTileClick={() => handleClick(21, tiles[21])} selected={tiles[21]}/>
                <Tile name={bingoCard[22]} onTileClick={() => handleClick(22, tiles[22])} selected={tiles[22]}/>
                <Tile name={bingoCard[23]} onTileClick={() => handleClick(23, tiles[23])} selected={tiles[23]}/>
                <Tile name={bingoCard[24]} onTileClick={() => handleClick(24, tiles[24])} selected={tiles[24]}/>
            </div>
        </div>
      );
  }
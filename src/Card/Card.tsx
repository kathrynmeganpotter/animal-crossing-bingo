import Tile from "../Tile/Tile.js";
import "./card.scss"; 

export default function Card({bingoCard}) {
    return (
        <div className="bingo-card">
            <div className="bingo-card__row">
                <Tile name={bingoCard[0]}/>
                <Tile name={bingoCard[1]}/>
                <Tile name={bingoCard[2]}/>
                <Tile name={bingoCard[3]}/>
                <Tile name={bingoCard[4]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[5]}/>
                <Tile name={bingoCard[6]}/>
                <Tile name={bingoCard[7]}/>
                <Tile name={bingoCard[8]}/>
                <Tile name={bingoCard[9]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[10]}/>
                <Tile name={bingoCard[11]}/>
                <Tile name="Free Space"/>
                <Tile name={bingoCard[12]}/>
                <Tile name={bingoCard[13]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[14]}/>
                <Tile name={bingoCard[15]}/>
                <Tile name={bingoCard[16]}/>
                <Tile name={bingoCard[17]}/>
                <Tile name={bingoCard[18]}/>
            </div>
            <div className="bingo-card__row">
                <Tile name={bingoCard[19]}/>
                <Tile name={bingoCard[20]}/>
                <Tile name={bingoCard[21]}/>
                <Tile name={bingoCard[22]}/>
                <Tile name={bingoCard[23]}/>
            </div>
        </div>
      );
  }
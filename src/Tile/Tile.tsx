import "./tile.scss"; 

export default function Tile({name, onTileClick, selected}) {
    return (
    <div className="col border">
        <div className={`bingo-card__square ${selected ? "bingo-card__selected" : ""}`} onClick={onTileClick}>
            <p className="lead font-weight-normal">
                {name}
            </p>
        </div>
    </div>
    )
  }
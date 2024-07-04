import "./tile.scss"; 

export default function Tile({name}) {
    return (
    <div className="col border">
        <div className="bingo-card__square">
            <p className="lead font-weight-normal">
                {name}
            </p>
        </div>
    </div>
    )
  }
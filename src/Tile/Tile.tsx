import "./tile.scss";

export default function Tile({ name, onTileClick, selected }) {
  return (
    <div className="col border">
      <div
        className='bingo-card__square'
        onClick={onTileClick}
      >
        {selected && (
          <span className="bingo-card__square--selected">
            ✘
          </span>
        )}
        <p className="lead font-weight-normal">{name}</p>
      </div>
    </div>
  );
}

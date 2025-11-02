import "./square.scss";

export default function BingoSquare({ name, onBingoSquareClick, selected }) {
  return (
    <div className="col border">
      <div
        className='bingo-card__square'
        onClick={onBingoSquareClick}
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

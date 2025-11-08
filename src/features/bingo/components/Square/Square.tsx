import "./square.scss";

type SquareProps = {
  name: string;
  photoImage: string;
  selected: boolean;
  size: number;
  onBingoSquareClick: () => void;
};

export default function Square({ name, photoImage, onBingoSquareClick, selected, size } : SquareProps) {
  return (
    <div className="col border">
      <div
        className={`bingo-card__square bingo-card__square--size-${size}`}
        onClick={onBingoSquareClick}
      >
        {photoImage &&
          <img src={photoImage} alt={name} className="bingo-card__square--image"/> 
        }
        {selected && (
          <span className="bingo-card__square--selected">
            ✖
          </span>
        )}
        <span className="bingo-card__square--text">{name}</span>
      </div>
    </div>
  );
}

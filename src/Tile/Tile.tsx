export default function Tile({name}) {
    return (
    <div className="col border">
        <div>
            <p className="d-sm-block">
                {name}
            </p>
        </div>
    </div>
    )
  }
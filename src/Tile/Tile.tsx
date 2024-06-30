export default function Tile({name}) {
    return (
    <div className="col border">
        <div>
            <img src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg" className="block mx-auto"/>

            <p className="d-sm-block">
                {name}
            </p>
        </div>
    </div>
    )
  }
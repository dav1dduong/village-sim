import Improvement from "../models/Improvement";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
}

const Map = ({ tiles }: Props) => {
  return (
    <div className="Map">
      <div>
        {tiles.map((tile, i) => {
          return <Tile key={i} tile={tile} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Map;

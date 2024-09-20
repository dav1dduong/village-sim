import Improvement from "../models/Improvement";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
  edit: (tile: Improvement, index: number) => void;
  resources: () => void;
}

const Map = ({ tiles, edit, resources }: Props) => {
  return (
    <div className="Map">
      <div>
        {tiles.map((tile, i) => {
          return (
            <Tile
              key={i}
              tile={tile}
              index={i}
              edit={edit}
              resources={editResources}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;

import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
  edit: (tile: Improvement, index: number) => void;
  resources: () => void;
  enoughResources: (cost: Resources) => boolean;
}

const Map = ({ tiles, edit, resources, enoughResources }: Props) => {
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
              resources={resources}
              enoughResources={enoughResources}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;

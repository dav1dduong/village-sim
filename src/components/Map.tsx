import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
  edit: (tile: Improvement, index: number) => void;
  resources: () => void;
  enoughResources: (cost: Resources) => boolean;
  upgradeImprovement: (index: number) => void;
}

const Map = ({
  tiles,
  edit,
  resources,
  enoughResources,
  upgradeImprovement,
}: Props) => {
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
              upgradeImprovement={upgradeImprovement}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;

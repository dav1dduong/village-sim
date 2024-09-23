import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
  edit: (tile: Improvement, index: number) => void;
  enoughResources: (cost: Resources) => boolean;
  upgradeOrDowngradeImprovement: (index: number, string: string) => void;
}

const Map = ({
  tiles,
  edit,
  enoughResources,
  upgradeOrDowngradeImprovement,
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
              enoughResources={enoughResources}
              upgradeOrDowngradeImprovement={upgradeOrDowngradeImprovement}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Map;

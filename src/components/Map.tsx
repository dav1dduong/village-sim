import { useState } from "react";
import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./Map.css";
import Tile from "./Tile";

interface Props {
  tiles: Improvement[];
  edit: (tile: Improvement, index: number) => void;
  enoughResources: (cost: Resources) => boolean;
  upgradeOrDowngradeImprovement: (index: number, string: string) => void;
  removeImprovement: (index: number) => void;
}

const Map = ({
  tiles,
  edit,
  enoughResources,
  upgradeOrDowngradeImprovement,
  removeImprovement,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="Map">
      {tiles.map((tile, i) => {
        return (
          <Tile
            key={i}
            tile={tile}
            index={i}
            edit={edit}
            enoughResources={enoughResources}
            upgradeOrDowngradeImprovement={upgradeOrDowngradeImprovement}
            removeImprovement={removeImprovement}
          />
        );
      })}
    </div>
  );
};

export default Map;

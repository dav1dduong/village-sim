import { useEffect, useState } from "react";
import Improvement from "../models/Improvement";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";
import Resources from "../models/Resources";

interface Props {
  tile: Improvement;
  index: number;
  edit: (tile: Improvement, index: number) => void;
  enoughResources: (cost: Resources) => boolean;
  upgradeOrDowngradeImprovement: (index: number, string: string) => void;
}

const Tile = ({
  tile,
  index,
  edit,
  enoughResources,
  upgradeOrDowngradeImprovement,
}: Props) => {
  const [add, setAdd] = useState(true);
  useEffect(() => {
    if (tile.type !== "") {
      setAdd(false);
    }
  }, [tile]);

  return (
    <div className="Tile">
      <i className="fa-solid fa-person"></i>
      {add ? (
        <AddImprovementDialog
          edit={(tile) => edit(tile, index)}
          enoughResources={enoughResources}
        />
      ) : (
        <EditImprovementDialog
          enoughResources={enoughResources}
          upgradeOrDowngradeImprovement={(string: string) =>
            upgradeOrDowngradeImprovement(index, string)
          }
          tile={tile}
        />
      )}
    </div>
  );
};

export default Tile;

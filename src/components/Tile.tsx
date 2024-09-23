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
  resources: () => void;
  enoughResources: (cost: Resources) => boolean;
  upgradeImprovement: (index: number) => void;
}

const Tile = ({
  tile,
  index,
  edit,
  resources,
  enoughResources,
  upgradeImprovement,
}: Props) => {
  const [add, setAdd] = useState(true);
  useEffect(() => {
    if (tile.type !== "") {
      setAdd(false);
    }
  }, [tile]);

  console.log(tile);
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
          resources={resources}
          enoughResources={enoughResources}
          upgradeImprovement={() => upgradeImprovement(index)}
          tile={tile}
        />
      )}
    </div>
  );
};

export default Tile;

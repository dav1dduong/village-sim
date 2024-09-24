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
  removeImprovement: (index: number) => void;
}

const Tile = ({
  tile,
  index,
  edit,
  enoughResources,
  upgradeOrDowngradeImprovement,
  removeImprovement,
}: Props) => {
  const [add, setAdd] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (tile.type !== "") {
      setAdd(false);
    } else {
      setAdd(true);
    }
  }, [tile]);
  console.log(show);

  return (
    <div
      className={`Tile${show ? " disabled" : ""}`}
      onClick={() => {
        console.log("test");
      }}
    >
      <div className="Outside">
        {add ? (
          <AddImprovementDialog
            edit={(tile) => edit(tile, index)}
            enoughResources={enoughResources}
            index={index}
            closeModule={() => {}}
          />
        ) : (
          <EditImprovementDialog
            enoughResources={enoughResources}
            upgradeOrDowngradeImprovement={(string: string) =>
              upgradeOrDowngradeImprovement(index, string)
            }
            closeModule={() => {}}
            tile={tile}
            removeImprovement={() => removeImprovement(index)}
          />
        )}
      </div>
    </div>
  );
};

export default Tile;

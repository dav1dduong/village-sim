import { useState } from "react";
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
}

const Tile = ({ tile, index, edit, resources, enoughResources }: Props) => {
  const [add, setAdd] = useState(true);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (tile.type !== "") {
      setAdd(false);
    }
  };
  return (
    <div className="Tile" onClick={(e) => handleClick(e)}>
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
        />
      )}
    </div>
  );
};

export default Tile;

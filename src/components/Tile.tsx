import { useState } from "react";
import Improvement from "../models/Improvement";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  tile: Improvement;
  index: number;
  edit: (tile: Improvement, index: number) => void;
  resources: () => void;
}

const Tile = ({ tile, index, edit, resources }: Props) => {
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
        <AddImprovementDialog edit={(tile) => edit(tile, index)} />
      ) : (
        <EditImprovementDialog resources={resources} />
      )}
    </div>
  );
};

export default Tile;

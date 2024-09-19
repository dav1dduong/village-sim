import Improvement from "../models/Improvement";
import AddImprovementDialog from "./AddImprovementDialog";
import EditImprovementDialog from "./EditImprovementDialog";
import "./Tile.css";

interface Props {
  tile: Improvement;
  index: number;
}

const Tile = ({ tile, index }: Props) => {
  return (
    <div className="Tile">
      <i className="fa-solid fa-person"></i>
      <AddImprovementDialog />
      <EditImprovementDialog />
    </div>
  );
};

export default Tile;

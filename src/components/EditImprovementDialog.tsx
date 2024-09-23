import { useState } from "react";
import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./EditImprovementDialog.css";

interface Props {
  resources: () => void;
  enoughResources: (cost: Resources) => boolean;
  tile: Improvement;
  upgradeImprovement: () => void;
}

const EditImprovementDialog = ({
  resources,
  enoughResources,
  tile,
  upgradeImprovement,
}: Props) => {
  const [enough, setEnough] = useState(false);
  const checkUpgrade = () => {
    if (enoughResources(tile.cost)) {
      setEnough(true);
    }
  };
  const handleClick = () => {
    checkUpgrade();
    if (enough) {
      upgradeImprovement();
    }
  };
  return (
    <div className="EditImprovementDialog">
      <div className="btn-container">
        {
          <button onClick={handleClick}>
            Upgrade
          </button> /*We start adding buttons EX. Upgrade, Downgrade, Close, etc. */
        }
        {<button onClick={resources}>Downgrade</button>}
        {<button onClick={resources}>Remove</button>}
        {<button onClick={resources}>Close</button>}
      </div>
    </div>
  );
};

export default EditImprovementDialog;

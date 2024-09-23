import { useState } from "react";
import Improvement from "../models/Improvement";
import Resources from "../models/Resources";
import "./EditImprovementDialog.css";

interface Props {
  enoughResources: (cost: Resources) => boolean;
  tile: Improvement;
  upgradeOrDowngradeImprovement: (string: string) => void;
  removeImprovement: () => void;
}

const EditImprovementDialog = ({
  enoughResources,
  tile,
  upgradeOrDowngradeImprovement,
  removeImprovement,
}: Props) => {
  const checkOnUpgrade = () => {
    if (enoughResources(tile.cost)) {
      upgradeOrDowngradeImprovement("upgrade");
    }
  };
  const checkOnDowngrade = () => {
    if (tile.level > 1) {
      upgradeOrDowngradeImprovement("downgrade");
    }
  };

  console.log(tile);
  return (
    <div className="EditImprovementDialog">
      <div className="btn-container">
        {
          <button onClick={() => checkOnUpgrade()}>
            Upgrade
          </button> /*We start adding buttons EX. Upgrade, Downgrade, Close, etc. */
        }
        {<button onClick={() => checkOnDowngrade()}>Downgrade</button>}
        {
          <button
            onClick={() => {
              removeImprovement();
            }}
          >
            Remove
          </button>
        }
        {<button onClick={() => {}}>Close</button>}
      </div>
    </div>
  );
};

export default EditImprovementDialog;

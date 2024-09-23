import Resources from "../models/Resources";
import "./EditImprovementDialog.css";

interface Props {
  resources: () => void;
  enoughResources: (cost: Resources) => boolean;
}

const EditImprovementDialog = ({ resources }: Props) => {
  return (
    <div className="EditImprovementDialog">
      <div className="btn-container">
        {
          <button onClick={resources}>
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

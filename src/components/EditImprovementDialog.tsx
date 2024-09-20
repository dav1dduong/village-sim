import "./EditImprovementDialog.css";

interface Props {
  resources: () => void;
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
      </div>
    </div>
  );
};

export default EditImprovementDialog;

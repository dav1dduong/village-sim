import Resources from "../models/Resources";
import ResourceLine from "./ResourceLine";
import "./ResourcesView.css";

interface Props {
  resources: Resources;
}

const ResourcesView = ({ resources }: Props) => {
  return (
    <div className="ResourcesView">
      <ResourceLine resource={resources.people} name={"people"} />
      <ResourceLine resource={resources.gold} name={"gold"} />
      <ResourceLine resource={resources.food} name={"food"} />
      <ResourceLine resource={resources.ore} name={"ore"} />
      <ResourceLine resource={resources.weapon} name={"weapon"} />
      <ResourceLine resource={resources.armor} name={"armor"} />
    </div>
  );
};

export default ResourcesView;

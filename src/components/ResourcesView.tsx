import Resources from "../models/Resources";
import ResourceLine from "./ResourceLine";
import "./ResourcesView.css";

interface Props {
  resources: Resources;
}

const ResourcesView = ({ resources }: Props) => {
  return (
    <ul className="ResourcesView">
      <li className="icon-ctn">
        <i className="fa-solid fa-person"></i>
        <ResourceLine resource={resources.people} name={"people"} />
      </li>
      <li className="icon-ctn">
        <i className="fa-solid fa-coins"></i>
        <ResourceLine resource={resources.gold} name={"gold"} />
      </li>
      <li className="icon-ctn">
        <i className="fa-solid fa-burger"></i>
        <ResourceLine resource={resources.food} name={"food"} />
      </li>
      <li className="icon-ctn">
        <i className="fa-solid fa-hammer"></i>
        <ResourceLine resource={resources.ore} name={"ore"} />
      </li>
      <li className="icon-ctn">
        <i className="fa-solid fa-wand-sparkles"></i>
        <ResourceLine resource={resources.weapon} name={"weapon"} />
      </li>
      <li className="icon-ctn">
        <i className="fa-solid fa-shield-halved"></i>
        <ResourceLine resource={resources.armor} name={"armor"} />
      </li>
    </ul>
  );
};

export default ResourcesView;

import "./ResourceLine.css";

interface Props {
  name: string;
  resource: number;
}

const ResourceLine = ({ name, resource }: Props) => {
  return (
    <div className="ResourceLine">
      <p>
        {name} : {resource}
      </p>
    </div>
  );
};

export default ResourceLine;

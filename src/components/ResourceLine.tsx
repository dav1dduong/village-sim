import "./ResourceLine.css";

interface Props {
  name: string;
  resource: number;
}

const ResourceLine = ({ name, resource }: Props) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <p className="ResourceLine">
      {capitalizeFirstLetter(name)} : {resource}
    </p>
  );
};

export default ResourceLine;

import { useState } from "react";

import "./App.css";
import Improvement from "./models/Improvement";
import Map from "./components/Map";
import ResourcesView from "./components/ResourcesView";
import Resources from "./models/Resources";

function App() {
  const [tiles, setTiles] = useState<Improvement[]>([
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
    {
      type: "",
      level: 0,
    },
  ]);
  const [resources, setResouces] = useState<Resources>({
    people: 10,
    gold: 10,
    food: 10,
    ore: 10,
    weapon: 10,
    armor: 10,
  });

  return (
    <>
      <Map tiles={tiles} />
      <ResourcesView resources={resources} />
    </>
  );
}

export default App;

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
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
    {
      type: "",
      level: 0,
      cost: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    },
  ]);
  const [resources, setResources] = useState<Resources>({
    people: 0,
    gold: 10,
    food: 10,
    ore: 0,
    weapon: 0,
    armor: 0,
  });
  // function: that edits a tile
  const editTile = (tile: Improvement, index: number) => {
    setTiles((prev) => {
      let copy = prev.slice(0);
      copy.splice(index, 1, tile);
      return copy;
    });
  };
  // function: that edits resources
  const editResources = () => {
    const totalCosts = {
      people: 0,
      gold: 0,
      food: 0,
      ore: 0,
      weapon: 0,
      armor: 0,
    };

    const totalBenefits = {
      people: 0,
      gold: 0,
      food: 0,
      ore: 0,
      weapon: 0,
      armor: 0,
    };

    tiles.forEach((tile) => {
      totalCosts.people += tile.cost.people;
      totalCosts.gold += tile.cost.gold;
      totalCosts.food += tile.cost.food;
      totalCosts.ore += tile.cost.ore;
      totalCosts.weapon += tile.cost.weapon;
      totalCosts.armor += tile.cost.armor;

      totalBenefits.people += tile.benefit.people;
      totalBenefits.gold += tile.benefit.gold;
      totalBenefits.food += tile.benefit.food;
      totalBenefits.ore += tile.benefit.ore;
      totalBenefits.weapon += tile.benefit.weapon;
      totalBenefits.armor += tile.benefit.armor;
    });

    // Update the resources state based on costs and benefits
    setResources((prevResources) => ({
      people: prevResources.people - totalCosts.people + totalBenefits.people,
      gold: prevResources.gold - totalCosts.gold + totalBenefits.gold,
      food: prevResources.food - totalCosts.food + totalBenefits.food,
      ore: prevResources.ore - totalCosts.ore + totalBenefits.ore,
      weapon: prevResources.weapon - totalCosts.weapon + totalBenefits.weapon,
      armor: prevResources.armor - totalCosts.armor + totalBenefits.armor,
    }));
  };

  const enoughResources = (cost: Resources): boolean => {
    console.log(cost, resources, "576");
    return (
      resources.people >= cost.people &&
      resources.gold >= cost.gold &&
      resources.food >= cost.food &&
      resources.ore >= cost.ore &&
      resources.weapon >= cost.weapon &&
      resources.armor >= cost.armor
    );
  };
  const upgradeImprovement = (index: number) => {
    setTiles((prev) => {
      let copy = prev.slice(0);
      copy[index].level++;
      return copy;
    });
    editResources();
  };
  const downgradeImprovement = () => {};
  const calculateResources = () => {
    //calculate resources with benefits and costs
  };
  console.log(tiles, resources);
  return (
    <>
      <Map
        tiles={tiles}
        edit={editTile}
        resources={editResources}
        enoughResources={enoughResources}
        upgradeImprovement={upgradeImprovement}
      />
      <ResourcesView resources={resources} />
    </>
  );
}

export default App;

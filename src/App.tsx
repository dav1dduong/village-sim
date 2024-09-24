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
      editResources(copy);
      return copy;
    });
  };
  // function: that edits resources
  const editResources = (tiles: Improvement[]) => {
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
      totalCosts.people += tile.cost.people * tile.level;
      totalCosts.gold += tile.cost.gold * tile.level;
      totalCosts.food += tile.cost.food * tile.level;
      totalCosts.ore += tile.cost.ore * tile.level;
      totalCosts.weapon += tile.cost.weapon * tile.level;
      totalCosts.armor += tile.cost.armor * tile.level;

      totalBenefits.people += tile.benefit.people * tile.level;
      totalBenefits.gold += tile.benefit.gold * tile.level;
      totalBenefits.food += tile.benefit.food * tile.level;
      totalBenefits.ore += tile.benefit.ore * tile.level;
      totalBenefits.weapon += tile.benefit.weapon * tile.level;
      totalBenefits.armor += tile.benefit.armor * tile.level;
    });

    // Update the resources state based on costs and benefits
    setResources((prevResources) => {
      let copy = { ...prevResources };

      copy.people = totalBenefits.people - totalCosts.people;
      copy.gold = totalBenefits.gold - totalCosts.gold + 10;
      copy.food = totalBenefits.food - totalCosts.food + 10;
      copy.ore = totalBenefits.ore - totalCosts.ore;
      copy.weapon = totalBenefits.weapon - totalCosts.weapon;
      copy.armor = totalBenefits.armor - totalCosts.armor;
      return copy;
    });
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
  const upgradeOrDowngradeImprovement = (index: number, string: string) => {
    setTiles((prev) => {
      let copy = prev.slice(0);
      console.log(string);
      if (string === "upgrade") {
        copy[index].level++;
      } else if (string === "downgrade") {
        copy[index].level--;
        console.log(string);
      }
      editResources(copy);
      return copy;
    });
  };
  const removeImprovement = (index: number) => {
    setTiles((prev) => {
      let copy = prev.slice(0);
      if (copy[index].level === 1) {
        copy[index] = {
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
        };
      }
      editResources(copy);
      return copy;
    });
  };
  console.log(tiles, resources);
  return (
    <>
      <div className="main-ctn">
        <p className="title">RPG Sim</p>
        <div className="map-container">
          <Map
            tiles={tiles}
            edit={editTile}
            enoughResources={enoughResources}
            upgradeOrDowngradeImprovement={upgradeOrDowngradeImprovement}
            removeImprovement={removeImprovement}
          />
        </div>
        <div className="resources-container">
          <ul>
            <ResourcesView resources={resources} />
          </ul>
        </div>
        <ul className="conversion">
          <li>1 People = 5 Food</li>
          <li>2 Gold = 1 Weapon/Armor</li>
          <li>1 Food = 2 Gold</li>
          <li>1 Ore = 1 People</li>
          <li>1 Weapon = 1 Ore</li>
          <li>1 Armor = 1 Ore</li>
        </ul>
      </div>
    </>
  );
}

export default App;

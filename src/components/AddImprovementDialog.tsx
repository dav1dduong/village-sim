import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import Improvement from "../models/Improvement";
import Resources from "../models/Resources";

interface Props {
  edit: (tile: Improvement) => void;
  enoughResources: (cost: Resources) => boolean;
  index: number;
  closeModule: () => void;
}
const AddImprovementDialog = ({
  edit,
  enoughResources,
  index,
  closeModule,
}: Props) => {
  const [resourceType, setResourceType] = useState("people");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    let replacementTile = {
      type: resourceType,
      level: 1,
      cost: { people: 0, gold: 0, food: 0, ore: 0, weapon: 0, armor: 0 },
      benefit: {
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      },
    };
    console.log(
      enoughResources({
        people: 0,
        gold: 0,
        food: 0,
        ore: 1,
        weapon: 0,
        armor: 0,
      })
    );
    if (
      resourceType === "people" &&
      enoughResources({
        people: 0,
        gold: 0,
        food: 5,
        ore: 0,
        weapon: 0,
        armor: 0,
      })
    ) {
      replacementTile.cost.food = 5;
      replacementTile.benefit.people = 1;
      edit(replacementTile);
    }
    if (
      resourceType === "gold" &&
      enoughResources({
        people: 0,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 1,
        armor: 1,
      })
    ) {
      replacementTile.cost.armor = 1;
      replacementTile.cost.weapon = 1;
      replacementTile.benefit.gold = 2;
      edit(replacementTile);
    }
    if (
      resourceType === "food" &&
      enoughResources({
        people: 0,
        gold: 5,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      })
    ) {
      replacementTile.cost.gold = 2;
      replacementTile.benefit.food = 1;
      edit(replacementTile);
    }
    if (
      resourceType === "ore" &&
      enoughResources({
        people: 1,
        gold: 0,
        food: 0,
        ore: 0,
        weapon: 0,
        armor: 0,
      })
    ) {
      replacementTile.cost.people = 1;
      replacementTile.benefit.ore = 1;
      edit(replacementTile);
    }
    if (
      resourceType === "weapon" &&
      enoughResources({
        people: 0,
        gold: 0,
        food: 0,
        ore: 1,
        weapon: 0,
        armor: 0,
      })
    ) {
      replacementTile.cost.ore = 1;
      replacementTile.benefit.weapon = 1;
      edit(replacementTile);
    }
    if (
      resourceType === "armor" &&
      enoughResources({
        people: 0,
        gold: 0,
        food: 0,
        ore: 1,
        weapon: 0,
        armor: 0,
      })
    ) {
      replacementTile.cost.ore = 1;
      replacementTile.benefit.armor = 1;
      edit(replacementTile);
    }
    closeModule();
  };

  return (
    <div className="AddImprovementDialog">
      <form onSubmit={submitHandler}>
        <input
          type="radio"
          id={`people ${index}`}
          name="fav_language"
          value="people"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`people ${index}`}>
          <i className="fa-solid fa-person"></i>
        </label>
        <input
          type="radio"
          id={`gold ${index}`}
          name="fav_language"
          value="gold"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`gold ${index}`}>
          <i className="fa-solid fa-coins"></i>
        </label>
        <input
          type="radio"
          id={`food ${index}`}
          name="fav_language"
          value="food"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`food ${index}`}>
          <i className="fa-solid fa-burger"></i>
        </label>
        <input
          type="radio"
          id={`ore ${index}`}
          name="fav_language"
          value="ore"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`ore ${index}`}>
          <i className="fa-solid fa-hammer"></i>
        </label>
        <input
          type="radio"
          id={`weapon ${index}`}
          name="fav_language"
          value="weapon"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`weapon ${index}`}>
          <i className="fa-solid fa-wand-sparkles"></i>
        </label>
        <input
          type="radio"
          id={`armor ${index}`}
          name="fav_language"
          value="armour"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor={`armor ${index}`}>
          <i className="fa-solid fa-shield-halved"></i>
        </label>
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default AddImprovementDialog;

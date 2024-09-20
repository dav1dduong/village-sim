import { FormEvent, useState } from "react";
import "./AddImprovementDialog.css";
import Improvement from "../models/Improvement";

interface Props {
  edit: (tile: Improvement) => void;
}
const AddImprovementDialog = ({ edit }: Props) => {
  const [resourceType, setResourceType] = useState("people");

  const submitHandler = (e: FormEvent) => {
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
    if (resourceType === "people") {
      replacementTile.cost.food = 5;
      replacementTile.benefit.people = 1;
    }
    if (resourceType === "gold") {
      replacementTile.cost.armor = 1;
      replacementTile.cost.weapon = 1;
      replacementTile.benefit.gold = 2;
    }
    if (resourceType === "food") {
      replacementTile.cost.gold = 5;
      replacementTile.benefit.food = 1;
    }
    if (resourceType === "ore") {
      replacementTile.cost.people = 1;
      replacementTile.benefit.ore = 1;
    }
    if (resourceType === "weapon") {
      replacementTile.cost.ore = 1;
      replacementTile.benefit.weapon = 1;
    }
    if (resourceType === "armor") {
      replacementTile.cost.ore = 1;
      replacementTile.benefit.armor = 1;
    }
    edit(replacementTile);
  };

  return (
    <div className="AddImprovementDialog">
      <form onSubmit={submitHandler}>
        <input
          type="radio"
          id="people"
          name="fav_language"
          value="people"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="people">
          <i className="fa-solid fa-person"></i>
        </label>
        <input
          type="radio"
          id="gold"
          name="fav_language"
          value="gold"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="gold">
          <i className="fa-solid fa-coins"></i>
        </label>
        <input
          type="radio"
          id="food"
          name="fav_language"
          value="food"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="food">
          <i className="fa-solid fa-burger"></i>
        </label>
        <input
          type="radio"
          id="ore"
          name="fav_language"
          value="ore"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="ore">
          <i className="fa-solid fa-hammer"></i>
        </label>
        <input
          type="radio"
          id="weapon"
          name="fav_language"
          value="weapon"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="weapon">
          <i className="fa-solid fa-wand-sparkles"></i>
        </label>
        <input
          type="radio"
          id="armor"
          name="fav_language"
          value="armour"
          onChange={(e) => setResourceType(e.target.value)}
        />
        <label htmlFor="armor">
          <i className="fa-solid fa-shield-halved"></i>
        </label>
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default AddImprovementDialog;

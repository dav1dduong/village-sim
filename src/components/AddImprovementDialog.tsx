import { useState } from "react";
import "./AddImprovementDialog.css";

interface Props {}
const AddImprovementDialog = () => {
  const [resourceType, setResourceType] = useState("people");

  return (
    <div className="AddImprovementDialog">
      <form>
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
      </form>
    </div>
  );
};

export default AddImprovementDialog;

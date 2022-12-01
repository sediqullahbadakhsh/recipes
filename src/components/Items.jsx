import { useState } from "react";

import Filters from "./Filters";
import Recipes from "./Recipes";
import Sorts from "./Sorts";
import "../assets/style/Items.css";

const Items = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  return (
    <div>
      <div>دستور پخت ها</div>
      <ul>
        <li onClick={() => setActiveSort(!activeSort)}>مرتب سازی</li>
        <li onClick={() => setActiveFilter(!activeFilter)}>فلتر ها</li>
      </ul>
      <div className="container">
        <div className="main-container">
          <div className={`sort-container ${activeSort ? "active" : "hidden"}`}>
            <Sorts />
          </div>
          <div className={`recipe-container `}>
            <Recipes />
          </div>
        </div>
        <div
          className={`filter-container hidden ${
            activeFilter ? "active" : "hidden"
          }`}
        >
          <Filters />
        </div>
      </div>
    </div>
  );
};
export default Items;

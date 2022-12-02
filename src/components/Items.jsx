import { useState } from "react";
import { itemList, filterList, sortList } from "./data";

import Filters from "./Filters";
import Recipes from "./Recipes";
import Sorts from "./Sorts";

import "../assets/style/Items.css";
import setting from "../assets/Images/setting-5.png";
import sort from "../assets/Images/sort.png";

const Items = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  const [selectFilters, setSelectFilters] = useState([]);

  const closeMenu = () => {
    setActiveFilter(false);
    setActiveSort(false);
  };
  const hundleUpdate = (data) => {
    setSelectFilters((arr) => [...arr, data.value]);
  };
  console.log(selectFilters);
  return (
    <div className="items-page">
      <div className="filter-options" dir="rtl">
        فیلتر:
        {selectFilters &&
          selectFilters.map((filter) => {
            return <div key={filter}>{filter}</div>;
          })}
      </div>
      <div className="items-title">دستور پخت ها</div>
      <ul className="floating-button">
        <li className="sortButton" onClick={() => setActiveSort(!activeSort)}>
          <p>مرتب سازی</p>
          <img src={sort} alt="sort" />
        </li>
        <li className="vector">|</li>
        <li
          className="filterButton"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <span className="circle"></span>
          <p>فیلتر ها</p>
          <img src={setting} alt="filter" />
        </li>
      </ul>
      <div className="container">
        <div className="main-container">
          <div className={`sort-container ${activeSort ? "active" : "hidden"}`}>
            <Sorts />
          </div>
          <div className={`recipe-container `}>
            <Recipes recipes={itemList} />
          </div>
        </div>
        <div
          className={`filter-container hidden ${
            activeFilter ? "active" : "hidden"
          }`}
        >
          <Filters
            filters={filterList}
            closeMenu={closeMenu}
            filterOption={hundleUpdate}
          />
        </div>
      </div>
    </div>
  );
};
export default Items;

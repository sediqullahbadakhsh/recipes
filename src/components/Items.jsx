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
    selectFilters.map((item) => {
      if (item === data.value) {
        setSelectFilters((arr) =>
          arr.filter((recipe) => recipe !== data.value)
        );
      }
    });
  };
  return (
    <div className="items-page">
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
      <div className="desktop-main">
        <div className="main-container">
          <div className={`sort-container ${activeSort ? "active" : "hidden"}`}>
            <Sorts sortList={sortList} closeMenu={closeMenu} />
          </div>
          <div className="recipe-container">
            <Recipes recipes={itemList} filterData={selectFilters} />
          </div>
        </div>
        <div
          className={`filter-container ${activeFilter ? "active" : "hidden"}`}
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

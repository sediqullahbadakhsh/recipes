import { useState } from "react";

const Filters = ({ filters, closeMenu, filterOption }) => {
  const [data, setData] = useState("");

  const hundleClick = (e) => {
    setData(e.target);
    filterOption(e.target);
  };
  return (
    <div className="filterList" dir="rtl">
      <div onClick={closeMenu}>close</div>
      <p>فیلتر</p>
      <p>حذف فیلتر</p>
      {filters.map((filter) => {
        return (
          <div key={filter.name}>
            <div>{filter.name}</div>
            <div>
              {filter.types.map((type) => {
                return (
                  <label key={type}>
                    <input type="checkbox" onClick={hundleClick} value={type} />
                    {type}
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Filters;

import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft } from "react-icons/md";

const Accordion = ({ name, types, hundleClick }) => {
  const [active, setActive] = useState(false);

  return (
    <div key={name} className="filter-groups">
      <div className="filter-group" onClick={() => setActive(!active)}>
        {name}
        {active ? <MdKeyboardArrowDown /> : <MdKeyboardArrowLeft />}
      </div>
      <div className="filter-options">
        {active
          ? types &&
            types.map((type) => {
              return (
                <label key={type} className="filter-option">
                  <input type="checkbox" onClick={hundleClick} value={type} />
                  {type}
                </label>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default Accordion;

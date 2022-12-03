import close from "../assets/Images/close-square.png";
import Accordion from "./Accordion";

const Filters = ({ filters, closeMenu, filterOption }) => {
  const hundleClick = (e) => {
    filterOption(e.target);
  };

  return (
    <div className="floatingWindow" dir="rtl">
      <div className="topModal">
        <div onClick={closeMenu}>
          <img src={close} alt="close btn" />
        </div>
        <p>فیلتر</p>
        <p>حذف فیلتر</p>
      </div>
      {filters.map((filter) => {
        return (
          <Accordion
            name={filter.name}
            types={filter.types}
            hundleClick={hundleClick}
            key={filter.name}
          />
        );
      })}
      <div onClick={closeMenu} className="modal-button">
        اعمال
      </div>
    </div>
  );
};
export default Filters;

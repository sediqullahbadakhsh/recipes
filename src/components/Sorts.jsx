import close from "../assets/Images/close-square.png";

const Sorts = ({ sortList, closeMenu }) => {
  return (
    <div className="floatingWindow">
      <div className="topModal" dir="rtl">
        <div onClick={closeMenu}>
          <img src={close} alt="close btn" />
        </div>
        <p>فیلتر</p>
        <p></p>
      </div>
      <div className="sort-categories">
        {sortList.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};
export default Sorts;

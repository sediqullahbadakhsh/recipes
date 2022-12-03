import { useState } from "react";
import Navbar from "./Navbar";
import login from "../assets/Images/login.png";
import search from "../assets/Images/search.png";
import logo from "../assets/Images/Logo.png";
import "../assets/style/Header.css";
import menu from "../assets/Images/menu.png";

const Header = ({ hundleClick }) => {
  const [active, setActive] = useState(false);
  return (
    <div className="header-container">
      <button className="subscription">خرید اشتراک</button>
      <div className="signup">
        <p>ورود| ثبت نام</p>
        <img src={login} alt="Login" />
      </div>
      <div className="search">
        <input type="text" placeholder="...جستجو کنید" />
        <img src={search} alt="search" />
      </div>
      <img src={logo} alt="logo" className="logo" />
      <img
        className="menuBtn"
        onClick={() => setActive(!active)}
        src={menu}
        alt="menu"
      />
      <div className={active ? "active" : "hidden"}>
        <Navbar />
      </div>
    </div>
  );
};
export default Header;

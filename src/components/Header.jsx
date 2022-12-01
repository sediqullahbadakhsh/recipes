import login from "../assets/Images/login.png";
import search from "../assets/Images/search.png";
import logo from "../assets/Images/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left">
        <button className="subscription">خرید اشتراک</button>
        <div className="signup">
          <p>ورود| ثبت نام</p>
          <img src={login} alt="Login" />
        </div>
      </div>
      <div className="right">
        <div className="search">
          <input type="text" placeholder="...جستجو کنید" />
          <img src={search} alt="search" />
        </div>
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
};
export default Header;

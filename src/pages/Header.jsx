import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar" id="navbar">
        <div className="logo">Rastholia</div>
        <div className="nav">
          <NavLink to="/services">Services</NavLink>
          <div className="menu">
            <img src="./src/assets/icons/menu.svg" alt="menu" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

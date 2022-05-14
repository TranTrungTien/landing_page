import "./style.css";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--item">
              <a href="/">Fasilitas</a>
            </li>
            <li className="header__nav--item">
              <a href="/">Beautypreneur</a>
            </li>
            <li className="header__nav--item">
              <a href="/">Brand Partner </a>
            </li>
          </ul>
          <a className="header__nav--btn" href="/">
            Registras
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

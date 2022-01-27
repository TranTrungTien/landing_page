import logo from "../../assets/images/logo.png";
import cartLogo from "../../assets/images/cart_logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="header__box">
            <img src={logo} alt="Logo" />
          </div>
          <div>
            <h1 className="header__title">Boutique</h1>
            <p className="header__subtitle">Fashion</p>
          </div>
        </div>
        <div className="header__nav">
          <ul className="header__list">
            <li>
              Collection <div className="notification"></div>
            </li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Reviews</li>
          </ul>

          <button className="header__cart--btn">
            <img src={cartLogo} alt="Cart" />
            <div className="notification__cart">
              <span>1</span>
            </div>
          </button>
          <button className="header__bars">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

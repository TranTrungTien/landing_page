import "./style.css";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__content">
          <h1 className="banner__content--title">
            Pasti berat kalo lari sendirian.
          </h1>
          <p className="banner__content--desc">
            Setiap hal pasti butuh hal lain untuk membersamai. Begitupun dengan
            bisnis, Beautieslfie.id hadir untuk membersamai kalian untuk menjadi
            Beautypreneur. Siapapun kamu!!
          </p>
          <div className="banner__option">
            <ul className="banner__option--list">
              <li className="banner__option--item">
                <div className="banner__option--circle">
                  <div></div>
                </div>
                <span>Mahasiswi</span>
              </li>
              <li className="banner__option--item">
                <div className="banner__option--circle">
                  <div></div>
                </div>
                <span>Ibu Rumah Tangga</span>
              </li>
              <li className="banner__option--item">
                <div className="banner__option--circle">
                  <div></div>
                </div>
                <span>Career Hunter</span>
              </li>
            </ul>
          </div>
          <div className="banner__rank">
            <h4 className="banner__rank--title">
              1st Indonesian Beautypreneur Community
            </h4>
            <p className="banner__rank--desc">
              Dengan berbagai fasilitas “advance disigital platform”.
            </p>
          </div>
        </div>
        <div className="banner__image">
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

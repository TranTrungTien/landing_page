import "./style.css";
import icon1 from "../../assets/images/smile.png";
import icon2 from "../../assets/images/heartbeat.png";
import icon3 from "../../assets/images/medals.png";
import icon4 from "../../assets/images/world.png";
import icon5 from "../../assets/images/dontknow.png";
import icon6 from "../../assets/images/laptop.png";
import icon7 from "../../assets/images/fire.png";
import icon8 from "../../assets/images/book.png";

const Guide = () => {
  return (
    <section className="guide">
      <div className="guide__container">
        <div className="guide__header">
          <div className="guide__header--line"></div>
          <h2 className="guide__header--title">
            Pokonya udah pasti kita bimbing, dengan{" "}
            <span>berbagai fasilitas</span>.
          </h2>
        </div>
        <ul className="guide__list">
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon1} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Intens Mentoring</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon2} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Kajian Rutin</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon3} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Rewards</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon4} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Free Web Profile</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon5} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Kelas Bisnis</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon6} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Kelas Digital</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon7} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Kelas Skin Care</h3>
          </li>
          <li className="guide__item">
            <div className="guide__box">
              <img src={icon8} alt="Icon" />
            </div>
            <h3 className="guide__item--desc">Product Knowledge</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Guide;

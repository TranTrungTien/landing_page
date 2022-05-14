import advisor1 from "../../assets/images/advisor1.png";
import advisor2 from "../../assets/images/advisor2.png";
import advisor3 from "../../assets/images/advisor3.png";
import advisor4 from "../../assets/images/advisor4.png";
import "./style.css";

const Advisor = () => {
  return (
    <section className="advisor">
      <div className="advisor__container">
        <div className="advisor__header">
          <h1 className="advisor__header--title">
            Meet our <span>mentor</span> and <span>advisor</span>.
          </h1>
          <p className="advisor__header--desc">
            Kita akan berlari ditemani para mentor dan advisor dari
            Beautieslife.id. Akan banyak ilmu baru dan inspiratif.
          </p>
        </div>
        <div className="advisor__content">
          <ul className="advisor__list">
            <li className="advisor__list--item">
              <div className="advisor__list--item-box">
                <div className="advisor__list--item-overlay"></div>
                <img src={advisor1} alt="advisor" />
              </div>
              <h4 className="advisor__name">Chantal Shelburne</h4>
              <p className="advisor__desc">Founder Beautieslife.id</p>
              <p className="advisor__more-info">Our Mentor</p>
            </li>
            <li className="advisor__list--item">
              <div className="advisor__list--item-box">
                <div className="advisor__list--item-overlay"></div>
                <img src={advisor2} alt="advisor" />
              </div>
              <h4 className="advisor__name">Kylee Danford</h4>
              <p className="advisor__desc">Founder & CDO Syabany.com</p>
              <p className="advisor__more-info">Our Mentor</p>
            </li>
            <li className="advisor__list--item">
              <div className="advisor__list--item-box">
                <div className="advisor__list--item-overlay"></div>
                <img src={advisor3} alt="advisor" />
              </div>
              <h4 className="advisor__name">Lauralee Quintero</h4>
              <p className="advisor__desc">Leader Nasional JAFRA Executive</p>
              <p className="advisor__more-info">Our Advisor</p>
            </li>
            <li className="advisor__list--item">
              <div className="advisor__list--item-box">
                <div className="advisor__list--item-overlay"></div>
                <img src={advisor4} alt="advisor" />
              </div>
              <h4 className="advisor__name">Freida Varnes</h4>
              <p className="advisor__desc">Founder Dakwahyu & Wadah Hikmah</p>
              <p className="advisor__more-info">Our Advisor</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Advisor;

import bannerImage from "../../assets/images/main_banner.png";
import starBg from "../../assets/images/star_bg.png";
import ins from "../../assets/images/instagram.png";
import fb from "../../assets/images/facebook.png";
import tw from "../../assets/images/twitter.png";
import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <div
        className="main__star_bg"
        style={{
          backgroundImage: `url(${starBg})`,
          backgroundPosition: "center auto",
          backgroundSize: "100% auto",
        }}
      ></div>
      <div className="main__container">
        <div className="main__content">
          <h1 className="main__content--title">Unlock Your Style</h1>
          <p className="main__content--desc">
            With all of the biggest names in fashion, you’ll be <br /> amazed to
            find the best designer clothing.
          </p>
          <div className="main__link">
            <div></div>
            <a href="#" className="main__link--text">
              View All Collection
            </a>
          </div>
          <div className="main__social">
            <a href="#">
              <img src={fb} alt="Social" />
            </a>
            <a href="#">
              <img src={ins} alt="Social" />
            </a>
            <a href="#">
              <img src={tw} alt="Social" />
            </a>
          </div>
        </div>
        <div className="main__background">
          <div className="main__img">
            <img src={bannerImage} alt="Main_Banner" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

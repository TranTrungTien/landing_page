import "./style.css";
import icon from "../../assets/images/icon.png";

const Beauty = () => {
  return (
    <section className="beauty">
      <div className="beauty__container">
        <div className="beauty__content">
          <h3 className="beauty__content--title">
            Beautypreneur<span className="beauty__content--title-dot">.</span>
          </h3>
          <p className="beauty__content--pronounce">ˈbyo͞odē prəˈnər (noun)</p>
          <p className="beauty__content--desc">
            Bukan sekedar bisnis yang hits dengan segudang untung. Tren
            beautypreneur di Indonesia sudah mulai terlihat sejak beberapa tahun
            terakhir, industri kecantikan dalam negeri maulai berkembang pesat.{" "}
          </p>
        </div>
        <div className="beauty__more-info">
          <div className="beauty__more-info--box">
            <img src={icon} alt="Icon" />
            <h2 className="beauty__more-info--title">50%</h2>
            <p className="beauty__more-info--desc">
              Bingun bagaimana caranya memulai bisnis healthy beauty. Sedangkan
              demand di sektor ini begitu melimpah.
            </p>
            <span className="beauty__more-info--src">
              source involve.cewekbanget.id/beautypreneur
            </span>
          </div>
          <div className="beauty__more-info--box">
            <img src={icon} alt="Icon" />
            <h2 className="beauty__more-info--title">23.7%</h2>
            <p className="beauty__more-info--desc">
              Khawatir butuh modal usaha yang sangat besar. Padahal banyak cara
              agar dapat berbinis di sektor ini (Healthy Beauty)
            </p>
            <span className="beauty__more-info--src">
              source involve.cewekbanget.id/beautypreneur
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beauty;

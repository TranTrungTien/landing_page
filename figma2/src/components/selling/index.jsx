import "./style.css";
import toolgroup1 from "../../assets/images/tool-group-1.png";
import toolgroup2 from "../../assets/images/tool-group-2.png";
import toolgroup3 from "../../assets/images/tool-group-3.png";
import toolgroup4 from "../../assets/images/tool-group-4.png";

const Selling = () => {
  return (
    <section className="selling">
      <div className="selling__container">
        <div className="selling__header">
          <h1 className="selling__header--title">
            Beauty Selling <span>with</span> Digital Pattern.
          </h1>
          <p className="selling__header--desc">
            Pasar yang besar ditunjang dengan wadah yang tepat, insyaAllah akan
            bebuah keberhasilan
          </p>
        </div>
        <div className="selling__content">
          <div className="selling__content--left">
            <div className="selling__content--column-left">
              <div className="selling__content--box-img">
                <img src={toolgroup1} alt="Tool Group" />
                <p className="selling__content--box-img--desc">
                  Beautieslife.id Platform
                </p>
              </div>
              <div className="selling__content--box-img">
                <img src={toolgroup3} alt="Tool Group" />
                <p className="selling__content--box-img--desc">
                  Management Tools
                </p>
              </div>
            </div>
            <div className="selling__content--column-right">
              <div className="selling__content--box-img">
                <img src={toolgroup2} alt="Tool Group" />
                <p className="selling__content--box-img--desc">
                  Social Media Platform
                </p>
              </div>
              <div className="selling__content--box-img">
                <img src={toolgroup4} alt="Tool Group" />
                <p className="selling__content--box-img--desc">
                  Enhance Chat Tools
                </p>
              </div>
            </div>
          </div>
          <div className="selling__content--right">
            <div className="selling__line"></div>
            <h1 className="selling__content--title">
              Bukan saatnya menunda <span>digitalisasi</span>.
            </h1>
            <p className="selling__content--desc">
              Ayo kita hadapi bersama era peralihan ini. Beautieslife.id akan
              bantu kamu belajar berbisnis dengan berbagai tools digital yang
              diharapkan akan mendorong kemudahan dan kelancaran bisnis beauty
              kamu.
            </p>
            <ul className="selling__content--list">
              <li className="selling__content--item">
                <div className="selling__content--dot">
                  <div></div>
                </div>
                Udah bukan jamannya gaptek
              </li>
              <li className="selling__content--item">
                <div className="selling__content--dot">
                  <div></div>
                </div>
                Udah gak ada lagi bingung pake tools apaan
              </li>
              <li className="selling__content--item">
                <div className="selling__content--dot">
                  <div></div>
                </div>
                Gak ada lagi istilah siapa yang bakan ngajarin aku
              </li>
              <li className="selling__content--item">
                <div className="selling__content--dot">
                  <div></div>
                </div>
                Udah bukan musimnya jalan sendirian!!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Selling;

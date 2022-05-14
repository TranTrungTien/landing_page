import logo from "../../assets/images/footer-logo.png";
import logo__support from "../../assets/images/support.png";
import "./style.css";
import testimonialsImage from "../../assets/images/people-said.png";
import footerBg from "../../assets/images/frame-bg.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__left--box">
          <img src={logo} alt="Logo" />
          <p className="footer__left--desc">
            Indonesian Beautypreneur Community. Wadah positif bagi para
            Beautypreneur. Berpenghasilan dari rumah dengan memanfaatkan
            teknologi. Bergabung bersama beautypreneur lainnya.
          </p>
          <img src={logo__support} alt="Support" />
          <p className="footer__left--copywriter">
            © 2022 Beautieslife.id. Made with love
          </p>
        </div>
      </div>
      <div className="footer__right">
        <div className="footer__right--testimonials">
          <div className="footer__testimonials__header">
            <p>Testimonial</p>
            <h1 className="footer__testimonials--title">
              Apa kata <span>mereka</span>?
            </h1>
          </div>
          <div className="footer__testimonials__content">
            <div className="footer__testimonials--wrap-img">
              <img src={testimonialsImage} alt="TestionialsImage" />
            </div>
            <div className="footer__testimonials__info">
              <h3 className="testimonials__name">Annabel Rohan</h3>
              <p className="testimonials__position">
                Leader Nasional JAFRA Executive
              </p>
              <p className="testimonials__desc">
                Arcu sed etiam proin natoque at lectus aliquam. Faucibus ipsum
                porta eleifend facilisis cras in. Sed etiam proin natoque at
                lectus aliquam. Faucibus ipsum porta eleifend facilisis cras in.
              </p>
              <a className="testimonials__link" href="/">
                Next
              </a>
            </div>
          </div>
        </div>
        <div className="footer__right--nav">
          <ul className="footer__nav__list">
            <li>About</li>
            <li>Home</li>
            <li>Beautypreneur</li>
            <li>Brand Partner</li>
            <li>Official Partner</li>
          </ul>
          <ul className="footer__nav__list">
            <li>Support</li>
            <li>Kelas Geratis *</li>
            <li>Fasilitas</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <img src={footerBg} alt="Background" />
    </footer>
  );
};

export default Footer;

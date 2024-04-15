import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {
  BsFacebook,
  BsWhatsapp,
  BsTwitterX,
  BsInstagram,
  BsGoogle,
} from "react-icons/bs";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <section id="Footer" style={{ background: "#f7fafd" }}>
      <div className="container">
        <div className="mainFooter text-lg-start text-center">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-4 col-xs-12 mb-sm-4">
              <div className="logo m20-sm-y m-auto">
                <Link to="/">
                  <img src={Logo} alt="JBS LOGO" />
                </Link>
              </div>

              <div className="social-icon d-flex justify-content-center  my-4">
                <li className="mx-2">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100094207180164&mibextid=JRoKGi"
                    target="_blank"
                  >
                    <BsFacebook style={{ fontSize: "20px" }} />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="https://wa.me/+919875263080" target="_blank">
                    <BsWhatsapp style={{ fontSize: "20px" }} />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2FInstituteJ88555"></Link>
                  <BsTwitterX style={{ fontSize: "20px" }} />
                </li>
                <li className="mx-2">
                  <Link
                    to="https://www.instagram.com/jbs_it_institute?utm_source=qr"
                    target="_blank"
                  >
                    <BsInstagram style={{ fontSize: "20px" }} />
                  </Link>
                </li>
                <li className="mx-2">
                  <Link to="https://www.google.com/search?q=jbs+institute+surat&sca_esv=593723253&rlz=1C1JJTC_enIN1052IN1053&sxsrf=AM9HkKlCRENC7y0KD-xAouU1kbZF01XvLg%3A1703582297499&ei=WZqKZc2NHpvb4-EPkOiXsAU&gs_ssp=eJzj4tVP1zc0zDaxyCuOT6oyYLRSNagwTko1MEkzNDVNNkhMsTSytDKosDRPsjQ2tjBKTE0xN0g2TvQSzkoqVsjMKy7JLCktSVUoLi1KLAEALnwW_g&oq=jbs+institute&gs_lp=Egxnd3Mtd2l6LXNlcnAiDWpicyBpbnN0aXR1dGUqAggAMg0QLhjHARivARiwAxgnMgcQIxiwAxgnMgcQIxiwAxgnMgcQIxiwAxgnMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSN4IUABYAHABeAGQAQCYAQCgAQCqAQC4AQHIAQDiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp">
                    <BsGoogle style={{ fontSize: "20px" }} />
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-7 col-xs-12 mb-sm-4 order-lg-0 order-md-1">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-12 m0-bottom">
                  <h5>Our Links</h5>
                  <ul className="aboutUs m0 p30-top text-center">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m0-bottom">
                  <h5>Courses</h5>
                  <ul className="aboutUs m0 p30-top ">
                    <li>
                      <Link to="/androidDevelopment"> Android Development</Link>
                    </li>
                    <li>
                      <Link to="/webdevelopment"> Web Development</Link>
                    </li>
                    <li>
                      <Link to="/graphic"> Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/webdesign"> Web Design</Link>
                    </li>
                    <li>
                      <Link to="/python">Python</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 m0-bottom">
                  <h5>Contact Us</h5>
                  <ul className="aboutUs m0 p0 p30-top">
                    <li>
                      <div className="icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="adress">
                        F-38 City center, Yogi Chowk, Varachha, Surat, Gujarat
                        395010
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div className="email">
                        <Link to="mailto:jbsit01@gmail.com">
                          jbsit01@gmail.com
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <i class="fas fa-phone"></i>
                      </div>
                      <div className="phone">
                        <Link to="tel:+91 79844 43901">+91 79844 43901</Link>
                        <Link to="tel:+91 98752 63080">+91 98752 63080</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutFooter bg-prime text-light p10 border-top border">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <p>Copyright@ 2023 Jbs It Institute. All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="scrollToTop" onClick={scrollToTop}>
          <span>
            <i class="fas fa-chevron-up"></i>
          </span>
        </div>
      )}
    </section>
  );
};

export default Footer;

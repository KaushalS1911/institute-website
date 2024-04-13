import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

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
            <div className="col-lg-4 col-12">
              <div className="logo m0-sm-y m-auto">
                <Link to="/">
                  <img src={Logo} alt="JBS LOGO" />
                </Link>
              </div>
               <p className="m20-top text-gray fw-500 m30-bottom">
                Unlock your potential with us, where education meets innovation.
                Our institution empowers students with cutting-edge knowledge
                and skills.
              </p> 
             
            </div>
            <div className="col-lg-7  col-12 order-lg-0 order-md-1">
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
                        {" "}
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

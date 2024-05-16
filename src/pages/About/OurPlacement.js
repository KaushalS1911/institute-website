import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import company1 from "../../assets/images/Home/place_partner/company1.webp";
import company2 from "../../assets/images/Home/place_partner/company2.webp";
import company3 from "../../assets/images/Home/place_partner/company3.webp";
import company4 from "../../assets/images/Home/place_partner/company4.webp";
import company5 from "../../assets/images/Home/place_partner/company5.webp";
import company6 from "../../assets/images/Home/place_partner/company6.webp";
import company8 from "../../assets/images/Home/place_partner/company8.webp";
import company9 from "../../assets/images/Home/place_partner/company9.webp";
import company10 from "../../assets/images/Home/place_partner/company10.webp";
import company11 from "../../assets/images/Home/place_partner/company10.webp";
import company12 from "../../assets/images/Home/place_partner/company11.webp";
import company13 from "../../assets/images/Home/place_partner/company13.webp";
import company14 from "../../assets/images/Home/place_partner/company14.webp";
import company15 from "../../assets/images/Home/place_partner/company15.webp";
import company16 from "../../assets/images/Home/place_partner/company16.webp";

const OurPlacement = () => {
  const option = {
    nav: false,
    loop: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 3000,
    slideTransition: "linear",
    dots: false,
    responsive: {
      0: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <>
      <section
        id="companySection"
        className="p80-md-y p40-y"
        style={{ backgroundColor: "#F7FAFD" }}
      >
        <div className="container">
          <div className="bannerContent fw-bold text-md-start text-center  p40-lg-y">
            <div
              className="fs-lg-35 fs-md-30 fs-25  text-center m25-bottom text-second"
            >
             Our Placement Partners
            </div>
            <div className="pageTitleBanner innerPages height-xl-20 height-sm-20 height-10">
              <div className="pageTitleBox text-center">
                <div className="bar" style={{backgroundColor:'#2c529b'}}></div>
              </div>
            </div>
          </div>
          <div className="mainSlider p10-md-y m10-y">
            <OwlCarousel
              className="owl-theme"
              {...option}
              navClass={[
                "fa-solid fa-angles-left prev",
                "fa-solid fa-angles-right next",
              ]}
              autoplay={true}
            >
              <div className="item">
                <div className="imgsCompany">
                  <img src={company1} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company2} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company3} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company4} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company5} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company6} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company8} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company9} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company10} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company11} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company12} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company13} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company14} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company15} alt="company" />
                </div>
              </div>
              <div className="item">
                <div className="imgsCompany">
                  <img src={company16} alt="company" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPlacement;

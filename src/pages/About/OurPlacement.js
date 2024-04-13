import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import company1 from "../../assets/images/Home/place_partner/company1.webp";
import company2 from "../../assets/images/Home/place_partner/company2.webp";
import company3 from "../../assets/images/Home/place_partner/company3.webp";
import company4 from "../../assets/images/Home/place_partner/company4.webp";
import company5 from "../../assets/images/Home/place_partner/company5.webp";

const OurPlacement = () => {
  const option = {
    nav: false,
    loop: true,
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
                <div className="bar1" style={{backgroundColor:'#2c529b'}}></div>
              </div>
            </div>
          </div>
          <div className="mainSlider">
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
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPlacement;

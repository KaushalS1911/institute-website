import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Frame1 from '../../assets/images/Home/Slider/UX.webp'
import Frame2 from '../../assets/images/Home/Slider/Flutter.webp'
import Frame3 from '../../assets/images/Home/Slider/Full Stack.webp'

function Slider() {
  const Main_slider = {
    items: 1,
    loop: true,
    autoplay: false,
    dots: false,
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    slideTransition: "linear",
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left-long"></i>',
      '<i class="fa-solid fa-arrow-right-long"></i>',
    ],
  };

  return (
    <div id="first_slider">
      <div className="slider-outer">
        <OwlCarousel className="owl-theme" id="ourPlacement" {...Main_slider}>
          <div className="item">
            <div className="slider-image">
              <img src={Frame1} alt="slide_image" />
            </div>
          </div>
          <div className="item">
            <div className="slider-image">
              <img src={Frame2} alt="slide_image" />
            </div>
          </div><div className="item">
            <div className="slider-image">
              <img src={Frame3} alt="slide_image" />
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Slider;

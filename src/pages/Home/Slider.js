import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slide1 from "../../assets/images/Home/Slider/slide1.png";
import slide2 from "../../assets/images/Home/Slider/slide2.png";

function Slider() {
  const Main_slider = {
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 10000,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
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
              <img src={slide1} alt="slide_image" />
              <div className="slider-content">
                <h1>Education is the best key to success in life.</h1>
                <div className="text-1">
                  Let’s Grow Your Education Level up with E-Learning.
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-image">
              <img src={slide2} alt="slide_image" />
              <div className="slider-content">
                <h1>IT Training for Students and Professionals</h1>
                <div className="text-1">
                  Learn From the Industry Leading IT Experts 
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Slider;

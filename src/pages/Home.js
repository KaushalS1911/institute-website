import Slider from "./components/Slider";
import Footer from "./globle/Footer";
import Header from "./globle/Header";
import UpperDesign from "../assets/images/upperDesign.png";

import Service from "./components/Service";
import About from "./components/About";
import Video from "./components/Video";
import Rank from "./components/Rank";
import Facility from "./components/Facility";
import OurCourse from "./components/OurCourse";
import Company from "./components/Company";
import Rating from "./extra/Rating";
import SubscribeNewsletter from "./utils/SubscribeNewsletter";
import Scrollable from "../Scrollable";

const Home = () => {
  return (
    <div>
      <div className="masterHeader position-relative">
        <Scrollable />
        <div id="header">
          <Header />
        </div>
        <div id="bannerSlider" className="position-relative">
          <div className="upperDesign">
            <img src={UpperDesign} width={"100%"} />
          </div>
          
          <Slider />
        </div>
      </div>
      <section id="serviceSection">
        <Service />
      </section>
      <section id="aboutSection">
        <About />
      </section>
      {/* <section id='itVideo'>
        <Video />
      </section> */}
      <section id="rankSection">
        <Rank />
      </section>
      <section id="facilitySection">
        <Facility />
      </section>
      <section id="ourCourseSection">
        <OurCourse />
      </section>
      <Company />
      <Rating />
      <SubscribeNewsletter />
      <Footer />
    </div>
  );
};

export default Home;

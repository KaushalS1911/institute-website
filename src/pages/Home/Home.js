import OurPlacement from "../About/OurPlacement";
import Rank from "../About/Rank";
import OurAbout from "../Home/OurAbout";
import OurCourse from "../Home/OurCourse";
import Rating from "./Testimonial";
import Service from "../Home/Service";

import Slider from "./Slider";
const Home = () => {
  return (
    <>
      {/* Main Slider */}
      <Slider />

      {/* Service Section */}
      <section id="serviceSection">
        <Service />
      </section>

      {/*About Section */}
      <section id="aboutSection">
        <OurAbout />
      </section>

      {/* Rank Section */}
      <section id="rankSection">
        <Rank />
      </section>

      {/* Our Course section */}
      <section id="ourCourseSection">
        <OurCourse />
      </section>

      {/* Our Placement Partner */}
      <OurPlacement />

      {/* Testimonial Outer */}
      <Rating />
    </>
  );
};

export default Home;

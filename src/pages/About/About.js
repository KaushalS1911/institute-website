import React from "react";
import PageTitle from "../Common/PageTitle";
import OurUniversity from "../About/OurUniversity";
import Rank from "../About/Rank";
import OurCampus from "../About/OurCampus";
import Company from "./OurPlacement";
// import CEO from "../About/CEO";

const About = () => {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`About Us`} />
      </div>

      <OurUniversity />

      <OurCampus />

        <section id="rankSection">
            <Rank />
        </section>

      <Company />
    </>
  );
};

export default About;

import React from "react";
import PageTitle from "../Common/PageTitle";
import OurUniversity from "../About/OurUniversity";
import Rank from "../About/Rank";
import OurCampus from "../About/OurCampus";
import Company from "./OurPlacement";
import Webtitle from "../globle/Webtitle";



const About = () => {
  Webtitle("At JBS IT Institute, we understand that the IT landscape is constantly evolving, and staying ahead requires continuous learning and adaptation. ");
  return (
    <>
      <PageTitle title={`About Us`} />

      <OurUniversity />

      <OurCampus />

      <Rank />

      <Company />
    </>
  );
};

export default About;

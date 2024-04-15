import React from "react";
import PageTitle from "../Common/PageTitle";
import OurUniversity from "../About/OurUniversity";
import Rank from "../About/Rank";
import OurCampus from "../About/OurCampus";
import Company from "./OurPlacement";

const About = () => {
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

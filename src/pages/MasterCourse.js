import React from "react";
import Header from "./globle/Header";

import PageTitle from "./components/PageTitle";
import Footer from "./globle/Footer";
import AboutCourse from "./components/AboutCourse";
import PlacedStudent from "./components/PlacedStudent";
import BestCourseSlider from "./components/BestCourseSlider";
import OverView from "./components/OverView";
import CourseDetails from "./components/CourseDetails";
import Scrollable from "../Scrollable";

const MasterCourse = () => {
  return (
    <>
      <Scrollable />
      <div id="header">
        <Header />
      </div>
      <div id="bannerSlider" className="position-relative">
        <div className="lowerDesign">
          <img src={LowerDesign} width={"100%"} />
        </div>
        <PageTitle title={`Master Course`} />
      </div>

      <AboutCourse />
      <PlacedStudent />
      <BestCourseSlider />
      <OverView />
      <CourseDetails />
      <Footer />
    </>
  );
};

export default MasterCourse;

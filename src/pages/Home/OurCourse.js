import React from "react";
import OurCourseImage from "../../assets/images/Home/image-3.webp";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const OurCourse = () => {
  return (
    <div className="mainOurCourse">
      <div className="container">
        <div className="startOurCourse p80-md-y p40-y">
          <div className="row align-items-center">
            <div className="col-xl-5 col-12">
              <div className="ourCourseImage rounded-1 overflow-hidden h-lg-75 height-md-400 height-500 ">
                <img
                  src={OurCourseImage}
                  alt="course_image"
                  height={"100%"}
                  width={"100%"}
                />
              </div>
            </div>
            <div className="col-xl-7 col-12">
              <div className="bannerContent  fw-bold p15-x text-md-start text-center w-100">
                <div className="fs-lg-35 fs-md-40 fs-20 sub-title text-second">
                  Pick The Right Course To Build Your Career
                </div>

                <div className="mainCourses ">
                  <div className="row d-flex">
                    <div className=" col-12 col-md-6 text-start">
                      <Link to="/androidDevelopment" className="w-100 d-block ">
                        <div className="box flex-nowrap">
                          <span className="me-3 ">
                            <FiCheckCircle className="text-danger" />
                          </span>
                          Android Development
                        </div>
                      </Link>
                      <Link to="/webdevelopment" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-danger" />
                          </span>
                          Web Design & Development
                        </div>
                      </Link>
                      <Link to="/graphic" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-danger" />
                          </span>
                          Graphic Design
                        </div>
                      </Link>
                      <Link to="/webdesign" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-danger" />
                          </span>
                          Web Design
                        </div>
                      </Link>
                      <Link to="/python" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-danger" />
                          </span>
                          Python
                        </div>
                      </Link>
                    </div>

                    <div className="col-12 col-md-6 text-start">
                      <Link to="/gameDevelopment" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-success" />
                          </span>
                          Game Development
                        </div>
                      </Link>
                      <Link to="/nodejs" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-success" />
                          </span>
                          React Js & Node js
                        </div>
                      </Link>
                      <Link to="/reactjs" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-success" />
                          </span>
                          C & C++ Programming
                        </div>
                      </Link>
                      <Link to="/Cprogramming" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-success" />
                          </span>
                          Full Stack Development
                        </div>
                      </Link>
                      <Link to="/photoshop" className="w-100 d-block">
                        <div className="box">
                          <span className="me-3">
                            <FiCheckCircle className="text-success" />
                          </span>
                          Digital Marketing
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourse;

export const OurCourseType = ({ count, number, title, icon }) => {
  const isSmallScreen = window.innerWidth <= 768;
  const courseWidth = {
    width: !isSmallScreen
      ? `calc(40px * ${count} - 15px`
      : `calc(14px * ${count})`,
  };

  return (
    <div className="course">
      <span className="bordered" style={courseWidth}></span>
      <span className="courseType">
        <span className="courseCount fs-md-40 fs-sm-25 fs-20">{number}</span>
        <span className="courseName">
          <span>
            <img
              src={icon}
              class={`${icon} m15-right course-icon`}
              alt="Course_image"
            />
          </span>
          <span className="fs-lg-20 fs-md-12 fs-smm-14 fs-xsm-16">{title}</span>
        </span>
      </span>
    </div>
  );
};

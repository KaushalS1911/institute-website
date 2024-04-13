import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Rank = () => {
  const [counterState, serCounterstate] = useState(false);
  return (
    <>
      <div className="rankSec mainAbout">
        <div className="backgroundImage">
          <div className="container">
            <div className="startAbout py-5">
              <div className="row align-items-center justify-conten-center">
                <div className="col-lg-12 col-12">
                  <div className="bannerContent fw-bold text-md-start text-center">
                    <div
                      className="fs-lg-35 fs-md-30 f  s-25  text-center m25-bottom"
                      style={{
                        color: "#fff",
                        fontWeight: "500",
                        opacity: "0.7",
                      }}
                    >
                      Milestones Achieved So Far
                    </div>
                    <div className="pageTitleBanner innerPages height-xl-20 height-sm-20 height-10 m-3">
                      <div className="pageTitleBox text-center">
                        <div className="bar1"></div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <ScrollTrigger
                      onEnter={() => serCounterstate(true)}
                      onExit={() => serCounterstate(false)}
                    >
                      <div className="row justify-content-between">
                        <div className="col-12 col-lg-2  counter-item">
                          <div className="text-center fs-lg-20 fs-md-16 fs-12 pt-3 rounded-1 customBox">
                            <p
                              className="counter-count"
                              style={{ color: "#fff", opacity: "0.7" }}
                            >
                              {counterState && (
                                <CountUp
                                  start={0}
                                  end={200}
                                  duration={2.75}
                                ></CountUp>
                              )}
                              <span classNameName="ps-1">+</span>
                            </p>
                            <h5
                              style={{
                                color: "#fff",
                                fontStyle: "400",
                                opacity: "0.7",
                              }}
                            >
                              Students trained
                            </h5>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 counter-item">
                          <div className="text-center fs-lg-20 fs-md-16 fs-12  pt-3 rounded-1 customBox">
                            <p
                              className="counter-count"
                              style={{ color: "#fff", opacity: "0.7" }}
                            >
                              {counterState && (
                                <CountUp
                                  start={0}
                                  end={20}
                                  duration={2.75}
                                ></CountUp>
                              )}
                              <span classNameName="ps-1">+</span>
                            </p>
                            <h5
                              style={{
                                color: "#fff",
                                fontSize: "19px",
                                opacity: "0.7",
                              }}
                            >
                              Approved Courses
                            </h5>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 counter-item">
                          <div className="text-center fs-lg-20 fs-md-16 fs-12  pt-3 rounded-1 customBox">
                            <p
                              className="counter-count"
                              style={{ color: "#fff", opacity: "0.7" }}
                            >
                              {counterState && (
                                <CountUp
                                  start={0}
                                  end={50}
                                  duration={2.75}
                                ></CountUp>
                              )}
                              <span classNameName="ps-1">+</span>
                            </p>
                            <h5 style={{ color: "#fff", opacity: "0.7" }}>
                              Job Placements{" "}
                            </h5>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 counter-item">
                          <div className="text-center fs-lg-20 fs-md-16 fs-12 pt-3 rounded-1 customBox">
                            <p
                              className="counter-count"
                              style={{ color: "#fff", opacity: "0.7" }}
                            >
                              {counterState && (
                                <CountUp
                                  start={0}
                                  end={10}
                                  duration={2.75}
                                ></CountUp>
                              )}
                              <span classNameName="ps-1">+</span>
                            </p>
                            <h5 style={{ color: "#fff", opacity: "0.7" }}>
                              Certified Trainers

                            </h5>
                          </div>
                        </div>
                        <div className="col-12 col-lg-2 counter-item">
                          <div className="text-center fs-lg-20 fs-md-16 fs-10  pt-3 rounded-1 customBox">
                            <p
                              className="counter-count"
                              style={{ color: "#fff", opacity: "0.7" }}
                            >
                              {counterState && (
                                <CountUp
                                  start={0}
                                  end={5}
                                  duration={2.75}
                                ></CountUp>
                              )}
                              <span className="ps-1">+</span>
                            </p>
                            <h5 style={{ color: "#fff", opacity: "0.7" }}>
                              Certification Approval
                            </h5>
                          </div>
                        </div>
                      </div>
                    </ScrollTrigger>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Rank;

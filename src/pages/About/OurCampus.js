import React from "react";

import img1 from "../../assets/images/About/img1.webp";
import img2 from "../../assets/images/About/img2.webp";
import img3 from "../../assets/images/About/img3.webp";
import img4 from "../../assets/images/About/img4.webp";
import img5 from "../../assets/images/About/img5.webp";
import img6 from "../../assets/images/About/img6.webp";

const OurCampus = () => {
    return (
        <div className="mainOurCourse p60-y bg-transparent">
            <div className="container">
                <div className="startOurCourse">
                    <div
                        className="row justify-content-center align-items-center text-md-start text-center">
                        <div className="col-lg-6 col-12 m20-bottom">
                            <div className="bannerContent fw-600 p15-x">
                                <div
                                    className="fs-lg-42 fs-md-40 fs-20 "
                                    style={{color: "#0F172A"}}
                                >
                                    Welcome to JBS IT INSTITUTE, where we turn
                                    your aspirations
                                    into achievements
                                </div>
                                <p className="fs-lg-16 fw-500 fs-md-16 fs-12 text-gray m10-top pb-3">
                                    Beyond education, we are passionate about
                                    fostering a supportive and inclusive
                                    learning environment where every individual
                                    is encouraged to reach their full potential.
                                    We take pride in our diverse community of
                                    students, faculty, and alumni who contribute
                                    to a culture of collaboration and
                                    innovation.
                                </p>
                                <p className="fs-lg-16 fw-500 fs-md-16 fs-12 text-gray m10-top pb-3">
                                    Join us at JBS IT Institute and embark on a
                                    journey towards a rewarding and fulfilling
                                    career in Information Technology. Explore
                                    our programs, meet our faculty, and discover
                                    why we are the preferred choice for IT
                                    education.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-10 m20-bottom ">
                            <div
                                className="ourCourseImage rounded-1 overflow-hidden  height-md-630">
                                <div className="row">
                                    <div className="col-sm-6 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img1}
                                            alt={img1}
                                            className="height-sm-200 height-300 w-100"
                                        />
                                    </div>
                                    <div className="col-sm-6 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img2}
                                            alt={img2}
                                            className="height-sm-200 height-300 w-100"
                                        />
                                    </div>

                                    <div className="col-sm-8 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img3}
                                            alt={img3}
                                            className="height-sm-220 height-300 w-100"
                                        />
                                    </div>
                                    <div className="col-sm-4 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img4}
                                            alt={img4}
                                            className="height-sm-220 height-300 w-100"
                                        />
                                    </div>

                                    <div className="col-sm-6 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img5}
                                            alt={img5}
                                            className="height-sm-200 height-300 w-100"
                                        />
                                    </div>
                                    <div className="col-sm-6 px-1 mt-sm-0 mt-3">
                                        <img
                                            src={img6}
                                            alt={img6}
                                            className="height-sm-200 height-300 w-100"
                                        />
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

export default OurCampus;

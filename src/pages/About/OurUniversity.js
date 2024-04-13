import React from "react";
import OurCourseImage from "../../assets/images/About/SUJAL-5.webp";

const OurUniversity = () => {
    return (
        <div className="mainOurCourse p60-y bg-transparent">
            <div className="container">
                <div className="startOurCourse">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-10 m20-bottom ">
                            <div
                                className="ourCourseImage rounded-1 overflow-hidden  height-md-600 height-400">
                                <img
                                    src={OurCourseImage}
                                    alt="OurCourseImage"
                                    height={`100%`}
                                    width={`100%`}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 m20-bottom">
                            <div
                                className="bannerContent text-md-start text-center text-md-start text-center fw-600 p15-x">
                                <div
                                    className="fs-lg-42 fs-md-40 fs-20 "
                                    style={{color: "#0F172A"}}
                                >
                                    Our education system inspires the next
                                    generation.
                                </div>
                                <p className="fs-lg-16 fw-500 fs-md-16 fs-12 text-gray m10-top pb-3">
                                    At JBS IT Institute, we understand that the
                                    IT landscape is constantly evolving, and
                                    staying ahead requires continuous learning
                                    and adaptation. Our expert faculty members,
                                    with years of industry experience, ensure
                                    that our curriculum is up-to-date and
                                    aligned with the latest trends and
                                    technologies. Whether you're a novice
                                    exploring the world of IT or a seasoned
                                    professional seeking to enhance your skills,
                                    we offer a wide range of courses tailored to
                                    meet your needs.
                                </p>
                                <p className="fs-lg-16 fw-500 fs-md-16 fs-12 text-gray m10-top pb-3">
                                    What sets JBS IT Institute apart is our
                                    hands-on approach to learning. We believe in
                                    providing practical, real-world experience
                                    alongside theoretical knowledge, enabling
                                    our students to tackle complex challenges
                                    with confidence. Our state-of-the-art
                                    facilities and industry partnerships further
                                    enrich the learning experience, offering
                                    opportunities for internships, mentorship,
                                    and networking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurUniversity;

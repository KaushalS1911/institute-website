import React from "react";

import img1 from "../../assets/images/About/img1.JPG";
import img2 from "../../assets/images/About/img2.JPG";
import img3 from "../../assets/images/About/img3.JPG";
import img4 from "../../assets/images/About/img4.JPG";
import img5 from "../../assets/images/About/img5.JPG";
import img6 from "../../assets/images/About/img6.JPG";

const OurCampus = () => {
  return (
    <div className="mainOurCourse p60-y bg-transparent">
      <div className="container">
        <div className="startOurCourse">
          <div className="row justify-content-center align-items-center text-md-start text-center">
            <div className="col-lg-6 col-12 m20-bottom">
              <div className="bannerContent fw-600 p15-x">
                <div
                  className="fs-lg-45 fw-600 fs-md-40 fs-20 text-second mb-4  "
                  style={{ color: "#0F172A" }}
                >
                  Welcome to JBS IT INSTITUTE, where we turn your aspirations
                  into achievements
                </div>
                <p className="fs-lg-16 fw-500 fs-md-16 fs-12 text-gray m10-top">
                  Welcome to JBS IT INSTITUTE’s world where every line of code
                  is a stroke on the canvas of progress, and every student is an
                  artist shaping the future. Join us on a journey where
                  creativity meets technology, and innovation knows no bounds.
                  where each keystroke weaves a narrative of progress, and every
                  learner is a visionary architect of tomorrow's landscape.
                  Embark with us on an odyssey where the fusion of imagination
                  and technology propels us beyond conventional boundaries, and
                  ingenuity becomes our guiding star. Join our vibrant community
                  where innovation thrives, and every challenge is an
                  opportunity to redefine the possibilities. Together, let's
                  paint a masterpiece of innovation and excellence, leaving an
                  indelible mark on the canvas of the future.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-10 m20-bottom ">
              <div className="ourCourseImage rounded-1 overflow-hidden  height-md-630">
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

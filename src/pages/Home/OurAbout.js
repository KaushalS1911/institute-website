import React from "react";
import ItPic1 from "../../assets/images/Home/About/About1.jpg";
import ItPic2 from "../../assets/images/Home/About/About2.jpg";
import ItPic3 from "../../assets/images/Home/About/About3.jpg";
import ItPic4 from "../../assets/images/Home/About/IMG_8009.jpg";
const OurAbout = () => {
  return (
    <>
      <div className="mainAbout ">
        <div className="container">
          <div className="startAbout">
            <div className="row">
              <div className="col-sm-6 col-12 ">
                <div className="bannerContent text-md-start text-center animate__animated">
                  <div className="fs-lg-42 fs-md-40 fs-20 fw-600 mb-4 ">
                    At the crossroads of imagination and innovation, JBS IT
                    INSTITUTE stands as a guiding light.
                  </div>
                  <p className="fs-lg-16 fs-md-16 fw-500 fs-12 text-gray m10-top">
                    Welcome to JBS IT INSTITUTE’s world where every line of code
                    is a stroke on the canvas of progress, and every student is
                    an artist shaping the future. Join us on a journey where
                    creativity meets technology, and innovation knows no bounds.
                    where each keystroke weaves a narrative of progress, and
                    every learner is a visionary architect of tomorrow's
                    landscape. Embark with us on an odyssey where the fusion of
                    imagination and technology propels us beyond conventional
                    boundaries, and ingenuity becomes our guiding star. Join our
                    vibrant community where innovation thrives, and every
                    challenge is an opportunity to redefine the possibilities.
                    Together, let's paint a masterpiece of innovation and
                    excellence, leaving an indelible mark on the canvas of the
                    future.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-12 m30-y">
                <div className="photoSide p40-sm-left p20-left animate__animated">
                  <div className="itPhotos d-flex justify-content-center">
                    <div className="imgs img1 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img className="img-1" src={ItPic1} alt="itImage" />
                    </div>
                    <div className="imgs img2 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img className="img-1" src={ItPic2} alt="itImage" />
                    </div>
                  </div>
                  <div className="itPhotos d-flex m40-md-left">
                    <div className="imgs img3 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img className="img-1" src={ItPic3} alt="itImage" />
                    </div>
                    <div className="imgs img4 hw-xl-200 hw-lg-150 hw-md-130 hw-sm-100  hw-smm-140 hw-90 m3-md m2">
                      <img className="img-1" src={ItPic4} alt="itImage" />
                    </div>
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

export default OurAbout;

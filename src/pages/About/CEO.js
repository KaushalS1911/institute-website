import CEO1 from "../../assets/images/About/CEO1.png";
import CEO2 from "../../assets/images/About/CEO2.png";
import Staff1 from "../../assets/images/About/staff1.jpg";
import Staff2 from "../../assets/images/About/staff2.jpg";
import Staff3 from "../../assets/images/About/staff3.jpg";
import Staff4 from "../../assets/images/About/staff4.jpg";
import { FaLinkedin } from "react-icons/fa";

const CEO = () => {
  return (
    <>
      <section
        id="ceoSection"
        className="p100-md-y p40-y "
        style={{
          background:
            "linear-gradient(rgb(243, 246, 250), rgba(241, 245, 249, 0))",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-12">
              <div className="bannerContent fw-bold text-center m40-sm-bottom m20-bottom">
                <div className="fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-center">
                  <span className="m10-right" style={{ color: "#4A4A68" }}>
                    <i class="fa-solid fa-circle fs-md-12 fs-8"></i>
                  </span>
                  <span style={{ color: "#4A4A68" }}>
                    STUDENT’S BRIGHT FUTURE MAKER
                  </span>
                  <span className="m10-left" style={{ color: "#4A4A68" }}>
                    <i class="fa-solid fa-circle fs-md-12 fs-8"></i>
                  </span>
                </div>
                <div
                  className="fs-lg-50 fs-md-40 fs-20 "
                  style={{ color: "#4A4A68" }}
                >
                  Our Placement Partners
                </div>
                <p className="fs-lg-16 fw-semibold fs-md-16 fs-12 text-gray m10-top">
                  No matter what your requirement is; Mobile App and web
                  development, we have a specific approach which comprises of
                  the following.
                </p>
              </div>
            </div>
            <div className="col-12">
              <div className="ceoDetails">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <CEOBox
                      image={CEO1}
                      name={`Monil Kakadiya`}
                      position={`CEO`}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <CEOBox
                      image={CEO2}
                      name={`Harshad Kakdiya`}
                      position={`CEO`}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <StaffBox
                      image={Staff1}
                      name={`Arshil Dhudhat`}
                      position={`Full stack-Developer`}
                      socialmedia={true}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <StaffBox
                      image={Staff2}
                      name={`Rutvik Sodvadiya`}
                      position={`Flutter developer`}
                      socialmedia={true}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <StaffBox
                      image={Staff3}
                      name={`kaushal Sojitra`}
                      position={`Full stack-Developer`}
                      socialmedia={true}
                    />
                  </div>
                  <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                    <StaffBox
                      image={Staff4}
                      name={`Feny Bharodiya`}
                      position={`Flutter developer`}
                      socialmedia={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CEO;

export const CEOBox = ({ image, name, position }) => {
  return (
    <div className="ceoBox">
      <div className="ceoImage bg-gray rounded-4 overflow-hidden height-xl-325 height-md-230 height-sm-165 height-smm-265 height-200">
        <img src={image} alt="" className="h-100 w-100" />
      </div>
      <div className="ceoText m15-top text-center">
        <div className="fw-bold fs-lg-18 fs-16">{name}</div>
        <div className="fw-bold fs-lg-18 fs-16">{position}</div>
      </div>
    </div>
  );
};

export const StaffBox = ({ image, name, position, socialmedia }) => {
  return (
    <div className="staffBox">
      <div className="ceoImage bg-gray rounded-4 overflow-hidden height-xl-325 height-md-230 height-sm-165 height-smm-265 height-200">
        <img src={image} alt="" className="h-100 w-100" />
      </div>
      <div className="ceoText m15-top text-start">
        <div className="fw-bold fs-lg-20 fs-16">{name}</div>
        <div className=" fs-lg-18 fs-16">{position}</div>
        {socialmedia && (
          <div className=" fs-lg-22 fs-20  ">
            <FaLinkedin className="text-dark" />
          </div>
        )}
      </div>
    </div>
  );
};

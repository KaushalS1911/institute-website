import React from "react";
import { Link } from "react-router-dom";

const PageTitle = ({ title }) => {
  return (
    <>
      <section id="Slider" className="p0">
        <div
          className="mainSlider "
          style={{
            background:
              "linear-gradient(180deg, rgba(243 246 250), rgba(241, 245, 249, 0))",
          }}
        >
          <div className="item">
            <div className="pageTitleBanner innerPages height-xl-850 height-sm-500 height-300">
              <div className="pageTitleBox text-center">
                <div
                  className="text-dark"
                  style={{
                    letterSpacing: "-1.5px",
                    fontSize: "38px",
                    fontWeight: "600",
                  }}
                >
                  {title}
                </div>
                <div className="bar"></div>
                <br />
                <div class="breadcrumb justify-content-center pathBtn  rounded-2 p25-x p10-y text-center  fs-md-20 fs-sm-16 fs-14">
                  <li class="breadcrumb-item" style={{ color: "#fff" }}>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li class="breadcrumb-item">{title}</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;

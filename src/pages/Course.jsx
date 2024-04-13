import React from "react";
import img1 from "../../assets/images/programming/java.webp";
import img2 from "../../assets/images/Course/programming/android.webp";
import img3 from "../../assets/images/Course/programming/ios.webp";
import img4 from "../../assets/images/Course/programming/react.webp";
import img5 from "../../assets/images/Course/programming/node.webp";
import img6 from "../../assets/images/Course/programming/angular.webp";
import img7 from "../../assets/images/Course/programming/php.webp";
import img9 from "../../assets/images/Course/programming/wordpress.webp";
import img10 from "../../assets/images/Course/programming/react.webp";
import img11 from "../../assets/images/Course/programming/c.webp";
import img12 from "../../assets/images/Course/programming/c++.webp";
import img13 from "../../assets/images/Course/programming/ccc.webp";
import img14 from "../../assets/images/Course/programming/python.webp";
import img15 from "../../assets/images/Course/programming/flutter.webp";
import img16 from "../../assets/images/Course/programming/bootstrap.webp";
import img17 from "../../assets/images/Course/programming/html5css3.webp";
import img19 from "../../assets/images/Course/programming/photoshop.webp";
import img20 from "../../assets/images/Course/programming//illustrator.webp";
import img21 from "../../assets/images/Course/programming/corel.webp";
import { Link } from "react-router-dom";
import PageTitle from "../Common/PageTitle";

function Course() {
  return (
    <div>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Course`} />
      </div>

      <div className="course-outer">
        <div className="container">
          <div className="course-inner">
            <div className="p40-y bg-fourth">
              <div className="container">
                <div className="row course-item">
                  <a
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    href="#Programming"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Programming`}
                    />
                  </a>
                  <a
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    href="#Project training"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Project training`}
                    />
                  </a>
                  <a
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    href="#Frontend Coding"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Frontend Coding`}
                    />
                  </a>
                  <a
                    className="item col-xxl-3 col-lg-3 col-md-3  col-sm-6  col-smm-6 m20-bottom"
                    href="#Graphics Design"
                  >
                    <DurationBox
                      icon={`fa-solid fa-book`}
                      text={`Graphics Design`}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="course-content" id="Programming">
              <div className="course-item mt-4">
                <div className="text-center my-8">
                  <h3 className="hending mb-3">Programming</h3>
                </div>
                <div className=" row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6 ">
                    <Link to="/javaprogramming">
                      <div className="item-inner">
                        <img src={img1} alt="img1" className="img-fluid " />
                      </div>
                      <div className="titles">Java</div>
                    </Link>
                  </div>

                  <div className=" col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/androidDevelopment">
                      <div className="item-inner">
                        <img src={img2} alt="img1" className="img-fluid " />
                      </div>
                      <div className="titles">Andriod</div>
                    </Link>
                  </div>

                  <div className=" col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/ios">
                      <div className="item-inner">
                        <img src={img3} alt="img1" className="img-fluid" />
                      </div>
                      <div className="titles">IOS</div>
                    </Link>
                  </div>
                </div>
                <div className=" row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/reactjs">
                      <div className="item-inner">
                        <img src={img4} alt="img1" />
                      </div>
                      <div className="titles">React Js</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/nodejs">
                      <div className="item-inner">
                        <img src={img5} alt="img1" />
                      </div>
                      <div className="titles">Node js</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/angular">
                      <div className="item-inner">
                        <img src={img6} alt="img1" />
                      </div>
                      <div className="titles">Angular.js</div>
                    </Link>
                  </div>
                </div>
                <div className=" row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/php">
                      <div className="item-inner">
                        <img src={img7} alt="img1" />
                      </div>
                      <div className="titles">PHP</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/wordpress">
                      <div className="item-inner">
                        <img src={img9} alt="img1" />
                      </div>
                      <div className="titles">Wordpress</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/reactnative">
                      <div className="item-inner">
                        <img src={img10} alt="img1" />
                      </div>
                      <div className="titles">React Native</div>
                    </Link>
                  </div>
                </div>
                <div className=" row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/Cprogramming">
                      <div className="item-inner">
                        <img src={img11} alt="img1" />
                      </div>
                      <div className="titles">C Language</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/C++programming">
                      <div className="item-inner">
                        <img src={img12} alt="img1" />
                      </div>
                      <div className="titles">C++</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/basic-computer-course">
                      <div className="item-inner">
                        <img src={img13} alt="img1" />
                      </div>
                      <div className="titles">CCC</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-content" id="Project training">
              <div className="course-item mt-4">
                <div className="text-center my-8">
                  <h3 className="hending mb-3">Project training</h3>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/javaprogramming">
                      <div className="item-inner">
                        <img src={img1} alt="img1" />
                      </div>
                      <div className="titles">Java</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/androidDevelopment">
                      <div className="item-inner">
                        <img src={img2} alt="img1" />
                      </div>
                      <div className="titles">Andriod</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/ios">
                      <div className="item-inner">
                        <img src={img3} alt="img1" />
                      </div>
                      <div className="titles">IOS</div>
                    </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/php">
                      <div className="item-inner">
                        <img src={img7} alt="img1" />
                      </div>
                      <div className="titles">PHP</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/python">
                      <div className="item-inner">
                        <img src={img14} alt="img1" />
                      </div>
                      <div className="titles">Python</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/flutterDevelopment">
                      <div className="item-inner">
                        <img src={img15} alt="img1" />
                      </div>
                      <div className="titles">Flutter</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-content" id="Frontend Coding">
              <div className="course-item mt-4">
                <div className="text-center my-4">
                  <h3 className="hending mb-3">Frontend Coding</h3>
                </div>
                <div className="row align-items-center justify-content-center text-center ">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/webdesign">
                      <div className="item-inner">
                        <img src={img16} alt="img1" />
                      </div>
                      <div className="titles ">Bootstrap</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/webdesign">
                      <div className="item-inner">
                        <img src={img17} alt="img1" />
                      </div>
                      <div className="titles">HTML5 & CSS3</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="course-content" id="Graphics Design">
              <div className="course-item mt-4">
                <div className="text-center my-8">
                  <h3 className="hending mb-3">Graphics Design</h3>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/photoshop">
                      <div className="item-inner">
                        <img src={img19} alt="img1" />
                      </div>
                      <div className="titles">Photoshop</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/adobellustrator">
                      <div className="item-inner">
                        <img src={img20} alt="img1" />
                      </div>
                      <div className="titles">illustrator</div>
                    </Link>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                    <Link to="/coreldraw">
                      <div className="item-inner">
                        <img src={img21} alt="img1" />
                      </div>
                      <div className="titles">Corel Draw</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;

export const DurationBox = ({ icon, text }) => {
  return (
    <div className="mainDurationBox">
      <div className="durationText fs-lg-18 fs-md-16 fs-12 text-overflow-1">
        {text}
      </div>
    </div>
  );
};

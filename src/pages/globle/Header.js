import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/JBS-IT-Institute-logo.png";
import { Link } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  /* eslint-disable */
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const [stopNav, setStopNav] = useState("");

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 70) {
        setStopNav("stopNavigation");
      } else {
        setStopNav("");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MenuScript />
      <div className="mainHeader">
        <div className={`middleHeader ${stopNav}`}>
          <div className="container py-2">
            <div className="logoHeader row  justify-content-between align-items-center">
              <div className="col-xl-2 col-3 d-flex justify-content-xl-start justify-content-lg-center  align-items-center">
                <div className="logo ">
                  <Link to="/">
                    <img src={Logo} alt="JBS LOGO" className="w-50" />
                  </Link>
                </div>
              </div>
              {/* web Menu */}
              <div className="col-8 d-lg-flex d-none  justify-content-end">
                <nav>
                  <div className="mainNavigation d-flex">
                    {/* Web Menu */}
                    <ul className="mainMenu justify-content-center m-0 d-lg-flex d-none">
                      <li>
                        <span>
                          <Link to="/">
                            <div
                              className="headText "
                              style={{ color: "#2E2E2E" }}
                            >
                              Home
                            </div>
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/about">
                            <div className="headText">About Us</div>
                          </Link>
                        </span>
                      </li>
                      <li className="megaBlock">
                        <span>
                          <Link to={`/course`}>
                            <div className="headText">
                              <span>Courses</span>
                              <span>
                                <i class="ri-arrow-drop-down-line"></i>
                              </span>
                            </div>
                          </Link>
                        </span>
                        <div className="megaMenu">
                          <div className="row">
                            <div className="col-3 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-20">
                                Development Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/flutterDevelopment`}>
                                    Flutter Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/androidDevelopment`}>
                                    Android Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/gameDevelopment`}>
                                    Game Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/fullstackdevelopment`}>
                                    Full Stack Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/webdevelopment`}>
                                    Web Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/reactnative`}>React Native</Link>
                                </li>
                                <li>
                                  <Link to={`/aspdotnetdevelopment`}>
                                    ASP.net development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-20">
                                Design Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/webdesign`}>Web Design</Link>
                                </li>
                                <li>
                                  <Link to={`/ui-uxdesign`}>UI/UX Design</Link>
                                </li>
                                <li>
                                  <Link to={`/graphic`}>
                                    Advance Graphics Design
                                  </Link>
                                </li>
                              </ul>
                              <h5 className="megaTitle fw-600 fs-18 m20-top">
                                Short Term Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/adobellustrator`}>
                                    Adobe Illustrator
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/adobeXD`}>Adobe XD</Link>
                                </li>
                                <li>
                                  <Link to={`/basic-computer-course`}>
                                    CCC- Basic Computer Course
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/photoshop`}>Photoshop</Link>
                                </li>
                                <li>
                                  <Link to={`/CorelDraw`}>CorelDraw</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-20">
                                Programming It
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/Cprogramming`}>
                                    C Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/C++programming`}>
                                    C++ Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/javaprogramming`}>
                                    Java Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/ios`}>IOS</Link>
                                </li>
                                <li>
                                  <Link to={`/php`}>Advance PHP</Link>
                                </li>
                                <li>
                                  <Link to={`/laravel`}>Laravel</Link>
                                </li>
                                <li>
                                  <Link to={`/wordpress`}>Wordpress</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-3 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-20">
                                Trendy Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/nodejs`}>Node JS</Link>
                                </li>
                                <li>
                                  <Link to={`/angular`}>Angular JS</Link>
                                </li>
                                <li>
                                  <Link to={`/reactjs`}>React JS</Link>
                                </li>
                                <li>
                                  <Link to={`/python`}>Python</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li>
                        <span>
                          <Link to="/blog">
                            <div className="headText">Blog</div>
                          </Link>
                        </span>
                      </li>
                      <li>
                        <span>
                          <Link to="/contact">
                            <div className="headText">Contact Us</div>
                          </Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              {/* Mobile Menu With Toggle */}
              <div className="col-4 d-lg-none text-end d-flex align-items-center justify-content-end">
                <div
                  className="menuToggle me-2 text-md-light  text-dark"
                  id="menuTaggle"
                >
                  <i
                    class="fa-solid fa-bars p-1"
                    style={{ borderRadius: "5px" }}
                  ></i>
                </div>
                {/* Mobile Menu */}
                <div className="mobileNavigation">
                  <ul className="mobile-mainMenu m-0 p-0  p-2 text-start font-prime">
                    <li>
                      <span>
                        <Link to="/">Home</Link>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Link to="/about">About Us</Link>
                      </span>
                    </li>
                    <li className="noClick">
                      <span>
                        <Link to="/course">
                          <div className="headText">
                            <span>Courses</span>
                            <span>
                              <i class="ri-arrow-drop-down-line"></i>
                            </span>
                          </div>
                        </Link>
                      </span>
                      <ul className="subMenu">
                        <div className="megaMenu">
                          <div className="row">
                            <div className="col-12 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-md-20 fs-sm-18 fs-16">
                                Development Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/flutterDevelopment`}>
                                    Flutter Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/androidDevelopment`}>
                                    Android Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/gameDevelopment`}>
                                    Game Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/fullstackdevelopment`}>
                                    Full Stack Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/webdevelopment`}>
                                    Web Development
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/reactnative`}>React Native</Link>
                                </li>
                                <li>
                                  <Link to={`/aspdotnetdevelopment`}>
                                    ASP.net development
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-md-20 fs-sm-18 fs-16">
                                Design Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/webdesign`}>
                                    Master In Web Design
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/ui-uxdesign`}>
                                    Master in UI/UX Design
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/graphic`}>
                                    Advance Graphics Design
                                  </Link>
                                </li>
                              </ul>
                              <h5 className="megaTitle fw-600 fs-md-20 fs-sm-18 fs-16 m20-top">
                                Short Term Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/adobellustrator`}>
                                    Adobe Illustrator
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/adobeXD`}>Adobe XD</Link>
                                </li>
                                <li>
                                  <Link to={`/basic-computer-course`}>
                                    CCC- Basic Computer Course
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/photoshop`}>Photoshop</Link>
                                </li>
                                <li>
                                  <Link to={`/coreldraw`}>CorelDraw</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-md-20 fs-sm-18 fs-16">
                                Programming It
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/Cprogramming`}>
                                    C Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/C++programming`}>
                                    C++ Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/javaprogramming`}>
                                    Java Programming
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/ios`}>IOS</Link>
                                </li>
                                <li>
                                  <Link to={`/php`}>Advance PHP</Link>
                                </li>
                                <li>
                                  <Link to={`/laravel`}>Laravel</Link>
                                </li>
                                <li>
                                  <Link to={`/wordpress`}>Wordpress</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 m20-bottom">
                              <h5 className="megaTitle fw-600 fs-md-20 fs-sm-18 fs-16">
                                Trendy Courses
                              </h5>
                              <ul>
                                <li>
                                  <Link to={`/nodejs`}>Node JS</Link>
                                </li>
                                <li>
                                  <Link to={`/angular`}>Angular JS</Link>
                                </li>
                                <li>
                                  <Link to={`/reactjs`}>React JS</Link>
                                </li>
                                <li>
                                  <Link to={`/python`}>Python</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <span>
                        <Link to="/blog">Blog</Link>
                      </span>
                    </li>
                    <li>
                      <span>
                        <Link to="/contact">Contact Us</Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

export const Profile = (props) => {
  const { isAuth, loginUser, handleLogout } = props;

  return (
    <li className="align-self-center extraSub pExtra d-none m15-right">
      {isAuth ? (
        <div className="mainprofile d-flex align-items-center text-start justify-content-end">
          <div className="profileImage m7-right">
            <img src={baseURL + loginUser.profileImage} alt="profileImage" />
          </div>
          <span className="text-capitalize">{loginUser.name}</span>
          <ul className="profileSub">
            <li>
              <Link to={"/"}>
                <span>
                  <i class="ri-user-3-line m10-right"></i>
                </span>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to={"/wishlist"}>
                <span>
                  <i class="ri-heart-3-line m10-right"></i>
                </span>
                <span>Wishlist</span>
              </Link>
            </li>
            <li>
              <Link to={"/order"}>
                <span>
                  <i class="ri-order-play-fill m10-right"></i>
                </span>
                <span>Order</span>
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <span>
                  <span className="position-relative m10-right">
                    <i class="bi bi-bag"></i>
                    <span
                      className="cartIcon fs-10"
                      style={{ top: "-3px", right: "-7px" }}
                    >
                      {/* {totalProduct || 0} */}0
                    </span>
                  </span>
                </span>
                <span>Cart</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <i class="ri-question-line m10-right"></i>
                </span>
                <span>Help</span>
              </Link>
            </li>
            <li>
              <Link onClick={handleLogout}>
                <span>
                  <i class="ri-logout-circle-r-line m10-right"></i>
                </span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Link to="login">
          <i className="ri-user-3-line"></i>
        </Link>
      )}
    </li>
  );
};

export const MenuScript = () => {
  useEffect(() => {
   
    const handleSidebar = () => {
      $(".mobileNavigation").slideToggle();
    };
    $(".mobileNavigation").hide();
    $("#menuTaggle").on("click", handleSidebar);
    const handleSubSidebar = (event) => {
      $(".mobile-mainMenu .subMenu")
        .not($(event.currentTarget).next())
        .slideUp();
      $(event.currentTarget).next().slideToggle();
    };
    $(".mobile-mainMenu .subMenu").hide();
    $(".mobile-mainMenu > li > span").on("click", handleSubSidebar);
    const handlePetaSidebar = (event) => {
      $(".mobile-mainMenu .petaMenu")
        .not($(event.currentTarget).next())
        .slideUp();
      $(event.currentTarget).next().slideToggle();
    };

    $(".mobile-mainMenu .petaMenu").hide();
    $(".mobile-mainMenu .subMenu > li > span").on("click", handlePetaSidebar);

    const handleSlider = () => {
      $(".mobileNavigation").hide();
      $(".mobile-mainMenu .subMenu").hide();
      $(".mobile-mainMenu .petaMenu").hide();
    };
    $(".mobile-mainMenu li:not(.noClick)").on("click", handleSlider);

    return () => {
      $("#menuTaggle").off("click", handleSidebar);
      $(".mobile-mainMenu > li > span").off("click", handleSubSidebar);
      $(".mobile-mainMenu .subMenu > li > span").off(
        "click",
        handlePetaSidebar
      );
    };
  }, []);

  return null;
};

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
                              <span>Activities</span>
                              <span>
                                <i class="ri-arrow-drop-down-line"></i>
                              </span>
                            </div>
                          </Link>
                        </span>
                        <div className="submenu">
                          <div className="row">
                            <div className="col-3 m20-bottom">
                              <ul>
                                <li>
                                  <Link to={`/gallery`}>
                                  Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/event`}>
                                  Events
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
                  className="menuToggle me-2 text-md-light text-dark"
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
                        <Link to="/">
                          <div className="headText">
                            <span>Activities</span>
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
                              <ul>
                                <li>
                                  <Link to={`/gallery`}>
                                   Gallery
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`/event`}>
                                   Event
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </ul>
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
// import React, { useEffect, useState } from "react";
// import Logo from "../../assets/images/JBS-IT-Institute-logo.png";
// import { Link } from "react-router-dom";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { FaBars } from "react-icons/fa";

// const Header = () => {
//   const [scrollTop, setScrollTop] = useState(0);
//   const [stopNav, setStopNav] = useState("");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [submenuOpen, setSubmenuOpen] = useState({});
//   const [petamenuOpen, setPetamenuOpen] = useState({});

//   const onScroll = () => {
//     const winScroll = document.documentElement.scrollTop;
//     const height =
//       document.documentElement.scrollHeight -
//       document.documentElement.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     setScrollTop(scrolled);

//     if (winScroll > 70) {
//       setStopNav("stopNavigation");
//     } else {
//       setStopNav("");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const handleMenuToggle = () => {
//     setMobileMenuOpen((prev) => !prev);
//   };

//   const handleSubmenuToggle = (index) => {
//     setSubmenuOpen((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const handlePetamenuToggle = (index) => {
//     setPetamenuOpen((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const handleMenuItemClick = () => {
//     setMobileMenuOpen(false);
//     setSubmenuOpen({});
//     setPetamenuOpen({});
//   };

//   const handleLinkClick = () => {
//     setSubmenuOpen({});
//     setPetamenuOpen({});
//   };

//   return (
//     <>
//       <div className="mainHeader">
//         <div className={`middleHeader ${stopNav}`}>
//           <div className="container py-2">
//             <div className="logoHeader row justify-content-between align-items-center">
//               <div className="col-xl-2 col-3 d-flex justify-content-xl-start justify-content-lg-center align-items-center">
//                 <div className="logo">
//                   <Link to="/">
//                     <img src={Logo} alt="JBS LOGO" className="w-50" />
//                   </Link>
//                 </div>
//               </div>
//               <div className="col-8 d-lg-flex d-none justify-content-end">
//                 <nav>
//                   <div className="mainNavigation d-flex">
//                     <ul className="mainMenu justify-content-center m-0 d-lg-flex d-none">
//                       <li onClick={handleLinkClick}>
//                         <Link to="/">
//                           <div
//                             className="headText"
//                             style={{ color: "#2E2E2E" }}
//                           >
//                             Home
//                           </div>
//                         </Link>
//                       </li>
//                       <li onClick={handleLinkClick}>
//                         <Link to="/about">
//                           <div className="headText">About Us</div>
//                         </Link>
//                       </li>
//                       <li>
//                         <div
//                           className="headText"
//                           onClick={() => handleSubmenuToggle("activities")}
//                         >
//                           Activities <RiArrowDropDownLine />
//                         </div>
//                         {submenuOpen["activities"] && (
//                           <div className={`subMenu ${submenuOpen["activities"] ? "open" : ""}`}>
//                             <div className="megaMenu">
//                               <li onClick={handleLinkClick}>
//                                 <Link to="/gallery">Gallery</Link>
//                               </li>
//                               <li onClick={handleLinkClick}>
//                                 <Link to="/event">Events</Link>
//                               </li>
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                       <li>
//                         <div
//                           className="headText"
//                           onClick={() => handleSubmenuToggle("courses")}
//                         >
//                           Courses <RiArrowDropDownLine />
//                         </div>
//                         {submenuOpen["courses"] && (
//                           <div className={`megaMenu ${submenuOpen["courses"] ? "open" : ""}`}>
//                             <div className="row">
//                               <div className="col-lg-4 m20-bottom">
//                                 <h5 className="megaTitle fw-600 fs-20">
//                                   Development Courses
//                                 </h5>
//                                 <ul>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/flutterDevelopment">
//                                       Flutter Development
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/androidDevelopment">
//                                       Android Development
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/gameDevelopment">
//                                       Game Development
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/fullstackdevelopment">
//                                       Full Stack Development
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/webdevelopment">
//                                       Web Development
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/reactnative">React Native</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/aspdotnetdevelopment">
//                                       ASP.net development
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="col-lg-4 m20-bottom">
//                                 <h5 className="megaTitle fw-600 fs-20">
//                                   Design Courses
//                                 </h5>
//                                 <ul>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/webdesign">Web Design</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/ui-uxdesign">UI/UX Design </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/graphic">
//                                       Advance Graphics Design
//                                     </Link>
//                                   </li>
//                                 </ul>
//                                 <h5 className="megaTitle fw-600 fs-18 m20-top">
//                                   Short Term Courses
//                                 </h5>
//                                 <ul>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/adobellustrator">
//                                       Adobe Illustrator
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/adobeXD">Adobe XD</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/basic-computer-course">
//                                       CCC- Basic Computer Course
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/photoshop">Photoshop</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/coreldraw">CorelDraw</Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="col-lg-4 m20-bottom">
//                                 <h5 className="megaTitle fw-600 fs-20">
//                                   Programming IT
//                                 </h5>
//                                 <ul>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/Cprogramming">
//                                       C Programming
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/C++programming">
//                                       C++ Programming
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/javaprogramming">
//                                       Java Programming
//                                     </Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/ios">iOS</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/php">Advance PHP</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/laravel">Laravel</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/wordpress">Wordpress</Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                               <div className="col-lg-4 m20-bottom">
//                                 <h5 className="megaTitle fw-600 fs-20">
//                                   Trendy Courses
//                                 </h5>
//                                 <ul>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/nodejs">Node JS</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/angular">Angular JS</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/reactjs">React JS</Link>
//                                   </li>
//                                   <li onClick={handleLinkClick}>
//                                     <Link to="/python">Python</Link>
//                                   </li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </li>
//                       <li onClick={handleLinkClick}>
//                         <Link to="/blog">
//                           <div className="headText">Blog</div>
//                         </Link>
//                       </li>
//                       <li onClick={handleLinkClick}>
//                         <Link to="/contact">
//                           <div className="headText">Contact Us</div>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>
//               <div className="col-4 d-lg-none text-end d-flex align-items-center justify-content-end">
//                 <div
//                   className="menuToggle me-2 text-md-light text-dark"
//                   id="menuTaggle"
//                   onClick={handleMenuToggle}
//                 >
//                   <FaBars className="p-1" style={{ borderRadius: "5px" }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {mobileMenuOpen && (
//           <div className="mobileNavigation">
//             <ul className="mobile-mainMenu m-0 p-0 p-2 text-start font-prime">
//               <li onClick={handleMenuItemClick}>
//                 <Link to="/">Home</Link>
//               </li>
//               <li onClick={handleMenuItemClick}>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li className="noClick">
//                 <div
//                   className="headText"
//                   onClick={() => handleSubmenuToggle("mobileCourses")}
//                 >
//                   Courses <RiArrowDropDownLine />
//                 </div>
//                 {submenuOpen["mobileCourses"] && (
//                   <ul className={`subMenu ${submenuOpen["mobileCourses"] ? "open" : ""}`}>
//                     <div className="megaMenu">
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/flutterDevelopment">
//                           Flutter Development
//                         </Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/androidDevelopment">
//                           Android Development
//                         </Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/gameDevelopment">Game Development</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/fullstackdevelopment">
//                           Full Stack Development
//                         </Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/webdevelopment">Web Development</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/reactnative">React Native</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/aspdotnetdevelopment">
//                           ASP.net development
//                         </Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/webdesign">Web Design</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/ui-uxdesign">UI/UX Design</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/graphic">Advance Graphics Design</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/adobellustrator">Adobe Illustrator</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/adobeXD">Adobe XD</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/basic-computer-course">
//                           CCC- Basic Computer Course
//                         </Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/photoshop">Photoshop</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/coreldraw">CorelDraw</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/Cprogramming">C Programming</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/C++programming">C++ Programming</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/javaprogramming">Java Programming</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/ios">iOS</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/php">Advance PHP</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/laravel">Laravel</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/wordpress">Wordpress</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/nodejs">Node JS</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/angular">Angular JS</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/reactjs">React JS</Link>
//                       </li>
//                       <li onClick={handleMenuItemClick}>
//                         <Link to="/python">Python</Link>
//                       </li>
//                     </div>
//                   </ul>
//                 )}
//               </li>
//               <li className="noClick">
//                 <div
//                   className="headText"
//                   onClick={() => handleSubmenuToggle("mobileActivities")}
//                 >
//                   Activities <RiArrowDropDownLine />
//                 </div>
//                 {submenuOpen["mobileActivities"] && (
//                   <ul className={`subMenu ${submenuOpen["mobileActivities"] ? "open" : ""}`}>
//                     <li onClick={handleMenuItemClick}>
//                       <Link to="/gallery">Gallery</Link>
//                     </li>
//                     <li onClick={handleMenuItemClick}>
//                       <Link to="/event">Events</Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>
//               <li onClick={handleMenuItemClick}>
//                 <Link to="/blog">Blog</Link>
//               </li>
//               <li onClick={handleMenuItemClick}>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Header;

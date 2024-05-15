import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";
import ios from '../../../assets/images/Course/Course/ios development.webp'


function Ios() {
  return (
    <>
      <PageTitle title={`IOS`} image={ios}/>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}> IOS Course</span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    Creating portable applications for Apple equipment,
                    including iPad, iPhone, and iPod Touch is an iOS application
                    advancement. The product is written in the Objective-C or
                    Swift programming language and conveyed to the App Store for
                    the clients to download.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>12 Months</span>
                  </button>
                  <button className="rounded text-center p-2 px-3">
                    Daily Time{" "}
                    <span style={{ color: "##343f52" }}>2 Hours</span>
                  </button>
                </div>
                <div className="Course_details">
                  <div className="title mt-4 mb-3 text-4">
                    Included In This Course
                  </div>
                  <ul>
                    <li>100% Job</li>
                    <li>Rich Learning Content</li>
                    <li>Taught by Experienced Prof.</li>
                    <li>Industry Oriented Projects</li>
                  </ul>
                </div>
                <div className="Module text-white rounded p-2 fs-20 text-center alert-primary my-4">
                  Course Modules
                </div>

                <div
                  id="programming-foundation"
                  class="course-description pt-2"
                >
                  <h4
                    class="alert-dark p-3  fs-16 rounded ps-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Programming Foundation
                  </h4>
                  <div>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          C Language
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Intro of C Language</li>
                        <li>History & Structure of C.</li>
                        <li>Compile and Run Command.</li>
                        <li>Variable & Data Type.</li>
                        <li>Constant & Operator</li>
                        <li>Decision Making & Control Statement.</li>
                        <li>Local & Global Variable.</li>
                        <li>Loops (While, Do While & For)</li>
                        <li>Array (1D & 2D And Multi-Dimensional)</li>
                        <li>String</li>
                        <li>Function</li>
                      </div>
                    </ul>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-2"
                        >
                          C++ Language
                        </button>
                      </h4>
                      <div
                        id="faq-content-2"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Intro. of OOP</li>
                        <li>Declaration of Variable and Data Types.</li>
                        <li>C++ Character Function.</li>
                        <li>Control Statement and Array.</li>
                        <li>Info. of Class and Object.</li>
                        <li>Inheritance & Polymorphism.</li>
                        <li>Data Hiding & Encapsulation.</li>
                        <li>Overloading & Reusability.</li>
                        <li>Constructor & Destructor.</li>
                        <li>Inline & Virtual Function.</li>
                      </div>
                    </ul>
                    <div class="border p-3 px-3 rounded d-inline-block">
                      <h6 class="text-dark fs-16">SOFTWARE TO LEARN:</h6>
                      <p className="text-muted mb-2 fs-14">C, C++</p>
                      <h6 class="text-dark fs-16">TIME DURATION:</h6>
                      <p class="mb-2 text-muted fs-14">3 Months</p>
                    </div>
                  </div>
                </div>

                <div id="core-ios" class="course-description pt-4">
                  <h4
                    class="alert-dark p-3  fs-16 rounded ps-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Core iOS (Swift)
                  </h4>
                  <div>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          Core Swift
                        </button>
                      </h4>
                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Basic Core Concepts</li>
                        <li>Overview of Objective C</li>
                        <li>Basic Information about iOS</li>
                        <li>Introduction of XCode</li>
                        <li>Basic Concepts with playground</li>
                        <li>IB Outlets & IB Actions</li>
                        <li>Storyboard & XIB</li>
                        <li>Delegate & Protocol</li>
                        <li>
                          Text field & text view and Delegate methods of them
                        </li>
                        <li>Ui Controls</li>
                        <li>Api Calling</li>
                        <li>Constraints</li>
                        <li>Dynamic UI Controls</li>
                        <li>Cocoa Pods</li>
                        <li>Local Database</li>
                        <li>Core Database</li>
                        <li>Tab Bar</li>
                        <li>App Uploading</li>
                      </div>
                    </ul>
                    <div class="border p-2 px-3 rounded d-inline-block">
                      <h6 class="text-dark fs-16">LANGUAGES TO LEARN:</h6>
                      <p class="fs-14 mb-2 text-muted">Core Swift</p>
                      <h6 class="text-dark fs-16">TIME DURATION:</h6>
                      <p class="fs-14 mb-2 text-muted">3 Months</p>
                      <h6 class="text-dark fs-16">PROJECTS :</h6>
                      <p class="mb-2 fs-14 text-muted">
                        1. Brain Games <br />
                        2.Card Games <br />
                        3. Expense Manager App. <br />
                        4.Quiz App 5.EMI Calculator <br />
                        6.Health App 7.RTO Exam app.
                        <br />
                        8. Contact Duplicate App <br />
                        9. Tic-Tac-Toe Game <br />
                        10.Truth & Dare Game <br />
                        11.QR Code & Barcode Scanner & Generator app.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="advance-ios" class="course-description pt-4">
                  <h4
                    class="alert-dark p-2  fs-16 rounded ps-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    Advanced iOS (Swift)
                  </h4>
                  <div>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Advance Swift
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Models</li>
                        <li>Coding Intrusions as a Developer</li>
                        <li>MVC Architecture</li>
                        <li>MVVM Architecture</li>
                        <li>Map, Filter, and Reduce</li>
                        <li>SideBar</li>
                        <li>Advance API Calling</li>
                        <li>Push Notifications</li>
                        <li>Firebase Integrations</li>
                        <li>Project Architecture</li>
                        <li>Dropdown, Pop-Ups</li>
                        <li>Use Controls in Advance</li>
                        <li>App Group</li>
                        <li>Thread Controlling</li>
                      </div>
                    </ul>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          UI / UX Design
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Figma</li>
                        <li>Introduction of Figma</li>
                        <li>
                          Select, Rectangle, Ellipse, Line, Polygon & Text
                          tools.
                        </li>
                        <li>
                          Pen Tool, Artboard Tool, Zoom Tool Appearance Option.
                        </li>
                        <li>
                          Clipping Amsk, Repeat Grid, Scrolling Option Working
                          with Assets and Layer, Grouping and Ungrouping
                        </li>
                        <li>
                          Crautirg Cloud Acceurt & Introducticn of Prototype
                          Preview.
                        </li>
                        <li>Using Figma Kimts & Plugins.</li>
                        <li>Sharing your Figma Designs.</li>
                        <li>Viewing Design on Mobile.</li>
                      </div>
                    </ul>
                    <div class="border p-3 px-3 rounded d-inline-block">
                      <h6 class="text-dark fs-16">LANGUAGES TO LEARN:</h6>
                      <p class="fs-14 text-muted mb-2">Advance Swift</p>
                      <h6 class="text-dark fs-16">TIME DURATION:</h6>
                      <p class="fs-14 text-muted mb-2">3 Months</p>
                      <h6 class="text-dark fs-16">PROJECTS :</h6>
                      <p class="mb-2 fs-14 text-muted">
                        1. Multi-vendor app <br />
                        2.Queue Management app <br />
                        3.Video Streaming app <br />
                        4. Weather App <br />
                        5.Notes App 6.MoodTracker app <br />
                        7.Chart app <br />
                        8.Cab Booking app <br />
                        9. Survey apps <br />
                        10.AR apps
                      </p>
                    </div>
                  </div>
                </div>

                <div id="aso" class="course-description pt-4">
                  <h4
                    class="alert-dark p-2  fs-16 rounded ps-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    ASO
                  </h4>
                  <div>
                    <ul class="course-points_1">
                      <h4 class=" accordion-header fw-bold text-dark bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-6"
                        >
                          App Store Optimization
                        </button>
                      </h4>
                      <div
                        id="faq-content-6"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Introduction of ASO</li>
                        <li>Keyword Optimization.</li>
                        <li>Keyword Planner.</li>
                        <li>ASO tool of Apple</li>
                        <li>Google Ads.</li>
                        <li>Google Analytics</li>
                        <li>Google Ads with XCode</li>
                        <li>Onpage Aso.</li>
                        <li>FB, Instagram & Linkedin</li>
                        <li>App Name & Sub Title</li>
                        <li>Screenshots</li>
                        <li>App Localization</li>
                        <li>Upwork & Freelancer & Anglist</li>
                      </div>
                    </ul>
                    <div class="border p-3 px-3 rounded d-inline-block">
                      <h6 class="text-dark fs-16">TIME DURATION:</h6>
                      <p class="fs-14 text-muted mb-2">3 Months</p>
                      <h6 class="text-dark fs-15">PROJECTS :</h6>
                      <p class="mb-2 fs-14 text-muted">
                        1. Entry-Level Basic Application <br />
                        2. Basic one Advanced-Level Application
                        <br />
                        3. Upload app to App Store <br />
                        4. Application Marketing With Google Ad Mob
                      </p>
                    </div>
                  </div>
                </div>

                <div class=" course-faq mt-5 ">
                  <h3 class="alert-primary p-2 fs-20 rounded ps-3 text-center mb-5 ">
                    FAQ
                  </h3>
                  <div class="faq-item ">
                    <h4 class=" accordion-header alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-7"
                      >
                        Who can join the iOS course?
                      </button>
                    </h4>
                    <div
                      id="faq-content-7"
                      class="accordion-collapse collapse "
                      data-bs-parent="#faqlist"
                    >
                      <div class="faq-body ">
                        <ul class="bullets-point ps-3 fs-14 mb-4 ">
                          <li>Undergrad or graduate in PC field.</li>
                          <li>One individual is utilized in another field.</li>
                          <li>
                            An individual who needs to turn a task and his field
                            of business.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item ">
                    <h4 class=" accordion-header alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-8"
                      >
                        Why should I learn iOS?
                      </button>
                    </h4>
                    <div
                      id="faq-content-8"
                      class="accordion-collapse collapse "
                      data-bs-parent="#faqlist"
                    >
                      <div class="faq-body ">
                        <ul class="bullets-point ps-3 fs-14  mb-4">
                          <li>It is effortless to learn.</li>
                          <li>
                            On the planet's mobile market, 32% of individuals
                            own iPhones.
                          </li>
                          <li>
                            Finding a new line of work on any side of the world
                            is simple.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="faq-item ">
                    <h4 class=" accordion-header alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-9"
                      >
                        What after the iOS course?
                      </button>
                    </h4>
                    <div
                      id="faq-content-9"
                      class="accordion-collapse collapse "
                      data-bs-parent="#faqlist"
                    >
                      <div class="faq-body ">
                        <ul class="bullets-point ps-3 fs-14 mb-4 ">
                          <li>Business can be begun with 0 speculations.</li>
                          <li>Independent work should be possible.</li>
                          <li>
                            A temporary position can be acquired with one's
                            occupation or profession.
                          </li>
                          <li>
                            To give an advanced stage to your organization.
                          </li>
                          <li>
                            The region, yet the highly enormous and consistent
                            turn of events.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <InqueryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ios;

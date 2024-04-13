import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function FlutterDevelopment() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Flutter Development`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}> This Course</span>
                </div>
                <div className="Master_course_desc">
                  iOS application development makes mobile applications for
                  Apple hardware including iPhone, iPad and iPod Touch. The
                  software is written in the Swift computer programming course
                  in Surat or Objective-C and then deployed to the App Store for
                  users to download.
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
                <div className="Module rounded p-2 fs-20 text-center alert-primary my-4">
                  Course Modules
                </div>

                <div class="accordion accordion-flush" id="faqlist">
                  <div
                    id="programme-foundation"
                    class="course-description pt-2"
                  >
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Programming Foundation
                    </h4>
                    <div>
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
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
                          <li>Intro. of C.</li>
                          <li>History & Structure of C.</li>
                          <li>Compile and Run Command.</li>
                          <li>Variable & Data Type.</li>
                          <li>Constant & Operator</li>
                          <li>Decision Making & Control Statement.</li>
                          <li>Local & Global Variable.</li>
                          <li>Loops (While, Do While & For.)</li>
                          <li>Array (1D & 2D And Multi-Dimensional)</li>
                          <li>String</li>
                          <li>Function</li>
                        </div>
                      </ul>

                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
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

                      <div class="border p-2 mb-3 px-4 rounded d-inline-block">
                        <div class="text-dark course-time fs-16  mb-2">
                          LANGUAGES TO LEARN:
                        </div>
                        <p class="mb-2 text-muted fs-14">C, C++</p>
                        <div class="text-dark course-time fs-16 mb-2">
                          TIME DURATION:
                        </div>
                        <p class="mb-2 text-muted fs-14">2 Months</p>
                      </div>
                    </div>
                  </div>
                  <div id="core-flutter" class="course-description pt-2">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Core Flutter
                    </h4>
                    <div>
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-3"
                          >
                            Flutter development
                          </button>
                        </h4>
                        <div
                          id="faq-content-3"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Fundamentals of Dart</li>
                          <li>Anatomy of Flutter</li>
                          <li>User Interface Designing</li>
                          <li>Object Oriented Programming</li>
                          <li>Gesture Detection</li>
                          <li>Routes & Navigation</li>
                          <li>Buttons & Dialogs</li>
                          <li>Forms & Validation</li>
                          <li>Theme Customization</li>
                          <li>Core User Interface Views</li>
                        </div>
                      </ul>

                      <div class="border p-2 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                        <p className="my-3">Dart</p>
                        <h6 class="text-dark fs-15">PROJECTS:</h6>
                        <p class="mb-0 text-muted fs-16">
                          1. Math`s Calculator <br />
                          2.Quiz App <br />
                          3. EMI Calculator <br />
                          4.Dice app <br />
                          5.BMI Calculator <br />
                          6.BIO - Data Creator <br />
                          7. age Calculator <br />
                          8. Captcha Code Generator <br />
                          9. GST Calculator
                          <br />
                          10.Tic-Tac-Toe Game
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="advance-flutter" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Advance Flutter
                    </h4>
                    <div>
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-4"
                          >
                            Advance Flutter.
                          </button>
                        </h4>
                        <div
                          id="faq-content-4"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Custom Libraries and External Packages</li>
                          <li>Platform Specific Coding</li>
                          <li>Advance User Interface Views</li>
                          <li>Asynchronous Programming</li>
                          <li>WebView and Geolocation</li>
                          <li>Working with Multimedia</li>
                          <li>Shared Preferences</li>
                          <li>Working with APIs</li>
                          <li>State Management</li>
                          <li>Animation, Drawing and Clipping</li>
                          <li>Database Interaction (SQLite and Firebase)</li>
                          <li>Social Media Integration</li>
                          <li>Firebase notifications</li>
                          <li>Git and GitHub</li>
                          <li>Publishing Flutter App on Play Store</li>
                        </div>
                      </ul>

                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
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
                            Pen Tool, Artboard Tool, Zoom Tool Appearance
                            Option.
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

                      <div class="border p-2 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">PROJECTS:</h6>
                        <p class="mb-0 fs-16 text-muted ">
                          1. Weather App <br />
                          2.Amazing Quotes App <br />
                          3.Music Player <br />
                          4.Budget Tracker <br />
                          5.Cryptocurrency Converter <br />
                          6.Animal Biography App <br />
                          7.Covid-19 Tracker <br />
                          8. Galaxy Planets App <br />
                          9. Note Keeper <br />
                          10.Book Registrar App <br />
                          11.Country Encyclopedia <br />
                          12.Course Tutorial App <br />
                          13. Build an Application UI on a Given Definition
                          Using a Design flow
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="aso-earning" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Aso & Earning & PHP API
                    </h4>
                    <div>
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-6"
                          >
                            Aso & Earning
                          </button>
                        </h4>
                        <div
                          id="faq-content-6"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Introduction of ASO</li>
                          <li>Difference between ASO SEO.</li>
                          <li>Various Plugins.</li>
                          <li>How to create an account on Admob.</li>
                          <li>Admob with android studio.</li>
                          <li>Generate signed apk.</li>
                          <li>Keyword Optimization.</li>
                          <li>Keyword Planner.</li>
                          <li>Onpage Aso.</li>
                          <li>Offpage Aso.</li>
                          <li>Color Combination.</li>
                          <li>Google Ads.</li>
                          <li>Privacy Policy Generation.</li>
                          <li>Review Option.</li>
                          <li>How to Upload Apps in the Playstore.</li>
                          <li>Grammar & Plagiarism Checker.</li>
                          <li>Upwork & Freelancer.</li>
                        </div>
                      </ul>

                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-7"
                          >
                            PHP API
                          </button>
                        </h4>
                        <div
                          id="faq-content-7"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Introduction of PHP & Server</li>
                          <li>File uploading in server.</li>
                          <li>Database Connectivity</li>
                          <li>CRUD operations</li>
                          <li>API Introduction</li>
                          <li>HTTP Request methods</li>
                          <li>User authentication APIs</li>
                          <li>CRUD APIs</li>
                        </div>
                      </ul>

                      <div class="border p-2 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">
                          LANGUAGES & SOFT. TO LEARN:
                        </h6>
                        <p class="fs-16 my-3">Aso, PHP API</p>
                        <h6 class="text-dark fs-15">PROJECTS:</h6>
                        <p class="mb-0 fs-16 my-3">
                          1. Create an Account in the Play store <br />
                          2. Application Marketing with Adwords.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="flutter-traning" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Flutter Training Course Overview
                    </h4>
                    <div class="course-points_1 ">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-8"
                        >
                          We Are One Of The First & Top Flutter Training
                          Provider In Surat.
                        </button>
                      </h4>
                      <div
                        id="faq-content-8"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <p class="mb-0">
                          We offer 100% job guarantee after completing the
                          course.
                        </p>
                        <p className="mb-3">
                          In Gujarat, JBS is only one android ATC Authorized
                          Training Provider, so students can benefit from the
                          latest android technology curriculum. This course is
                          designed to meet all levels of student requirements.
                          Our android trainer understands the actual need of the
                          fresher student to be professional. Our trainer will
                          ensure a complete understanding of each and every
                          concept included in the course because of listening
                          and solving student’s doubts.
                        </p>
                      </div>

                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-9"
                        >
                          Best Flutter Training Institute In Surat
                        </button>
                      </h4>
                      <div
                        id="faq-content-9"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <p class="mb-0">
                          JBS technologies mainly focus on the present scope of
                          the android app and real-time requirements.
                        </p>
                        <p class="mb-0">
                          Each section of the module will boost your programming
                          skills. Real-time projects will be conducted, like
                          creating many real-world applications. On successful
                          completion of the course, you will get a job.
                        </p>
                        <p>
                          On successful completion of the course, you will
                          definitely get a job.
                        </p>
                      </div>

                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-10"
                        >
                          What Are The Prerequisites For Flutter Course?
                        </button>
                      </h4>
                      <div
                        id="faq-content-10"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <p>
                          Basic knowledge of computers is good to start
                          learning, and you don’t need any degree or diploma to
                          secure a job. Nowadays, companies are not explicitly
                          asking for a degree or diploma.{" "}
                        </p>
                      </div>

                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-11"
                        >
                          Other Benefits Of Learning Flutter Are:
                        </button>
                      </h4>
                      <div
                        id="faq-content-11"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <p class=" mb-1">Always in demand</p>

                        <p>
                          Application development gains popularity after
                          releasing the Android OS. Since then, many developers
                          have tried to make their careers in Android
                          development. But since it's now quite an overwhelming
                          technology and too common among developers, job
                          vacancies may be going down at any time. Since we have
                          the latest and trending Google framework to develop a
                          great cross-platform application with Flutter, we have
                          excellent career options in the App development field.
                          Flutter is always in demand since it was released and
                          has gained more popularity than React Native Training
                          in Surat.
                        </p>

                        <p class=" mb-1">You can be your own Boss.</p>

                        <p>
                          By learning Flutter, you can create projects and
                          real-time applications to enhance your portfolio
                          potential and be ready for the best career option. But
                          what if you want to do your own business? Well, that
                          is also possible with Flutter. With the help of
                          Flutter, you can also start your own business and
                          freelance for extra income. We offer Web Development
                          Courses in Surat if you want to persue career in
                          Developing.
                        </p>

                        <p class="mb-1">
                          Cross Platform Service with the trust of Google
                        </p>

                        <p>
                          Without any doubt, we all know that Flutter is a
                          product of the gigantic IT leader Google. Since
                          Flutter has all its back with google, we can assure
                          ourselves always to get high-quality maintenance and
                          updates regarding Flutter. Making Android & IOS
                          applications with a single codebase is time-reducing
                          and efficient with Dart language and Flutter. Get
                          android course in Surat JBS It Institute.
                        </p>
                        <p class=" mb-3">Unleash the True Potential </p>

                        <p>
                          Google’s impressive and latest Material design is
                          by-default built-in Flutter. You can start building
                          your App with Material design with no extra setup.
                          Apple’s great-looking Cupertino design is also
                          available in Flutter. So, we can make an excellent
                          UI/UX-powered application for both platforms with a
                          single codebase. And with these all great
                          possibilities, you can create any application that
                          works on both platforms.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="course-faq mt-5">
                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">
                      FAQ
                    </h3>
                    <div class="faq-item">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-12"
                        >
                          Who can join Flutter Course?
                        </button>
                      </h4>
                      <div
                        id="faq-content-12"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 pb-3">
                            <li>
                              This program is for you if you want to work as a
                              cross-platform mobile application developer. You
                              can join the program whether you are a fresh
                              graduate or want to change your domain to IT. You
                              have the right to choose the career path of your
                              choice.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-13"
                        >
                          Why should I learn Flutter?
                        </button>
                      </h4>
                      <div
                        id="faq-content-13"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 pb-3">
                            <li>
                              The most trusted framework for developing
                              cross-platform mobile apps to secure your future
                              career options with Google.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-14"
                        >
                          I am experienced, so can I do this program?
                        </button>
                      </h4>
                      <div
                        id="faq-content-14"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 pb-3">
                            <li>Sure, we would love to be with you.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-15"
                        >
                          What is the mode of payment of fees?
                        </button>
                      </h4>
                      <div
                        id="faq-content-15"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 pb-3">
                            <li>
                              We accept both offline process and online
                              processes. You can also pay fees with the help of
                              EMI.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default FlutterDevelopment;

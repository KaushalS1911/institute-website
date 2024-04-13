import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function WebDesign() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Master In Web Design`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    Web Design Course
                  </span>
                </div>
                <div className="Master_course_desc">
                  Web design encompasses many different skills and disciplines
                  in the production and maintenance of websites. Other web
                  design areas include graphic web design, user interface design
                  authoring, standardised code and proprietary software, user
                  experience design, and search engine optimization.
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>8 Months</span>
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
                  <div id="web-fronted-coding" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Web Front end Coding
                    </h4>
                    <div className="mb-4">
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-1"
                          >
                            Create a Website Structure Using HTML, HTML5
                          </button>
                        </h4>
                        <div
                          id="faq-content-1"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Formatting Web Layouts Using CSS3</li>
                          <li>
                            Build Responsive Web Design Using Media Query Using
                            Framework Like Bootstrap
                          </li>
                          <li>
                            Add Some Cool Effects Using JavaScript & jQuery
                          </li>
                          <li>Converting PSD to HTML</li>
                          <li>
                            Adding Animation, Scrolling Effects, and Many More
                            Effects Using JS & JQuery
                          </li>
                          <li>Optimizing Website Using SEO Rules</li>
                          <li>Launching Our Website</li>
                          <li>
                            Learning About Domain, Hosting, and Maintain Live
                            Website Using Server Panel
                          </li>
                        </div>
                      </ul>

                      <div class="border p-3 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">SOFTWARE TO LEARN:</h6>
                        <p class="fs-14 text-muted mb-2">
                          HTML5, CSS3, SASS, LESS, Media Query, Bootstrap,
                          Tailwind CSS, jQuery (Atch.), SEO, FTP, Hosting
                        </p>
                        <h6 class="text-dark fs-15">TIME DURATION:</h6>
                        <p class="mb-2 fs-14 text-muted mb-2">6 Months</p>
                      </div>
                    </div>

                    <div class="course-points_1 ">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-2"
                        >
                          JavaScript
                        </button>
                      </h4>
                      <div
                        id="faq-content-2"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <div class="ps-3">
                          <ul class="course-points_1 my-4">
                            <li>JavaScript Importance</li>
                            <li>
                              ECMAScript & Versions & Install Environment
                              Scratch JS
                            </li>
                            <li>
                              Show different Types of Output Methods (alert,
                              console, document, inner HTML)
                            </li>
                            <li>Syntax and Operations Of JS</li>
                            <li>Conditions & Looping</li>
                            <li>
                              Different types of Variable Like(var, const, let)
                            </li>
                            <li>Array and String With Different Methods</li>
                            <li>Functions (Function Types, Return Types)</li>
                            <li>Working with Objects(Prototype, Methods)</li>
                            <li>
                              Use Different Types of Objects LIKE (Date, Math,
                              Boolean, and Number)
                            </li>
                            <li>Understanding ES6 Concept</li>
                            <li>
                              Understanding JSON (JavaScriot Object Notation)
                            </li>
                            <li>
                              Working with JSON (JSON.parse, JSON.stringify,
                              JSON object, JSON array)
                            </li>
                            <li>
                              Storing Local data in javascript with JSON local
                              storage
                            </li>
                          </ul>
                          <div class="border p-2 px-3 rounded d-inline-block">
                            <h6 class="text-dark fs-15">SOFTWARE TO LEARN:</h6>
                            <p class="fs-14 mb-3 text-muted ">JavaScript</p>
                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                            <p class="mb-3 fs-14 text-muted ">2 Months</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="course-faq mt-5">
                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">
                      FAQ
                    </h3>
                    <div class="faq-item  mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Who can join the Web design Course?
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li>Graduate Students</li>
                            <li>Interested in Designing & Internet</li>
                            <li>Housewife, Businessmen</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item  mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          Why should I learn Web Design?
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li>Rich Learning Content</li>
                            <li>Taught by Experienced Prof.</li>
                            <li>Industry Oriented Projects</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item  mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-6"
                        >
                          What after the Web Designing course?
                        </button>
                      </h4>
                      <div
                        id="faq-content-6"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li>Get a Job in Companies</li>
                            <li>Start your own Business</li>
                            <li>Start As Freelancer</li>
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

export default WebDesign;

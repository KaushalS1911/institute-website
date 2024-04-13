import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function AspDotNetDevelopment() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`ASP.net development`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    ASP.net development
                  </span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    ASP.NET Core supports industry standard authentication
                    protocols. Built-in features help protect your apps against
                    cross-site scripting (XSS) and cross-site request forgery
                    (CSRF). ASP.NET Core provides a built-in user database with
                    support for multi-factor authentication and external
                    authentication with Google, X, and more.
                  </p>
                  <p className="mb-2">
                    ASP.NET Core performs faster than any popular web framework
                    in the independent TechEmpower benchmarks.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>10 Months</span>
                  </button>
                  <button className="rounded text-center p-2 px-3">
                    Daily Time{" "}
                    <span style={{ color: "##343f52" }}>2+2 Hours/day</span>
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
                <div class="course-faq mt-5">
                  <div class="accordion accordion-flush" id="faqlist">
                    <div class="faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          C PROG , C++ CONCEPT
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Basic Programming Concept</li>
                            <li class="pb-2">Control Statement</li>
                            <li class="pb-2">Loop</li>
                            <li class="pb-2">Array</li>
                            <li class="pb-2">String</li>
                            <li class="pb-2">User Define Function</li>
                            <li class="pb-2">Concept Of OOP</li>
                            <li class="pb-2">Inheritance</li>
                            <li class="pb-2">Polymorphism</li>
                            <li class="pb-2">Exception Handling</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-2"
                        >
                          HTML
                        </button>
                      </h4>
                      <div
                        id="faq-content-2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Introduction to HTML</li>
                            <li class="pb-2">Formatting Tags</li>
                            <li class="pb-2">Form Elements</li>
                            <li class="pb-2">Table Layout&nbsp;</li>
                            <li class="pb-2">HTML Styles&nbsp;</li>
                            <li class="pb-2">HTML Class&nbsp;</li>
                            <li class="pb-2">HTML Lists&nbsp;</li>
                            <li class="pb-2">HTML Responsive</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          CSS
                        </button>
                      </h4>
                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Introduction to CSS&nbsp;</li>
                            <li class="pb-2">Syntax&nbsp;</li>
                            <li class="pb-2">Transform Property&nbsp;</li>
                            <li class="pb-2">Font CSS&nbsp;</li>
                            <li class="pb-2">Border CSS&nbsp;</li>
                            <li class="pb-2">Animation Property&nbsp;</li>
                            <li class="pb-2">Filter Property</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Responsive Layout
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Introduction to Media Query</li>
                            <li class="pb-2">Introduction to&nbsp;Bootstrap</li>
                            <li class="pb-2">Bootstrap Setup</li>
                            <li class="pb-2">Bootstrap Components</li>
                            <li class="pb-2">Project Design Using Bootstrap</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          JavaScript / JQuery
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">
                              Introduction to JavaScript&nbsp;
                            </li>
                            <li class="pb-2">Operators&nbsp;</li>
                            <li class="pb-2">Contional statements&nbsp;</li>
                            <li class="pb-2">Loops&nbsp;</li>
                            <li class="pb-2">Class, Tag Selector&nbsp;</li>
                            <li class="pb-2">Slider&nbsp;</li>
                            <li class="pb-2">Validation&nbsp;</li>
                            <li class="pb-2">JQuery Selector&nbsp;</li>
                            <li class="pb-2">jQuery Events&nbsp;</li>
                            <li class="pb-2">Traversing&nbsp;</li>
                            <li class="pb-2">jQuery Selectors</li>
                            <li class="pb-2">jQuery Actions</li>
                            <li class="pb-2">jQuery Custom Functionality</li>
                            <li class="pb-2">jQuery Libraries</li>
                            <li class="pb-2">jQuery Validation</li>
                            <li class="pb-2">jQuery Slideshow</li>
                            <li class="pb-2">jQuery Dropdown</li>
                            <li class="pb-2">JS Functions</li>
                            <li class="pb-2">jQuery UI</li>
                            <li class="pb-2">Working with jQueryUI</li>
                            <li class="pb-2">jQuery Accordions</li>
                            <li class="pb-2">jQuery Tabs</li>
                            <li class="pb-2">jQuery Tooltips</li>
                            <li class="pb-2">jQuery Autocomplete</li>
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

export default AspDotNetDevelopment;

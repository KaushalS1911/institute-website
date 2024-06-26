import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";
import angular from "../../../assets/images/Course/Course/angular.webp";

function Angular() {
  return (
    <>
      <PageTitle title={`Angular JS`} image={angular} />
      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    Angular JS Course
                  </span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    AngularJs is a JavaScript-grounded front-end enhancement
                    system employed to assemble single-runner operations in
                    HTML, JavaScript, and a superset of JavaScript called
                    Typescript. Unlike other JavaScript systems, Angular gives
                    different highlights like HTTP administration,
                    accoutrements, and activities that assist the mastermind
                    with making enormous operations and reclaiming their time
                    composing extended canons.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>2.5 Months</span>
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
                <div class="course-description pt-2">
                  <div class="accordion accordion-flush" id="faqlist">
                    <h4 class="alert-dark p-2  fs-16 rounded ps-3">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-1"
                      >
                        Angular JS
                      </button>
                    </h4>
                    <div>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <ul class="course-points">
                          <li>Angular Importance and Installing NPM</li>
                          <li>Understanding Directory Structures</li>
                          <li>
                            Understanding Data Binding and ng Serve Commands
                          </li>
                          <li>Working With MVC(Model, View, Controller)</li>
                          <li>Scope and filtering(Custome filter)</li>
                          <li>Working with tables and select</li>
                          <li>Working With (HTTP) Request and Response</li>
                          <li>Working with DOM &amp; ng events</li>
                          <li>Understanding Form and Validations</li>
                          <li>Understanding SQL with Angular</li>
                          <li>Working with Routings &amp; Services</li>
                          <li>Setup Custome Template</li>
                          <li>Working with API and Request</li>
                          <li>Included in Career & Master Course</li>
                          <li>Personality Development</li>
                          <li>Entrepreneur & Freelancing</li>
                        </ul>
                      </div>
                      <div class="border p-2 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">SOFTWARE TO LEARN:</h6>
                        <p class="mb-2 text-muted fs-14">Javascript, Angular</p>
                        <h6 class="text-dark fs-15">OTHER:</h6>
                        <p class="mb-2 text-muted fs-14">
                          Live Portfolio Making On GitHub
                        </p>
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

export default Angular;

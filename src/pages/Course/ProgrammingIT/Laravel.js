import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";
import laravel from '../../../assets/images/Course/Course/laravel.webp'


function Laravel() {
  return (
    <>
      <PageTitle title={`Laravel`} image={laravel}/>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    Laravel Course
                  </span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    Laravel is a free, open-source PHP web framework built by
                    Taylor Otwell and based on Symfony. It is designed to create
                    online applications that follow the model–view–architectural
                    controller pattern. You can also enroll for PHP Training
                    Course in Surat.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>3 Months</span>
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

                <div id="laravel" class="course-description pt-4">
                  <h4
                    class="alert-dark p-2  fs-16 rounded ps-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    LARAVEL
                  </h4>
                  <div>
                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          Intro to PHP Programming
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>What is PHP, and what usage of PHP</li>
                        <li>intro to server & installing XAMPP</li>
                        <li>echo & print function</li>
                        <li>Basics of Android Development</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-2"
                        >
                          Fundamentals Of PHP
                        </button>
                      </h4>
                      <div
                        id="faq-content-2"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Datatypes</li>
                        <li>variables & constants</li>
                        <li>
                          introduction of operators (arithmetic, assignment)
                        </li>
                        <li>logical operator</li>
                        <li>types of comments</li>
                        <li>$_request[‘get’] superglobal variable</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          Control Structure(User Relational Operator)
                        </button>
                      </h4>

                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>if statement</li>
                        <li>if … else</li>
                        <li>ladder if … else</li>
                        <li>nested if … else</li>
                        <li>Switch case</li>
                        <li>Ternary operator</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Branching & Looping
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>while loop</li>
                        <li>do … while loop</li>
                        <li>for loop</li>
                        <li>nested for loop</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          Array & Functions
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Types Of Array</li>
                        <li>Number Index Array</li>
                        <li>Associative Array</li>
                        <li>Foreach Loop</li>
                        <li>Multi-Dimensional Array</li>
                        <li>Array Functions</li>
                        <li>String Functions</li>
                        <li>Date & Time Functions</li>
                        <li>User Define Function (UDF)</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-6"
                        >
                          Database With SQL
                        </button>
                      </h4>
                      <div
                        id="faq-content-6"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Introduction to Database & phpMyAdmin</li>
                        <li>Make Database & Creating Tables</li>
                        <li>Primary key concept</li>
                        <li>Foreign key concept</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-7"
                        >
                          Blade Template
                        </button>
                      </h4>
                      <div
                        id="faq-content-7"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Introduction Template Inheritance</li>
                        <li>Components & Slots</li>
                        <li>Displaying Data</li>
                        <li>Control Structures</li>
                        <li>Forms</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-8"
                        >
                          Admin Panel
                        </button>
                      </h4>
                      <div
                        id="faq-content-8"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Convert HTML Admin Panel to PHP</li>
                        <li>Set dashboard into laravel</li>
                        <li>Set the table and form it into laravel</li>
                      </div>
                    </ul>
                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-9"
                        >
                          Form With MVC
                        </button>
                      </h4>
                      <div
                        id="faq-content-9"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>CRUD Operations with laravel (insert)</li>
                        <li>Password Handling – sha()</li>
                        <li>CSRF Security</li>
                        <li>CRUD Operations with laravel (view)</li>
                        <li>CRUD Operations with laravel (delete)</li>
                        <li>CRUD Operations with laravel (update)</li>
                      </div>
                    </ul>
                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-10"
                        >
                          FILE SYSTEM
                        </button>
                      </h4>
                      <div
                        id="faq-content-10"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Single File Uploading (insert, view)</li>
                        <li>Single File Uploading (delete, update)</li>
                        <li>Multiple File Uploading (insert)</li>
                        <li>Multiple File Uploading (view, delete)</li>
                        <li>Multiple File Uploading ( update)</li>
                      </div>
                    </ul>
                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-11"
                        >
                          FORM OPERATIONS
                        </button>
                      </h4>
                      <div
                        id="faq-content-11"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Searching with Fields</li>
                        <li>Pagination with Fields</li>
                        <li>Searching with pagination</li>
                        <li>Form Request Validation</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-12"
                        >
                          Blog Post
                        </button>
                      </h4>
                      <div
                        id="faq-content-12"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Multiple images uploading insert/view</li>
                        <li>Multiple images delete</li>
                        <li>Multiple images update</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-13"
                        >
                          Client Side
                        </button>
                      </h4>
                      <div
                        id="faq-content-13"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Convert HTML into PHP</li>
                        <li>Make data dynamic</li>
                        <li>Next previous button with slider</li>
                        <li>Gave Comment</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-14"
                        >
                          Server Side Validation
                        </button>
                      </h4>
                      <div
                        id="faq-content-14"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Intro to session</li>
                        <li>Simple login & logout.</li>
                        <li>multiple logins</li>
                        <li>View profile</li>
                        <li>update profile</li>
                        <li>change password</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-15"
                        >
                          JAVASCRIPT & jQuery ( Client Side Validation )
                        </button>
                      </h4>
                      <div
                        id="faq-content-15"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Introduction of javascript</li>
                        <li>data type</li>
                        <li>function</li>
                        <li>events of javascript</li>
                        <li>quantity increment decrement</li>
                        <li>validation with javascript</li>
                        <li>jquery validation</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-16"
                        >
                          Ajax
                        </button>
                      </h4>
                      <div
                        id="faq-content-16"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Introduction of Ajax</li>
                        <li>
                          ajax with database & crud operation (data insert)
                        </li>
                        <li>
                          ajax with crud operation ( view and delete data)
                        </li>
                        <li>ajax with crud operation ( update data)</li>
                        <li>live search</li>
                      </div>
                    </ul>

                    <ul class="course-points_1 my-0 ms-2 mb-4">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          Mail
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <li>Mailing feature</li>
                        <li>Forgot password</li>
                      </div>
                    </ul>
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

export default Laravel;

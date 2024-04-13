import React, { useState } from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function JavaProgramming() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`JAVA Programming`} />
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
                    JAVA Programming
                  </span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2 text-gray">
                    Java Programming First Released by Sun Microsystems in 1995.
                    There are many Websites and Application is not wok without
                    java. Java is a class-based, object-oriented programming
                    language to minimise implementation dependencies. Java is
                    one of the fastest-growing programming languages in the IT
                    field. If you use the mobile, laptop, tablet without java
                    you cannot use this device. That means java is everywhere to
                    learn java join the best Java class in Surat. Java is one of
                    the most used programming languages and platforms. Java has
                    own JRE (Java Runtime environment) and API (Application
                    Programming Interface).
                  </p>

                  <p className="mb-2 text-gray">
                    Java is utilized in a wide assortment of figuring stages
                    spreading over from implanted gadgets and cell phones on the
                    low end to big business servers and super PCs on the top of
                    the line. Java is genuinely universal in cell phones, Web
                    servers, and venture applications, and to some degree less
                    regular in work area applications, however, clients may have
                    gone over Java applets when perusing the Web.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>6 Months</span>
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

                <div class="course-faq mt-5">
                  <div class="accordion accordion-flush" id="faqlist">
                    <div class="  faq-item mb-3">
                      <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-1"
                        >
                          Career Opportunities
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14 text-gray">
                            <li class="pb-2">Java Video Game Programmer</li>

                            <li class="pb-2">Web Software Engineer</li>

                            <li class="pb-2">Software Developer</li>

                            <li class="pb-2">Java Web Developer</li>

                            <li class="pb-2">Java Webmaster</li>

                            <li class="pb-2">Java Developer</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="  faq-item mb-3">
                      <div class="faq-item mb-3">
                        <h4 class=" accordion-header alert-dark p-2 fs-16 rounded ps-3">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-2"
                          >
                            Java Basics
                          </button>
                        </h4>

                        <div
                          id="faq-content-2"
                          class="accordion-collapse collapse"
                          data-bs-parent="#faqlist"
                        >
                          <div class="faq-body">
                            <ul class="bullets-point ps-3 fs-14 ">
                              <li class="pb-2">History of Java</li>
                              <li class="pb-2">Features of Java</li>
                              <li class="pb-2">
                                Difference between JDK, JRE, and JVM
                              </li>
                              <li class="pb-2">Java Data Types</li>
                              <li class="pb-2">Operators</li>
                              <li class="pb-2">keywords &nbsp;</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          Control Statements
                        </button>
                      </h4>
                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">if statement</li>
                            <li class="pb-2">if-else statement</li>
                            <li class="pb-2">if-else-if ladder</li>
                            <li class="pb-2">nested if statement</li>
                            <li class="pb-2">While Loop</li>
                            <li class="pb-2">Do while Loop</li>
                            <li class="pb-2">For Loop</li>
                            <li class="pb-2">Break</li>
                            <li class="pb-2">Continue</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Java OOPs Concepts
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Object</li>
                            <li class="pb-2">Class</li>
                            <li class="pb-2">Inheritance</li>
                            <li class="pb-2">Polymorphism</li>
                            <li class="pb-2">Abstraction</li>
                            <li class="pb-2">Encapsulation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          Java Polymorphism
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Method Overloading</li>
                            <li class="pb-2">Method Overriding</li>
                            <li class="pb-2">Super Keyword</li>
                            <li class="pb-2">Final keyword</li>
                            <li class="pb-2">This Keyword</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-6"
                        >
                          Exception Handling
                        </button>
                      </h4>
                      <div
                        id="faq-content-6"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">
                              Advantage of Exception Handling
                            </li>
                            <li class="pb-2">Hierarchy of Exception classes</li>
                            <li class="pb-2">Types of Exception</li>
                            <li class="pb-2">Exception Example</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-7"
                        >
                          Multithreading in Java
                        </button>
                      </h4>
                      <div
                        id="faq-content-7"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Life cycle of a Thread</li>
                            <li class="pb-2">Start &amp;Sleep method</li>
                            <li class="pb-2">Priority of a Thread</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-8"
                        >
                          Java I/O
                        </button>
                      </h4>
                      <div
                        id="faq-content-8"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Java FileOutputStream</li>
                            <li class="pb-2">Java FileInputStream</li>
                            <li class="pb-2">Java BufferedOutputStream</li>
                            <li class="pb-2">BufferedInputStream</li>
                            <li class="pb-2">ByteArrayOutputStream</li>
                            <li class="pb-2">FilePermission</li>
                            <li class="pb-2">File Read &amp; Write</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-9"
                        >
                          Java AWT
                        </button>
                      </h4>
                      <div
                        id="faq-content-9"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Java AWT Hierarchy</li>
                            <li class="pb-2">AWT Basics</li>
                            <li class="pb-2">Event and Listener</li>
                            <li class="pb-2">Java ActionListener</li>
                            <li class="pb-2">Java MouseListener</li>
                            <li class="pb-2">Java ItemListener</li>
                            <li class="pb-2">Java KeyListener &nbsp;</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-10"
                        >
                          Java Applet
                        </button>
                      </h4>
                      <div
                        id="faq-content-10"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Graphics in Applet</li>
                            <li class="pb-2">Animation in Applet</li>
                            <li class="pb-2">Painting in Applet</li>
                            <li class="pb-2">EventHandling in Applet</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mb-3">
                      <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-11"
                        >
                          Java Database
                        </button>
                      </h4>
                      <div
                      
                        id="faq-content-11"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">introduction of JDBC</li>
                            <li class="pb-2">JDBC Driver</li>
                            <li class="pb-2">DB Connectivity</li>
                            <li class="pb-2">Driver Manager</li>
                            <li class="pb-2">Query Statement</li>
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

export default JavaProgramming;

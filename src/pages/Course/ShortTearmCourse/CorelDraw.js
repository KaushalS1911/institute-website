import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function CorelDraw() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`CorelDraw`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-2">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>CorelDraw</span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    Adobe Photoshop is a raster graphics editor tool developed
                    by Adobe Inc. It was originally launched in 1988 by Thomas
                    and John Knoll. What are the Advantages of Adobe Photoshop
                    Course? Photoshop is a graphics designing application
                    software. It is mostly used by application designers,
                    photographers, graphic designers, video game artists,
                    advertising. It is used to modify photos, create art,
                    retouch product photos, images from raster to vector, photo
                    manipulation, etc. Photoshop can do nearly anything online
                    media. It started out as a photo processing program. Now it
                    has developed to create and edit video, create 3-D images
                    and graphic designs.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>2 Months</span>
                  </button>
                  <button className="rounded text-center p-2 px-3">
                    Daily Time{" "}
                    <span style={{ color: "##343f52" }}>2 Hours</span>
                  </button>
                </div>
                <div className="Course_details">
                  <div className="title mt-4 mb-3 text-4"></div>
                  <ul>
                    <li>100% Job</li>
                    <li>Rich Learning Content</li>
                    <li>Taught by Experienced Prof.</li>
                    <li>Industry Oriented Projects</li>
                  </ul>
                </div>
                <div className="Module rounded p-2 fs-20 text-center alert-primary my-4">
                  Course Module
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
                          Introduction of CORAL DRAW
                        </button>
                      </h4>
                      <div
                        id="faq-content-1"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Concept of Graphics</li>
                            <li class="pb-2">Intro. to Raster &amp; Vector</li>
                            <li class="pb-2">Color Theory</li>
                            <li class="pb-2">Page size &amp; Margin Setting</li>
                            <li class="pb-2">Overview of CorelDraw</li>
                            <li class="pb-2">file Navigating</li>
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
                          Fundamental of Color
                        </button>
                      </h4>
                      <div
                        id="faq-content-2"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Fundamental of Color Theory</li>
                            <li class="pb-2">Color Correction</li>
                            <li class="pb-2">
                              Introduction of RGB &amp; CYMK Color
                            </li>
                            <li class="pb-2">Color Mixing Model</li>
                            <li class="pb-2">Subtractive color</li>
                            <li class="pb-2">The color wheel</li>
                            <li class="pb-2">Hue, shade, tint and tone</li>
                            <li class="pb-2">Complementary colors</li>
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
                          Text Writing Design
                        </button>
                      </h4>
                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">FlamingText Styles</li>
                            <li class="pb-2">Create 3D Text</li>
                            <li class="pb-2">Fency Text Generator</li>
                            <li class="pb-2">Cool Text Graphics Generator</li>
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
                          Object & Effects
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Transforming Object</li>
                            <li class="pb-2">Locking &amp; Unlocking Object</li>
                            <li class="pb-2">Blend Tool</li>
                            <li class="pb-2">Glossy Effect</li>
                            <li class="pb-2">Geometric Pattern</li>
                            <li class="pb-2">Transparency Effect</li>
                            <li class="pb-2">3D Effect</li>
                            <li class="pb-2">
                              Pressing Shapes In To Leather Work
                            </li>
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
                          Real Time Project Work
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-14">
                            <li class="pb-2">Creative Logo Design</li>
                            <li class="pb-2">Brochure Design</li>
                            <li class="pb-2">Visiting Card Design</li>
                            <li class="pb-2">Flyer Design</li>
                            <li class="pb-2">Board Banner Design</li>
                            <li class="pb-2">Character Design</li>
                            <li class="pb-2">Marketing Post Design</li>
                            <li class="pb-2">Catalogue Design</li>
                            <li class="pb-2">Box Design</li>
                            <li class="pb-2">Invitation Card Design</li>
                            <li class="pb-2">Branding Design</li>
                            <li class="pb-2">Calender Design</li>
                            <li class="pb-2">Hot Fix Design &nbsp;</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-2">
                <InqueryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CorelDraw;

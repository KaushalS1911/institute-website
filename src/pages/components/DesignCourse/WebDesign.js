import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function WebDesign() {
    return (
        <>
            <Scrollable />
            <div id="header">
                <Header />
            </div>
            <div id="bannerSlider" className='position-relative'>
                <div className="lowerDesign">
                    <img src={LowerDesign} alt="Lower_design" width={"100%"} />
                </div>
                <PageTitle title={`Master In Web Design`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Web Design Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    Web design encompasses many different skills and disciplines in the production and maintenance of websites. Other web design areas include graphic web design, user interface design authoring, standardised code and proprietary software, user experience design, and search engine optimization.
                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>8 Months</span></button>
                                    <button className='rounded text-center p-2 px-3'>Daily Time <span style={{ color: '##343f52' }}>2 Hours</span></button>
                                </div>
                                <div className="Course_details">
                                    <div className="title mt-4 mb-3 text-4">Included In This Course</div>
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
                                <div id="web-fronted-coding" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne"> Web Front end Coding </h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Create a Website
                                                Structure Using HTML, HTML5</li>
                                            <li>Formatting Web Layouts Using CSS3</li>
                                            <li>Build Responsive Web Design Using Media Query Using Framework Like
                                                Bootstrap</li>
                                            <li>Add Some Cool Effects Using JavaScript & jQuery</li>
                                            <li>Converting PSD to HTML</li>
                                            <li>Adding Animation, Scrolling Effects, and Many More Effects Using JS &
                                                JQuery</li>
                                            <li>Optimizing Website Using SEO Rules</li>
                                            <li>Launching Our Website</li>
                                            <li>Learning About Domain, Hosting, and Maintain Live Website Using Server
                                                Panel</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">SOFTWARE TO LEARN:</h6>
                                            <p class="fs-14 text-muted mb-2">HTML5,
                                                CSS3, SASS, LESS, Media Query, Bootstrap, Tailwind CSS, jQuery (Atch.), SEO,
                                                FTP, Hosting</p>
                                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                                            <p class="mb-2 fs-14 text-muted mb-2">6 Months</p>
                                        </div>
                                    </div>

                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3 mt-4" data-bs-toggle="collapse" data-bs-target="#collapseOne" id="javascript">JavaScript</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-4">
                                            <li>JavaScript Importance</li>
                                            <li>ECMAScript & Versions & Install Environment Scratch JS</li>
                                            <li>Show different Types of Output Methods (alert, console, document, inner
                                                HTML)</li>
                                            <li>Syntax and Operations Of JS</li>
                                            <li>Conditions & Looping</li>
                                            <li>Different types of Variable Like(var, const, let)</li>
                                            <li>Array and String With Different Methods</li>
                                            <li>Functions (Function Types, Return Types)</li>
                                            <li>Working with Objects(Prototype, Methods)</li>
                                            <li>Use Different Types of Objects LIKE (Date, Math, Boolean, and Number)</li>
                                            <li>Understanding ES6 Concept</li>
                                            <li>Understanding JSON (JavaScriot Object Notation)</li>
                                            <li>Working with JSON (JSON.parse, JSON.stringify, JSON object, JSON array)</li>
                                            <li>Storing Local data in javascript with JSON local storage</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">SOFTWARE TO LEARN:</h6>
                                            <p class="fs-14 mb-3 text-muted ">JavaScript</p>
                                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                                            <p class="mb-3 fs-14 text-muted ">2 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="course-overview" class="course-description pt-5">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Master In Web Designing Course Overview</h4>
                                    <div class="ps-3">
                                        <p className='fs-14'>Today, the threat of Commercialisation is increasing in the Digital world. It also requires that the digital Business be present digitises, and it requires that the Business has a strong digital platform and its Website. For the Website, we need a web designer, so in the current duration or future, there is lots of scope for designers. </p>
                                        <p className='fs-14 mb-4'>This web designing can be considered the best course of study for the student with functionality and creativity
                                            in which the student uses their creative power according to personal skills and kindness. Students also get information from different zones
                                            so they can live their dreams in their own ways. Web designing can be considered the start of a particular style in which a day student can prove
                                            himself as a web designer by using their inner imagination and creativity. Anyone can do this course from standard 10th pass to postgraduate, which
                                            is like a gold mine for those graduating in the media field. As mentioned above, this field is handy each term, and there are many opportunities to pursue a successful career.</p>
                                        <div class="row">
                                            <ul class="course-point col-lg-6">
                                                <li>Introduction to Web Technologies</li>
                                                <li>Careers in Web Technologies and Job Roles</li>
                                                <li>How does the Website Work?</li>
                                                <li>Client Side Scripting and Server Side Scripting</li>
                                            </ul>
                                            <ul class="course-point col-lg-6">
                                                <li>Domains and Hosting</li>
                                                <li>Static Website Designing, Dynamic Websites, and WebApps</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-faq mt-5">
                                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">FAQ</h3>
                                    <div class="faq-item  mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Who can join the Web design Course?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li>Graduate Students</li>
                                                <li>Interested in Designing & Internet</li>
                                                <li>Housewife, Businessmen</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item  mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Why should I learn Web Design?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li>Rich Learning Content</li>
                                                <li>Taught by Experienced Prof.</li>
                                                <li>Industry Oriented Projects</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item  mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            What after the Web Designing course?
                                        </h4>
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
                            <div className="col-lg-4 mb-4">
                                <InqueryForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeNewsletter />
            <Footer />
        </>
    )
}

export default WebDesign;

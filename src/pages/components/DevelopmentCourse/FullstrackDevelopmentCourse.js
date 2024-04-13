import React from 'react'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import Header from '../../globle/Header';
import PageTitle from '../PageTitle';
import Footer from '../../globle/Footer';
import InqueryForm from '../../extra/InqueryForm';
import html from "../../../assets/images/language/html.png";
import css from "../../../assets/images/language/css.png";
import jquery from "../../../assets/images/language/jquery.png";
import Bootstrap from "../../../assets/images/language/bootstrap.png";
import c from "../../../assets/images/language/c.png";
import Javascript from "../../../assets/images/language/js.png";
import ECMAScript from "../../../assets/images/language/Expressjs.png";
import Angular from "../../../assets/images/language/angular.png";
import Reactjs from "../../../assets/images/language/reactjs.webp";
import Vue from "../../../assets/images/language/vuejs.png";
import Nodejs from "../../../assets/images/language/nodejs.png";
import Expressjs from "../../../assets/images/language/Expressjs.png";
import MongoDB from "../../../assets/images/language/monogdb.png";
import SubscribeNewsletter from '../../utils/SubscribeNewsletter';
import Scrollable from '../../../Scrollable';
import { Link } from 'react-router-dom';



function FullstrackDevelopmentCourse() {
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
                <PageTitle title={`Master In Full Stack Development`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615'}}>  Full-Stack Development Course
                                    </span>
                                </div>
                                <div className="Master_course_desc">
                                    Jbs It Institute are one of Surat's most trusted and oldest Full stack development training institutes.
                                    Here full stack classes are conducted by those faculties who have been part of industries and worked on various projects.
                                    The Jbs It Institute ensures every student is fully trained and capable of being a full stack expert.
                                    Once the training course is completed, Institute also provides they are placed on the best 
                                    <Link to="/fullstackdevelopment" style={{ color: '#3f78e0' }}>Full stack development course in Surat</Link> for the job.

                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3 fs-16'>Course Duration <span style={{ color: '##343f52' }}>15 Months</span></button>
                                    <button className='rounded text-center p-2 px-3 fs-16'>Daily Time <span style={{ color: '##343f52' }}>2 Hours</span></button>
                                </div>
                                <div className="Eligibility_course">
                                    <div className="title">Eligibility For This Course</div>
                                    <ul className='mb-4'>
                                        <li className='fs-14'>PG, UG, Diploma/ 12th pass out (Minimum 50%)</li>
                                    </ul>
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
                                <div className="Language_full">
                                    <div className="row item-container flex-wrap justify-center">
                                        <CourseLogo img={html} title={"HTML"} />
                                        <CourseLogo img={css} title={"CSS"} />
                                        <CourseLogo img={jquery} title={"Jquery"} />
                                        <CourseLogo img={Bootstrap} title={"Bootstrap"} />
                                        <CourseLogo img={c} title={"C"} />
                                        <CourseLogo img={Javascript} title={"Javascript"} />
                                        <CourseLogo img={ECMAScript} title={"ECMAScript"} />
                                        <CourseLogo img={Angular} title={"Angular Js"} />
                                        <CourseLogo img={Reactjs} title={"React JS"} />
                                        <CourseLogo img={Vue} title={"Vue Js"} />
                                        <CourseLogo img={Nodejs} title={"Node js"} />
                                        <CourseLogo img={Expressjs} title={"Expresss Js"} />
                                        <CourseLogo img={MongoDB} title={"MongoDB"} />
                                    </div>
                                </div>
                                <div id="web-front-coding" class="course-description pt-2 mt-3">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse"
                                     data-bs-target="#collapseOne">Web Front end Coding</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark">Front end Coding</li>
                                            <li>Create a Website Structure Using HTML, HTML5</li>
                                            <li>Formatting Web Layouts Using CSS3</li>
                                            <li>Build Responsive Web Design Using Media Query Using Framework Like
                                                Bootstrap</li>
                                            <li>Add Some Cool Effects Using JavaScript & jQuery</li>
                                            <li>Converting PSD to HTML</li>
                                            <li>Adding Animation, Scrolling Effects, and Many More Effects Using JS
                                                &
                                                JQuery</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p className='my-4 text-muted fs-16'>HTML, CSS3, Bootstrap, jQuery</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="master-back-developer" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Programming Foundation</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading" id="c">C
                                                Language
                                            </li>
                                            <li>Introduction of C</li>
                                            <li>History & Structure of C.</li>
                                            <li>Compile and Run Command.</li>
                                            <li>Variable & Data Type.</li>
                                            <li>Constant & Operator</li>
                                            <li>Decision Making & Control Statement.</li>
                                            <li>Local & Global Variable.</li>
                                            <li>Array (1D & 2D And Multi-Dimensional)</li>
                                            <li>String</li>
                                            <li>Function</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p class="fs-14 my-4" id="javascript">C</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="master-back-developer" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne"> Advanced Programming</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">
                                                Javascript
                                            </li>
                                            <li>JavaScript Importance</li>
                                            <li>ECMAScript & Versions & Install Environment Scratch JS </li>
                                            <li>Show different Types of Output Methods (alert, console, document,
                                                inner HTML)</li>
                                            <li>Syntax and Operations Of JS</li>
                                            <li>Conditions & Loopingt</li>
                                            <li>Different types of Variable Like (var, const, let)</li>
                                            <li>Array and String With Different Methods</li>
                                            <li>Functions (Function Types, Return Types)</li>
                                            <li>Working with Objects ( Prototype, Methods )</li>
                                            <li>Use Different Types of Objects LIKE (Date, Math, Boolean, and Number)
                                            </li>
                                            <li>Understanding Class and (Objects, constructor, Prototype, Inheritance)
                                            </li>
                                            <li>Working with JavaScript DOM (Document Object Module)</li>
                                            <li>Understanding ES6 Concept</li>
                                            <li>Arrows</li>
                                            <li>Classes</li>
                                            <li>Iterators + for..of</li>
                                            <li>Modules & Module Loaders</li>
                                            <li>Proxies, Symbols, Promises, then, next</li>
                                            <li>Understanding JSON (JavaScript Object Notation)</li>
                                            <li>Working with JSON ( JSON.parse, JSON.stringify, JSON object, JSON array)
                                            </li>
                                            <li>Storing Local Data in Javascript with JSON local storage</li>
                                            <li>Data Structure & Algorithm</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark py-2 fs-15">LANGUAGES TO LEARN:</h6>
                                            <p class="fs-16 my-2">JavaScript, ECMAScript</p>
                                        </div>
                                    </div>

                                </div>
                                <div id="master-back-developer" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne"> JS Frameworks</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">
                                                Angular
                                                Js
                                            </li>
                                            <li>Angular Importance and Installing NPM</li>
                                            <li>Understanding Directory Structures</li>
                                            <li>Understanding Data Binding and ng Serve commands</li>
                                            <li>Working with MVC (Model, View, Controller)</li>
                                            <li>Scope and filtering (custom filter)</li>
                                            <li>Working with tables and select</li>
                                            <li>Working with (HTTP) Request and Response</li>
                                            <li>Working with DOM & ng events</li>
                                            <li>Understanding Form and Validations</li>
                                            <li>Understanding SQL with Angular</li>
                                            <li>Working with Routings & Services</li>
                                            <li>Setup Custom Template</li>
                                            <li>Working with API and Request</li>
                                            <li id="reactjs">Experience (Class and Objects, constructor, Prototype,
                                                Inheritance)</li>
                                            <li>Working with JavaScript DOM ( Document Object Module )</li>
                                        </ul>
                                        <div class="course-divider">
                                            <span>OR</span>
                                        </div>
                                        <ul class="course-points my-0">
                                            <li class="text-dark bullet-heading">React
                                                Js
                                            </li>
                                            <li>Introduction And Enviourment of ReactJs</li>
                                            <li>Version Control(GIT)</li>
                                            <li>ES6 Concept</li>
                                            <li>Fundamentals Of React</li>
                                            <li>React Bootstrap</li>
                                            <li>React Events and Local Storage</li>
                                            <li>Form Handling</li>
                                            <li>Routing & Navigation</li>
                                            <li>Promises</li>
                                            <li>Basic and Advanced Hooks</li>
                                            <li>Working with Radux</li>
                                            <li id="vuejs">Firebase(Authentication, Firestore, Storage, Hosting)</li>
                                        </ul>
                                        <div class="course-divider"> <span>OR</span></div>
                                        <ul class="course-points">
                                            <li class=" text-dark bullet-heading">Vue js</li>
                                            <li>Introduction and Environment of Vue.js</li>
                                            <li>DOM interaction with Vue.js</li>
                                            <li>Components</li>
                                            <li>Event Handling</li>
                                            <li>Listing</li>
                                            <li>Data communication between components</li>
                                            <li>Form Handling</li>
                                            <li>Navigation</li>
                                            <li>State management</li>
                                            <li id="nodejs">Working with REST API</li>
                                            <li>Animation and Transition</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class=" text-dark bullet-heading">
                                                Node Js
                                            </li>
                                            <li>Understanding Developer Tools And Setup Node Js Environment</li>
                                            <li>Installing NPM (Globally & Locally)</li>
                                            <li>Understanding Event Emitter & REPL and CMD</li>
                                            <li>Make server with node js and Handle HTTP REQUEST and RESPONSE.</li>
                                            <li>How to attach server Static Resources & Middleware & File Streaming</li>
                                            <li>Different Types of Web Application Frameworks (Express, Koa, Hapi,
                                                Others)</li>
                                            <li>Understanding MVC Framework Express JS</li>
                                            <li>Setup MongoDB and Connect with Nodejs</li>
                                            <li>Callback Functionality (Promises and Bluebird Promises)</li>
                                            <li>Working with Different Type Module (Node Mailer, PDFMAKE, Socket0,
                                                Passport JS, Express-session, Cookie Parser, connect-flash)</li>
                                            <li>Installing Passport js and making Manual Authentication</li>
                                            <li>Working with API + JWT (JSON WEB TOKEN) Management</li>
                                            <li>Rest full API (Social Media Integration – Google, Facebook)</li>
                                            <li>Chat Application with SOCKET I0</li>
                                            <li id="express">Debugging of Node Js application</li>
                                            <li>Deployment Project In Heroku</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Express Js
                                            </li>
                                            <li>Install express and Environment.</li>
                                            <li>Setup express Routing and methods.</li>
                                            <li>Setup express Middleware</li>
                                            <li>Setup static files and template</li>
                                            <li>cookies and sessions </li>
                                            <li>setup authentication </li>
                                            <li>Restful APIs Google, Facebook</li>
                                            <li>Generate Token (JWT) (Crud Operation)(GET,POST,DELETE,PUT,PATCH)</li>
                                        </ul>
                                        <div class="border p-2 px-3 mb-3 rounded d-inline-block">
                                            <h6 class="text-dark my-3 fs-15" id="Mongodb">LANGUAGES TO LEARN:</h6>
                                            <p class="fs-14 mb-2">Angular Js, Vue Js, React Js, Node Js, Express Js</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="web-front-coding" class="course-description pt-2">
                                    <h4 class="alert-dark p-2 fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">MongoDB</h4>
                                    <div class="ps-3">
                                        <ul class="course-point">
                                            <li>Install express and Environment.</li>
                                            <li>Setup express Routing and methods.</li>
                                            <li>Setup express Middleware</li>
                                            <li>Setup static files and template</li>
                                            <li>cookies and sessions </li>
                                            <li>setup authentication </li>
                                            <li>Restful APIs Google, Facebook</li>
                                            <li>Generate Token (JWT) (Crud Operation)(GET,POST,DELETE,PUT,PATCH)</li>
                                        </ul>
                                        <div class="border p-2 px-3  my-2 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p className='text-muted mb-2 fs-14'>MongoDB</p>
                                        </div>
                                    </div>

                                    <div class="text-center">
                                        <div class="border p-3 rounded d-inline-block mt-5 text-center">
                                            <h4 class="text-dark fs-16">Included in Career & Master Courses:</h4>
                                            <div class="d-flex flex-wrap mt-3">
                                                <h4 class="text-center alert-dark p-2 fs-15  text-muted rounded ps-3 me-5">
                                                    Personality
                                                    Development</h4>
                                                <h4 class="text-center alert-dark p-2 fs-15  text-muted rounded ps-3 ">Interview
                                                    Techniques, Freelancing
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-faq mt-5">
                                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">FAQ</h3>
                                    <div class="faq-item">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Who can join Full-Stack Development Course?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-4 fs-15 ">
                                                <li>12 pass or diploma or engineering novice students.</li>
                                                <li>A person interested in learning about logical things</li>
                                                <li>Web Designer who wants to learn to program.</li>
                                                <li>Individuals who want to become software developers.</li>
                                                <li>A person who wants to pursue higher studies in IT or go abroad
                                                    for a job.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Why should I learn Full-stack Development?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-4 fs-15 ">
                                                <li>Convenient field.</li>
                                                <li>Many scopes in India and even out of the country</li>
                                                <li>Increasing scopes day by day</li>
                                                <li>An ample opportunity to become an Independent</li>
                                                <li>Most of the work is done by using websites and the internet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            What is the advantage of being a full-stack developer?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-4  fs-15 ">
                                                <li>You can master all the techniques involved in a development project.</li>
                                                <li>You can make a prototype very rapidly.</li>
                                                <li>You can provide help to all the team members.</li>
                                                <li>You can reduce the cost of the project.</li>
                                                <li>You can reduce the time used for team communication.</li>
                                                <li>You can switch between front and back-end development based on requirements.
                                                </li>
                                                <li>You can better understand all aspects of new and upcoming technologies.</li>
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

export default FullstrackDevelopmentCourse;





export const CourseLogo = ({ img, title }) => {
    return (
        <>
            <div className="grid-item">
                <div className="item-inner">
                    <div className="logo">
                        <img src={img} alt="Language" />
                    </div>
                    <div className="title">{title}</div>
                </div>
            </div>
        </>
    )
};



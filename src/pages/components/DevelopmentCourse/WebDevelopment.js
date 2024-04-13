import React from 'react'
import Header from '../../globle/Header';
import Footer from '../../globle/Footer';
import PageTitle from '../PageTitle';
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm';
import SubscribeNewsletter from '../../utils/SubscribeNewsletter';
import Scrollable from '../../../Scrollable';


function WebDevelopment() {
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
                <PageTitle title={`Master In Web Development`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Web Development Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    Web development is the work involved in developing a Web site for the Internet or an Internet.
                                    Web development can range from a simple single static page of plain text to complex web applications,
                                    electronic businesses, and social network services.
                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>12 Months</span></button>
                                    <button className='rounded text-center p-2 px-3'>Daily Time <span style={{ color: '##343f52' }}>2 Hours</span></button>
                                </div>
                                <div className="Module rounded p-2 fs-20 text-center alert-primary my-4">
                                    Course Modules
                                </div>
                                <div id="web-front-coding" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Web Front end Coding</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark">
                                                Create a Website Structure Using HTML, HTML5
                                            </li>
                                            <li>Create a Website Structure Using HTML, HTML5</li>
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
                                            <h6 class="text-dark fs-15 mb-6">SOFTWARE TO LEARN:</h6>
                                            <p className='mb-2 fs-16 text-muted '>HTML5, CSS3, SASS, LESS, Media Query, Bootstrap, Tailwind CSS, jQuery (Atch.), SEO, FTP, Hosting</p>
                                            <h6 class="text-dark fs-15 mb-6">TIME DURATION:</h6>
                                            <p class="mb-12 fs-16 text-muted">6 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="master-back-developer" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Master in Web Back end Developing</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="bullet-heading">PHP</li>
                                            <li>Introduction of PHP &
                                                PHP MySQL server</li>
                                            <li>Control structures in PHP</li>
                                            <li>Working with Array and String Function</li>
                                            <li>Database Connectivity with MySQL</li>
                                            <li>Convert Html File into PHP</li>
                                            <li>Manage Admin Panel with Database using OOPS Concept</li>
                                            <li>Working with files and Directories</li>
                                            <li>State management</li>
                                            <li>Introduction of JQuery/Ajax/ JavaScript</li>
                                            <li>Client-side(JS & JQ) and Server Side(PHP) Validation</li>
                                        </ul>
                                        <ul class="course-points my-3">
                                            <li class="text-dark bullet-heading">
                                                Laravel
                                            </li>
                                            <li>Introduction to Laravel</li>
                                            <li>Laravel Installation</li>
                                            <li>Routing in Laravel</li>
                                            <li>MVC in Laravel</li>
                                            <li>Caching in Laravel</li>
                                            <li>Event subscribers in Laravel</li>
                                            <li>Package Development</li>
                                            <li>Templates</li>
                                            <li>Testing in Laravel</li>
                                            <li>Database Configuration</li>
                                            <li>Helpers in laravel</li>
                                            <li>Laravel Pagination & Security</li>
                                            <li>Authentication Facade</li>
                                            <li>Validation in Laravel</li>
                                            <li>Eloquent OMR</li>
                                            <li>Artisan Command Line Interface</li>
                                            <li>Deploy Application using Laravel</li>
                                            <li>Payment Gateway</li>
                                        </ul>
                                        <div class="course-divider my-3">
                                            <span>OR</span>
                                        </div>
                                        <ul class="course-points my-3">
                                            <li class="text-dark bullet-heading">
                                                Java Script
                                            </li>
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
                                            <li>Working with JSON (JSON.parse, JSON.stringify, JSON object, JSON array)
                                            </li>
                                            <li>Storing Local data in javascript with JSON local storage</li>
                                        </ul>
                                        <ul class="course-points my-3">
                                            <li class="text-dark bullet-heading">Node JS</li>
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
                                            <li>Working with Different Type Module (Node Mailer, PDFMAKE,
                                                Passport JS, Express-session, Cookie Parser, connect-flash)</li>
                                            <li>Installing Passport js and making Manual Authentication</li>
                                            <li>Working with API + JWT (JSON WEB TOKEN) Management</li>
                                            <li>Rest full API (Social Media Integration – Google, Facebook)</li>
                                            <li>Chat Application</li>
                                            <li>Debugging of Node Js application</li>
                                            <li>Deployment Project In Heroku</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15 my-2">SOFTWARE TO LEARN:</h6>
                                            <p class="fs-14 mb-3 text=muted">MY SQL, AJAX, JQuery, Live Portfolio Marketing, PHP Core or
                                                Javascript, Framework (Node js. Or Laravel) PD, Entrepreneur &
                                                Freelancing</p>
                                            <h6 class="text-dark fs-15 ">TIME DURATION:</h6>
                                            <p class="mb-0 fs-14 text-muted" >6 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        Master In Web Development Course Overview</h4>
                                    <div class="ps-3">
                                        <p className='text-muted fs-14'>Web development is the phase after web designing; even after the design of your business website is ready, still, If your business needs a digital platform, you must develop a website. Some developers create it and make this website functional. In a concise form, web development and web designing rely on each other, which is equally crucial for your successful business. You can enroll for <a href="https://www.rnwmultimedia.edu.in/game-design-development-course-surat.php">Game Design Course in Surat</a>. This course can be done by anyone from standard 10th pass out to postgraduate degree holders and those who are graduating in the field of media for them, and it is likely to be a very important subject. For this field, there are lots of opportunities in software companies.</p>
                                        <p className='text-muted fs-14 mb-4'>In web development, every website function is developed according to its task, which can then be used in surfing the web.
                                            The web developer needs to be a website owner, so there is a high demand for web developers in this decade and the future. Thus this course can also be considered
                                            a canonical skill enhancement that allows students to increase their technical skills. We are also offering
                                            aweb design course in Surat you can get more details on our website.
                                        </p>
                                    </div>
                                </div>
                                <div class="course-faq mt-5">
                                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">FAQ</h3>
                                    <div class="faq-item mb-4">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3 ">
                                            Who can join Web Development Course?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-3 fs-14">
                                                <li>12 pass or diploma or engineering novice students.</li>
                                                <li>A person interested in learning about logical things</li>
                                                <li>Web Designer who wants to learn to program</li>
                                                <li>Individuals who want to become software developers.</li>
                                                <li>A person who wants to pursue higher studies in IT or go abroad for a
                                                    job.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-4">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3 ">
                                            Why should I learn Web Development?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-3 fs-14">
                                                <li>Convenient field.</li>
                                                <li>Many scopes in India and even out of the country</li>
                                                <li>Increasing scopes day by day</li>
                                                <li>An ample opportunity to become an Independent</li>
                                                <li>Most of the work is done by using websites and the internet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-4">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3 ">What after the Web Development course?</h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 mb-3 fs-14">
                                                <li>Huge scope to get a job as a Web Developer in Multinational IT Companies</li>
                                                <li>You can start up your company with a minimum investment.</li>
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

export default WebDevelopment;

import React from 'react'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import Header from '../../globle/Header';
import PageTitle from '../PageTitle';
import Footer from '../../globle/Footer';
import InqueryForm from '../../extra/InqueryForm';
import SubscribeNewsletter from '../../utils/SubscribeNewsletter';
import Scrollable from '../../../Scrollable';
import { Link } from 'react-router-dom';

function Androiddevelopment() {
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
                <PageTitle title={`Master In Android Development`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Android Course
                                    </span>
                                </div>
                                <div className="Master_course_desc">
                                    Developing Android Apps is the foundation of our advanced Android curriculum.
                                    This course blends theory and practice to help you build great apps correctly.
                                    In this course, you’ll work with instructors step-by-step to build a cloud-connected
                                    Android app and learn best practices of mobile development, and Android development in
                                    particular. If you are interested, you can also check out <Link to="/webdevelopment" style={{ color: '#2C529B' }}>
                                    Web Development Courses in Surat.</Link>
                                    We are the leading institute in Surat for website developing course.
                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>12 Months</span></button>
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
                                <div id="programme-foundation" class="course-description pt-2">
                                    <h4 class="alert-dark p-3  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Programming Foundation</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">C Language
                                            </li>
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
                                        </ul>
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">C++ Language
                                            </li>
                                            <li>Intro. of OOP</li>
                                            <li>Declaration of Variable and Data Types.</li>
                                            <li>
                                                C++
                                                Character Function.</li>
                                            <li>Control Statement and Array.</li>
                                            <li>Info. of Class and Object.</li>
                                            <li>Inheritance & Polymorphism.</li>
                                            <li>Data Hiding & Encapsulation.</li>
                                            <li>Overloading & Reusability.</li>
                                            <li>Constructor & Destructor.</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">Java
                                            </li>
                                            <li>Fundamentals of Java</li>
                                            <li>Looping and Iteration</li>
                                            <li>Wrapper Class & CLA</li>
                                            <li>Java Important Classes</li>
                                            <li>Encapsulation</li>
                                            <li>Inheritance</li>
                                            <li>Abstraction</li>
                                            <li>Polymorphism</li>
                                            <li>Package</li>
                                            <li>Exception Handling</li>
                                        </ul>
                                        <div class="border p-2 px-4 mb-3 rounded d-inline-block">
                                            <div class="text-dark fw-600 fs-15  mb-2 ">LANGUAGES TO LEARN:</div>
                                            <p class="mb-2 fs-14">C, C++,JAVA</p>
                                            <div class="text-dark fw-600 fs-15 mb-2 ">TIME DURATION:</div>
                                            <p class="mb-2 fs-14">2 Months</p>
                                        </div>
                                    </div>

                                </div>
                                <div id="core-Android" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Core Core Android
                                    </h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">
                                                Application development
                                            </li>
                                            <li>Introduction & Core Building Block.</li>
                                            <li>UI Widgets like Textview, ImageView, Toast, ImageButton, Checkbox, and RadioButton.</li>
                                            <li>Spinner and Dialog (Alert Dialog, Custom Dialog, Rating Dialog)</li>
                                            <li>Listview, Webview, and Gridview.</li>
                                            <li>Intent(Implicit and Explicit Intent).</li>
                                            <li>How to Create Multiple Activity with Passing Data.</li>
                                            <li>How to Create Splash Screen and Toolbar.</li>
                                            <li>Advanced View(Carview, Circleimageview, and Library integration).</li>
                                            <li>Image Loader Library(Glide, Piccaso, and Universal).</li>
                                            <li>Menu(Options Menu) & Shared Preference.</li>
                                            <li>Image Access (Camera & Gallery).</li>
                                            <li>Recycler view with Model Class.</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p className='my-3 text-muted fs-14'>Android Studio</p>
                                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                                            <p className='my-3 text-muted fs-14'>2 Months</p>
                                            <h6 class="text-dark fs-15">PROJECTS:</h6>
                                            <p class="mb-0 text-muted fs-16">
                                                1. Advance UI Maker 2. MobiApp 3. Simple Quotes App</p>
                                        </div>
                                    </div>

                                </div>
                                <div id="advance-Android" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        Advance Android</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">
                                                Advance Android</li>
                                            <li>Advance Dialog(Datepicker and Timepicker dialog).</li>
                                            <li>Fragment(Static fragment and Dynamic fragment).</li>
                                            <li>Simple Viewpager(Image Slider).</li>
                                            <li>Tab layout(Viewpager with fragment).</li>
                                            <li>Navigation Drawer(Default and Custom Navigation Drawer).</li>
                                            <li>SQLite Database(Crud Operation).</li>
                                            <li>External Database.</li>
                                            <li>API Calling(JSON Parsing, Volley library, Get and Post Method).</li>
                                            <li>Retrofit(API Calling Get & Post Method with Gson).</li>
                                            <li>Firebase(Firebase Auth, Firebase Database, Firebase Storage).</li>
                                            <li>Runtime Permission.</li>
                                            <li>Social Media Integration(Facebook login and Gmail login).</li>
                                            <li>Apk Generate(Build Apk, SignApk, Create js file, Create Bundle).</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">Kotlin
                                            </li>
                                            <li>Figma</li>
                                            <li>Data type, Constant & Variable.</li>
                                            <li>Control Structure & Looping.</li>
                                            <li>Function (Create a Function).</li>
                                            <li>Class and Object</li>
                                            <li>Android View.</li>
                                            <li>All Events (Click Event, Long ClickEvent).</li>
                                            <li>Recycler view with Model Class.</li>
                                            <li>SQLite Database (Crud Operation).</li>
                                            <li>Retrofit (Get and Post Method with Gson)</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">UI / UX Design
                                            </li>
                                            <li>Adobe Figma</li>
                                            <li>Introduction of Figma</li>
                                            <li>Select, Rectangle, Ellipse, Line, Polygon & Text tools.</li>
                                            <li>Pen Tool, Artboard Tool, Zoom Tool Appearance Option.</li>
                                            <li>Clipping Mask, Repeat Grid, Scrolling Option Working with Assets and Layer, Grouping and Ungrouping</li>
                                            <li>Using Adobe Figma Kits & Plugins.</li>
                                            <li>Sharing your Adobe Figma Designs.</li>
                                            <li>Viewing Design on Mobile.</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p class="mb-2 fs-16 text-muted ">1LANGUAGES TO LEARN.</p>

                                            <h6 class="text-dark fs-15">TIME DURATION:
                                            </h6>
                                            <p class="mb-2 fs-16 text-muted ">4 Months</p>

                                            <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                                            <p class="mb-2 fs-16 text-muted ">TIME DURATION:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="aso-earning" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Aso & Earning & PHP API</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">
                                                Aso & Earning
                                            </li>
                                            <li>Introduction of ASO</li>
                                            <li>Difference between ASO & SEO.</li>
                                            <li>Various Plugins.</li>
                                            <li>How to create an account on Admob.</li>
                                            <li>Admob with android studio.</li>
                                            <li>Generate signed Apk & Proguard.</li>
                                            <li>Facebook Ads.</li>
                                            <li>Facebook Ads with Android Studio.</li>
                                            <li>Keyword Optimization.</li>
                                            <li>Keyword Planner.</li>
                                            <li>Onpage Aso.</li>
                                            <li>Offpage Aso.</li>
                                            <li>Color Combination.</li>
                                            <li>Google Ads.</li>
                                            <li>Blogger.</li>
                                            <li>Review Option.</li>
                                            <li>How to Upload Apps in the Play store.</li>
                                            <li>Grammar &amp; Plagiarism Checker.</li>
                                            <li>Upwork & Freelancer.</li>
                                            <li>Application Reverse Engineering.</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="fw-bold text-dark bullet-heading">
                                                PHP API
                                            </li>
                                            <li>Introduction of PHP & Server</li>
                                            <li>File uploading in the server</li>
                                            <li>Database Connectivity</li>
                                            <li>CRUD operations</li>
                                            <li>API Introduction</li>
                                            <li>HTTP Request methods</li>
                                            <li>User authentication APIs</li>
                                            <li>CRUD APIs</li>
                                            <li>Admin Panel management</li>
                                            <li>Category and subcategory handling in DB </li>
                                            <li>File uploading, alerts, and dialogs</li>
                                            <li>Included in Career & Master Course
                                            </li>
                                            <li>PD (Included)</li>
                                            <li>Entrepreneur & Freelancing (Included)</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">LANGUAGES & SOFT. TO LEARN:</h6>
                                            <p class="fs-16 my-3">Aso, PHP API</p>

                                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                                            <p class="fs-16 my-3">4 Months</p>

                                            <h6 class="text-dark fs-15">PROJECTS:</h6>
                                            <p class="mb-0 fs-16 my-3">1. Create an Account in the Play store 2. Application Marketing with Adwords.</p>
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

export default Androiddevelopment;

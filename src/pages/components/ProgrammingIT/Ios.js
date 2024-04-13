import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function Ios() {
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
                <PageTitle title={`IOS`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> IOS Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        Creating portable applications for Apple equipment, including iPad, iPhone, and iPod Touch is an iOS application advancement.
                                        The product is written in the Objective-C or Swift programming language and conveyed to the App Store for the clients to download.
                                    </p>
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

                                <div id="programming-foundation" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Programming Foundation</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">C Language</li>
                                            <li>Intro of C Language</li>
                                            <li>History & Structure of C.</li>
                                            <li>Compile and Run Command.</li>
                                            <li>Variable & Data Type.</li>
                                            <li>Constant & Operator</li>
                                            <li>Decision Making & Control Statement.</li>
                                            <li>Local & Global Variable.</li>
                                            <li>Loops (While, Do While & For)</li>
                                            <li>Array (1D & 2D And Multi-Dimensional)</li>
                                            <li>String</li>
                                            <li>Function</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">C++ Language</li>
                                            <li>Intro. of OOP</li>
                                            <li>Declaration of Variable and Data Types.</li>
                                            <li>C++ Character Function.</li>
                                            <li>Control Statement and Array.</li>
                                            <li>Info. of Class and Object.</li>
                                            <li>Inheritance & Polymorphism.</li>
                                            <li>Data Hiding & Encapsulation.</li>
                                            <li>Overloading & Reusability.</li>
                                            <li>Constructor & Destructor.</li>
                                            <li>Inline & Virtual Function.</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">SOFTWARE TO LEARN:</h6>
                                            <p className='text-muted mb-2 fs-14'>C, C++</p>
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="mb-2 text-muted fs-14">3 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="core-ios" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Core iOS (Swift)</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Core Swift</li>
                                            <li>Basic Core Concepts</li>
                                            <li>Overview of Objective C</li>
                                            <li>Basic Information about iOS</li>
                                            <li>Introduction of XCode</li>
                                            <li>Basic Concepts with playground</li>
                                            <li>IB Outlets & IB Actions</li>
                                            <li>Storyboard & XIB</li>
                                            <li>Delegate & Protocol</li>
                                            <li>Text field & text view and Delegate methods of them</li>
                                            <li>Ui Controls</li>
                                            <li>Api Calling</li>
                                            <li>Constraints</li>
                                            <li>Dynamic UI Controls</li>
                                            <li>Cocoa Pods</li>
                                            <li>Local Database</li>
                                            <li>Core Database</li>
                                            <li>Tab Bar</li>
                                            <li>App Uploading</li>
                                        </ul>
                                        <div class="border p-2 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">LANGUAGES TO LEARN:</h6>
                                            <p class="fs-14 mb-2 text-muted">Core Swift</p>
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="fs-14 mb-2 text-muted">3 Months</p>
                                            <h6 class="text-dark fs-16">PROJECTS :</h6>
                                            <p class="mb-2 fs-14 text-muted">1. Brain Games 2.Card Games 3. Expense Manager App. 4. Quiz App 5.EMI Calculator 6.Health App 7.RTO Exam app. 8. Contact Duplicate App 9. Tic-Tac-Toe Game 10.Truth & Dare Game 11.QR Code & Barcode Scanner & Generator app.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="advance-ios" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Advanced iOS (Swift)</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Advance Swift</li>
                                            <li>Models</li>
                                            <li>Coding Intrusions as a Developer</li>
                                            <li>MVC Architecture</li>
                                            <li>MVVM Architecture</li>
                                            <li>Map, Filter, and Reduce</li>
                                            <li>SideBar</li>
                                            <li>Advance API Calling</li>
                                            <li>Push Notifications</li>
                                            <li>Firebase Integrations</li>
                                            <li>Project Architecture</li>
                                            <li>Dropdown, Pop-Ups</li>
                                            <li>Use Controls in Advance</li>
                                            <li>App Group</li>
                                            <li>Thread Controlling</li>
                                        </ul>
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">UI / UX Design</li>
                                            <li>Figma</li>
                                            <li>Introduction of Figma</li>
                                            <li>Select, Rectangle, Ellipse, Line, Polygon & Text tools.</li>
                                            <li>Pen Tool, Artboard Tool, Zoom Tool Appearance Option.</li>
                                            <li>Clipping Amsk, Repeat Grid, Scrolling Option Working with Assets and Layer, Grouping and Ungrouping</li>
                                            <li>Crautirg Cloud Acceurt & Introducticn of Prototype Preview.</li>
                                            <li>Using Figma Kimts & Plugins.</li>
                                            <li>Sharing your Figma Designs.</li>
                                            <li>Viewing Design on Mobile.</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">LANGUAGES TO LEARN:</h6>
                                            <p class="fs-14 text-muted mb-2">Advance Swift</p>
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="fs-14 text-muted mb-2">3 Months</p>
                                            <h6 class="text-dark fs-16">PROJECTS :</h6>
                                            <p class="mb-2 fs-14 text-muted">1. Multi-vendor app 2.Queue Management app 3.Video Streaming app 4. Weather App 5.Notes App 6.MoodTracker app 7.Chart app 8.Cab Booking app 9. Survey apps 10.AR apps</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="aso" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">ASO</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">App Store Optimization</li>
                                            <li>Introduction of ASO</li>
                                            <li>Keyword Optimization.</li>
                                            <li>Keyword Planner.</li>
                                            <li>ASO tool of Apple</li>
                                            <li>Google Ads.</li>
                                            <li>Google Analytics</li>
                                            <li>Google Ads with XCode</li>
                                            <li>Onpage Aso.</li>
                                            <li>FB, Instagram & Linkedin</li>
                                            <li>App Name & Sub Title</li>
                                            <li>Screenshots</li>
                                            <li>App Localization</li>
                                            <li>Upwork & Freelancer & Anglist</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="fs-14 text-muted mb-2">3 Months</p>
                                            <h6 class="text-dark fs-15">PROJECTS :</h6>
                                            <p class="mb-2 fs-14 text-muted">1. Entry-Level Basic Application 2.Basic one Advanced-Level Application 3. Upload app to App Store 4. Application Marketing With Google Ad Mob</p>
                                        </div>
                                    </div>
                                </div>
                                <div class=" course-faq mt-5 ">
                                    <h3 class="alert-primary p-2 fs-20 rounded ps-3 text-center mb-5 ">FAQ</h3>
                                    <div class="faq-item ">
                                        <h4 class="alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                                            Who can join the iOS course?
                                        </h4>
                                        <div class="faq-body ">
                                            <ul class="bullets-point ps-3 fs-14 mb-4 ">
                                                <li>Undergrad or graduate in PC field.</li>
                                                <li>One individual is utilized in another field.</li>
                                                <li>An individual who needs to turn a task and his field of business.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item ">
                                        <h4 class="alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                                            Why should I learn iOS?
                                        </h4>
                                        <div class="faq-body ">
                                            <ul class="bullets-point ps-3 fs-14  mb-4">
                                                <li>It is effortless to learn.</li>
                                                <li>On the planet's mobile market, 32% of individuals own iPhones.</li>
                                                <li>Finding a new line of work on any side of the world is simple.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item ">
                                        <h4 class="alert-dark p-2 fs-16 rounded mb3 ps-3 ">
                                            What after the iOS course?
                                        </h4>
                                        <div class="faq-body ">
                                            <ul class="bullets-point ps-3 fs-14 mb-4 ">
                                                <li>Business can be begun with 0 speculations.</li>
                                                <li>Independent work should be possible.</li>
                                                <li>A temporary position can be acquired with one's occupation or profession.</li>
                                                <li>To give an advanced stage to your organization.</li>
                                                <li>The region, yet the highly enormous and consistent turn of events.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3"></div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <InqueryForm />
                            </div>
                        </div>
                    </div>
                </div>
                <SubscribeNewsletter />
                <Footer />
            </div>
        </>
    )
}

export default Ios;

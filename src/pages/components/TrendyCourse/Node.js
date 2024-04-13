import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function Node() {
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
                <PageTitle title={`Node Js`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Node Js</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        Node.js is an organisation application structure that utilises a nonconcurrent occasion-driven JavaScript motor
                                        to foster versatile organisation applications. In the "hi world" model underneath, numerous associations can be
                                        taken care of without delay. Every association sets off the callback; however, assuming there is no work to be done, Node.js will rest.
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

                                <div class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Node.js</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li>Understanding Developer Tools And Setup Nodejs Environment
                                            </li>
                                            <li>Installing NPM(Globally & Locally)
                                            </li>
                                            <li>Understanding Event Emitter & REPL and CMD
                                            </li>
                                            <li>Make server with node js and Handle HTTP REQUEST and RESPONSE
                                            </li>
                                            <li>How to attach Server Static Resources & Middleware & File Streaming
                                            </li>
                                            <li>Different Types of Web Application Frameworks (Express, Koa, Hapi, Others)
                                            </li>
                                            <li>Understanding MVC Framework Express JS
                                            </li>
                                            <li>Setup MongoDB and Connect with Nodejs
                                            </li>
                                            <li>Callback Functionality & (Promises and Bluebird Promises)
                                            </li>
                                            <li>Working with Different Type Module (Node Mailer, PDFMAKE, SocketIO, Passport JS, Express-session, Cookie Parser, connect-flash)
                                            </li>
                                            <li>Installing Passport js and making Manual Authentication
                                            </li>
                                            <li>Working with API + JWT (JSON WEB TOKEN) Management
                                            </li>
                                            <li>REST full API (Social Media Integration – Google, Facebook)
                                            </li>
                                            <li>Chat Application with SOCKET IO
                                            </li>
                                            <li>Debugging of Node Js application
                                            </li>
                                            <li>Deployment Project In Heroku
                                            </li>
                                        </ul>
                                        <div class="border p-3 px-3 mb-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">SOFTWARE TO LEARN:</h6>
                                            <p className='text-muted fs-14 mb-2'>Node</p>
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="mb-2 text-muted fs-14">3 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Node.js Course Overview</h4>
                                    <p className='mb-2 text-muted fs-14'>In Node.js, which is open source and runs on many different platforms, JavaScript code can be run without being in a browser. This is called "outside the browser." Node.js allows developers to utilise JavaScript to create command-line tools and server-side scripting, which involves running scripts on the server before sending the page to the user's browser. Using Node.js, you can write JavaScript on a client and a server simultaneously. Node.js contains a large number of related libraries that we would ordinarily use in JavaScript for general-purpose programming.</p>


                                    <h4 className='fs-18 text-dark my-4'>Why is Node.js so popular?</h4>
                                    <p className='fs-16 text-muted mb-2'>Although JavaScript is commonly connected with the front-end, because Node.js involves it too, advancement speed and usefulness for the two groups improve drastically. Since it can deal with a similar burden with less torque, this design permits organisations to get a good deal on equipment. Learn <a href="https://www.rnwmultimedia.edu.in/ahmedabad/laravel-training-ahmedabad.php">Laravel Training Course in Ahmedabad</a></p>

                                    <h4 className='fs-18 text-dark my-4'>What types of apps can you build using Node.js?</h4>
                                    <ul class="course-point">
                                        <li>Online payment solutions</li>
                                        <li>Social media platform</li>
                                        <li>Streaming services like Netflix</li>
                                        <li>E-Commerce platform</li>
                                        <li>Online publishing platform</li>
                                        <li>Online education platforms</li>
                                        <li>Visual collaboration tools</li>
                                    </ul>

                                    <h4 className='fs-18 text-dark my-4'>Introduction of Node.js</h4>
                                    <ul class="course-point">
                                        <li>Setup Development Environment</li>
                                        <li>Node JS Modules</li>
                                        <li>Node Package Manager</li>
                                        <li>Creating Web Server</li>
                                        <li>File System </li>
                                        <li>Many more……..</li>
                                    </ul>

                                    <h4 className='fs-18 text-dark my-4'>Advantages of Node.js</h4>
                                    <ul className='fs-18 text-dark my-4' class="course-point">
                                        <li>Outsourcing Company Requirement & Demand</li>
                                        <li>Powerful Understanding of Student is Required</li>
                                        <li>Latest Web Developing Tool Form Security Side</li>
                                        <li>Angular JS is Suitable for Node.js</li>
                                    </ul>
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

export default Node;

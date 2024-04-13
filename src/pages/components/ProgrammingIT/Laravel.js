import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function Laravel() {
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
                <PageTitle title={`Laravel`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Laravel Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        Laravel is a free, open-source PHP web framework built by Taylor Otwell and based on Symfony.
                                        It is designed to create online applications that follow the model–view–architectural controller pattern.
                                        You can also enroll for PHP Training Course in Surat.
                                    </p>
                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>3 Months</span></button>
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
                                <div class="course-tabs">
                                    <a href="#laravel">LARAVEL</a>
                                </div>
                                <div id="laravel" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">LARAVEL</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="text-dark bullet-heading">Intro to PHP Programming
                                            </li>
                                            <li>What is PHP, and what usage of PHP</li>
                                            <li>intro to server & installing XAMPP</li>
                                            <li>echo & print function</li>
                                            <li>Basics of Android Development</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Fundamentals Of PHP
                                            </li>
                                            <li>Datatypes</li>
                                            <li>variables & constants</li>
                                            <li>introduction of operators (arithmetic, assignment)</li>
                                            <li>logical operator</li>
                                            <li>types of comments</li>
                                            <li>$_request[‘get’] superglobal variable</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Control Structure(User Relational Operator)
                                            </li>
                                            <li>if statement</li>
                                            <li>if … else</li>
                                            <li>ladder if … else</li>
                                            <li>nested if … else</li>
                                            <li>Switch case</li>
                                            <li>Ternary operator</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Branching & Looping
                                            </li>
                                            <li>while loop</li>
                                            <li>do … while loop</li>
                                            <li>for loop</li>
                                            <li>nested for loop</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Array & Functions
                                            </li>
                                            <li>Types Of Array</li>
                                            <li>Number Index Array</li>
                                            <li>Associative Array</li>
                                            <li>Foreach Loop</li>
                                            <li>Multi-Dimensional Array</li>
                                            <li>Array Functions</li>
                                            <li>String Functions</li>
                                            <li>Date & Time Functions</li>
                                            <li>User Define Function (UDF)</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="text-dark bullet-heading"><strong>Database With SQL</strong>
                                            </li>
                                            <li>Introduction to Database & phpMyAdmin</li>
                                            <li>Make Database & Creating Tables</li>
                                            <li>Primary key concept</li>
                                            <li>Foreign key concept</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Blade Template
                                            </li>
                                            <li>Introduction Template Inheritance</li>
                                            <li>Components & Slots</li>
                                            <li>Displaying Data</li>
                                            <li>Control Structures</li>
                                            <li>Forms</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Admin Panel
                                            </li>
                                            <li>Convert HTML Admin Panel to PHP</li>
                                            <li>Set dashboard into laravel</li>
                                            <li>Set the table and form it into laravel</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Form With MVC
                                            </li>
                                            <li>CRUD Operations with laravel (insert)</li>
                                            <li>Password Handling – sha()</li>
                                            <li>CSRF Security</li>
                                            <li>CRUD Operations with laravel (view)</li>
                                            <li>CRUD Operations with laravel (delete)</li>
                                            <li>CRUD Operations with laravel (update)</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">FILE SYSTEM
                                            </li>
                                            <li>Single File Uploading (insert, view)</li>
                                            <li>Single File Uploading (delete, update)</li>
                                            <li>Multiple File Uploading (insert)</li>
                                            <li>Multiple File Uploading (view, delete)</li>
                                            <li>Multiple File Uploading ( update)</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">FORM OPERATIONS
                                            </li>
                                            <li>Searching with Fields</li>
                                            <li>Pagination with Fields</li>
                                            <li>Searching with pagination</li>
                                            <li>Form Request Validation</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Blog Post
                                            </li>
                                            <li>Multiple images uploading insert/view</li>
                                            <li>Multiple images delete</li>
                                            <li>Multiple images update</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Client Side
                                            </li>
                                            <li>Convert HTML into PHP</li>
                                            <li>Make data dynamic</li>
                                            <li>Next previous button with slider</li>
                                            <li>Gave Comment</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Server Side Validation
                                            </li>
                                            <li>Intro to session</li>
                                            <li>Simple login & logout.</li>
                                            <li>multiple logins</li>
                                            <li>View profile</li>
                                            <li>update profile</li>
                                            <li>change password</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="text-dark bullet-heading">JAVASCRIPT & jQuery ( Client Side Validation )
                                            </li>
                                            <li>Introduction of javascript</li>
                                            <li>data type</li>
                                            <li>function</li>
                                            <li>events of javascript</li>
                                            <li>quantity increment decrement</li>
                                            <li>validation with javascript</li>
                                            <li>jquery validation</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Ajax
                                            </li>
                                            <li>Introduction of Ajax</li>
                                            <li>ajax with database & crud operation (data insert)</li>
                                            <li>ajax with crud operation ( view and delete data)</li>
                                            <li>ajax with crud operation ( update data)</li>
                                            <li>live search</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class=" text-dark bullet-heading">Mail
                                            </li>
                                            <li>Mailing feature</li>
                                            <li>Forgot password</li>
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
            <SubscribeNewsletter />
            <Footer />
        </>
    )
}

export default Laravel;

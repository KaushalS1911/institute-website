import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function PHP() {
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
                <PageTitle title={`Advance PHP`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Advance PHP Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        Hypertext processor is what PHP stands for, and it is an open-source scripting language. It is free to use and download
                                        and helps create websites. It is vast enough to work on any social network and includes all contexts like java, HTML, CSS and PHP code.
                                        The PHP code is executed on the server and is converted into plain HTML later. PHP helps in creating content, sending and receiving cookies,
                                        reading, writing, saving, delete files on the server; it even helps encrypt data. PHP runs on various platforms and is compatible with all servers;
                                        it supports a wide database.Php is very easy to learn and understand. It can be efficiently done, too; PHP script language starts from one simple line
                                        to the most complex one, and with the constant need to change web codes, the need for a PHP developer is never-ending. If you like website developing
                                        work, you can enroll for PHP Classes in Surat.
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

                                <div id="php-training-objectives" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">PHP Development Training Course Objectives
                                    </h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0">
                                            <li class="text-dark bullet-heading">
                                                PHP Course
                                                Objectives
                                            </li>
                                            <li>Introduction to website development</li>
                                            <li>Understand how server-side programming works on the web</li>
                                            <li>PHP Basic syntax for variable types and calculations</li>
                                            <li>Creating conditional structures</li>
                                            <li>Storing data in arrays</li>
                                            <li>Using PHP built-in functions and creating custom functions</li>
                                            <li>Understanding POST and GET in form submission</li>
                                            <li>How to receive and process form submission data</li>
                                            <li>Working with SESSION</li>
                                            <li>HTML design setup into PHP</li>
                                            <li>Creating a company-oriented Database (MySQL)</li>
                                            <li>Maintain more security on the website</li>
                                            <li>File management</li>
                                            <li>Working with website backend penal</li>
                                            <li>A working concept with OOP(Object Oriented Programming)</li>
                                            <li>Working with Ajax</li>
                                            <li>Social media integration</li>
                                            <li>Email sending with PHP</li>
                                            <li>File uploading with PHP</li>
                                            <li>Website data convert into API</li>
                                            <li>Real-world Payment getaway creation</li>
                                            <li>Real-world Blog or e-commerce website creation</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="core-php" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Core PHP</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Intro to PHP
                                                Programming
                                            </li>
                                            <li>What is PHP, and what usage of PHP</li>
                                            <li>intro to server & installing XAMPP</li>
                                            <li>echo & print function</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Fundamentals Of
                                                PHP
                                            </li>
                                            <li>Datatypes</li>
                                            <li>variables & constants</li>
                                            <li>introduction of operators (arithmetic, assignment)</li>
                                            <li>logical operator</li>
                                            <li>types of comments</li>
                                            <li>$_request[‘get’] superglobal variable</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Control
                                                Structure(User Relational Operator)
                                            </li>
                                            <li>if statement</li>
                                            <li>if … else</li>
                                            <li>ladder if … else</li>
                                            <li>nested if … else</li>
                                            <li>Switch case</li>
                                            <li>Ternary operator</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Branching &
                                                Looping
                                            </li>
                                            <li>while loop</li>
                                            <li>do … while loop</li>
                                            <li>for loop</li>
                                            <li>nested for loop</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Array &
                                                Functions
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
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                File System
                                                Basic
                                            </li>
                                            <li>File Handling</li>
                                            <li>Commonly Used File Functions</li>
                                            <li>Directory Functions</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">Database With
                                                SQL
                                            </li>
                                            <li>Introduction To Database & phpMyAdmin</li>
                                            <li>Make Database & Creating Tables</li>
                                            <li>Crud Operations</li>
                                            <li>Insert Update Select And Delete Query Run In MYSQL</li>
                                            <li>Importing / Exporting SQL File</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">PHP Web Concept
                                                With CRUD
                                            </li>
                                            <li>Client/Server Communication (HTTP Request Method, Redirecting Page)
                                            </li>
                                            <li>Embed PHP With HTML Form</li>
                                            <li>Super global Variables</li>
                                            <li>Database Connectivity</li>
                                            <li>Crud Operations With PHP (Insert Data)</li>
                                            <li>Crud Operations With PHP (View Data)</li>
                                            <li>Crud Operations With PHP (Delete Data)</li>
                                            <li>Crud Operations With PHP (Update Data)</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">OOP With
                                                PHP
                                            </li>
                                            <li>Introduction Of Oops Concepts</li>
                                            <li>Creating Methods</li>
                                            <li>Crud With Oops (Insert Data)</li>
                                            <li>Crud With Oops (View & Delete Data)</li>
                                            <li>Crud With Oops (Update Data )</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">
                                                Admin Panel With
                                                PHP
                                            </li>
                                            <li>Convert HTML admin panel to php</li>
                                            <li>include(), require(), include_once() & require_once() functions</li>
                                            <li>table form</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">Working With Blog
                                                Panel
                                            </li>
                                            <li>Blog website</li>
                                            <li>creating admin table (crud)</li>
                                            <li>subcategory data add to the Database</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">Blog Post
                                            </li>
                                            <li>Multiple images uploading insert/view</li>
                                            <li>Multiple images delete</li>
                                            <li>Multiple images update</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading"><strong>Client
                                                Side</strong>
                                            </li>
                                            <li>Convert HTML into PHP</li>
                                            <li>Make data dynamic</li>
                                            <li>Next previous button with slider</li>
                                            <li>Gave Comment</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class=" text-dark bullet-heading">Server Side
                                                Validation
                                            </li>
                                            <li>re module</li>
                                            <li>Getting Specific Pattern-wise Data</li>
                                            <li>Intro to session</li>
                                            <li>Simple login & logout.</li>
                                            <li>multiple logins</li>
                                            <li>View profile</li>
                                            <li>update profile</li>
                                            <li>change password</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class="text-dark bullet-heading">JAVASCRIPT & jQuery
                                                (Client Side Validation)
                                            </li>
                                            <li>Introduction of javascript</li>
                                            <li>data type</li>
                                            <li>function</li>
                                            <li>events of javascript</li>
                                            <li>quantity increment decrement</li>
                                            <li>validation with javascript</li>
                                            <li>jquery validation</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">Ajax
                                            </li>
                                            <li>Introduction of Ajax</li>
                                            <li>ajax with database & crud operation (data insert)</li>
                                            <li>ajax with crud operation (view and delete data)</li>
                                            <li>ajax with crud operation (update data)</li>
                                            <li>live search</li>
                                        </ul>
                                        <ul class="course-points my-3 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">Mail
                                            </li>
                                            <li>Mailing feature</li>
                                            <li>Forgot password</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="laravel" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">LARAVEL</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Intro to PHP
                                                Programming
                                            </li>
                                            <li>What is PHP, and what usage of PHP</li>
                                            <li>intro to server & installing XAMPP</li>
                                            <li>echo & print function</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Fundamentals Of
                                                PHP
                                            </li>
                                            <li>Datatypes</li>
                                            <li>variables & constants</li>
                                            <li>introduction of operators (arithmetic, assignment)</li>
                                            <li>logical operator</li>
                                            <li>types of comments</li>
                                            <li>$_request[‘get’] superglobal variable</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Control
                                                Structure(User Relational Operator)
                                            </li>
                                            <li>if statement</li>
                                            <li>if … else</li>
                                            <li>ladder if … else</li>
                                            <li>nested if … else</li>
                                            <li>Switch case</li>
                                            <li>Ternary operator</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Branching &
                                                Looping
                                            </li>
                                            <li>while loop</li>
                                            <li>do … while loop</li>
                                            <li>for loop</li>
                                            <li>nested for loop</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Array &
                                                Functions
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
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Database With
                                                SQL
                                            </li>
                                            <li>Introduction to Database & phpMyAdmin</li>
                                            <li>Make Database & Creating Tables</li>
                                            <li>Primary key concept</li>
                                            <li>Foreign key concept</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Blade
                                                Template
                                            </li>
                                            <li>Introduction Template Inheritance</li>
                                            <li>Components & Slots</li>
                                            <li>Displaying Data</li>
                                            <li>Control Structures</li>
                                            <li>Forms</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Admin
                                                Panel
                                            </li>
                                            <li>Convert HTML Admin Panel to PHP</li>
                                            <li>Set dashboard into laravel</li>
                                            <li>Set the table and form it into laravel</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Form With
                                                MVC
                                            </li>
                                            <li>CRUD Operations with laravel ( insert)</li>
                                            <li>Password Handling – sha()</li>
                                            <li>CSRF Security</li>
                                            <li>CRUD Operations with laravel ( view)</li>
                                            <li>CRUD Operations with laravel ( delete)</li>
                                            <li>CRUD Operations with laravel (update)</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">FILE
                                                SYSTEM
                                            </li>
                                            <li>Single File Uploading (insert, view)</li>
                                            <li>Single File Uploading (delete, update)</li>
                                            <li>Multiple File Uploading (insert)</li>
                                            <li>Multiple File Uploading (view, delete)</li>
                                            <li>Multiple File Uploading (view, delete)</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">FORM
                                                OPERATIONS
                                            </li>
                                            <li>Searching with Fields</li>
                                            <li>Pagination with Fields</li>
                                            <li>Searching with pagination</li>
                                            <li>Form Request Validation</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Blog Post
                                            </li>
                                            <li>Multiple images uploading insert/view</li>
                                            <li>Multiple images delete</li>
                                            <li>Multiple image update</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Client
                                                Side
                                            </li>
                                            <li>Convert HTML into PHP</li>
                                            <li>Make data dynamic</li>
                                            <li>Next previous button with the slider</li>
                                            <li>Gave Comment</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Server Side
                                                Validation
                                            </li>
                                            <li>Intro to session</li>
                                            <li>Simple login & logout.</li>
                                            <li>multiple logins</li>
                                            <li>View profile</li>
                                            <li>update profile</li>
                                            <li>change password</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">JAVASCRIPT & jQuery
                                                ( Client Side Validation )
                                            </li>
                                            <li>Introduction of javascript</li>
                                            <li>data type</li>
                                            <li>function</li>
                                            <li>events of javascript</li>
                                            <li>quantity increment decrement</li>
                                            <li>validation with javascript</li>
                                            <li>jquery validation</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Ajax
                                            </li>
                                            <li>Introduction of Ajax</li>
                                            <li>ajax with database & crud operation (data insert)</li>
                                            <li>ajax with crud operation ( view and delete data)</li>
                                            <li>ajax with crud operation ( update data)</li>
                                            <li>live search</li>
                                        </ul>
                                        <ul class="course-points my-0 mb-4 ms-2">
                                            <li class="text-dark bullet-heading">Mail
                                            </li>
                                            <li>Mailing feature</li>
                                            <li>Forgot password</li>
                                        </ul>
                                    </div>

                                </div>
                                <div id="codeigniter" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">CODEIGNITER</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">INTRO TO
                                                CODEIGNITER
                                            </li>
                                            <li>Intro to MVC</li>
                                            <li>Features of MVC</li>
                                            <li>Importance of CodeIgniter</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">CODEIGNITER
                                                INSTALLATION
                                            </li>
                                            <li>Download & Setup</li>
                                            <li>Configuring env file</li>
                                            <li>Authentication Facades</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">UNDERSTANDING
                                                CODEIGNITER MVC
                                            </li>
                                            <li>Directory Structure</li>
                                            <li>Understanding URL Working</li>
                                            <li>Removing index.php</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">CONTROLLERS &
                                                MODEL
                                            </li>
                                            <li>Introduction to controller</li>
                                            <li>Creating a Controller</li>
                                            <li>Calling a Controller</li>
                                            <li>Creating & Calling Constructor Method</li>
                                            <li>Creating Model Class</li>
                                            <li>Loading Model</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">ROUTING
                                            </li>
                                            <li>Customize Routing Rules</li>
                                            <li>Wildcards</li>
                                            <li>Redirects</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">VIEWS
                                            </li>
                                            <li>Creating Views</li>
                                            <li>Passing Data To Views</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">REQUEST &
                                                RESPONSE
                                            </li>
                                            <li>Session Data</li>
                                            <li>Flash data</li>
                                            <li>Redirects</li>
                                            <li>Cookie Management</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">DATABASE WITH
                                                SQL
                                            </li>
                                            <li>Introduction to Database & phpMyAdmin</li>
                                            <li>Make Database & Creating Tables</li>
                                            <li>Primary key concept</li>
                                            <li>Foreign key concept</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">ADMIN
                                                PANEL
                                            </li>
                                            <li>Convert HTML Admin Panel into CodeIgniter</li>
                                            <li>Set dashboard into CodeIgniter</li>
                                            <li>Set the table and form into CodeIgniter</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">FILE
                                                SYSTEM
                                            </li>
                                            <li>Single File Uploading</li>
                                            <li>Multiple File Uploading</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">FORM
                                                OPERATIONS
                                            </li>
                                            <li>Searching with Fields</li>
                                            <li>Pagination with Fields</li>
                                            <li>Searching with pagination</li>
                                            <li>Form Request Validation</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">DATA
                                                MANIPULATE
                                            </li>
                                            <li>Join query</li>
                                            <li>Data fetch with Ajax</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">ADMIN
                                                SECURITY
                                            </li>
                                            <li>Login/logout with Admin</li>
                                            <li>Profile</li>
                                            <li>Change password</li>
                                            <li>Update Profile</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">E-COMMERCE WEBSITE
                                                CLIENT SIDE
                                            </li>
                                            <li>Set client side in CodeIgniter</li>
                                            <li>Display product in CodeIgniter</li>
                                            <li>Single product view</li>
                                            <li>Filter product</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">CLIENT
                                                SECURITY
                                            </li>
                                            <li>Login/logout with Admin</li>
                                            <li>Profile</li>
                                            <li>Change password</li>
                                            <li>Update Profile</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4 text-dark bullet-heading">CART
                                            </li>
                                            <li>Add to cart</li>
                                            <li>view cart</li>
                                            <li>update cart</li>
                                            <li>delete cart</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2">
                                            <li class="mb-4f text-dark bullet-heading">Final Project
                                                *
                                            </li>
                                            <li>Mailing Feature</li>
                                            <li>Payment</li>
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

export default PHP;

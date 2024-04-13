import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function Python() {
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
                <PageTitle title={`Python  `} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Python  Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        Python is a dynamic, deciphered (bytecode-incorporated) language. The source code has no statements of factors, boundaries, capacities, or techniques.
                                        This makes the code short and adaptable, and you lose the order time type checking of the source code. Python tracks the qualities at runtime and banners
                                        code that doesn't appear legit as it runs.
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
                                <div id="python-training-objectives" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Python Training Course</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0">
                                            <li class="text-dark bullet-heading">Python Course Objectives
                                            </li>
                                            <li>Introduction to Python</li>
                                            <li>Anatomy of Python</li>
                                            <li>How does Python work?</li>
                                            <li>A career in Python Technologies and Job Rules</li>
                                            <li>Potential of Python</li>
                                            <li>How Desktop Apps Created?</li>
                                            <li>What is Server-Side Scripting?</li>
                                            <li>How to Deal with Database</li>
                                            <li>Understand the working of any GUI Software</li>
                                            <li>Software making Process</li>
                                            <li>Working with System Programmatically</li>
                                            <li>How to interact with Files</li>
                                            <li>Creating your own Python Packages</li>
                                            <li>Dealing with Exceptions and Errors</li>
                                            <li>Emailing with Python</li>
                                            <li>Data Analysis with NumPy & Pandas</li>
                                            <li>How to make your executable Software?</li>
                                            <li>Interacting with CSV files</li>
                                            <li>Data Visualization with matplotlib</li>
                                            <li>Anatomy of client-server architecture.</li>
                                            <li>Creating a Chat App</li>
                                            <li>Web Scrapping & Web Automation</li>
                                            <li>How to work with JSON data?</li>
                                            <li>How does the website's backend work with the front end?</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-15">TIME DURATION:</h6>
                                            <p class="mb-0">6 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div id="core-python" class="course-description pt-4">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Core Python</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Introduction to Python (PPT)</span>
                                            </li>
                                            <li>Introduction to Python</li>
                                            <li>Anatomy of Python</li>
                                            <li>How does Python work?</li>
                                            <li>A career in Python Technologies and Job Rules</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Fundamentals of Python</span>
                                            </li>
                                            <li>print() and input() Functions</li>
                                            <li>Variables, Datatypes & Operators</li>
                                            <li>Type Casting Constructors</li>
                                            <li>id() and type() Functions</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Datatype in Detail</span>
                                            </li>
                                            <li>String Formatting & Manipulation</li>
                                            <li>Collection Datatypes with Its Methods</li>
                                            <li>The mutability of list & tuple</li>
                                            <li>Shallow & Deep Copy</li>
                                            <li>Type Casting and del Keyword</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Control Structure</span>
                                            </li>
                                            <li>Types of Control Structure</li>
                                            <li>Short Hand Syntax (Ternary)</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Looping</span>
                                            </li>
                                            <li>Types of Loops</li>
                                            <li>range() Function</li>
                                            <li>Control Statements</li>
                                            <li>List Comprehension</li>
                                            <li>Nested Loop</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Function in Detail</span>
                                            </li>
                                            <li>Built-in Functions</li>
                                            <li>UDF</li>
                                            <li>*args, **kwargs and __doc__</li>
                                            <li>Function Recursion</li>
                                            <li>Anonymous / Lambda Function</li>
                                            <li>global keyword</li>
                                            <li>Return Multiple Values</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Array & Sorting</span>
                                            </li>
                                            <li>1D & 2D Array with List</li>
                                            <li>Sorting Collection Datatypes</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Object Oriented Programming (OOP)</span>
                                            </li>
                                            <li>Class & Object</li>
                                            <li>Self & del Keyword</li>
                                            <li>Constructor and Destructor</li>
                                            <li>Encapsulation</li>
                                            <li>Nested Function</li>
                                            <li>Reflection Enabling Functions</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Inheritance & Polymorphism</span>
                                            </li>
                                            <li>Types of Inheritance</li>
                                            <li>Method Overloading & Method Overriding</li>
                                            <li>issubclass() and super()</li>
                                            <li>Built-in Dunder Methods</li>
                                            <li>Operator Overloading</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Exception Handling</span>
                                            </li>
                                            <li>try … except</li>
                                            <li>try … except … else</li>
                                            <li>try … except … finally</li>
                                            <li>try … except … else … finally</li>
                                            <li>Custom exception</li>
                                            <li>raise & assert keyword</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>File Handling</span>
                                            </li>
                                            <li>Modes of Opening File</li>
                                            <li>I/O Operation with File</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Working with Modules</span>
                                            </li>
                                            <li>DateTime module</li>
                                            <li>time module</li>
                                            <li>math module</li>
                                            <li>random module</li>
                                            <li>uuid module</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Modules and Packages</span>
                                            </li>
                                            <li>Creating, Importing & Renaming modules</li>
                                            <li>__name__ with __main__</li>
                                            <li>Creating & Using Package</li>
                                            <li>dir() and __init__.py</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Regular Expression (RegEx)</span>
                                            </li>
                                            <li>re module</li>
                                            <li>Getting Specific Pattern-wise Data</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Command Line Argument (CLA)</span>
                                            </li>
                                            <li>sys module</li>
                                            <li>sys.argv</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Pip – Package Manager & Database Interaction (with MySql)</span>
                                            </li>
                                            <li>What is SQL?</li>
                                            <li>SQL Queries</li>
                                            <li>Intro to XAMPP (phpMyAdmin)</li>
                                            <li>CRUD Operation with XAMPP (phpMyAdmin)</li>
                                            <li>Downloading and Installing Package</li>
                                            <li>MySQL-connector module</li>
                                            <li>CRUD Operation with Python's MySQL.connector</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>GUI with Tkinter</span>
                                            </li>
                                            <li>Tkinter module</li>
                                            <li>Tkinter widgets</li>
                                            <li>Tkinter geometry</li>
                                            <li>Binding functions</li>
                                            <li>Mouse clicking events</li>
                                            <li>messagebox()</li>
                                            <li>Types of the pop-up box</li>
                                            <li>PhotoImage()</li>
                                            <li>pillow library</li>
                                            <li>Display image using pillow library</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="advance-python" class="course-description pt-4" >
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Advance Python</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Ios & subprocess Module</span>
                                            </li>
                                            <li>Basic Terminal Commands</li>
                                            <li>os module</li>
                                            <li>subprocess module with call() & Popen()</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Multithreading & Email</span>
                                            </li>
                                            <li>What is Thread in a Process?</li>
                                            <li>threading module</li>
                                            <li>Working with Email sending through the Internet</li>
                                            <li>smtplib module</li>
                                            <li>email Package</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Iterators, Generators & Closures</span>
                                            </li>
                                            <li>__iter__() & __next__()</li>
                                            <li>iter() & next()</li>
                                            <li>yield Keyword</li>
                                            <li>Generator Function</li>
                                            <li>Generator Object</li>
                                            <li>global, local & nonlocal Variables</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>HIGHER ORDER FUNCTIONS</span>
                                            </li>
                                            <li>sorted(), map(), reduce() & filter()</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>DECORATORS</span>
                                            </li>
                                            <li>Simple Decorator</li>
                                            <li>Chaining Decorator</li>
                                            <li>@classmethod & @staticmethod</li>
                                            <li>property() & @property</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Virtual Environment</span>
                                            </li>
                                            <li>virtualenv</li>
                                            <li>venv</li>
                                            <li>requirements.txt</li>
                                            <li>pipenv</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Working with Editors & Idle</span>
                                            </li>
                                            <li>Sublime Text 3</li>
                                            <li>VS Code</li>
                                            <li>Anaconda Navigator</li>
                                            <li>PyCharm IDE</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Data Analysis with NumPy</span>
                                            </li>
                                            <li>NumPy Library</li>
                                            <li>NumPy Datatypes</li>
                                            <li>Array Indexing</li>
                                            <li>Array Math & Broadcasting</li>
                                            <li>1D & 2D Array</li>
                                            <li>Arithmetic Operations on 2D Array</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Hot Modules of Python</span>
                                            </li>
                                            <li>qrcode Library</li>
                                            <li>pyinstaller Library</li>
                                            <li>CSV module</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Data Analysis with Pandas</span>
                                            </li>
                                            <li>Pandas Library</li>
                                            <li>Data Structure</li>
                                            <li>Operations on DataFrames</li>
                                            <li>Handling Missing Data</li>
                                            <li>Boolean Reductions</li>
                                            <li>Combining DataFrames</li>
                                            <li>pivoting, sorting & aggregation</li>
                                            <li>Descriptive Statistics</li>
                                            <li>Types of Function Application</li>
                                            <li>groupby() & transform()</li>
                                            <li>Re-indexing& Altering Labels</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Data Visualization</span>
                                            </li>
                                            <li>matplotlib Library</li>
                                            <li>Types of Charts with pyplot</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Networking</span>
                                            </li>
                                            <li>What is Socket & Port?</li>
                                            <li>What is Client & Server</li>
                                            <li>socket module</li>
                                            <li>Socket Programming</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Web Scrapping</span>
                                            </li>
                                            <li>requests Library</li>
                                            <li>beautifulsoup Library</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Web Automation</span>
                                            </li>
                                            <li>selenium Library</li>
                                            <li>Different Browser’s WebDrivers</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>JSON Parsing</span>
                                            </li>
                                            <li>What is JSON?</li>
                                            <li>JSON module</li>
                                            <li>Serialization & Deserialization of Data</li>
                                            <li>Read and Write JSON data with File</li>
                                            <li>Working with Live JSON API Data</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Introduction to Web Development</span>
                                            </li>
                                            <li>Basic HTML</li>
                                            <li>What is Framework</li>
                                            <li>Installing Flask Microframework and Run First Web App</li>
                                            <li>Routing and Variable Rules</li>
                                            <li>URL Building</li>
                                            <li>HTTP Methods</li>
                                            <li>Templates</li>
                                            <li>Static Files</li>
                                            <li>Sending Form Data to Template</li>
                                            <li>File Uploading</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="django-web-development" class="course-description pt-4" >
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Django Web Development</h4>
                                    <div class="ps-3">
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Introduction to Django Framework (PPT)</span>
                                            </li>
                                            <li>What is a Web Framework?</li>
                                            <li>MVT Architecture</li>
                                            <li>Setup Virtual Environment</li>
                                            <li>Installing Django</li>
                                            <li>Exploring Directory Structure</li>
                                            <li>Creating First Django Project</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Setting up Django Web App</span>
                                            </li>
                                            <li>Creating First Django App</li>
                                            <li>Understanding URL Routing</li>
                                            <li>Handling Different Views</li>
                                            <li>Running Web App on Server</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Templates with DTL (Django Template Language)</span>
                                            </li>
                                            <li>Setup Template directory’s Path</li>
                                            <li>Creating and Rendering Templates using URL Routings *</li>
                                            <li>Passing Context in Multiple Templates</li>
                                            <li>Using DTL to load context in Template</li>
                                            <li>Tags, Variables & Filters</li>
                                            <li>Template Inheritance</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Form Handling</span>
                                            </li>
                                            <li>Raw HTML Form</li>
                                            <li>Pure Django Form</li>
                                            <li>Form Widgets</li>
                                            <li>Display Form to Multiple Templates</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>URL Routing</span>
                                            </li>
                                            <li>Dynamic URL Routing</li>
                                            <li>Creating and Linking Multiple Apps</li>
                                            <li>In-App URL Routing & Namespacing</li>
                                            <li>Django URLs Reverse</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Views and Mixins</span>
                                            </li>
                                            <li>FBV (Function Based Views)</li>
                                            <li>CBV (Class-Based Views)</li>
                                            <li>Convert FBV to CBV</li>
                                            <li>Custom Mixins for CBV</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Static File Handling</span>
                                            </li>
                                            <li>Setup static and media directory’s Path</li>
                                            <li>Adding Bootstrap for Frontend Enhancement</li>
                                            <li>Collect Static Files</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Working with Models</span>
                                            </li>
                                            <li>Django Database Models</li>
                                            <li>Model Fields</li>
                                            <li>Model Inheritance</li>
                                            <li>Add an App to INSTALLED_APPS</li>
                                            <li>Migrating Models to Database</li>
                                            <li>Update Models and Migrate</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>DAP (Django Admin Panel)</span>
                                            </li>
                                            <li>Creating Superuser</li>
                                            <li>Exploring DAP</li>
                                            <li>Manage Superuser</li>
                                            <li>CRUD Operations with DAP</li>
                                            <li>@admin.register()</li>
                                            <li>Customizing DAP</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>ORM (Object Relational Mapper)</span>
                                            </li>
                                            <li>Using Django python-shell</li>
                                            <li>Using ORM to deal with Database</li>
                                            <li>CRUD Operation using ORM</li>
                                            <li>Retrieve Data using Filters</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Dynamic Templates</span>
                                            </li>
                                            <li>Dynamic Webpages</li>
                                            <li>Retrieve Data using QuerySets</li>
                                            <li>Passing context to Template</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Form Validation</span>
                                            </li>
                                            <li>Django ModelForm</li>
                                            <li>Form Validation Methods</li>
                                            <li>Setting initial values for Forms</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Working with Another Database</span>
                                            </li>
                                            <li>Integrating MySQL Database</li>
                                            <li>Using XAMPP for Database Interaction</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>User Authentication</span>
                                            </li>
                                            <li>@login_required decorator for FBV</li>
                                            <li>LoginRequiredMixin for CBV</li>
                                            <li>login(), logout() and authenticate() methods</li>
                                            <li>get_object_or_404() method</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Creating APIs Using DRF (Django Rest Framework)</span>
                                            </li>
                                            <li>Intro and Installing DRF</li>
                                            <li>Add DRF to INSTALLED_APPS</li>
                                            <li>Adding REST_FRAMEWORK in settings.py</li>
                                            <li>What is Serializer and Deserializer?</li>
                                            <li>Serializer Class and ModelSerializer Class</li>
                                            <li>APIs using Serializers, FBV, CBV, Model Mixins and Generic API Views</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Testing Browsable APIs</span>
                                            </li>
                                            <li>Using DRF’s URL</li>
                                            <li>Using Postman</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Routing and Authentications in DRF</span>
                                            </li>
                                            <li>Types of ViewSets</li>
                                            <li>Types of Routers</li>
                                            <li>authentication_classes and permission_classes properties</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Documenting APIs</span>
                                            </li>
                                            <li>Using drf-yasg package</li>
                                            <li>Integrating drf-yasg into settings.py</li>
                                            <li>Generating APIs Docs</li>
                                            <li>Test browsable APIs using drf-yasg’s url</li>
                                        </ul>
                                        <ul class="course-points my-0 ms-2 mb-4">
                                            <li class="mb-2 text-dark bullet-heading"><span>Publishing Django Web Application</span>
                                            </li>
                                            <li>Deploy on GitHub</li>
                                            <li>Deploy on pythonanywhere</li>
                                            <li>Collect Static Files</li>
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

export default Python

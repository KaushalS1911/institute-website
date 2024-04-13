import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function Python() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Python`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    Python Course
                  </span>
                </div>
                <div className="Master_course_desc">
                  <p className="mb-2">
                    Python is a dynamic, deciphered (bytecode-incorporated)
                    language. The source code has no statements of factors,
                    boundaries, capacities, or techniques. This makes the code
                    short and adaptable, and you lose the order time type
                    checking of the source code. Python tracks the qualities at
                    runtime and banners code that doesn't appear legit as it
                    runs.
                  </p>
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>12 Months</span>
                  </button>
                  <button className="rounded text-center p-2 px-3">
                    Daily Time{" "}
                    <span style={{ color: "##343f52" }}>2 Hours</span>
                  </button>
                </div>
                <div className="Course_details">
                  <div className="title mt-4 mb-3 text-4">
                    Included In This Course
                  </div>
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
                <div class="accordion accordion-flush" id="faqlist">
                  <div
                    id="python-training-objectives"
                    class="course-description pt-2"
                  >
                    <h4
                      class="alert-dark p-3  fw-bold fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Python Training Course
                    </h4>
                    <div>
                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-1"
                          >
                            Python Course Objectives
                          </button>
                        </h4>
                        <div
                          id="faq-content-1"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
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
                          <li>
                            How does the website's backend work with the front
                            end?
                          </li>
                        </div>
                      </ul>

                      <div class="border p-3 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">TIME DURATION:</h6>
                        <p class="mb-0">6 Months</p>
                      </div>
                    </div>
                  </div>
                  <div id="core-python" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Core Python
                    </h4>
                    <div class="ps-3">
                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-2"
                          >
                            Introduction to Python (PPT)
                          </button>
                        </h4>
                        <div
                          id="faq-content-2"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Introduction to Python</li>
                          <li>Anatomy of Python</li>
                          <li>How does Python work?</li>
                          <li>A career in Python Technologies and Job Rules</li>
                        </div>
                      </ul>

                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-3"
                          >
                            Fundamentals of Python
                          </button>
                        </h4>
                        <div
                          id="faq-content-3"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>print() and input() Functions</li>
                          <li>Variables, Datatypes & Operators</li>
                          <li>Type Casting Constructors</li>
                          <li>id() and type() Functions</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-4"
                          >
                            Datatype in Detail
                          </button>
                        </h4>
                        <div
                          id="faq-content-4"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>String Formatting & Manipulation</li>
                          <li>Collection Datatypes with Its Methods</li>
                          <li>The mutability of list & tuple</li>
                          <li>Shallow & Deep Copy</li>
                          <li>Type Casting and del Keyword</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-5"
                          >
                            Control Structure
                          </button>
                        </h4>
                        <div
                          id="faq-content-5"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Types of Control Structure</li>
                          <li>Short Hand Syntax (Ternary)</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-6"
                          >
                            Looping
                          </button>
                        </h4>
                        <div
                          id="faq-content-6"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Types of Loops</li>
                          <li>range() Function</li>
                          <li>Control Statements</li>
                          <li>List Comprehension</li>
                          <li>Nested Loop</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-7"
                          >
                            Function in Detail
                          </button>
                        </h4>

                        <div
                          id="faq-content-7"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Built-in Functions</li>
                          <li>UDF</li>
                          <li>*args, **kwargs and __doc__</li>
                          <li>Function Recursion</li>
                          <li>Anonymous / Lambda Function</li>
                          <li>global keyword</li>
                          <li>Return Multiple Values</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-8"
                          >
                            Array & Sorting
                          </button>
                        </h4>
                        <div
                          id="faq-content-8"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>1D & 2D Array with List</li>
                          <li>Sorting Collection Datatypes</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-9"
                          >
                            Object Oriented Programming (OOP)
                          </button>
                        </h4>
                        <div
                          id="faq-content-9"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Class & Object</li>
                          <li>Self & del Keyword</li>
                          <li>Constructor and Destructor</li>
                          <li>Encapsulation</li>
                          <li>Nested Function</li>
                          <li>Reflection Enabling Functions</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-10"
                          >
                            Inheritance & Polymorphism
                          </button>
                        </h4>
                        <div
                          id="faq-content-10"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Types of Inheritance</li>
                          <li>Method Overloading & Method Overriding</li>
                          <li>issubclass() and super()</li>
                          <li>Built-in Dunder Methods</li>
                          <li>Operator Overloading</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-11"
                          >
                            Exception Handling
                          </button>
                        </h4>
                        <div
                          id="faq-content-11"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>try … except</li>
                          <li>try … except … else</li>
                          <li>try … except … finally</li>
                          <li>try … except … else … finally</li>
                          <li>Custom exception</li>
                          <li>raise & assert keyword</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-12"
                          >
                            File Handling
                          </button>
                        </h4>
                        <div
                          id="faq-content-12"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Modes of Opening File</li>
                          <li>I/O Operation with File</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-13"
                          >
                            Working with Modules
                          </button>
                        </h4>
                        <div
                          id="faq-content-13"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>DateTime module</li>
                          <li>time module</li>
                          <li>math module</li>
                          <li>random module</li>
                          <li>uuid module</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-14"
                          >
                            PHP Course Objectives
                          </button>
                        </h4>
                        <div
                          id="faq-content-14"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li class="mb-2 text-dark bullet-heading">
                            <span>Modules and Packages</span>
                          </li>
                          <li>Creating, Importing & Renaming modules</li>
                          <li>__name__ with __main__</li>
                          <li>Creating & Using Package</li>
                          <li>dir() and __init__.py</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-15"
                          >
                            Regular Expression (RegEx)
                          </button>
                        </h4>
                        <div
                          id="faq-content-15"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>re module</li>
                          <li>Getting Specific Pattern-wise Data</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-16"
                          >
                            Command Line Argument (CLA)
                          </button>
                        </h4>
                        <div
                          id="faq-content-16"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>sys module</li>
                          <li>sys.argv</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-17"
                          >
                            Pip – Package Manager & Database Interaction (with
                            MySql)
                          </button>
                        </h4>
                        <div
                          id="faq-content-17"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>What is SQL?</li>
                          <li>SQL Queries</li>
                          <li>Intro to XAMPP (phpMyAdmin)</li>
                          <li>CRUD Operation with XAMPP (phpMyAdmin)</li>
                          <li>Downloading and Installing Package</li>
                          <li>MySQL-connector module</li>
                          <li>CRUD Operation with Python's MySQL.connector</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-18"
                          >
                            GUI with Tkinter
                          </button>
                        </h4>
                        <div
                          id="faq-content-18"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
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
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div id="advance-python" class="course-description pt-4">
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Advance Python
                    </h4>
                    <div>
                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-19"
                          >
                            Ios & subprocess Module
                          </button>
                        </h4>
                        <div
                          id="faq-content-19"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Basic Terminal Commands</li>
                          <li>os module</li>
                          <li>subprocess module with call() & Popen()</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-20"
                          >
                            Multithreading & Email
                          </button>
                        </h4>
                        <div
                          id="faq-content-20"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>What is Thread in a Process?</li>
                          <li>threading module</li>
                          <li>
                            Working with Email sending through the Internet
                          </li>
                          <li>smtplib module</li>
                          <li>email Package</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-21"
                          >
                            Iterators, Generators & Closures
                          </button>
                        </h4>
                        <div
                          id="faq-content-21"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>__iter__() & __next__()</li>
                          <li>iter() & next()</li>
                          <li>yield Keyword</li>
                          <li>Generator Function</li>
                          <li>Generator Object</li>
                          <li>global, local & nonlocal Variables</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-22"
                          >
                            HIGHER ORDER FUNCTIONS
                          </button>
                        </h4>
                        <div
                          id="faq-content-22"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>sorted(), map(), reduce() & filter()</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-23"
                          >
                            DECORATORS
                          </button>
                        </h4>
                        <div
                          id="faq-content-23"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Simple Decorator</li>
                          <li>Chaining Decorator</li>
                          <li>@classmethod & @staticmethod</li>
                          <li>property() & @property</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-24"
                          >
                            Virtual Environment
                          </button>
                        </h4>
                        <div
                          id="faq-content-24"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>virtualenv</li>
                          <li>venv</li>
                          <li>requirements.txt</li>
                          <li>pipenv</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-25"
                          >
                            Working with Editors & Idle
                          </button>
                        </h4>
                        <div
                          id="faq-content-25"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Sublime Text 3</li>
                          <li>VS Code</li>
                          <li>Anaconda Navigator</li>
                          <li>PyCharm IDE</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-26"
                          >
                            Data Analysis with NumPy
                          </button>
                        </h4>
                        <div
                          id="faq-content-26"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>NumPy Library</li>
                          <li>NumPy Datatypes</li>
                          <li>Array Indexing</li>
                          <li>Array Math & Broadcasting</li>
                          <li>1D & 2D Array</li>
                          <li>Arithmetic Operations on 2D Array</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-27"
                          >
                            Hot Modules of Python
                          </button>
                        </h4>
                        <div
                          id="faq-content-27"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>qrcode Library</li>
                          <li>pyinstaller Library</li>
                          <li>CSV module</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-28"
                          >
                            Data Analysis with Pandas
                          </button>
                        </h4>
                        <div
                          id="faq-content-28"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
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
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-29"
                          >
                            Data Visualization
                          </button>
                        </h4>
                        <div
                          id="faq-content-29"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>matplotlib Library</li>
                          <li>Types of Charts with pyplot</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-30"
                          >
                            Networking
                          </button>
                        </h4>
                        <div
                          id="faq-content-30"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>What is Socket & Port?</li>
                          <li>What is Client & Server</li>
                          <li>socket module</li>
                          <li>Socket Programming</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-31"
                          >
                            Web Scrapping
                          </button>
                        </h4>
                        <div
                          id="faq-content-31"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>requests Library</li>
                          <li>beautifulsoup Library</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-32"
                          >
                            Web Automation
                          </button>
                        </h4>
                        <div
                          id="faq-content-32"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>selenium Library</li>
                          <li>Different Browser’s WebDrivers</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-33"
                          >
                            JSON Parsing
                          </button>
                        </h4>
                        <div
                          id="faq-content-33"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>What is JSON?</li>
                          <li>JSON module</li>
                          <li>Serialization & Deserialization of Data</li>
                          <li>Read and Write JSON data with File</li>
                          <li>Working with Live JSON API Data</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-34"
                          >
                            Introduction to Web Development
                          </button>
                        </h4>
                        <div
                          id="faq-content-34"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Basic HTML</li>
                          <li>What is Framework</li>
                          <li>
                            Installing Flask Microframework and Run First Web
                            App
                          </li>
                          <li>Routing and Variable Rules</li>
                          <li>URL Building</li>
                          <li>HTTP Methods</li>
                          <li>Templates</li>
                          <li>Static Files</li>
                          <li>Sending Form Data to Template</li>
                          <li>File Uploading</li>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div
                    id="django-web-development"
                    class="course-description pt-4"
                  >
                    <h4
                      class="alert-dark p-3 fw-bold  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Django Web Development
                    </h4>
                    <div>
                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-35"
                          >
                            Introduction to Django Framework (PPT)
                          </button>
                        </h4>
                        <div
                          id="faq-content-35"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>What is a Web Framework?</li>
                          <li>MVT Architecture</li>
                          <li>Setup Virtual Environment</li>
                          <li>Installing Django</li>
                          <li>Exploring Directory Structure</li>
                          <li>Creating First Django Project</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-36"
                          >
                            Setting up Django Web App
                          </button>
                        </h4>
                        <div
                          id="faq-content-36"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Creating First Django App</li>
                          <li>Understanding URL Routing</li>
                          <li>Handling Different Views</li>
                          <li>Running Web App on Server</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-37"
                          >
                            Templates with DTL (Django Template Language)
                          </button>
                        </h4>
                        <div
                          id="faq-content-37"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Setup Template directory’s Path</li>
                          <li>
                            Creating and Rendering Templates using URL Routings
                            *
                          </li>
                          <li>Passing Context in Multiple Templates</li>
                          <li>Using DTL to load context in Template</li>
                          <li>Tags, Variables & Filters</li>
                          <li>Template Inheritance</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-38"
                          >
                            Form Handling
                          </button>
                        </h4>
                        <div
                          id="faq-content-38"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Raw HTML Form</li>
                          <li>Pure Django Form</li>
                          <li>Form Widgets</li>
                          <li>Display Form to Multiple Templates</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-39"
                          >
                            URL Routing
                          </button>
                        </h4>
                        <div
                          id="faq-content-39"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Dynamic URL Routing</li>
                          <li>Creating and Linking Multiple Apps</li>
                          <li>In-App URL Routing & Namespacing</li>
                          <li>Django URLs Reverse</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-40"
                          >
                            Views and Mixins
                          </button>
                        </h4>
                        <div
                          id="faq-content-40"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>FBV (Function Based Views)</li>
                          <li>CBV (Class-Based Views)</li>
                          <li>Convert FBV to CBV</li>
                          <li>Custom Mixins for CBV</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-41"
                          >
                            Static File Handling
                          </button>
                        </h4>
                        <div
                          id="faq-content-41"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Setup static and media directory’s Path</li>
                          <li>Adding Bootstrap for Frontend Enhancement</li>
                          <li>Collect Static Files</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-42"
                          >
                            Working with Models
                          </button>
                        </h4>
                        <div
                          id="faq-content-42"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Django Database Models</li>
                          <li>Model Fields</li>
                          <li>Model Inheritance</li>
                          <li>Add an App to INSTALLED_APPS</li>
                          <li>Migrating Models to Database</li>
                          <li>Update Models and Migrate</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-43"
                          >
                            DAP (Django Admin Panel)
                          </button>
                        </h4>
                        <div
                          id="faq-content-43"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Creating Superuser</li>
                          <li>Exploring DAP</li>
                          <li>Manage Superuser</li>
                          <li>CRUD Operations with DAP</li>
                          <li>@admin.register()</li>
                          <li>Customizing DAP</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-44"
                          >
                            ORM (Object Relational Mapper)
                          </button>
                        </h4>
                        <div
                          id="faq-content-44"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Using Django python-shell</li>
                          <li>Using ORM to deal with Database</li>
                          <li>CRUD Operation using ORM</li>
                          <li>Retrieve Data using Filters</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-45"
                          >
                            Dynamic Templates
                          </button>
                        </h4>
                        <div
                          id="faq-content-45"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Dynamic Webpages</li>
                          <li>Retrieve Data using QuerySets</li>
                          <li>Passing context to Template</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-46"
                          >
                            Form Validation
                          </button>
                        </h4>
                        <div
                          id="faq-content-46"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Django ModelForm</li>
                          <li>Form Validation Methods</li>
                          <li>Setting initial values for Forms</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-47"
                          >
                            Working with Another Database
                          </button>
                        </h4>
                        <div
                          id="faq-content-47"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Integrating MySQL Database</li>
                          <li>Using XAMPP for Database Interaction</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-48"
                          >
                            User Authentication
                          </button>
                        </h4>
                        <div
                          id="faq-content-48"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>@login_required decorator for FBV</li>
                          <li>LoginRequiredMixin for CBV</li>
                          <li>login(), logout() and authenticate() methods</li>
                          <li>get_object_or_404() method</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-49"
                          >
                            Creating APIs Using DRF (Django Rest Framework)
                          </button>
                        </h4>
                        <div
                          id="faq-content-49"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Intro and Installing DRF</li>
                          <li>Add DRF to INSTALLED_APPS</li>
                          <li>Adding REST_FRAMEWORK in settings.py</li>
                          <li>What is Serializer and Deserializer?</li>
                          <li>Serializer Class and ModelSerializer Class</li>
                          <li>
                            APIs using Serializers, FBV, CBV, Model Mixins and
                            Generic API Views
                          </li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-50"
                          >
                            Testing Browsable APIs
                          </button>
                        </h4>
                        <div
                          id="faq-content-50"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Using DRF’s URL</li>
                          <li>Using Postman</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-51"
                          >
                            Routing and Authentications in DRF
                          </button>
                        </h4>
                        <div
                          id="faq-content-51"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Types of ViewSets</li>
                          <li>Types of Routers</li>
                          <li>
                            authentication_classes and permission_classes
                            properties
                          </li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-52"
                          >
                            Documenting APIs
                          </button>
                        </h4>
                        <div
                          id="faq-content-52"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Using drf-yasg package</li>
                          <li>Integrating drf-yasg into settings.py</li>
                          <li>Generating APIs Docs</li>
                          <li>Test browsable APIs using drf-yasg’s url</li>
                        </div>
                      </ul>

                      <ul class="course-points_1 ">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-53"
                          >
                            Publishing Django Web Application
                          </button>
                        </h4>
                        <div
                          id="faq-content-53"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Deploy on GitHub</li>
                          <li>Deploy on pythonanywhere</li>
                          <li>Collect Static Files</li>
                        </div>
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
    </>
  );
}

export default Python;

import React from 'react'
import Footer from '../../globle/Footer'
import PageTitle from '../PageTitle'
import Header from '../../globle/Header'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm'
import SubscribeNewsletter from '../../utils/SubscribeNewsletter'
import Scrollable from '../../../Scrollable'

function CPlusProgramming() {
    return (
        <>
        <Scrollable/>
            <div id="header">
                <Header />
            </div>
            <div id="bannerSlider" className='position-relative'>
                <div className="lowerDesign">
                <img src={LowerDesign} alt="Lower_design" width={"100%"} />
                </div>
                <PageTitle title={`C++ Programming`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> C++ Programming</span>
                                </div>
                                <div className="Master_course_desc">
                                    <p className="mb-2">
                                        C++ is a general-purpose programming language developed by Bjarne Stroustrup in a1979 in Bell labs.

                                        C++ has become one of the popular languages. And to build a career in this field is easy.

                                        To become a professional and expert in coding one must get the training from the right institute.

                                        Jbs It Institute Institute is the best C++ Training in surat.

                                        Learning C++, a programmer or individual can create an application which will run on a wide variety of hardware platforms like windows, Linux, Unix, and Mac operating system.
                                        C++ is the most powerful programming language that exists today.
                                    </p>

                                    <p className="mb-2">
                                        c++ Training-Student will learn and become an expert on C++ syntax, C++ language fundamentals, create functions on C++ to building blocks of learning the C computer programming languages.
                                        C++ can do many things that other languages can’t. C++ ranks 4th according to IEEE's top programming languages in 2017. For student learning, C ++ is the best investment for all programmers.
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
                                <div class="course-faq mt-5">
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Career Opportunities
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Computer Programmer</li>


                                                <li class="pb-2">Application Developer</li>


                                                <li class="pb-2">Knowledge Analyst</li>


                                                <li class="pb-2">Code Developer</li>


                                                <li class="pb-2">Coding Script Writer</li>


                                                <li class="pb-2">Coder</li>


                                                <li class="pb-2">software Developer</li>


                                                <li class="pb-2">C Programmer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Concept Of OOP
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Introduction of OOP</li>
                                                <li class="pb-2">Working with Class And Object</li>
                                                <li class="pb-2">Type Conversion In Class</li>
                                                <li class="pb-2">Constructor</li>
                                                <li class="pb-2">Destructor</li>
                                                <li class="pb-2">this pointer</li>
                                                <li class="pb-2">Friend Function</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Storage Classes
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Auto Storage</li>
                                                <li class="pb-2">Extern&nbsp;Storage</li>
                                                <li class="pb-2">Static&nbsp;Storage&nbsp;</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Inheritance
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Single inheritance</li>
                                                <li class="pb-2">Multiple inheritance</li>
                                                <li class="pb-2">Hierarchical inheritance</li>
                                                <li class="pb-2">Multilevel inheritance</li>
                                                <li class="pb-2">Hybrid inheritance</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Polymorphism
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Overloading</li>
                                                <li class="pb-2">Overriding</li>
                                                <li class="pb-2">virtual function</li>
                                                <li class="pb-2">scope resolution operator</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Interfaces
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">Abstract class</li>
                                                <li class="pb-2">Interface</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">Exception Handling
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li class="pb-2">try catch</li>
                                                <li class="pb-2">throw</li>
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

export default CPlusProgramming;

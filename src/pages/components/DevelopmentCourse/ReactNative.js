import React from 'react'
import LowerDesign from "../../../assets/images/lowerDesign.png"
import Header from '../../globle/Header';
import PageTitle from '../PageTitle';
import Footer from '../../globle/Footer';
import InqueryForm from '../../extra/InqueryForm';
import SubscribeNewsletter from '../../utils/SubscribeNewsletter';
import Scrollable from '../../../Scrollable';

function ReactNative() {
    return (
        <>
            <Scrollable />
            <div id="header">
                <Header />
            </div>
            <div id="bannerSlider" className='position-relative'>
                <div className="lowerDesign">
                    <img src={LowerDesign} alt="Lower_design" width={"100%"} />z
                </div>
                <PageTitle title={`Master In React Native`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-2">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> React Native Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    React Native is an open-source UI software framework created by Facebook, Inc.
                                    It is used to develop applications for Android, Android TV, iOS, macOS, tvOS,
                                    FWeb, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
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
                                    React Native Course Contents
                                </div>
                                <div id="ui-ux-design-web" class="course-description pt-2">
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Overview</li>
                                            <li>Javascript</li>
                                            <li>ES6</li>
                                            <li>Components</li>
                                            <li>Props</li>
                                            <li>State, Styles</li>
                                            <li>Viewers, Users, Input</li>
                                            <li>Debugging</li>
                                            <li>Data (API Integration)</li>
                                            <li>Navigation</li>
                                            <li>Expo Components</li>
                                            <li>Redux</li>
                                            <li>Performance</li>
                                            <li>Testing</li>
                                            <li>Project Demo: E-commerce APP create API – Laravel ( Back end )</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
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

export default ReactNative;

import React from 'react';
import Input from '../extra/Input';
import Button from '../extra/Button';

const AboutCourse = () => {
    return (
        <div className='mainOurCourse p60-y'>
            <div className="container">
                <div className="startOurCourse">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-10 m20-bottom">
                            <div className="ourCourseForm ">
                                <form>
                                    <div className="formBox">
                                        <Input
                                            type={`text`}
                                            id={`name`}
                                            // name={`name`}
                                            label={`Name`}
                                            errorMessage={`Enter Name`}
                                        />
                                        <Input
                                            type={`number`}
                                            id={`number`}
                                            // name={`number`}
                                            label={`Number`}
                                            errorMessage={`Enter Number`}
                                        />
                                        <Input
                                            type={`number`}
                                            id={`email`}
                                            // name={`email`}
                                            label={`Email`}
                                            errorMessage={`Enter Email`}
                                        />
                                        <Input
                                            type={`number`}
                                            id={`course`}
                                            // name={`course`}
                                            label={`Course`}
                                            errorMessage={`Enter Course`}
                                        />
                                        <Button
                                            type={`submit`}
                                            className={`bg-prime w-100 text-light`}
                                            text={`Submit`}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 m20-bottom">
                            <div className="bannerContent fw-bold p15-x text-md-start text-center">
                                <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center m10-bottom'>
                                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                                    <span>About Our Course</span>
                                </div>
                                <div className='fs-lg-50 fs-md-40 fs-20 text-second'>About Web Design Course</div>
                                <p className='fs-lg-18 fs-md-16 fs-12 text-gray m10-top'>
                                    Web design encompasses many different skills and disciplines in the production
                                    and maintenance of websites. Other web design areas include graphic
                                    web design, user interface design authoring, standardised code
                                    and proprietary software, user experience design, and
                                    search engine optimization.
                                </p>
                            </div>
                            <div className="row m40-top">
                                <div className="col-xxl-6 col-lg-12 col-md-6 col-12 m20-bottom"><DurationBox icon={`fa-solid fa-book`} text={`Course Duration 12 Months`} /></div>
                                <div className="col-xxl-6 col-lg-12 col-md-6 col-12 m20-bottom"><DurationBox icon={`fa-regular fa-clock`} text={`Daily Time 2 + 2* hours / Day`} /></div>
                            </div>

                            <div className="row m30-top">
                                <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom p15-sm-x p20-x h-100">
                                    <CourseBox title={`100% Job`} />
                                </div>
                                <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom p15-sm-x p20-x h-100">
                                    <CourseBox title={`Rich Learning Content`} />
                                </div>
                                <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom p15-sm-x p20-x h-100">
                                    <CourseBox title={`Taught by Experienced Prof.`} />
                                </div>
                                <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom p15-sm-x p20-x h-100">
                                    <CourseBox title={`Industry Oriented Projects`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutCourse;

export const CourseBox = ({ title }) => {
    return (
        <div className="mainCourseBox h-100">
            <div className="courseIcon text-light bg-prime midBox"><i class="fa-regular fa-circle-check"></i></div>
            <div className="courseText fw-bold fs-16 h-100">{title}</div>
        </div>
    )
};
export const DurationBox = ({ icon, text }) => {
    return (
        <div className="mainDurationBox">
            <div className="durationImage hw-xl-60 hw-md-50 hw-40 fs-lg-20 fs-md-18 fs-14 rounded-3 bg-second midBox text-light">
                <i className={`${icon}`}></i>
            </div>
            <div className="durationText fs-lg-18 fs-md-16 fs-12 text-overflow-1">{text}</div>
        </div>
    )
};




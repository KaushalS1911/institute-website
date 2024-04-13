import React from 'react';
import OurCourseImage from "../../assets/images/ourCourse.png"

const OurCourse = () => {
  

    document.addEventListener("scroll", function () {
        var element = document.querySelector(".mainOurCourse");
        var scrollPosition = window.scrollY;
        if (scrollPosition > 3100) {
          element?.classList.add("activeAnime");
        }
        var screenWidth = window.innerWidth;
        if (screenWidth < 768 && element) {
          if (scrollPosition > 4500) {
            element?.classList.remove("activeAnime");
            element?.classList.add("activeAnime");
            element?.classList.add("opacity-1");
          }
        }
      });
    return (
        <div className='mainOurCourse p50-y'>
            <div className="container">
                <div className="startOurCourse">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-10 m20-bottom">
                            <div className="ourCourseImage rounded-5 overflow-hidden h-lg-100 height-md-400 height-500 ">
                                <img src={OurCourseImage} alt="image" height={`100%`} width={`100%`} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 m20-bottom">
                            <div className="bannerContent animate__animated fw-bold p15-x text-md-start text-center">
                                <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-md-start justify-content-center m10-bottom'>
                                    <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                                    <span>STUDENT’S BRIGHT FUTURE MAKER</span>
                                </div>
                                <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Pick The Right Course To
                                    Build Your Career</div>

                                <div className="startOurCourse animate__animated">
                                    <OurCourseType icon={`fa-brands fa-android`} title={`Android Development`} number={`01`} count={1} />
                                    <OurCourseType icon={`fa-solid fa-laptop-code`} title={`Web Development`} number={`02`} count={2} />
                                    <OurCourseType icon={`fa-solid fa-bezier-curve`} title={`Graphic Design`} number={`03`} count={3} />
                                    <OurCourseType icon={`fa-solid fa-code`} title={`Web Design`} number={`04`} count={4} />
                                    <OurCourseType icon={`fa-brands fa-python`} title={`Python`} number={`05`} count={5} />
                                    <OurCourseType icon={`fa-solid fa-bullhorn`} title={`Digital Marketing`} number={`06`} count={6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurCourse;

export const OurCourseType = ({ count, number, title, icon }) => {
    const isSmallScreen = window.innerWidth <= 768;
    const courseWidth = {
        width: !isSmallScreen ? `calc(40px * ${count} - 15px` : `calc(14px * ${count})`
    }

    return (
        <div className="course">
            <span className="bordered" style={courseWidth}></span>
            <span className="courseType">
                <span className='courseCount fs-md-40 fs-sm-25 fs-20'>{number}</span>
                <span className='courseName'>
                    <span><i class={`${icon} m15-right fs-md-24 fs-sm-20 fs-18`}></i></span>
                    <span className='fs-lg-20 fs-md-12 fs-smm-14 fs-xsm-16'>{title}</span>
                </span>
            </span>
        </div>
    )
}


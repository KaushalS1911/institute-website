import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Lng1 from "../../assets/images/lng1.png"
import Lng2 from "../../assets/images/lng2.png"
import Lng3 from "../../assets/images/lng3.png"
import Lng4 from "../../assets/images/lng4.png"
const BestCourseSlider = () => {

    const option = {
        nav: false,
        loop: true,
        dots: false,
        margin: 50,
        responsive: {
            0: {
                items: 2,
                center: false,
            },
            500: {
                items: 3,
                center: false,
            },
            700: {
                items: 4,
                center: true,
            },
            1000: {
                items: 6,
                center: true,
            }
        }
    }

    return (
        <section id='bestCourseSection' className='p100-md-y p40-y'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="bannerContent fw-bold text-center m40-sm-bottom m20-bottom">
                            <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Best Web Design Course In Surat Module</div>
                            <p className='fs-lg-18 fs-md-16 fs-12 text-gray m10-top'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stratBestCourse m20-top">
                <OwlCarousel className='owl-theme' {...option} navClass={['fa-solid fa-angles-left prev', 'fa-solid fa-angles-right next']}
                    autoplay={true}
                >

                    <div className='item'>
                        <CourseSingleBox image={Lng1} title={`Photoshop`} color={`#5FCCEB`} />
                    </div>
                    <div className='item'>
                        <CourseSingleBox image={Lng2} title={`HTML/HTML5`} color={`#E8823E`} />
                    </div>
                    <div className='item'>
                        <CourseSingleBox image={Lng3} title={`CSS/CSS3`} color={`#72A5EE`} />
                    </div>
                    <div className='item'>
                        <CourseSingleBox image={Lng4} title={`Illustrator`} color={`#F19316`} />
                    </div>

                </OwlCarousel>
            </div>

        </section>
    );
}

export default BestCourseSlider;

export const CourseSingleBox = ({ image, title, color }) => {
    return (
        <div className="courseSingleBox m-auto m50-top">
            <div className="iconPart hw-xl-70 hw-lg-50 hw-sm-70 hw-50" style={{ background: `radial-gradient(${color} , transparent 75%)` }}>
                <img src={image} alt="" className='hw-xl-40 hw-lg-35 hw-sm-40 hw-35' />
            </div>
            <div className="detailsPart text-center">
                <div className="fs-xl-20 fs-14 fw-bold text-overflow-1" title={title}>{title}</div>
            </div>
        </div>
    )
}

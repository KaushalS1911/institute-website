import React from 'react';
import { CEOBox } from './CEO';

const PlacedStudent = () => {
    return (
        <section id='placementSection' className='p100-md-y p40-y bg-fourth'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-12">
                        <div className="bannerContent fw-bold text-center m40-sm-bottom m20-bottom">
                            <div className='fs-lg-20 fs-md-16 fs-12 d-flex align-items-center justify-content-center'>
                                <span className='m10-right'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                                <span>PROFESSIONAL PEOPLE</span>
                                <span className='m10-left'><i class="fa-solid fa-circle fs-md-12 fs-8"></i></span>
                            </div>
                            <div className='fs-lg-50 fs-md-40 fs-20 text-second'>Our Placed Studentss</div>
                            <p className='fs-lg-18 fs-md-16 fs-12 text-gray m10-top'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                            <CEOBox image={``} />
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                            <CEOBox image={``} />
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                            <CEOBox image={``} />
                        </div>
                        <div className="col-lg-3 col-sm-4 col-6 m20-bottom">
                            <CEOBox image={``} />
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-8 col-12">
                        <div className="downloadBox text-center p20-top">
                            <div className="downloadIcon hw-50 bg-light midBox rounded-5 border-prime-2  m-auto m10-bottom">
                                <i class="ri-download-2-line fs-lg-22 fs-md-20 fs-18 text-prime"></i>
                            </div>
                            <div className="downloadButton d-inline bg-prime text-light p8-y p15-x rounded-3 fs-xl-14 fs-md-14 fs-10">
                                Download Brochure
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PlacedStudent;

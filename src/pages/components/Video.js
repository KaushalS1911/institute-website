import React from 'react';
import RoundEffect from "../../assets/images/roundEffect.png"
//  import TechnologyVideo from '../../assets/video/Technology.mp4'

const Video = () => {
    return (
        <div className='classVideo font-prime'>

            <div className="container">
                <div className="videoTitle text-center">
                    <div className='fs-md-40 fs-sm-30 fs-20 text-uppercase text-second fw-bold itPrimeText'>JBS IT Institute</div>
                    <div className='itText fs-md-40 fs-sm-30 fs-20 text-uppercase fw-bold'>JBS IT Institute</div>
                </div>
                <div className="row  position-relative">
                    <div className="col-lg-9 col-sm-10 col-11 m-auto">
                        <img src={RoundEffect} className='videoEffect hw-md-500 hw-400' alt="video"/>
                        <div className="mainVideos w-100  rounded-4">
                            {/* <video loop autoPlay controls={false} muted>
                                <source src={TechnologyVideo} type="video/mp4" className='h-150 w-100' />
                            </video> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;

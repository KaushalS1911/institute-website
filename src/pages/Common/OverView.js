import React from 'react';
import { DurationBox } from './AboutCourse';

const OverView = () => {
    return (
        <div className='p40-y bg-fourth'>
            <div className="container">
                <div className="row m40-top">
                    <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom"><DurationBox icon={`fa-solid fa-book`} text={`Overview`} /></div>
                    <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom"><DurationBox icon={`fa-regular fa-clock`} text={`Course Cover`} /></div>
                    <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom"><DurationBox icon={`fa-solid fa-book`} text={`Career Opportunities`} /></div>
                    <div className="col-xxl-3 col-lg-6 col-md-3 col-6 m20-bottom"><DurationBox icon={`fa-regular fa-clock`} text={`Reviews`} /></div>
                </div>
            </div>
        </div>
    );
}

export default OverView;

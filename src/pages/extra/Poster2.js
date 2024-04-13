import React from 'react';


const Poster2 = ({ title }) => {
  return (
    <section id='Poster' className='p0 m20-md-bottom'>
      <div className="container">
        <div className="mainPoster text-second midBox h-100">
          <h2 className='fs-lg-60 fs-sm-45 fs-25 m10-lg-bottom m5-bottom text-uppercase'>{title}</h2>
          <p className='fw-300 fs-sm-20 fs-12 text-dark'>Home / {title}</p>
        </div>
      </div>
    </section>
  );
};

export default Poster2;

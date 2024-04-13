import React from 'react';


const Poster = ({title}) => {
  return (
    <section id='Poster'>
      <div className="container">
        <div className="mainPoster bg-second text-light midBox">
          <h2 className='fs-lg-60 fs-sm-45 fs-25 m30-lg-bottom m20-sm-bottom m10-bottom text-uppercase'>{title}</h2>
          <p className='fw-300 fs-sm-20 fs-14'>Home / Shop</p>
        </div>
      </div>
    </section>
  );
};

export default Poster;

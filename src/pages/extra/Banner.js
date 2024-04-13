import React from 'react'
import BannerImg from '../../assets/images/banner1.png'

const Banner = () => {
  return (
    <section id='Banner'>
      <div className='container'>
        <div className="mainBanne">
          <img src={BannerImg} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banner;

export const Notice = () => {
  return (
    <section id='Notice'>
      <div className='container'>
        <div className="mainNotice bg-prime text-center midBox">
          <p>Not only is it a cute little number for the
            gym it’s also practical. The material is
            so soft and the jumpsuit is relatively
            easy to get in and out of.</p>
        </div>
      </div>
    </section>
  )
}

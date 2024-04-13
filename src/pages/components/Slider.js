import { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';



const Slider = () => {


  useEffect(() => {
    $('.bannerImage').ripples({
      dropRadius: 10,
      perturbance: 0.03
    });

    return () => {
      $('.bannerImage').ripples('destroy');
    };
  }, []);

  const banner = [
    {
      title: "Education Is A Path To Success In Life",
      subtitle: "The roadmap to lifelong success and personal growth, paving the way for a brighter future.",
      image: "",
    },
    {
      title: "Committed To Learn Excellence In Education",
      subtitle: "Dedicated team fostering excellence in education through a commitment to continuous learning and growth.",
      image: "",
    }
  ]

  return (
    <>
      <section id='Slider' className='p0'>
        <div className="mainSlider bg-light">
          <div className="">
            <OwlCarousel className='owl-theme animate__animated' items={1} loop nav navClass={['fa-solid fa-angles-left prev', 'fa-solid fa-angles-right next']}
              autoplay={true} animateIn={`animate__fadeIn`} animateOut={`animate__fadeOut`} mouseDrag={false}
            >
              {
                banner && (
                  banner?.map((res) => {
                    return (
                      <div className='item'>
                        <div
                          className="bannerImage"
                          color="rgba(255, 255, 255, 0.3)"
                        >
                          <div className="container bannerText animate__animated">
                            <div className="bannerContent w-lg-65 w-sm-60 w-70 text-light fw-bold">
                              <div className='fs-lg-60 fs-lg-4 fs-md-40 fs-25 mb-4' style={{ color: '#d46615' }}>{res.title}</div>
                              <div className="fs-lg-22 fs-md-20 fs-14 m20-top">
                                {res.subtitle}
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  })
                )

              }
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider

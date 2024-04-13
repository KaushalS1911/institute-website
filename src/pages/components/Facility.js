import React from 'react';

const Facility = () => {

    const facilitiArry = [
        {
            colors: `#FF0000`, dec: `Gain knowledge from professionals in the field and 
        subject matter experts who have a wealth of knowledge. Our teachers 
        offer practical knowledge from their experiences as practitioners as well as
        their education to the classroom`, title: `Experienced Teachers`, icon: `fa-solid fa-gear`
        },
        {
            colors: `#6B50DA`, dec: `We recognize that today's learners have a 
        variety of demands. To suit your needs and schedule, select from it.`, title: `Adaptable Learning Options`, icon: `fa-solid fa-users`
        },
        {
            colors: `#D7B640`, dec: `After the final lesson, we remain committed to you. To 
        support your transition into your ideal IT career, we provide mentorship, 
        career guidance, and aid with job placement.`, title: `Career Support`, icon: `fa-solid fa-chart-simple`
        },
        {
            colors: `#FC7DD8`, dec: `We provide businesses specialized training programs
        that will up skill employees, increase output, and accomplish particular 
        company goals so that they easily gain  job opportunity`, title: `100% Job Placement`, icon: `fa-solid fa-user-shield`
        },
    ]
    document.addEventListener("scroll", function () {
        var element = document.querySelector(".mainFacility");
        var scrollPosition = window.scrollY;
        if (scrollPosition > 2700) {
            element?.classList.add("activeAnime");
        }
    });
    return (
        <div>
            <div className="mainFacility">
                <div className="container">
                    <div className="facilityRow m100-top">
                        <div className="row justify-content-center">
                            {
                                facilitiArry && (
                                    facilitiArry?.map((res) => {
                                        return (
                                            <div className="col-lg-3 col-smm-6 col-12 m20-bottom fsBox facility-item">
                                                <FacilityBox colors={res.colors} title={res.title} dec={res.dec} icon={res.icon} />
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Facility;

export const FacilityBox = ({ colors, title, dec, icon }) => {
    return (
        <div className="facilityBox animate__animated" style={{ color: colors, boxShadow: `-3px -3px 10px 0px ${colors}62 inset` }}>
            <div className="iconPart hw-xl-80 hw-lg-60 hw-sm-80 hw-60 bg-light midBox" style={{ boxShadow: `0px 0px 25px ${colors}62` }}>
                <i className={`${icon} fs-xl-30 fs-20`}></i>
            </div>
            <div className="detailsPart text-center midBox">
                <div className="fs-xl-20 fs-14 fw-600 text-overflow-1" title={title}>{title}</div>
                {/* <p className="fw-600 w-90 fs-xl-16 fs-12 text-gray text-overflow-3">{dec}</p> */}
            </div>
        </div>
    )
}


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Service1 from "../../assets/icons/service1.png"
import Service2 from "../../assets/icons/service2.png"
import Service3 from "../../assets/icons/service3.png"
import ServicesBox from '../ServicesBox';


const Service = () => {

    const serviceArry = [
        {
            image: Service1,
            title: `Education Services`,
            dec: `One of the top distributors of extensive IT education and training services is JBS IT INSTITUTE. 
            Our goal is to equip people with the most recent information technology knowledge and abilities`,
            subdec: `To achieve this objective, we provide an extensive selection of educational programs tailored to the needs of professionals, 
            students, and tech enthusiasts.`
        },
        {
            image: Service2,
            title: `Professional IT training `,
            dec: `To provide you the abilities and knowledge needed to succeed in the quickly changing field of information technology, 
            our institute presents industry-relevant training programs`,
            subdec: ` Our courses are meant to serve learners interested in a wide range
            of IT sectors, including developers State-of-the-Art Facilities = Study in a conducive learning environment equipped with the 
             latest software, hardware, and resources.Access dedicated labs, libraries, and online materials to support your learning journey.`
        },
        {
            image: Service3,
            title: `Cutting-Edge Curriculum`,
            dec: `We have designed our curriculum to be in line with the most recent technical developments and industry standards.To make sure that students are exposed to `,
            subdec: `the most current and pertinent material , we regularly update our courses`
        },
    ]
    document.addEventListener("scroll", function () {
        var element = document.querySelector("#ourServices");
        var scrollPosition = window.scrollY;
        if (scrollPosition > 150) {
            element?.classList.add("activeAnime");
        }
    });
    useEffect(() => {
        var element = document.querySelector("#ourServices");
        var screenWidth = window.innerWidth;
        if (screenWidth < 768 && element) {
            element?.classList.add("activeAnime");
            element?.classList.add("opacity-1");
        }
    }, []);

    return (
        <div className='ourServices m40-bottom p20-md-bottom' id='ourServices'>
            <div className="container">
                <div className="stratService">
                    <div className="row justify-content-center">
                        {
                            serviceArry && (
                                serviceArry?.map((res) => {
                                    return (
                                        <div className="col-lg-4 col-md-6 col-10 m30-bottom">
                                            <ServicesBox image={res.image} title={res.title} dec={res.dec} subdec={res.subdec}/>
                                        </div>
                                    )
                                })
                            )

                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;


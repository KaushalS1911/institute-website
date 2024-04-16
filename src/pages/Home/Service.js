import React from "react";
import Service1 from "../../assets/images/Home/Service/service1.webp";
import Service2 from "../../assets/images/Home/Service/service2.webp";
import Service3 from "../../assets/images/Home/Service/service3.webp";

const Service = () => {
  const serviceArry = [
    {
      id: 1,
      image: Service1,
      title: `Industry-Relevant Courses`,
      dec: `Stay ahead in the IT landscape with our comprehensive courses designed to meet the demands of the industry. Our curriculum is crafted by industry experts, ensuring that you acquire the latest skills and knowledge.`,
      subdec: `To achieve this objective, we provide an extensive selection of educational programs tailored to the needs of professionals, 
            students, and tech enthusiasts.`,
    },
    {
      id: 2,
      image: Service2,
      title: `Expert Faculty`,
      dec: `Learn from the best! Our experienced and knowledgeable faculty members are passionate about teaching and dedicated to guiding you through your educational journey. Benefit from their real-world insights and practical expertise.`,
      subdec: `and including developers Facilities Study in a conducive learning environment equipped with the 
             latest software, hardware, and resources.Access dedicated labs, libraries, and online materials to support your learning journey.`,
    },
    {
      id: 3,
      image: Service3,
      title: `State-of-the-Art Facilities`,
      dec: `Immerse yourself in a conducive learning environment equipped with modern facilities. Our classrooms, labs, and study spaces are designed to enhance your educational experience and provide you with the tools you need to succeed.`,
      subdec: `the most current and pertinent material , we regularly update our courses`,
    },
    {
      id: 4,
      image: Service1,
      title: `Career Guidance and Placement Assistance`,
      dec: `Your success is our priority. Receive personalized career guidance and take advantage of our strong network of industry connections. Our placement assistance ensures that you are well-prepared for the workforce and have access to exciting job opportunities.`,
      subdec: `To achieve this objective, we provide an extensive selection of educational programs tailored to the needs of professionals, 
            students, and tech enthusiasts.`,
    },
    {
      id: 5,
      image: Service2,
      title: `Hands-On Learning`,
      dec: `Theory meets practice at JBS IT Institute. Engage in hands-on projects, workshops, and real-world simulations to reinforce your learning and develop practical skills that set you apart in the job market.`,
      subdec: `and including developers Facilities Study in a conducive learning environment equipped with the 
             latest software, hardware, and resources.Access dedicated labs, libraries, and online materials to support your learning journey.`,
    },
    {
      id: 6,
      image: Service3,
      title: `Continuous Learning and Professional Development`,
      dec: `Education doesn't end in the classroom. Stay relevant and continue to grow with our ongoing training programs and professional development opportunities. We believe in a lifelong learning approach to keep you at the forefront of the IT field.`,
      subdec: `the most current and pertinent material , we regularly update our courses`,
    },
  ];
  return (
    <div className="our-service-outer py-4" id="ourServices">
      <div className="container">
        <div className="stratService ">
            <div className="service-item row">
              {
                serviceArry.map((res) => (
                  <div className="p-0 mb-3 col-12 col-md-6 col-xl-4 justify-content-center align-items-center d-flex ">
                    <div className="servicesBox ">
                        <div className="iconPart">
                          <img
                            src={res.image}
                            alt="images"
                            className="hw-xl-30 hw-sm-35 hw-20"
                          />
                        </div>
                        <div
                          className="fs-xl-18 fs-14 fw-bold service-title"
                          title={res.title}
                        >
                          {res.title}
                        </div>
                        <p className="section-text fw-500 fs-xl-14 fs-md-12 fs-12">
                          {res.dec}
                        </p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

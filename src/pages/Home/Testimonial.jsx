import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import t1 from "../../assets/images/Home/testimonial/1.webp";
import t2 from "../../assets/images/Home/testimonial/2.webp";
import t3 from "../../assets/images/Home/testimonial/3.webp";
import t4 from "../../assets/images/Home/testimonial/4.webp";
import t5 from "../../assets/images/Home/testimonial/5.webp";
import vector1 from "../../assets/images/Home/testimonial/vector1.png";
import vector2 from "../../assets/images/Home/testimonial/vector2.png";

const Testimonial = () => {
  const option = {
    nav: false,
    loop: true,
    dots: false,
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    slideTransition: "linear",
  };

  const ratingArry = [
    {
      id: "1",
      image: t4,
      title: "Aditi Devani",
      dec: "Absolutely stellar experience at this IT institute! The instructors are incredibly knowledgeable and supportive, making complex concepts easy to grasp. The hands-on approach to learning truly sets this institute apart. Highly recommend to anyone looking to advance their IT skills",
    },
    {
      id: "2",
      image: t1,
      title: "Yash Kakadiya",
      dec: "I enrolled in a course at this IT institute and it exceeded all my expectations. The curriculum is comprehensive, the facilities are top-notch, and the instructors are experts in their field. Plus, the career support services provided helped me land a job in the IT industry shortly after completing the program. Couldn't be happier with my experience here!",
    },
    {
      id: "3",
      image: t2,
      title: "Bhavin Bhuva",
      dec: "I had the pleasure of attending this IT institute for a specialized training program, and I have to say, it was worth every penny. The instructors are not only knowledgeable but also passionate about what they teach, which made the learning experience enjoyable and engaging. I feel more confident in my IT skills now and would highly recommend this institute to anyone serious about advancing their career in technology.",
    },
    {
      id: "4",
      image: t3,
      title: "Heet TImbadiya",
      dec: "As someone with limited IT background, I was a bit apprehensive about enrolling in a course at this institute, but I'm so glad I did. The instructors were patient and supportive, breaking down complex concepts into manageable chunks and providing plenty of opportunities for hands-on practice. By the end of the program, I felt equipped with the skills and knowledge needed to pursue a career in IT. Thank you to the entire team for such a positive learning experience!",
    },
    {
      id: "5",
      image: t1,
      title: "Daksh Savani",
      dec: "This IT institute is simply outstanding! From the moment I walked in, I was impressed by the professionalism and dedication of the staff. The curriculum is up-to-date with the latest industry trends, and the instructors go above and beyond to ensure that every student succeeds. Whether you're a beginner or an experienced professional looking to upskill, I highly recommend checking out what this institute has to offer.",
    },
    {
      id: "6",
      image: t2,
      title: "Sujal Paghdhal",
      dec: "I cannot speak highly enough about my experience at this IT institute. The instructors are not only experts in their field but also excellent communicators, making even the most complex topics easy to understand. The hands-on labs and real-world projects were incredibly valuable in solidifying my understanding of key concepts. If you're serious about a career in IT, look no further than this institute!",
    },
    {
      id: "7",
      image: t3,
      title: "Neet Nathani",
      dec: "Attending this IT institute was a game-changer for me. The curriculum is structured in a way that builds a strong foundation while also allowing for specialization in areas of interest. The instructors are not just teachers; they are mentors who genuinely care about their students' success. The resources provided, including access to industry-standard software and equipment, are invaluable. I am grateful for the knowledge and skills I gained here.",
    },
    {
      id: "8",
      image: t1,
      title: "Genius Mangroliya",
      dec: "Enrolling in a course at this IT institute was one of the best decisions I've made for my career. The instructors are experts in their respective fields and are passionate about sharing their knowledge. The hands-on approach to learning allowed me to apply what I learned in real-world scenarios, which greatly enhanced my understanding. The institute's commitment to staying updated with the latest technologies ensures that students are always learning cutting-edge skills.",
    },
    {
      id: "9",
      image: t2,
      title: "Jeel Kakadiya",
      dec: "I completed a certification program at this IT institute, and I couldn't be happier with the experience. The curriculum was well-structured, covering a wide range of topics relevant to today's IT industry. The instructors were not only knowledgeable but also supportive, providing personalized attention when needed. The institute also offers excellent networking opportunities, connecting students with professionals in the field. I highly recommend this institute to anyone looking to advance their IT career.",
    },
    {
      id: "10",
      image: t5,
      title: "Archi Savani",
      dec: "This IT institute trul sets the standard for excellence in technology education. The instructors are experts who are passionate about what they do, and it shows in their teaching. The curriculum is rigorous but rewarding, challenging students to think critically and problem-solve effectively",
    },
    {
      id: "11",
      image: t1,
      title: "Dax Kakadiya",
      dec: "I cannot speak highly enough about the support I received at this IT institute. From the moment I inquired about their programs to the day I completed my course, the staff went above and beyond to ensure my success. The instructors are not only knowledgeable but also approachable, always willing to answer questions and provide guidance. The career services team helped me polish my resume and prepare for interviews, ultimately landing me a job in my desired field. Thank you for everything!",
    },
    {
      id: "12",
      image: t2,
      title: "Harshil Savaliya",
      dec: "This IT institute exceeded my expectations in every way. The instructors are not only experts in their fields but also excellent communicators, making even the most complex topics easy to understand. The small class sizes allowed for personalized attention, ensuring that no student was left behind. The institute's emphasis on practical, real-world skills gave me the confidence to pursue opportunities in the IT industry. I highly recommend this institute to anyone looking to kickstart or advance their career in technology.",
    },
  ];

  return (
    <>
      <section id="ratingSection">
        <div className="container">
          <div className="mainSlider p40-lg-y  p20-md-y">
            <OwlCarousel
              className="owl-theme"
              {...option}
              items={1}
              animateIn="animate__animated animate__fadeInRight"
              animateOut="animate__animated animate__backOutLeft"
              navClass={[
                "fa-solid fa-angles-left prev",
                "fa-solid fa-angles-right next",
              ]}
              autoplay={true}
            >
              {ratingArry.map((item) => (
                <div key={item.id} className="about-team-img ">
                  <div className="item">
                    <div className="row ms-3 me-3">
                      <div className="col-lg-12  col-12 card border_css m-0">
                        <div className="row align-items-center ">
                          <div className=" col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="ratingImage ">
                              <div className="ratingImg2 m-auto m10-bottom w-100 h-100">
                                <img src={item.image} alt="rating_image" width={150} height={100}/>
                              </div>
                            </div>
                            <div className="h4 rateTitle fs-lg-20 fs-md-18 fs-16 text-center">
                              {item.title}
                            </div>
                            <div className="h4 rating text-warning fs-lg-18 fs-16 text-center">
                              <span>
                                <i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i className="ri-star-s-fill"></i>
                              </span>
                              <span>
                                <i className="ri-star-s-line"></i>
                              </span>
                              <span>
                                <i className="ri-star-s-line"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-12 col-md-8 padding_side">
                            <div className="ratingText text-gray fs-lg-18 fs-16">
                              <img
                                className="vector-1"
                                src={vector1}
                                alt="vector"
                                width={80}
                                height={80}
                              />
                              <p className="my-4">{item.dec}</p>
                              <img
                                className="vector-2 "
                                src={vector2}
                                alt="vector"
                                width={80}
                                height={80}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;

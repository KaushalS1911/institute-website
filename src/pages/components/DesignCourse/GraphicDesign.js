import React from 'react'
import Header from '../../globle/Header';
import PageTitle from '../PageTitle';
import Footer from '../../globle/Footer';
import LowerDesign from "../../../assets/images/lowerDesign.png"
import InqueryForm from '../../extra/InqueryForm';
import SubscribeNewsletter from '../../utils/SubscribeNewsletter';
import Scrollable from '../../../Scrollable';


function GraphicDesign() {
    return (
        <>
        <Scrollable/>
            <div id="header">
                <Header />
            </div>
            <div id="bannerSlider" className='position-relative'>
                <div className="lowerDesign">
                <img src={LowerDesign} alt="Lower_design" width={"100%"} />
                </div>
                <PageTitle title={`Master In Graphic Design`} />
            </div>

            <div className="Master_course_outer block">
                <div className="container">
                    <div className="Master_course">
                        <div className="row">
                            <div className="col-lg-8 mb-4">
                                <div className="Master_couse_title">
                                    About <span style={{ color: '#D46615' }}> Graphics Designing Course</span>
                                </div>
                                <div className="Master_course_desc">
                                    Graphic design is the art, profession and academic discipline whose activity involves projecting visual communications intended to transmit specific messages to social groups with particular objectives.
                                </div>
                                <div className="Master_course_btn mb-4 ">
                                    <button className='rounded text-center p-2 px-3'>Course Duration <span style={{ color: '##343f52' }}>6 Months</span></button>
                                    <button className='rounded text-center p-2 px-3'>Daily Time <span style={{ color: '##343f52' }}>2 Hours</span></button>
                                </div>
                                <div className="Course_details">
                                    <div className="title mt-4 mb-3 text-4">Included In This Course</div>
                                    <ul>
                                        <li>100% Job</li>
                                        <li>Rich Learning Content</li>
                                        <li>Taught by Experienced Prof.</li>
                                        <li>Industry Oriented Projects</li>
                                    </ul>
                                </div>
                                <div className="Module rounded p-2 fs-20 text-center alert-primary my-4">
                                    Course Modules
                                </div>
                                <div id="graphics" class="course-description pt-2">
                                    <h4 class="alert-dark p-2  fs-16 rounded ps-3" data-bs-toggle="collapse" data-bs-target="#collapseOne">Graphics Designing</h4>
                                    <div class="ps-3">
                                        <ul class="course-points">
                                            <li class="text-dark bullet-heading">Introduction to graphic design and knowing the history</li>
                                            <li>Design process & element</li>
                                            <li>Importance of text content</li>
                                            <li>Colour theory, typography, iconography</li>
                                            <li>Visualization of design</li>
                                            <li>How to create a design system</li>
                                            <li>Photo editing & manipulation</li>
                                            <li>Learning & practising mind mapping</li>
                                            <li>Company definition basic project</li>
                                            <li>Understanding industry requirements and creating graphics like branding, logos, business cards, Flyers, brochures, magazines, ad graphics, social media & business posts, packaging, portfolio presentations, and many projects</li>
                                            <li>Presenting animation like promo videos & motion graphics, animated logo intro</li>
                                            <li>Creating and working with mockups</li>
                                            <li>Marketing fundamentals</li>
                                        </ul>
                                        <div class="border p-3 px-3 rounded d-inline-block">
                                            <h6 class="text-dark fs-16">SOFTWARES TO LEARN:</h6>
                                            <p className='mb-2 text-muted fs-14'>Photoshop, Illustrator, Indesign, Corel Draw, Aftereffect</p>
                                            <h6 class="text-dark fs-16">TIME DURATION:</h6>
                                            <p class="mb-2 fs-14  text-muted">6 Months</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="course-faq mt-5">
                                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">FAQ</h3>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Who can join the  Graphics designing Course?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li>10/12 pass or fail, diploma or engineering novice students.</li>
                                                <li>Students of any stream of science, commerce or arts</li>
                                                <li>Businessman or House Wife</li>
                                                <li>Anyone interested in design and art</li>
                                                <li>Individuals who want to do White Colar Job</li>
                                                <li>For the person who chooses printing & advertising</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            Why should I learn Graphics design?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li>Never a recession</li>
                                                <li>An excellent source of Side Income</li>
                                                <li>Constantly growing demand in every field.</li>
                                                <li>UI-UX Graphics Design is required for the sale of any product</li>
                                                <li>Compensation according to experience</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="faq-item mb-3">
                                        <h4 class="alert-dark p-2 fs-16 rounded ps-3">
                                            What after the Graphics design course?
                                        </h4>
                                        <div class="faq-body">
                                            <ul class="bullets-point ps-3 fs-14">
                                                <li>A job can be done in IT, Production, Digital Marketing, Game Design, Animation or any other company.</li>
                                                <li>Business can be started with minimum investment.</li>
                                                <li>Freelancing can be done sitting at home.</li>
                                                <li>You can learn web designing and we are offering web
                                                    designing course in surat.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                            <div className="col-lg-4 mb-4">
                                <InqueryForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeNewsletter/>
            <Footer />
        </>
    )
}

export default GraphicDesign;

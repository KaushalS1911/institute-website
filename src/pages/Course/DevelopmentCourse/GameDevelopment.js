import React from "react";
import PageTitle from "../../Common/PageTitle";
import InqueryForm from "../../Common/InqueryForm";

function GameDevelopment() {
  return (
    <>
      <div id="bannerSlider" className="position-relative">
        <PageTitle title={`Game Development`} />
      </div>

      <div className="Master_course_outer block">
        <div className="container">
          <div className="Master_course">
            <div className="row">
              <div className="col-lg-8 mb-4">
                <div className="Master_couse_title">
                  About{" "}
                  <span style={{ color: "rgb(96 105 124)" }}>
                    {" "}
                    Game Development Course
                  </span>
                </div>
                <div className="Master_course_desc">
                  Game development, production, or design is a process that
                  starts from an idea or concept. Often the idea is based on a
                  modification of an existing game concept. The game idea may
                  fall within one or several genres. They usually have to
                  develop a game from concept to prototype without external
                  funding.
                </div>
                <div className="Master_course_btn mb-4 ">
                  <button className="rounded text-center p-2 px-3 fs-16">
                    Course Duration{" "}
                    <span style={{ color: "##343f52" }}>12 Months</span>
                  </button>
                  <button className="rounded text-center p-2 px-3 fs-16">
                    Daily Time{" "}
                    <span style={{ color: "##343f52" }}>2 Hours</span>
                  </button>
                </div>
                <div className="Course_details">
                  <div className="title mt-4 mb-3 text-4">
                    Included In This Course
                  </div>
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

                <div class="accordion accordion-flush" id="faqlist">
                  <div class="course-description pt-2">
                    <h4
                      class="alert-dark p-2  fs-16 rounded ps-3"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                    >
                      Master in Game Development
                    </h4>
                    <div class="ps-3">
                      <ul class="course-points_1">
                        <h4 class=" accordion-header   bullet-heading ">
                          <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faq-content-1"
                          >
                            Game Development
                          </button>
                        </h4>
                        <div
                          id="faq-content-1"
                          class="accordion-collapse collapse course-points"
                          data-bs-parent="#faqlist"
                        >
                          <li>Introduction To C Language</li>
                          <li>C Program Structure</li>
                          <li>C Input and Output</li>
                          <li>Decision Control Structure</li>
                          <li>Loop Control Structure</li>
                          <li>Arrays and Strings</li>
                          <li>Function</li>
                          <li>Introduction To C++ Language</li>
                          <li>C++ Constructors</li>
                          <li>C++ Inheritance</li>
                          <li>C++ Namespace</li>
                          <li>
                            Basic Knowledge of algorithms and Data Structures.
                          </li>
                          <li>Intro and Installation of Unity</li>
                          <li>
                            Working with Visual Studio and Structure of
                            Monobehaviour
                          </li>
                          <li>
                            Understanding of Unity Game objects & Console.
                          </li>
                          <li>Unity – Starting with UI</li>
                        </div>
                      </ul>

                      <div class="border p-4 px-3 rounded d-inline-block">
                        <h6 class="text-dark fs-15">LANGUAGES TO LEARN:</h6>
                        <p className="mb-3 fs-14 text-muted">
                          C, C++, C# with Unity Scripting
                        </p>

                        <h6 class="text-dark fs-15">TIME DURATION:</h6>
                        <p className="mb-3 fs-14 text-muted">12 Months</p>

                        <h6 class="text-dark fs-15">PROJECTS: </h6>
                        <p class="mb-3 fs-14 text-muted text-muted fs-16 ">
                          1. Helix Jump <br />
                          2.Bot Game Multiplayer <br />
                          3. Ludo <br />
                          4. Player
                          <br />
                          5. Connect Game <br />
                          6.2D Physics Game
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="course-description pt-4 course-points_1">
                    <h4 class=" accordion-header   bullet-heading ">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq-content-2"
                      >
                        Master In Game Development Overview
                      </button>
                    </h4>
                    <div
                      id="faq-content-2"
                      class="accordion-collapse collapse course-points"
                      data-bs-parent="#faqlist"
                    >
                      <div class="ps-3">
                        <p className="fs-16 text-muted">
                          When you hear the word GAME, it would appear that it
                          is utilized to burn through an individual’s time. But
                          since this game, there has been a noteworthy increment
                          in the capacity of the individual to build their
                          intellectual abilities, intelligence skills,
                          instantaneous powers, mathematical abilities etc. This
                          is why play is so important in student life. In
                          today’s fast era, if a person is doing the first thing
                          to be relaxed for a moment, it is their decision to
                          play a game that can be refreshing to anybody from a
                          mobile or a computer. At the point when plan and
                          illustrations are joined with PC programming, it turns
                          into a game, and this kind of learning is called game
                          designing and game development. Modification is made,
                          and you’ll be in your lifetime, once in a while,
                          likewise playing the game. But today’s child is more
                          likely to play a game on a mobile or computer than
                          outer doors. About 72% of people on the planet play
                          games every day. Because of this, the game maker can
                          get good financial returns by showing ads to different
                          advertising agencies. A student who has a keep
                          interest in such topics as playing a game can make
                          extraordinary progress in the field of game designing
                          and development. So there is a lot of demand for game
                          designers and developers now a decade.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="course-faq mt-5">
                    <h3 class="alert-primary p-2  fs-20 rounded ps-3 text-center mb-5">
                      FAQ
                    </h3>

                    <div class="faq-item mt-4 course-points_1">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-3"
                        >
                          Who can join Game Development?
                        </button>
                      </h4>
                      <div
                        id="faq-content-3"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-16">
                            <li>10/12 pass or fail students.</li>
                            <li>People who can think imaginatively</li>
                            <li>People who like to play games</li>
                            <li>Students interested in mathematics</li>
                            <li>People who want to make their own game.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mt-4 course-points_1">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-4"
                        >
                          Why should I learn Game Development?
                        </button>
                      </h4>
                      <div
                        id="faq-content-4"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3 fs-16">
                            <li>Being a subject of interest.</li>
                            <li>
                              According to the 2018 report, there was a huge
                              industry of 9472.96 billion which will be 14505
                              billion by 2022.
                            </li>
                            <li>
                              Students can achieve great success in the field of
                              design and development.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="faq-item mt-4 course-points_1">
                      <h4 class=" accordion-header   bullet-heading ">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#faq-content-5"
                        >
                          What after the Game Development course?
                        </button>
                      </h4>
                      <div
                        id="faq-content-5"
                        class="accordion-collapse collapse course-points"
                        data-bs-parent="#faqlist"
                      >
                        <div class="faq-body">
                          <ul class="bullets-point ps-3  fs-16">
                            <li>
                              Multimedia Artist / Animator. Many video gamers
                              are also creatives – making this position all the
                              more attractive to gamers. …
                            </li>
                            <li>Game Tester.</li>
                            <li>
                              Freelancing work can be done as a game designer.
                            </li>
                            <li>
                              Customer Support Agent in the Gaming industry. …
                            </li>
                            <li>Developer</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <InqueryForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDevelopment;

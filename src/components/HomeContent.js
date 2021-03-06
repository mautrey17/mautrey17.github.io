import React from "react";
import "../css/Styles.css";
import "../css/home.css";
import Footer from "./Footer";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

function HomeContent() {
  return (
    <div>
      <section className="mt-3 pb-5 aboutBlock relative">
        <div class="container">
          <div class="row justify-content-md-center">
            <div className="col-lg-6 col-md-8  col-sm-12 test">
              <div>
                <Zoom top>
                  <div className="round content p-3 ">
                    <h1>About Me</h1>
                    <span class="about-img">
                      <img
                        src="/images/squareHeadshot.jpg"
                        class="img img-thumbnail mr-2 wrap about-img"
                        alt=""
                      ></img>
                    </span>

                    <p class="about">
                      As a full-stack developer with a passion for clean
                      interfaces and the code and databases behind it, I am a
                      highly motivated and team-oriented programmer. I fell in
                      love with coding after university when looking to find a
                      career that better fits my analytical mind, attention to
                      detail, and desire to problem solve. In order to best
                      prepare myself for a career in web development, I earned a
                      certificate in full stack web development through a
                      bootcamp from UNC Chapel Hill. After working on many web
                      applications from start to finish and applying UX
                      principles to a mobile-first and reactive project, I have
                      gained the technical skills necessary to thrive as a
                      junior developer. I sharpened these skills through a group
                      project that incorporated agile development, where I
                      focused on the front end of a React project management
                      application. In addition to this baseline knowledge, my
                      years as an educator have given me the soft skills of
                      organization, leadership, and efficient communication that
                      will greatly benefit any developer team. I am positioned
                      well to provide a unique perspective with how end-users
                      interact with websites and software platforms by
                      leveraging my background as an educator.
                    </p>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="skills relative">
        <div className="container">
          <div className="row test">
            <div className="col-md-4 col-lg-4">
              {/* <div style={{ color: "#E07A5F" }}>this will block out</div> */}
              <div className="row mt-5">
                <Flip top>
                  <div className="col-sm-4">
                    <img
                      className="logoImg"
                      src="../images/javascript.png"
                      alt="javascript logo"
                    ></img>
                  </div>
                </Flip>
                <div className="col-sm-2"></div>
                <Flip top>
                  <div className="col-sm-4">
                    <img
                      className="logoImg"
                      src="/images/react.jpg"
                      alt="react logo"
                    ></img>
                  </div>
                </Flip>
              </div>
              <div className="row bottom-logo">
                <div className="col-sm-3"></div>
                <Flip top>
                  <div className="col-sm-4">
                    <img
                      className="logoImg"
                      src="../images/mysqlLogo.jpg"
                      alt="javascript logo"
                    ></img>
                  </div>
                </Flip>
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="">
                <Fade right>
                  <div className="content round mb-4 p-4">
                    <h2 style={{ color: "#E07A5F" }} className="topic">
                      Current Mastery:
                    </h2>
                    <p class="">
                      I am prepared to take on a variety of coding challenges
                      involving every aspect from the front-end to the back-end
                      of a webb application
                    </p>
                    <ul className="text-left">
                      <li>
                        Front End: HTML, CSS, Bootstrap, Bulma, JavaScript,
                        JQuery
                      </li>
                      <li>
                        Back End: Node.js, MySQL, Sequelize, MongoDB, Mongoose, Express.js
                      </li>
                      <li>Frameworks: React, Handlebars</li>
                      <li>Helpful Tools: Webpack, Jest, Git</li>
                    </ul>
                  </div>
                </Fade>
                <Fade left>
                  <div className="content round p-4">
                    <h2 style={{ color: "#E07A5F" }} className="topic">
                      In the Works:
                    </h2>

                    <ul className="text-left">
                      <li>Tailwind CSS</li>
                      <li>Angular</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contactEnd relative">
        <div className="container">
          <div className="row test">
            <div className="col-md-9">
              <div className="">
                <Fade bottom>
                  <div className="content round mb-4 p-4">
                    <h2 style={{ color: "#3D405B" }} className="topic">
                      Thank you for stopping by!
                    </h2>
                    <p class="mt-4 about">
                      If you would like to learn more about my work, you can
                      find my:{" "}
                    </p>
                    <div className="row">
                      <div className="col-md-1"></div>
                      <div className="col-md-3 round-dark pt-2 mb-2 text-center">
                        <a
                          className="remove"
                          href="https://github.com/mautrey17"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-github fa-5x"></i>
                        </a>
                        <p>
                          <a
                            className="no-underline"
                            href="https://github.com/mautrey17"
                          >
                            Github
                          </a>
                        </p>
                      </div>
                      {/* <div className="col-md-1"></div> */}
                      <div className="col-md-3 round-dark  mb-2 pt-2 text-center">
                        <a
                          href="https://www.linkedin.com/in/matt-autrey-927612113/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fab fa-linkedin fa-5x"></i>
                        </a>
                        <p>
                          <a
                            className="no-underline"
                            href="https://www.linkedin.com/in/matt-autrey-927612113/"
                          >
                            LinkedIn
                          </a>
                        </p>
                      </div>
                      {/* <div className="col-md-1"></div> */}
                      <div className="col-md-3 round-dark pt-2 text-center">
                        <a
                          className="remove"
                          href="https://docs.google.com/document/d/1YIfpb8sUniN_9DR5NwYppd9VsowoPw_lrR3zPx_4d1E/edit?usp=sharing"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i class="fas fa-file fa-5x"></i>
                        </a>
                        <p>
                          <a
                            className="no-underline"
                            href="https://docs.google.com/document/d/1YIfpb8sUniN_9DR5NwYppd9VsowoPw_lrR3zPx_4d1E/edit?usp=sharing"
                          >
                            Resume
                          </a>
                        </p>
                      </div>
                    </div>
                    <p>Or you can email me at: mautrey17@gmail.com</p>

                    <p className="pb-3">
                      Looking forward to hearing from you soon!
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomeContent;

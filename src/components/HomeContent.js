import React from "react";
import "../css/Styles.css";
import Footer from "./Footer";

function HomeContent() {
    return (
        <div style={{backgroundImage: `url(/images/brick.jpg)`}}>
        <main>   
        <section class="container">
            
            <div class="row">
            <div class="mt-5 col-md-8 content col-sm-12">
                <h1>About Me</h1>
                <span class="about-img">
                <img src="/images/headshot1.jpg" class="img img-thumbnail mr-2 wrap about-img" alt=""></img>
                </span>
                
                <p class="about">As a full-stack developer with a passion for clean interfaces and the code and databases behind it, I am a highly motivated and team-oriented programmer.  I fell in love with coding after university when looking to find a career that better fits my analytical mind, attention to detail, and desire to problem solve. In order to best prepare myself for a career in web development, I earned a certificate in full stack web development through a bootcamp from UNC Chapel Hill. After working on many web applications from start to finish on my own and applying UX principles to a mobile-first and reactive project in a team of four that searches an area for ideal restaurants by communicating with a third party API, I have gained the technical skills necessary to thrive as a junior developer. These skills include mastery of frameworks with React and handlebars, vanilla Javascript and JQuery, along with nodeJS, express to run servers, and MySQL to connect these applications to the back end. In addition to this baseline knowledge, my years as an educator have given me the soft skills of organization, leadership, and efficient communication that will greatly benefit any developer team. I am positioned well to provide a unique perspective with how end-users interact with websites and software platforms by leveraging my background as an educator.</p> 
                <p class="about">Current mastery: HTML, CSS, Bootstrap, JavaScript, JQuery, Node.js, MySQL with Sequelize, React, MongoDB and Mongoose</p>
                <p class="about"> In the works: Tailwind CSS, Angular, TypeScript</p>
                <p class="mt-4 about">Thank you for stopping by. In the meantime you can find me at <a href="https://github.com/mautrey17">Github</a>, <a href="https://www.linkedin.com/in/matt-autrey-927612113/">LinkedIn</a>, and my <a href="https://docs.google.com/document/d/1YIfpb8sUniN_9DR5NwYppd9VsowoPw_lrR3zPx_4d1E/edit?usp=sharing">Resume</a>! Looking forward to hearing from you soon!</p>
            </div>
            </div>
        </section>


        </main>
        <Footer />
        </div>
    )
}

export default HomeContent;
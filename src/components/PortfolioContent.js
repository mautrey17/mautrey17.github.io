import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectComponent from "./ProjectComponent";
import ProjectComponentAlt from "./ProjectComponentAlt";
import "../css/Styles.css";
import "../css/portfolio.css";
import Footer from "./Footer";

const portfolioInformation = [
    {
        title: "StreamFlow",
        href: "https://github.com/mautrey17/streamflow",
        src: "images/streamflow.png",
        description: "Major Project: React project management application allowing users to create projects and tasks, along with customizable profiles and avatars",
        deploy: "https://streamflowteam4.herokuapp.com/"
    },
    {
        title: "Laughs and Eats",
        href: "https://github.com/mautrey17/Laughs-and-Eats",
        src: "images/project1.png",
        description: "First Major Project: Search for desired restaurants and jokes to plan the perfect date. JQuery and various API's",
        deploy: "https://kcrammer.github.io/Laughs-and-Eats/"
    },
    {
        title: "Dumbbells for Dummies",
        href: "https://github.com/mautrey17/dumbbells-for-dummies",
        src: "images/project2.png",
        description: "Second major group project that allows users to create a profile and discover/save new workouts from a MySQL database",
        deploy: "https://project2-starter-auth.herokuapp.com/"
    },
    {
        title: "Employee Directory",
        href: "https://github.com/mautrey17/employee-directory",
        src: "images/employeeScreenshot.png",
        description: "This React application uses Random User API to display employee information and filter employees by name, country, and email",
        deploy: "https://mautrey17.github.io/employee-directory/"
    },
    {
        title: "Budget Tracker",
        href: "https://github.com/mautrey17/budget-tracker",
        src: "images/budgetScreenshot.png",
        description: "This PWA budget tracker uses IndexedDB to store updates while offline to update the database when internet is restored",
        deploy: "https://unc-budget-tracker.herokuapp.com/"
    },
    {
        title: "Burger Devourer with ORM",
        href: "https://github.com/mautrey17/burger",
        src: "images/burger-screenshot.png",
        description: "Full stack application with custom made ORM communicating with MySQL allowing users to create and devour burgers",
        deploy: "https://burger-norm.herokuapp.com/"
    }
]

//old image style={{backgroundImage: `url(/images/brick.jpg)`}}

function PortfolioContent() {
    return(
        <div style={{backgroundColor: '#fff'}}>
            <div className="row align-items-center top-image" style={{backgroundImage: `url(/images/brick.jpg)`}}>
            <div className=" "> 
                <div className="container">
                {/* <div className="row align-items-end"> */}
                    {/* <div className="col"></div> */}
                    <div className="col-md-4 offset-md-4">
                    <div  className="try content round text-center p-3">
                    <h2 className="title">Projects</h2>
                </div>
                    </div>
                    {/* <div className="col"></div> */}
                {/* </div> */}
                </div>
                
            </div>
            </div>

           

            <div className="container">
                {/* <div className="row justify-content-md-center"> */}

                <ProjectComponent
                    description={portfolioInformation[0].description}
                        title={portfolioInformation[0].title}
                        href={portfolioInformation[0].href}
                        src={portfolioInformation[0].src}
                        deploy={portfolioInformation[0].deploy}
                        >
                </ProjectComponent>

                <ProjectComponentAlt
                    description={portfolioInformation[1].description}
                    title={portfolioInformation[1].title}
                    href={portfolioInformation[1].href}
                    src={portfolioInformation[1].src}
                    deploy={portfolioInformation[1].deploy}
                >

                </ProjectComponentAlt>
                <ProjectComponent
                    description={portfolioInformation[2].description}
                        title={portfolioInformation[2].title}
                        href={portfolioInformation[2].href}
                        src={portfolioInformation[2].src}
                        deploy={portfolioInformation[2].deploy}
                        >
                </ProjectComponent>
                <ProjectComponentAlt
                    description={portfolioInformation[3].description}
                        title={portfolioInformation[3].title}
                        href={portfolioInformation[3].href}
                        src={portfolioInformation[3].src}
                        deploy={portfolioInformation[3].deploy}
                        >
                </ProjectComponentAlt>
                <ProjectComponent
                    description={portfolioInformation[4].description}
                        title={portfolioInformation[4].title}
                        href={portfolioInformation[4].href}
                        src={portfolioInformation[4].src}
                        deploy={portfolioInformation[4].deploy}
                        >
                </ProjectComponent>
                <ProjectComponentAlt
                    description={portfolioInformation[5].description}
                        title={portfolioInformation[5].title}
                        href={portfolioInformation[5].href}
                        src={portfolioInformation[5].src}
                        deploy={portfolioInformation[5].deploy}
                        >
                </ProjectComponentAlt>

            {/* <div className="col">
                    <a href={portfolioInformation[0].deploy} target="_blank" rel="noreferrer"><img src={portfolioInformation[0].src}className="card-img-top" alt="..."></img></a>
                    </div>
                    <div className="col">
                        <h1>{portfolioInformation[0].title}</h1>
                        <p>{portfolioInformation[0].description}</p>
                        <div>
                            <a className="mr-3" href={portfolioInformation[0].href} target="_blank" rel="noreferrer"><i class="fab fa-github fa-3x"></i></a>
                            <a href={portfolioInformation[0].deploy}><i class="fas fa-external-link-alt fa-3x"></i></a>
                            </div>
                    </div> */}



                    </div>
            {/* </div> */}


            {/* <div className="container">
        <section className="row mt-3 mb-5 justify-content-md-center">
            <div className="col-lg-8 col-md-8 col-xs-12 content mt-5 mb-5 round">
                <h1>Portfolio</h1>
                <div className="row justify-content-center">
                    <ProjectCard 
                        description={portfolioInformation[0].description}
                        title={portfolioInformation[0].title}
                        href={portfolioInformation[0].href}
                        src={portfolioInformation[0].src}
                        deploy={portfolioInformation[0].deploy}
                    />

                    

                    <ProjectCard 
                        description={portfolioInformation[1].description}
                        title={portfolioInformation[1].title}
                        href={portfolioInformation[1].href}
                        src={portfolioInformation[1].src}
                        deploy={portfolioInformation[1].deploy}
                    />
                </div>
                <div className="row">
                    <ProjectCard 
                        description={portfolioInformation[2].description}
                        title={portfolioInformation[2].title}
                        href={portfolioInformation[2].href}
                        src={portfolioInformation[2].src}
                        deploy={portfolioInformation[2].deploy}
                    />
                    <ProjectCard 
                        description={portfolioInformation[3].description}
                        title={portfolioInformation[3].title}
                        href={portfolioInformation[3].href}
                        src={portfolioInformation[3].src}
                        deploy={portfolioInformation[3].deploy}
                    />
                </div>
                <div className="row mb-5">
                    <ProjectCard 
                        description={portfolioInformation[4].description}
                        title={portfolioInformation[4].title}
                        href={portfolioInformation[4].href}
                        src={portfolioInformation[4].src}
                        deploy={portfolioInformation[4].deploy}
                    />
                    <ProjectCard 
                        description={portfolioInformation[5].description}
                        title={portfolioInformation[5].title}
                        href={portfolioInformation[5].href}
                        src={portfolioInformation[5].src}
                        deploy={portfolioInformation[5].deploy}
                    />
                </div>
            </div>
        </section>
        </div> */}
        < Footer />
        </div>
    )
}

export default PortfolioContent;
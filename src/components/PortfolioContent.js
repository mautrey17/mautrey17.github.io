import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/Styles.css";
import Footer from "./Footer"

const portfolioInformation = [
    {
        title: "Burger Devourer with ORM",
        href: "https://github.com/mautrey17/burger",
        src: "images/burger-screenshot.png",
        description: "Full stack application with custom made ORM communicating with MySQL allowing users to create and devour burgers",
        deploy: "https://burger-norm.herokuapp.com/"
    },
    {
        title: "Laughs and Eats",
        href: "https://github.com/kcrammer/Laughs-and-Eats",
        src: "images/project1.png",
        description: "First Major Project: Search for desired restaurants and jokes to plan the perfect date. JQuery and various API's",
        deploy: "https://kcrammer.github.io/Laughs-and-Eats/"
    },
    {
        title: "Dumbbells for Dummies",
        href: "https://github.com/katemilano/project2",
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
        title: "Workout Tracker",
        href: "https://github.com/mautrey17/workout-tracker",
        src: "images/workoutScreenshot.png",
        description: "This web application lets you track daily workouts by a variety of factors. MongoDB is used as the database to store data.",
        deploy: "https://workout-tracker-a.herokuapp.com/"
    }
]

function PortfolioContent() {
    return(
        <div style={{backgroundImage: `url(/images/brick.jpg)`}}>
            <div className="container">
        <section className="row mt-5 mb-5">
            <div className="col-lg-8 col-md-8 col-xs-12 content mt-5 mb-5 round">
                <h1>Portfolio</h1>
                <div className="row">
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
        </div>
        < Footer />
        </div>
    )
}

export default PortfolioContent;
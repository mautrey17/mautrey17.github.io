import {React, useEffect} from "react";
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
let view = true;

function PortfolioContent() {
    // useEffect(() => {
    //     view = false;
    //     // function checkView(x) {
    //     //     if (x.matches) { // If media query matches
    //     //       view = false;
              
    //     //     } 
    //     //   }
          
    //     //   var x = window.matchMedia("(max-width: 480px)")
    //     //   checkView(x) // Call listener function at run time
    //     //   x.addListener(checkView) // Attach listener function on state changes
    // }, [window.matchMedia("(max-width: 480px)"])
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
                

                {portfolioInformation.map((project, index) => (
                    index % 2 === 0 ? 
                        <ProjectComponent
                        key={index}
                        description={project.description}
                        title={project.title}
                        href={project.href}
                        src={project.src}
                        deploy={project.deploy}
                        >

                        </ProjectComponent>
                        :
                        <ProjectComponentAlt
                        description={project.description}
                        title={project.title}
                        href={project.href}
                        src={project.src}
                        deploy={project.deploy}
                        >

                        </ProjectComponentAlt>
                ))}

                



                    </div>
           
        < Footer />
        </div>
    )
}

export default PortfolioContent;
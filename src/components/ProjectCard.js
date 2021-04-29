import React from "react";
import "../css/Styles.css";

function ProjectCard(props) {
    return (
        <div className="col-lg-6 col-md-12 col-sm-12">
              
          <div className="card img-port mt-3">
          <h5>{props.title}</h5>
          <a href={props.deploy} target="_blank"><img src={props.src} className="card-img-top" alt="..."></img></a>
                <div className="card-body">
                  <p className="card-text"><a href={props.deploy}>{props.description}</a></p>
                  <div><a href={props.href} target="_blank"><i class="fab fa-github"></i></a></div>
                </div>
            </div>
          
        </div>
    )
}

export default ProjectCard;
import React from "react";
import "../css/Styles.css";
import "../css/portfolio.css";
import Bounce from 'react-reveal/Bounce';

function ProjectComponent(props) {
    return (
        <div className="mt-5  row justify-content-center">
            <Bounce left>
            <div className="col-md line">
                    <a href={props.deploy} target="_blank" rel="noreferrer"><img src={props.src}className="card-img-top" alt="..."></img></a>
                    </div>
                    </Bounce>
                    <Bounce right>
                    <div className="col ml-3">
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <div>
                            <a className="mr-3" href={props.href} target="_blank" rel="noreferrer"><i class="fab fa-github fa-3x"></i></a>
                            <a href={props.deploy}><i class="fas fa-external-link-alt fa-3x"></i></a>
                            </div>
                    </div>
                    </Bounce>
                    </div>
    )}

    export default ProjectComponent;
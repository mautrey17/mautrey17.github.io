import React from "react";
import "../css/Styles.css";

function Nav(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light " style={{backgroundColor: '#F4F1DE'}}>

                <div className="container">

                    <a 
                        className={`navbar-brand logo`} 
                        href="#home"
                        onClick={() => props.handlePageChange("Home")}
                    >
                        Matt Autrey
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                        <a 
                            className={props.currentPage ==="Home" ? "nav-link active" : "nav-link"} 
                            href="#home"
                            onClick={() => props.handlePageChange("Home")}
                        >
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                        <a 
                            className={props.currentPage ==="Portfolio" ? "nav-link active" : "nav-link"} href="#portfolio"
                            onClick={() => props.handlePageChange("Portfolio")}
                        >
                            Portfolio 
                        </a>
                        </li>
                        </ul>
                    </div>

                </div>

            </nav>
        </div>
    )
}

export default Nav;
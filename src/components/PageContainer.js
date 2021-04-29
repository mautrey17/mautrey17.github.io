import React, { Component } from "react";
import Nav from "./Nav";
import HomeContent from "./HomeContent";
import Footer from "./Footer";
import PortfolioContent from "./PortfolioContent";

class Portfolio extends Component {
    state = {
        currentPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    renderPage = () => {
        if (this.state.currentPage === "Home") {
            return <HomeContent />
        }
        else {
            return <PortfolioContent />
        }
    };

    render() {
        return (
            <div>
                <Nav
                    currentPage={this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                />
                {this.renderPage()}
            </div>
        )
    }
}

export default Portfolio
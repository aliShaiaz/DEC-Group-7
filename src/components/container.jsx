import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import "../CSS/style.css";

import LandingPage from "./pages/landingPage";
import AboutPage from "./pages/about";
import LabReports from './pages/labReports';


class Container extends Component {
    state = {}

    redirect = (url) => {
        document.getElementById("container").classList.add("fade");
        setTimeout(() => {
            window.location.href = url;
        }, 1000);

    }


    render() {
        return (
            <div id='container' className="container">
                <Routes>
                    {/* <Route path="/" element={<LandingPage redirect={this.redirect} />} /> */}
                    <Route path="/about" element={<AboutPage redirect={this.redirect} />} />
                    <Route path='/labReports' element={<LabReports />} />
                    <Route path="*" element={<LandingPage redirect={this.redirect} />} />
                </Routes>
                <div className="background"></div>
            </div>
        );
    }
}

export default Container;
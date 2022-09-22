import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import LandingPage from "./pages/landingPage";
import AboutPage from "./pages/about";
import Profile from './profiles/profile';
import "../CSS/style.css";


class Container extends Component {
    state = {}


    // handleClick = () => {
    //     this.redirect("/about");
    // }

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
                    <Route path="/" element={<LandingPage redirect={this.redirect} />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<LandingPage redirect={this.redirect} />} />
                </Routes>
                <div className="background"></div>
            </div>
        );
    }
}

export default Container;
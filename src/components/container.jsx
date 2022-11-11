import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../CSS/style.css";

// : Pages . . .
import LandingPage from "./pages/landingPage";
import AboutPage from "./pages/about";
import LabReports from "./pages/labReports";

const Container = () => {
    const redirect = useNavigate();
    const navigate = (url) => {
        document.getElementById("container").style.opacity = 0;
        document.getElementById("container").style.transition = "opacity 1s";

        setTimeout(() => {
            redirect(url);
            document.getElementById("container").style.opacity = 1;
        }, 1000);
    };

    return (
        <>
            <div id="container" className="container">
                <Routes>
                    <Route path="/" element={<LandingPage redirect={navigate} />} />
                    <Route path="/about" element={<AboutPage redirect={navigate} />} />
                    <Route path="/labReports" element={<LabReports />} />
                    <Route path="*" element={<LandingPage redirect={navigate} />} />
                </Routes>
                <div className="background"></div>
                <div id="watermark">
                    <span id="wmText">designed & developed by</span>
                    <br />
                    <span id="wmName">Shaiaz Ali</span>
                    <br />
                    <span id="wmLink">🔗 <a target="_blank" href="https://alishaiaz.me/">aliShaiaz.me</a></span>
                </div>
            </div>
        </>
    );
};

export default Container;

// class Container extends Component {
//     state = {}

//     render() {
//         return (

//         );
//     }
// }

// export default Container;

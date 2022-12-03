import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../CSS/style.css";

// : Pages . . .
import LandingPage from "./pages/landingPage";
import AboutPage from "./pages/about";
import LabReports from "./pages/labReports";
import LabEquipments from "./pages/LabEquipments";
import ResearchPaperReview from "./pages/ResearchPaperReview";

import PDFViewer from "./pages/pdfViewer";
// ... //


// NavBar //
import ED_Logo from '../assets/Logo/ed_logo.png';
// ... //

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

    const redirectLabReports = () => {
        navigate('/labReports');


    }

    return (
        <>
            <nav id="navbar">
                <div id="navbarLogo">
                    <img src={ED_Logo} alt="" />
                </div>
                <div id="navbarLinks">
                    <span onClick={() => { navigate('/about'); }}>About</span>
                    <span onClick={() => { navigate('/labReports'); }}>Lab Reports</span>
                    <span onClick={() => { navigate('/labEquipments'); }}>Lab Equipments</span>
                    <span onClick={() => { navigate('/researchPaperReview'); }}>Research Paper Review</span>
                </div>
            </nav>
            <div id="container" className="container">
                <div className="background"></div>
                <div className="contentx">
                    <Routes>
                        <Route path="/" element={<LandingPage redirect={navigate} />} />
                        <Route path="/about" element={<AboutPage redirect={navigate} />} />
                        <Route path="/labReports" element={<LabReports />} />
                        <Route path="/labEquipments" element={<LabEquipments />} />
                        <Route path="/researchPaperReview" element={<ResearchPaperReview />} />
                        <Route path="/viewPDF" element={<PDFViewer />} />


                        <Route path="*" element={<LandingPage redirect={navigate} />} />
                    </Routes>
                </div>
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
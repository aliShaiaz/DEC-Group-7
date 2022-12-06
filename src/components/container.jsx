import React, { Component } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "../CSS/style.css";

// : Pages . . .
import LandingPage from "./pages/landingPage";
import AboutPage from "./pages/about";
import LabReports from "./pages/labReports";
import LabEquipments from "./pages/LabEquipments";
import ResearchPaperReview from "./pages/ResearchPaperReview";

import PDFViewer from "./pages/pdfViewer/pdfViewer";
// ... //


// NavBar //
import ED_Logo from '../assets/Logo/ed_logo.png';
// ... //

// Lab Reports //
import Lab01 from '../assets/LabReports/Lab01.pdf'
import Lab02 from '../assets/LabReports/Lab02.pdf'
import Lab04 from '../assets/LabReports/Lab04.pdf'
import Lab05 from '../assets/LabReports/Lab05.pdf'
import Lab06 from '../assets/LabReports/Lab06.pdf'
// . . . //

// Research Papers //
import Paper01 from '../assets/LiteratureReview/Review01/Paper01.pdf';
import Review01 from '../assets/LiteratureReview/Review01/Review01.pdf';
// . . . //



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
            <nav id="navbar">
                <div id="navbarLogo" onClick={() => navigate('/')}>
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
                        <Route path="/labReports" element={<LabReports redirect={navigate} />} />

                        <Route path="/labReports/lab01" element={<PDFViewer pdf={Lab01} />} />
                        <Route path="/labReports/lab02" element={<PDFViewer pdf={Lab02} />} />
                        <Route path="/labReports/lab04" element={<PDFViewer pdf={Lab04} />} />
                        <Route path="/labReports/lab05" element={<PDFViewer pdf={Lab05} />} />
                        <Route path="/labReports/lab06" element={<PDFViewer pdf={Lab06} />} />

                        <Route path="/labEquipments" element={<LabEquipments />} />

                        <Route path="/researchPaperReview" element={<ResearchPaperReview redirect={navigate} />} />
                        <Route path="/researchPaperReview/paper01" element={<PDFViewer pdf={Paper01} />} />
                        <Route path="/researchPaperReview/review01" element={<PDFViewer pdf={Review01} />} />


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
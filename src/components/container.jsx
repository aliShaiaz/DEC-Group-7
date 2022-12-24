import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
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
import Labs from '../assets/LabReports'
// . . . //



// Research Papers //
import LiteratureReview from "../assets/LiteratureReview";
// . . . //





// R & D //
// ... //



const Container = () => {
    const redirect = useNavigate();
    const navigate = (url) => {
        document.getElementById("container").style.opacity = 0;
        document.getElementById("container").style.transition = "opacity 1s";

        document.getElementById("hamburgerCheckbox").checked = false;
        // document.getElementById('mobileNavBar').classList.toggle('maximize');
        document.getElementById('mobileNavBar').classList.remove('maximize');


        // alert(20);

        setTimeout(() => {
            redirect(url);
            document.getElementById("container").style.opacity = 1;
        }, 1000);
    };

    const labRoutes = Labs.map((lab) => (
        <Route
            key={lab.id}
            path={"/labReports/" + lab.id}
            element={
                <PDFViewer
                    title={lab.title}
                    pdf={lab.file}
                />}
        />
    ));
    const literatureReviewRoutes = LiteratureReview.map((review) => (
        <React.Fragment key={review.id}>
            <Route
                path={"/researchPaperReview/Paper" + review.id}
                element={
                    <PDFViewer
                        title={review.title}
                        pdf={review.paper}
                    />}
            />
            <Route
                path={"/researchPaperReview/Review" + review.id}
                element={
                    <PDFViewer
                        title={review.title}
                        pdf={review.review}
                    />}
            />
        </React.Fragment>
    ))

    const labReportList = Labs.map((lab) => (
        <div key={lab.id} onClick={() => { navigate('labReports/' + lab.id); }}>
            {lab.title}
        </div>
    ));

    const literatureReviewList = LiteratureReview.map((review) => (
        <div key={review.id} style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{review.title}</span>
            <span style={{ display: "flex", alignItems: "center" }}>
                <button
                    style={{ padding: "0 2px", margin: "0 15px 0 10px " }}
                    onClick={() => { navigate("/researchPaperReview/Paper" + review.id); }}
                >
                    Paper
                </button>
                <button
                    style={{ padding: "0 2px", margin: "0 0 0 15px" }}
                    onClick={() => { navigate("/researchPaperReview/Review" + review.id); }}
                >
                    Review
                </button>
            </span>

        </div>
    ));


    const handleToggleClass = () => {

        // 👇️ toggle class on click
        // event.currentTarget.classList.toggle('maximize');
        document.getElementById('mobileNavBar').classList.toggle('maximize');
    };


    return (
        <>
            <div className="background"></div>

            <Nav className="navBar">
                <span>
                    <Nav.Item className="navLogo">
                        <img
                            src={ED_Logo}
                            alt=""
                            onClick={() => { navigate('/'); }}
                        />
                    </Nav.Item>
                </span>

                <span>
                    <Nav.Item
                        className="navItem"
                        onClick={() => { navigate('/about') }}
                    >
                        About
                    </Nav.Item>
                    <Nav.Item
                        className="dropdown"
                    >
                        <button className="dropbtn" onClick={() => { navigate('/researchPaperReview') }}>Research Paper Review</button>
                        <div className="dropdown-content">
                            {literatureReviewList}
                            <div>test</div>
                        </div>
                    </Nav.Item>
                    <Nav.Item
                        className="dropdown"
                    >
                        <button className="dropbtn" onClick={() => { navigate('/LabReports') }}>Lab Reports</button>
                        <div className="dropdown-content">
                            {labReportList}
                        </div>
                    </Nav.Item>
                    <Nav.Item
                        className="navItem"
                        onClick={() => { navigate('/labEquipments') }}
                    >
                        Lab Equipments
                    </Nav.Item>
                </span>
            </Nav>

            <Nav className="mobileNavBar" id="mobileNavBar" >
                <div className="mobileNavContent">
                    <nav>
                        <input type="checkbox" id="hamburgerCheckbox" />
                        <label id="labelhamburgerCheckbox" htmlFor="hamburgerCheckbox" onClick={handleToggleClass} />
                        <ul className="nav-links">
                            <li><span onClick={() => { navigate('/about') }}>About</span></li>
                            <li><span onClick={() => { navigate('/ResearchPaperReview') }}>Research Paper Review</span></li>
                            <li><span onClick={() => { navigate('/LabReports') }}>Lab Reports</span></li>
                            <li><span onClick={() => { navigate('LabEquipments') }}>Lab Equipments</span></li>
                            <li><span onClick={() => window.location.replace('https://www.alishaiaz.me')}>Contact Developer</span></li>
                        </ul>
                    </nav>
                </div>
            </Nav >


            <div className="page">


                <div id="container" className="container">
                    <div>
                        <Routes>

                            <Route path="/about" element={<AboutPage redirect={navigate} />} />

                            <Route path="/labReports" element={<LabReports redirect={navigate} Labs={Labs} />} />
                            {labRoutes}

                            <Route path="/labEquipments" element={<LabEquipments />} />

                            <Route path="/researchPaperReview" element={<ResearchPaperReview redirect={navigate} LiteratureReview={LiteratureReview} />} />
                            {literatureReviewRoutes}

                            <Route path="/viewPDF" element={<PDFViewer />} />


                            <Route path="*" element={<LandingPage redirect={navigate} />} />
                        </Routes>
                    </div>
                    <div id="watermark">
                        <span id="wmText">designed & developed by</span>
                        <br />
                        <span id="wmName">Shaiaz Ali</span>
                        <br />
                        <span id="wmLink"><span role="img" aria-label="link">🔗</span> <a target="_blank" rel="noopener noreferrer" href="https://alishaiaz.me/">aliShaiaz.me</a></span>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Container;
import React from "react";
import { Nav } from "react-bootstrap";
import ED_Logo from "../../assets/Logo/ed_logo.png";

const NavBar = ({ navigate, literatureReviewList, labReportList }) => {
  return (
    <Nav className="navBar">
      <span>
        <Nav.Item className="navLogo">
          <img
            src={ED_Logo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />
        </Nav.Item>
      </span>

      <span>
        <Nav.Item
          className="navItem"
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </Nav.Item>
        <Nav.Item className="dropdown">
          <button
            className="dropbtn"
            onClick={() => {
              navigate("/researchPaperReview");
            }}
          >
            Research Paper Review
          </button>
          <div className="dropdown-content">
            {literatureReviewList}
            <div>test</div>
          </div>
        </Nav.Item>
        <Nav.Item className="dropdown">
          <button
            className="dropbtn"
            onClick={() => {
              navigate("/LabReports");
            }}
          >
            Lab Reports
          </button>
          <div className="dropdown-content">{labReportList}</div>
        </Nav.Item>
        <Nav.Item
          className="navItem"
          onClick={() => {
            navigate("/labEquipments");
          }}
        >
          Lab Equipments
        </Nav.Item>
      </span>
    </Nav>
  );
};

export default NavBar;

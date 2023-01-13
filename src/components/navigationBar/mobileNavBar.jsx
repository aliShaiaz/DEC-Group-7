import React from "react";
import { Nav } from "react-bootstrap";

const handleToggleClass = () => {
  document.getElementById("mobileNavBar").classList.toggle("maximize");
};

const MobileNavBar = ({ navigate }) => {
  return (
    <Nav className="mobileNavBar" id="mobileNavBar">
      <div className="mobileNavContent">
        <nav>
          <input type="checkbox" id="hamburgerCheckbox" />
          <label
            id="labelhamburgerCheckbox"
            htmlFor="hamburgerCheckbox"
            onClick={handleToggleClass}
          />
          <ul className="nav-links">
            <li>
              <span
                onClick={() => {
                  navigate("/about");
                }}
              >
                About
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/ResearchPaperReview");
                }}
              >
                Research Paper Review
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/LabReports");
                }}
              >
                Lab Reports
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("LabEquipments");
                }}
              >
                Lab Equipments
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  window.location.replace("https://www.alishaiaz.me")
                }
              >
                Contact Developer
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </Nav>
  );
};

export default MobileNavBar;

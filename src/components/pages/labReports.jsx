import React, { Component } from 'react';
import '../../CSS/labReports.css';


const LabReports = () => {
    return (
        <>
            <div className='LRTitle'>
                Lab Reports
            </div>
            <div className='LRBody'>
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab01.pdf'>
                    <button className='btn'>  Determination of Characteristic Curve of a Diode  </button>
                </a>
                <br />
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab02.pdf'>
                    <button className='btn'>  Study of Diode Rectifiers  </button>
                </a>
                <br />
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab04.pdf'>
                    <button className='btn'>  Study of Zener Diode  </button>
                </a>
                <br />
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab05.pdf'>
                    <button className='btn'>  Study of Transistor Characteristic in Common Emitter Amplifier</button>
                </a>
                <br />
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab06.pdf'>
                    <button className='btn'>  Study of BJT Biasing Circuit</button>
                </a>
            </div>
        </>
    );
}

export default LabReports;
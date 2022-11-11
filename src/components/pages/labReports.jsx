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
                    <button className='btn'>Lab Report 01</button>
                </a>
                <br />
                <a href='https://downgit.github.io/#/home?url=https://github.com/aliShaiaz/dec/blob/gh-pages/LabReports/Lab02.pdf'>
                    <button className='btn'>Lab Report 02</button>
                </a>
            </div>
        </>
    );
}

export default LabReports;
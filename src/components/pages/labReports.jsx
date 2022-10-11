import React, { Component } from 'react';
import '../../CSS/labReports.css';


const LabReports = () => {
    return (
        <>
            <div className="content">
                <div className='LRTitle'>
                    Lab Reports
                </div>
                <div className='LRBody'>
                    <a href='/LabReports/Lab01.pdf'>
                        <button>Lab Report 01</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default LabReports;
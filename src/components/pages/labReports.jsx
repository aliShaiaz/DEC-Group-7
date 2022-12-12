import React, { Component } from 'react';
import '../../CSS/labReports.css';





const LabReports = (props) => {
    const handleOnClick = (path) => {
        props.redirect('labReports/' + path);
    }
    return (
        <>
            <div className='LRTitle'>
                Lab Reports
            </div>
            <div className='LRBody'>
                {
                    props.Labs.map((value) =>
                        <>
                            <button
                                className='btn' onClick={() => { handleOnClick(value.id) }}>{value.title}
                            </button>
                            <br />
                        </>
                    )
                }
            </div>
        </>
    );
}

export default LabReports;
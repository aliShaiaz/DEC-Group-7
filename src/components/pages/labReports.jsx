import React from 'react';
import '../../CSS/labReports.css';





const LabReports = (props) => {
    const handleOnClick = (path) => {
        props.redirect('labReports/' + path);
    }
    return (
        <>
            <div className='pageTitle'>
                Lab Reports
            </div>
            <div className='pageBody'>
                {
                    props.Labs.map((value) =>
                        <React.Fragment key={value.id}>
                            <button
                                className='btn' onClick={() => { handleOnClick(value.id) }}>{value.title}
                            </button>
                            <br />
                        </React.Fragment>
                    )
                }
            </div>
        </>
    );
}

export default LabReports;
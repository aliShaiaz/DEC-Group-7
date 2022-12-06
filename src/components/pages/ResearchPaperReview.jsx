import React, { Component } from 'react';
const ResearchPaperReview = (props) => {

    const handleOnClick = (path) => {
        props.redirect('/researchPaperReview/' + path);
    }

    return (
        <>
            <h1>
                Research Papers
            </h1>
            <br /><br />

            <div>
                <h2>A Vademecum on Blockchain Technologies/ When, Which and How</h2>
                <br />
                <button className='btn' onClick={() => handleOnClick('Paper01')}>  Research Paper</button>
                <br />
                <button className='btn' onClick={() => handleOnClick('Review01')}>  Review of The Research Paper</button>
            </div>
        </>
    );
}

export default ResearchPaperReview;
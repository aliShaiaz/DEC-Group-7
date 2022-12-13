import React from 'react';
// import '../../CSS/ResearchPaperReview.css'

const ResearchPaperReview = (props) => {

    const handleOnClick = (path) => {
        props.redirect('/researchPaperReview/' + path);
    }

    return (
        <>
            <div className='pageTitle'>
                Research Papers
            </div>
            <br /><br />

            {
                props.LiteratureReview.map((value) =>
                    <React.Fragment key={value.id}>
                        <h2>{value.title}</h2>
                        <br />
                        <button className='btn' onClick={() => handleOnClick('Paper' + value.id)}>  Research Paper</button>
                        <button className='btn' onClick={() => handleOnClick('Review' + value.id)}>  Review of The Research Paper</button>
                    </React.Fragment>)
            }





        </>
    );
}

export default ResearchPaperReview;
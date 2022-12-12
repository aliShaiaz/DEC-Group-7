import React from 'react';
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
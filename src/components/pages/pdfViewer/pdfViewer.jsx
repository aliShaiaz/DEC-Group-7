import React from 'react';
import MyPDF from './MyPDF';

const PDFViewer = (props) => {
    return (
        <>
            <div className="pageTitle">{props.title}</div>
            <MyPDF pdf={props.pdf} />
        </>
    );
}

export default PDFViewer;
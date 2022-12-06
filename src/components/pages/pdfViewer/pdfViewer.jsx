import React from 'react';
import MyPDF from './MyPDF';

const PDFViewer = (props) => {
    return (
        <>
            <MyPDF pdf={props.pdf} />
        </>
    );
}

export default PDFViewer;
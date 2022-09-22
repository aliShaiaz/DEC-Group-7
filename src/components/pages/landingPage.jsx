import React, { Component } from 'react';
import '../../CSS/landingPage.css';

class LandingPage extends Component {
    handleClick = () => {
        this.props.redirect('/about');
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.handleClick}>
                    <div className="content">
                        <div className="contentTitle">
                            Welcome,
                        </div>
                        <div className="contentBody">
                            This is the landing page of DEC-Group 7!
                            <br />
                            <div style={{ opacity: .4, fontSize: 10 }}>
                                (Click to Continue..)</div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        );
    }
}

export default LandingPage;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/landingPage.css';

class LandingPage extends Component {
    handleClick = () => {
        this.props.redirect('about');
    }

    render() {
        return (
            <React.Fragment>
                <div onClick={this.handleClick}>
                    {/* <div> */}
                    {/* <Link to="/about"> */}
                    <div>
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
                    {/* </Link> */}
                </div>
            </React.Fragment >
        );
    }
}

export default LandingPage;
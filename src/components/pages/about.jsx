import React, { Component } from 'react';
import '../../CSS/about.css';
import Profile from '../profiles/profile';
import p_33829 from '../profiles/profilePhotos/33829.jpg';
// import p_44031 from '../profiles/profilePhotos/33829.jpg';




class AboutPage extends Component {
    state = {
        profiles: {
            _33829: {
                name: 'Ali, Shaiaz',
                id: '17-33829-1',
                dept: 'CSE',
                linkedin: 'https://www.linkedin.com/in/alishaiaz/',
                facebook: 'https://www.facebook.com/alishaiaz/',
                researchGate: 'https://www.researchgate.net/profile/Shaiaz-Ali',
                github: 'https://github.com/aliShaiaz',
                website: 'https://alishaiaz.me/',
                profilePhoto: p_33829
            }, _44031: {
                name: 'Alvee, Junayed Alam',
                id: '20-44031-2',
                dept: 'EEE',
                linkedin: 'N',
                facebook: 'https://www.facebook.com/JunayedAlamAlvee/',
                researchGate: 'https://www.researchgate.net/profile/Shaiaz-Ali',
                github: 'https://github.com/aliShaiaz',
                website: 'https://alishaiaz.me/',
                profilePhoto: ''
            }
        }
    }

    handleClick = () => {
        this.props.redirect('/labReports');
    }

    render() {
        return (
            <React.Fragment>
                <div className="content" >
                    <h1 className='aboutTitle'>Group Members</h1>
                    <div className="aboutBody">
                        {Object.keys(this.state.profiles).map((key, index) => {
                            return (
                                <div key={index}>
                                    <Profile info={this.state.profiles[key]} />
                                </div>
                            );
                        })}
                    </div>
                    <div className='aboutFooterTitle'>
                        Lab Reports
                    </div>
                    <div className="aboutFooterBody">
                        <br />
                        <button onClick={this.handleClick}>Lab Reports</button>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default AboutPage;
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
                researchGate: 'https://www.researchgate.net/profile/Shaiaz-Ali',
                github: 'https://github.com/aliShaiaz',
                website: 'https://alishaiaz.me/',
                profilePhoto: p_33829
            }, _44031: {
                name: 'Alvee, Junayed Alam',
                id: '20-44031-2',
                dept: 'EEE',
                linkedin: '',
                researchGate: '',
                github: '',
                website: '',
                profilePhoto: ''
            }, _44112: {
                name: 'Das, Antu',
                id: '20-44112-2',
                dept: 'EEE',
                linkedin: '',
                researchGate: '',
                github: '',
                website: '',
                profilePhoto: ''
            }, _43652: {
                name: 'Safat, Sajjam Hossain',
                id: '20-43652-2',
                dept: 'EEE',
                linkedin: '',
                researchGate: '',
                github: '',
                website: '',
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
                    <div className='aboutFooterTitle' onClick={this.handleClick}>
                        Lab Reports
                    </div>
                    <div className="aboutFooterBody" onClick={this.handleClick}>
                        (Click to See Lab Reports)
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default AboutPage;
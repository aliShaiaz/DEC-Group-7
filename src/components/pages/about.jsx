import React, { Component } from 'react';
import '../../CSS/about.css';
import Profile from '../profiles/profile';
import p_33829 from '../profiles/profilePhotos/33829.jpg';




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
            }
        }
    }

    handleClick = () => {
        console.log(this.state.profiles._33829.name);
    }

    render() {
        return (
            <React.Fragment>
                <div className="content" >
                    <h1 className='aboutTitle'>Group Members</h1>
                    <div className="aboutBody">
                        {/* {this.state.profiles.map(pro => <Profile info={pro} />)} */}
                        {/* {this.state.profiles.map(pro => <li>{pro.name}</li>)} */}
                        {/* <Profile info={this.state.profiles._33829} /> */}
                        {Object.keys(this.state.profiles).map((key, index) => {
                            return (
                                <div key={index}>
                                    <Profile info={this.state.profiles[key]} />
                                </div>
                            );
                        })}
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default AboutPage;
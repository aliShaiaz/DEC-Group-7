import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import '../CSS/block.css'
import '../../CSS/profile.css'
import icon_fb from '../../assets/icons/facebook.png';
import icon_researchGate from '../../assets/icons/researchGate.png';
import icon_linkedin from '../../assets/icons/linkedin.png';
import icon_github from '../../assets/icons/github.png';
import icon_web from '../../assets/icons/web.png';



class Profile extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = this.props.profile;
    //     import p from './profilePhotos/33829.jpg';
    //     this.handleClick = this.handleClick.bind(this);
    // }

    render() {
        return (
            <React.Fragment>
                <div className='profileBody'>
                    <div>
                        <img className='profilePhoto' src={this.props.info.profilePhoto} alt="Profile" />
                    </div>
                    <br />
                    <div className="info">
                        <table>
                            <tbody>
                                <tr>
                                    <td style={{ textAlign: 'left' }}>Name:</td>
                                    <td style={{ textAlign: 'left' }}>{this.props.info.name}</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'left' }}>ID:</td>
                                    <td style={{ textAlign: 'left' }}>{this.props.info.id}</td>
                                </tr>
                                <tr>
                                    <td style={{ textAlign: 'left' }}>Department:</td>
                                    <td style={{ textAlign: 'left' }}>{this.props.info.dept}</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className='links'>
                            <a target="_blank" href={this.props.info.linkedin}>
                                <img src={icon_linkedin} alt="FB" className="icon" />
                            </a>

                            <a target="_blank" href={this.props.info.facebook}><img src={icon_fb} alt="FB" className="icon" />
                            </a>

                            <a target="_blank" href={this.props.info.researchGate}><img src={icon_researchGate} alt="FB" className="icon" />
                            </a>

                            <a target="_blank" href={this.props.info.github}>
                                <img src={icon_github} alt="FB" className="icon" />
                            </a>

                            <a target="_blank" href={this.props.info.website}>
                                <img src={icon_web} alt="FB" className="icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;
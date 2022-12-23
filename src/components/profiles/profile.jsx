import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import '../CSS/block.css'
import '../../CSS/profile.css'
import icon_researchGate from '../../assets/icons/researchGate.png';
import icon_linkedin from '../../assets/icons/linkedin.png';
import icon_github from '../../assets/icons/github.png';



class Profile extends Component {

    temp = () => {
        return (
            <div>
                <h1>templdasfkfjasldfjasd;l;</h1>
            </div>
        );
    }



    render() {
        return (
            <React.Fragment>
                <div className='profileBody'>
                    <div>
                        <img className='profilePhoto' src={this.props.info.profilePhoto} alt="Profile" />
                    </div>
                    <br />
                    <div className="info">
                        {this.props.info.name} <br />
                        {this.props.info.id} <br />
                        {this.props.info.dept}
                        <div className='links'>
                            {this.temp}

                            <a target="_blank" rel="noopener noreferrer" href={this.props.info.linkedin}>
                                <img src={icon_linkedin} alt="FB" className="icon" />
                            </a>
                            {/* <Link to={this.props.info.linkedin}>
                                <a target="_blank" href={this.props.info.linkedin}>
                                    <img src={icon_linkedin} alt="FB" className="icon" />
                                </a>
                            </Link> */}

                            {/* <a target="_blank" href={this.props.info.facebook}><img src={icon_fb} alt="FB" className="icon" />
                            </a> */}

                            <a target="_blank" rel="noopener noreferrer" href={this.props.info.researchGate}><img src={icon_researchGate} alt="FB" className="icon" />
                            </a>

                            <a target="_blank" rel="noopener noreferrer" href={this.props.info.github}>
                                <img src={icon_github} alt="FB" className="icon" />
                            </a>

                            {/* <a target="_blank" href={this.props.info.website}>
                                <img src={icon_web} alt="FB" className="icon" />
                            </a> */}

                        </div>
                    </div >
                </div >
            </React.Fragment >
        );
    }
}

export default Profile;
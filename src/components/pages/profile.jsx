import React from 'react';
import '../../CSS/profile.css';

// Icons //
import Icons from '../../assets/Icons';
// ... //

const Profile = (props) => {
    return (
        <React.Fragment>
            <div className='profileBody'>
                <div>
                    <img className='profilePhoto' src={props.info.profilePhoto} alt="Profile" />
                </div>
                <br />
                <div className="info">
                    {props.info.name} <br />
                    {props.info.id} <br />
                    {props.info.dept}
                    <div className='links'>

                        <a target="_blank" rel="noopener noreferrer" href={props.info.linkedin}>
                            <img src={Icons.linkedin} alt="Icon" className="icon" />
                        </a>


                        <a target="_blank" rel="noopener noreferrer" href={props.info.researchGate}><img src={Icons.researchGate} alt="Icon" className="icon" />
                        </a>

                        <a target="_blank" rel="noopener noreferrer" href={props.info.github}>
                            <img src={Icons.github} alt="Icon" className="icon" />
                        </a>


                    </div>
                </div >
            </div >
        </React.Fragment >
    );
}

export default Profile;
import React from 'react';
import '../../CSS/about.css';
import Profile from './profile';

// Group Members Information //
import GroupMembers from '../../assets/Group Members';
// . . . //





const AboutPage = (props) => {

    const handleClick = () => {
        this.props.redirect('/labReports');
    }
    return (
        <React.Fragment>
            <div className='pageTitle'>Group Members</div>
            <div className="pageBody" style={{
                display: "flex", flexWrap: "wrap", justifyContent: "center"
            }}>

                {
                    GroupMembers.map((member) =>
                        <div key={member.id}>
                            <Profile info={member} />
                        </div>
                    )
                }

            </div>

            <div className="aboutFooterBody" onClick={handleClick}>
                (Click to See Lab Reports)
            </div>
        </React.Fragment >
    );
}

export default AboutPage;
import React, { Component } from 'react';
import './UserProfileCard.css';
import profile_icon from '../assets/image.jpg'; // Adjust the file extension

class UserProfilecard extends Component {
    render() {
        return (
            <div className='upc'>
                <div className='gradient'></div>
                <div className='profile-down'>
                    
                    <img src={profile_icon} alt='' />
                    
                    <div className='profile-title'>Subhash</div>
                    <div className='profile-description'>I am a 4th-year undergrad currently learning React</div>
                    <div className='profile-button'>
                        <a href='mailto:pabbineedisubhash3@gmail.com'>Contact Me</a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default UserProfilecard;

import React from 'react';
import './Header.css';
;
import profilepic from '../../assets/IMG_0729.jpg';

export default function Header() {

    return (
        <div className="headerContainer">
            
            <div className="photoContainer">
                <img src={profilepic} alt="" />
            </div>
            <div className="headerTextContainer">
                <h2>Owen Reynolds</h2>
                <h4>Aspiring Software Engineer</h4>
            </div>
            <div className="mediaIcons">
                <i class="devicon-github-original"></i>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />

            </div>
        </div>
    )
}
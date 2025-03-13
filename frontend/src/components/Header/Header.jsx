import React from 'react';
import './Header.css';

import profilepic from '../../assets/IMG_0686.png';

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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />  
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" />
            </div>
            <div className="navSection">
                <h4>About</h4>
                <h4>Work</h4>
                <h4>Life</h4>
            </div>
        </div>
    )
}
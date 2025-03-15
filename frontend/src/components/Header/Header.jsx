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
                <a href="https://github.com/Owen-Reynolds"><i class="devicon-github-original"></i></a>
                <a href="https://www.linkedin.com/in/owen-reynolds-b8870a293/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" /></a>
                <a href="https://x.com/OwxnFN"><i class="devicon-twitter-original"></i></a>
            </div>

        </div>
    )
}
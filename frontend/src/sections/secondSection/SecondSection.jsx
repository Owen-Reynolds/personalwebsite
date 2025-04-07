import './SecondSection.css';

export default function SecondSection() {
    return(
    <>
    <div className="secondSectionContainer">
        <div className="secondSectionContent">
            <h2 className="secondSectionTitle">Prior Work</h2>
            <WorkCard title="Tech Support" company="Sportsman's Den | Shelby Ohio" date="03/2021 - 08/2024"
            description="Thoroughly developed and enhanced online product listings across company and third-party websites.
            Worked on-site design and functionality renovations to improve user experience and engagement.  
            Automated repetitive busy work by web scraping with Python.
            Conducted trend analysis and keyword research to drive targeted traffic and improve site visibility." 
            skillOne="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            skillTwo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
            skillThree="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            skillFour="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            skillFive="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg"
          
            />

            <h2 className="secondSectionTitle">Education</h2>
            <WorkCard title="Ashland University" company="B.S. Computer Science" date="Expected Graduation: May 2026"
            description="Currently pursuing a Bachelor of Science in Computer Science. 
            Participated in a variety of extracurriculars including Technology Lead of the Computer Science Club, Member of the ACM Club and Fortnite Captain for the Esports Team.
            I am also a Dean's Scholar and a member of the Choose Ohio First Scholarship Program.
            I currently hold a 3.9 GPA and have been on the Dean's List every semester."
            skillOne="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            skillTwo="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            skillThree="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            skillFour="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            skillFive="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
            skillSix="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" 
            
            
            />
            <WorkCard title="North Central State College" company="A.A. Business Administration" date="08/2021-05/2023" 
            description="I obtained my Associate of Arts degree in Business Administration from NCSC while attending my junior and senior year of high school as part of the College-Now Program.
            I completed this degree with a 3.9 GPA and took many classes including microeconomics, financial accounting, and public speaking.
            "
            />
            <h2 className="secondSectionTitle">Projects</h2>
            <WorkCard title="Vitality Church Website" company="vitalitychurch.org" date="02/2025 - 04/2025"
            description="Team lead for project that was assigned in conjunction with an advanced web programming class.
            The purpose of this project was to create an improved website for Vitality Church of Mentor, Ohio. 
            The website is being built from the ground up with improved front-end design functionality compared to the older version.
            "
            skillOne="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            skillTwo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            skillThree="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            skillFour="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            skillFive="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg"
            />
            <WorkCard title="Portfolio Website" company="Source Code on Github" date="03/2025" 
            description="This website was completed over the span of a few days and will showcase my current and future work as a developer.
            I wanted to create something that seemed futuristic yet simple and easy to navigate.
            The website includes information about me, my prior work experience, education, and projects.
            "
            skillOne="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            skillTwo="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            skillThree="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
            />
        </div>
    </div>
    </>
    );
}

function WorkCard(props){
    const isValidUrl = (url) => url && typeof url === "string" && url.trim() !== "";
    const skills=[props.skillOne, props.skillTwo, props.skillThree, props.skillFour, props.skillFive, props.skillSix, props.skillSeven].filter(isValidUrl);
    return(
        <div className="workCardContainer">
            <div className="workCardContent">
                <h3 className="workTitle">{props.title}</h3>
                <h4 className="workCompany">{props.company}</h4>
                <h5 className="workDate">{props.date}</h5>
                <p className="workDescription">{props.description}</p>
                {skills.length > 0 && (
                    <div className="workSkillsContainer">
                        {skills.map((skill, index) => (
                            <img key={index} src={skill} onError={(e) => e.target.style.display = 'none'}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import siva from '../../assets/siva.jpeg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About Me</h1>
                {/* <img src={theme_pattern} alt="theme" /> */}
            </div>
            <div className='about-sections'>
                <div className="about-left">
                    <img src={siva} alt="profile" className='about-pic'/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I'm a final year Information Technology Engineering student at Aditya University with a passion for
                            software development and problem-solving. I specialize in full-stack development and have a keen interest in
                            java and DSA .Through my academic journey and personal projects, I've developed good analytical and coding skills
                            that I'm eager to apply in a professional setting.</p>
                        <p>I have good expertise in HTML, CSS, Java, JavaScript, React, React Native, Node.js, Git, and
                            GitHub, enabling me to build dynamic and efficient applications. Beyond coding, I am good at
                            team management.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & css</p> <hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p> <hr style={{ width: "38%" }} /></div>
                        <div className="about-skill"><p>Java</p> <hr style={{ width: "45%" }} /></div>
                        <div className="about-skill"><p>DSA</p> <hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: "36%" }} /></div>
                        <div className="about-skill"><p>React Native</p> <hr style={{ width: "36%" }} /></div>
                        <div className="about-skill"><p>MongoDB</p> <hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Git & GitHub</p> <hr style={{ width: "45%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE AS FULL STACK TRAINEE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE AS JAVA + DSA LEARNER</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>2</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    )
}

export default About
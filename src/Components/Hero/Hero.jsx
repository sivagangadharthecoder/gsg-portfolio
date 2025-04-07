import React from 'react';
import './Hero.css';
import siva from '../../assets/siva.jpeg';
import resume from '../../assets/22A91A1298_RESUME.pdf'; 

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <img src={siva} alt="gsg" className='profilepic' />
            <h1>
                <span>I'm Siva Gangadhar G.</span>, Full Stack Developer based in India.
            </h1>
            <p>
                I am a passionate and dedicated full-stack developer, always eager to learn and grow. Having
                recently completed my journey in full-stack development, I constantly refine my skills by coding
                often and exploring new technologies.
            </p>
            <div className="hero-action">
                <a href={resume} download="Siva_Gangadhar_Resume.pdf" className="hero-resume">
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Hero;

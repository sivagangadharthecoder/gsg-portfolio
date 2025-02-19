import React from 'react';
import './Footer.css';
import gsgLogo from '../../assets/gsgLogo.png';

const Footer = () => {
    const phoneNumber = 'tel:8074943499';  
    const email = 'mailto:gsivagangadhar367@gmail.com?subject=Hello&body=Hi, I wanted to connect with you!';
    const googleMapsLink = "https://g.co/kgs/ZtWMsRt";

    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={gsgLogo} alt="footer logo" className='loggo' />
                    <p>I'm a Full Stack Development Trainee</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-subscribe">
                        <a href="https://github.com/sivagangadharthecoder" target="_blank" rel="noopener noreferrer">
                            My GitHub
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                    &copy; 2025 GSG. All rights reserved.
                </p>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>
                        <a href={phoneNumber} className="footer-link">📞 Call Me</a> |{' '}
                        <a href={email} className="footer-link">📧 Email Me</a> |{' '}
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="footer-link">📍 My Location</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

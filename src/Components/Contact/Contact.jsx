import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer } from 'react-toastify';

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "43bbf669-6bae-4eb8-b6b0-85c2335e94d1");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message sent successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
            event.target.reset(); // Reset the form after submission
        } else {
            toast.error("Failed to send message. Try again!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "colored"
            });
        }
    };

    return (
        <div className="contact" id='contact'>
            <ToastContainer />
            <div className="contact-title">
                <h1>Contact</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Get In Touch..</h1>
                    <p>You can contact me through these links..</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" />
                            <a href="mailto:gsivagangadhar367@gmail.com">
                                gsivagangadhar367@gmail.com
                            </a>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="call" />
                            <a href="tel:8074943499">8074943499</a>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="location" />
                            <a href="https://g.co/kgs/ZtWMsRt" target="_blank" rel="noopener noreferrer">
                                Eleswaram, Kakinada Dist, Andhra Pradesh
                            </a>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' required />
                    <label>Your E-Mail</label>
                    <input type="email" placeholder='Enter Your E-Mail' name='email' required />
                    <label>Write Your Message</label>
                    <textarea name="message" rows="8" placeholder='Enter Your Message' required></textarea>
                    <button type='submit' className="contact-submit">
                        Submit Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

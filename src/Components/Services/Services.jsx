import React, { useState } from 'react';
import './Services.css';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className='services' id='skills'>
            <div className="services-title">
                <h1>My Primary Skills</h1>
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => (
                    <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>
                            {expandedIndex === index ? service.full_desc : `${service.s_desc}...`}
                        </p>
                        <div className='services-readmore' onClick={() => handleToggle(index)}>
                            <p>{expandedIndex === index ? "Show Less" : "Read More.."}</p>
                            <img 
                                src={arrow_icon} 
                                alt="arrow" 
                                style={{ transform: expandedIndex === index ? 'rotate(180deg)' : 'none' }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;

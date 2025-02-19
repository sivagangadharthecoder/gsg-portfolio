import React from 'react';
import './Certificates.css';
import certificate_data from '../../assets/certificate_data';

const Certificates = () => {
    return (
        <div className="certificates" id="certificates">
            <div className="certificates-title">
                <h1>My Certificates</h1>
            </div>
            <div className="certificates-container">
                {certificate_data.map((certificate, index) => (
                    <div key={index} className="certificate-format">
                        <h3>{certificate.title}</h3>
                        <h2>{certificate.course}</h2>
                        <p>{certificate.description}</p>
                        <div className="certificate-download">
                            <a
                                href={certificate.file}
                                download
                                className="btn"
                            >
                                Download Certificate
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;

import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const MyWork = () => {
    const [visibleProjects, setVisibleProjects] = useState(2); // Initially show 2 projects
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowMore = () => {
        setIsExpanded(true);
        setTimeout(() => setVisibleProjects(mywork_data.length), 300); // Delayed expansion
    };

    const handleShowLess = () => {
        setIsExpanded(false);
        setTimeout(() => setVisibleProjects(2), 300); // Delayed collapse
    };

    return (
        <div className='mywork' id='work'>
            <div className="mywork-title">
                <h1>My Works</h1>
            </div>
            <div className={`mywork-container ${isExpanded ? 'expanded' : ''}`}>
                {mywork_data.slice(0, visibleProjects).map((work, index) => (
                    <div key={index} className="mywork-item">
                        <img src={work.w_img} alt={work.w_name} />
                        <h3>{work.w_name}</h3>
                        <div className="mywork-buttons">
                            <a href={work.source_code} target="_blank" rel="noopener noreferrer" className="btn">
                                Source Code
                            </a>
                            <a href={work.live_demo} target="_blank" rel="noopener noreferrer" className="btn">
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mywork-showmore-container">
                {!isExpanded ? (
                    <div className="mywork-showmore" onClick={handleShowMore}>
                        <p>Show More</p>
                        <img src={arrow_icon} alt="arrow" />
                    </div>
                ) : (
                    <div className="mywork-showmore" onClick={handleShowLess}>
                        <p>Show Less</p>
                        <img src={arrow_icon} alt="arrow" style={{ transform: 'rotate(180deg)' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWork;

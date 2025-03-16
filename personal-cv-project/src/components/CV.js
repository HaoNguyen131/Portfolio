import React from 'react';

const CV = () => {
    return (
        <div className="cv">
            <h1>Your Name</h1>
            <h2>Contact Information</h2>
            <p>Email: your.email@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>LinkedIn: your-linkedin-profile</p>

            <h2>Education</h2>
            <ul>
                <li>
                    <strong>Degree</strong>, University Name, Year
                </li>
                <li>
                    <strong>Degree</strong>, University Name, Year
                </li>
            </ul>

            <h2>Work Experience</h2>
            <ul>
                <li>
                    <strong>Job Title</strong>, Company Name, Year - Year
                    <p>Responsibilities and achievements...</p>
                </li>
                <li>
                    <strong>Job Title</strong>, Company Name, Year - Year
                    <p>Responsibilities and achievements...</p>
                </li>
            </ul>

            <h2>Skills</h2>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
        </div>
    );
};

export default CV;
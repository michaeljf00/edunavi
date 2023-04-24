import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './ProfileSettings.css';

export const ProfileSettings = (props) => {
    // Under-Grad Measurements
    const [hsgpa, setHSGPA] = useState('');
    const [sat, setSAT] = useState('');
    const [act, setACT] = useState('');

    // Post-Grad Measurements
    const [cgpa, setCGPA] = useState('');
    const [gre, setGRE] = useState('');
    const [internationalStatus, setInternationalStatus] = useState('');
    const [toefl, setTOEFL] = useState('');

    // Adjusts settings display depending on the type of student profile.
    function profileType (student) {
        if (student === 'undergrad'){
            document.getElementById("undergrad-form").style.display = "flex";
            document.getElementById("postgrad-form").style.display="none";
        }
        if (student === 'postgrad'){
            document.getElementById("undergrad-form").style.display = "none";
            document.getElementById("postgrad-form").style.display="flex";
        }
        document.getElementById("undergradBtn").style.display = "none";
        document.getElementById("postgradBtn").style.display = "none";
    }

    function isStudentInternational(international){
        var isInternational = document.getElementById("international-status").checked;
        if (isInternational){
            document.getElementById("toefl-section").style.display = "flex";
        }
        if (!isInternational){
            document.getElementById("toefl-section").style.display = "none";
        }
    }
    
    const handleSubmit = (e) => {
        console.log("Hello");
    }
    
    return (
        <div className="auth-form-container">
            <h2>Profile Settings</h2>
            <h4> How will you be applying to schools?</h4>
            <div className = "dropdown">
                <DropdownButton id="dropdown-basic-button" title="Type of Student">
                    <Dropdown.Item id = "undergradBtn" className = "dropdown-btn" onClick = {() => profileType('undergrad')}>As an undergraduate</Dropdown.Item>
                    <Dropdown.Item id = "postgradBtn" className = "dropdown-btn" onClick = {() => profileType('postgrad')}>As a graduate</Dropdown.Item>
                </DropdownButton>
            </div> 

            <form id = "undergrad-form" className="profile-settings-form" onSubmit={handleSubmit}>
                <label htmlFor="hsgpa">High School GPA: </label>
                <input value={hsgpa} onChange={(e) => setHSGPA(e.target.value)} type="gpa" placeholder="X.XX" id="hsgpa" name="hsgpa" />
                <label htmlFor="sat">SAT Cumulative Score: </label>
                <input value={sat} onChange={(e) => setSAT(e.target.value)} type="sat" placeholder="e.g. 1400" id="sat" name="sat" />
                <label htmlFor="act">ACT Cumulative Score: </label>
                <input value={act} onChange={(e) => setACT(e.target.value)} type="act" placeholder="e.g. 32" id="act" name="act" />
                <button type="submit">Submit Info</button>
            </form>

            <form id = "postgrad-form" className="profile-settings-form" onSubmit={handleSubmit}>
                <label htmlFor="cgpa">Undergraduate GPA: </label>
                <input value={cgpa} onChange={(e) => setCGPA(e.target.value)} type="gpa" placeholder="X.XX" id="cgpa" name="cgpa" />
                <label htmlFor="password">Cumulative GRE Score: </label>
                <input value={gre} onChange={(e) => setGRE(e.target.value)} type="gre" placeholder="100" id="gre" name="gre" />
                <div>
                    <label htmlFor="internationalStatus">Are you an international student? </label>
                    <input type="checkbox" value={internationalStatus} onClick={() => isStudentInternational()} onChange={(e) => setInternationalStatus(e.target.value)} id = "international-status" name = "international-status" />
                </div>
                <div id="toefl-section">
                    <label htmlFor="toefl">TOEFL Score: </label>
                    <input value={toefl} onChange={(e) => setTOEFL(e.target.value)} type="toefl" placeholder="XXX" id="toefl" name="toefl" />
                </div>
                <button type="submit">Submit Info</button>
            </form>            

        </div>
    )
}
import React from 'react';
import "./ContactCard.css"
import profilePicture from "../images/profile_picture.png"

const ContactCard = () => {
    const handleGitHubClick =() => {
        window.open('https://github.com/psatomas', '_blank');   
    };
    const handleLinkedInClick = () => {    
        window.open('https://www.linkedin.com/in/psatomas/', '_blank');
    };
      return (
        <div className="contact-section">
          <h1 className='message'>Feel free to reaching out</h1>
          <div className="contact-card" id="contact">    
            <img src={profilePicture} alt="Profile" className='profile-picture'></img>
            <h2>Tomás Araújo</h2>
            <p>Thank you for visiting!</p>
            <button className="linkedin-button" onClick={handleLinkedInClick}>LinkedIn</button>
            <button className="github-button" onClick={handleGitHubClick}>GitHub</button>
          </div>
        </div>
    );
  };

export default ContactCard;
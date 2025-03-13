import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilepicture from '../assets/images/avatar.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepicture} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/devsteppe9" target="_blank" rel="noopener"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/jarkynbyek-japar-83575712a/" target="_blank" rel="noopener"><LinkedInIcon /></a>
          </div>
          <h1>Jarkynbyek (Jack) Japar</h1>
          <p>DevOps & Sotfware Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/devsteppe9" target="_blank" rel="noopener"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/jarkynbyek-japar-83575712a/" target="_blank" rel="noopener"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/devsteppe9" target="_blank" rel="noreferrer noopener" title="GitHub Profile"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/jarkynbyek-japar-83575712a/" target="_blank" title="Linkedin Profile" rel="noreferrer noopener"><LinkedInIcon /></a>
      </div>
      <p>
        A special thanks to{" "}
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer noopener"
        >
          Yuji Sato
        </a>{" "}
        for providing the original template!
      </p>
    </footer>
  );
}

export default Footer;
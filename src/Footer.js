import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon  from "@material-ui/icons/GitHub";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
        <h2 style={{color:'white'}}>CHECK ME OUT ON</h2>
      <div className="socialMedia">
      <a href="https://github.com/HariharGandhi" target={'blank'}>
      <GitHubIcon  />
        </a>
        <a href="https://www.linkedin.com/in/harihar-gandhi-1019b6219" target={'blank'}>
        <LinkedInIcon />
        </a>
        <a href="https://twitter.com/HariharGandhi" target={'blank'}>
        <TwitterIcon />
        </a>
        
        
      </div>
      <p> &copy; Harihar Gandhi</p>
    </div>
  );
}

export default Footer;
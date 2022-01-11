import React from "react";
import "./Sidebar.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

const Sidebar = ({ Data }) => {
  return (
    <div className="fade-in sidebar">
      <div className="quick-jump">
        <a href="#About">/about</a>
        <a href="#Achievements">/Achievements</a>
        <a href="#My-Work">/my-work</a>
      </div>
      <div className="connect">
        <IconButton
          aria-label="LinkedIn Profile Link Button"
          target="new"
          href={`https://www.linkedin.com/in/${Data.LinkedinName}`}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton href={`mailto:${Data.Email}`} aria-label="Email Button">
          <EmailIcon />
        </IconButton>
        <IconButton
          target="new"
          href={`https://github.com/${Data.Github}`}
          aria-label="Github Link Button"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;

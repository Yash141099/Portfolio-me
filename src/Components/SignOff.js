import "./SignOff.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import { IconButton } from "@material-ui/core";

const SignOff = ({ Data }) => {
  return (
    <div className="signOff">
      <h4>Built and designed by Yash Patel.</h4>
      <h4>All rights reserved. ©</h4>
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

export default SignOff;

import React from "react";
import "./Projects.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const Projects = ({ Projects, FadeInSection }) => {
  const checkForLink = (element) => {
    if (!element.Link === " ") {
      return (
        <a href={element.Link} target="new">
          <LaunchIcon></LaunchIcon>
        </a>
      );
    }
  };
  return (
    <div className="projects" id="My-Work">
      <h1>
        Projects<span className="line"></span>
      </h1>
      <div className="projects-Content">
        {Projects.map((element, index) => {
          return (
            <FadeInSection key={index} delay={`${index + 1}00ms`}>
              <div className="work win-btn">
                <h2>{element.Title}</h2>
                <br />
                <h3>{element.Discription}</h3>
                &nbsp;&nbsp;&nbsp;
                <h3>{element.Tools}</h3>
                <br />
                <div>
                  &nbsp;&nbsp;&nbsp;
                  <a href={element.GitLink} target="new">
                    <GitHubIcon />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  {checkForLink(element)}
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

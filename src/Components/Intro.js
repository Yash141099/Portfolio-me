import EmailIcon from "@material-ui/icons/Email";
import profile from "../Data/images/profile.jpg";
import FadeInSection from "./fade-in";
import "./Intro.css";

const Intro = ({ Data }) => {
  return (
    <FadeInSection>
      <div className="intro">
        <img className="img" src={profile} alt="profile" />
        <h1>
          hi, <span className="name">{Data.Name}</span> here!
          <span className="cursor">|</span>
        </h1>

        <div className="fade-in-intro">
          <h2>I write code, some might say I'm a Pro-grammer.</h2>
          <br />
          <h3>
            I'm a software engineer based in Ontario. I have a profound interest
            in full-stack development,
            <br /> machine learning and Artificial Inteligence, and everything
            in between.
          </h3>
          <br />
          <br />
          <a
            aria-label={`Click to Mail me @${Data.Email}`}
            href={`mailto:${Data.Email}`}
          >
            <EmailIcon fontSize="large" />
            &nbsp; Say hello;
          </a>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Intro;

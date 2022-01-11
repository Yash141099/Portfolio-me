import "./About.css";
const About = ({ About, FadeInSection }) => {
  return (
    <FadeInSection>
      <div id="About" className="about">
        <h1>
          About<span className="line"></span>
        </h1>
        <br />
        {About.map((a, index) => {
          return (
            <div key={index} className="about-Content">
              <h3>{a.Main}</h3>
              <h3>{a.More}</h3>
            </div>
          );
        })}
      </div>
    </FadeInSection>
  );
};
export default About;

import "./Skills.css";

const Skills = ({ Skills, FadeInSection }) => {
  return (
    <div className="skills">
      <h1>
        Technologies Worked I have With<span className="line"></span>
      </h1>
      <div className="skills-Content">
        {Skills.map((s, index) => {
          return (
            <FadeInSection key={index} delay={`${index + 1}00ms`}>
              <div className="skl">
                <h4>
                  <span>▹</span>
                  {s}
                </h4>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;

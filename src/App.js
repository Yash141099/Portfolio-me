import "./App.css";
import About from "./Components/About";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Achievements from "./Components/Achievements";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import Sidebar from "./Components/Sidebar";
import { IconButton } from "@material-ui/core";
import Data from "./Data/Json/Data.json";
import SignOff from "./Components/SignOff";
import FadeInSection from "./Components/fade-in";
import Projects from "./Components/Projects";

function App() {
  const ScrollTo = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="Home" className="App">
      {document.addEventListener("scroll", (e) => {
        const scrollTopBtn = document.querySelector(".Top");
        if (document.documentElement.scrollTop < 80) {
          scrollTopBtn.style.visibility = "hidden";
        } else {
          scrollTopBtn.style.visibility = "visible";
        }
      })}
      <div className="Content">
        <Intro className="Top" Data={Data} FadeInSection={FadeInSection} />
        <Sidebar Data={Data} FadeInSection={FadeInSection} />
        <About id="About" FadeInSection={FadeInSection} About={Data.About} />
        <Skills Skills={Data.Skills} FadeInSection={FadeInSection} />
        <Achievements
          Certificates={Data.Certificates}
          FadeInSection={FadeInSection}
        />
        <Projects Projects={Data.Projects} FadeInSection={FadeInSection} />
      </div>
      <SignOff Data={Data} />
      <div className="Top">
        <IconButton aria-label="Go to Top Button" onClick={ScrollTo}>
          <ExpandLessRoundedIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;

import {
  DiCss3,
  DiGithubBadge,
  DiJavascript,
  DiReact,
  DiGit,
  DiHtml5,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "github", name: "GitHub", icon: <DiGithubBadge /> },
  { id: "js", name: "JavaScript", icon: <DiJavascript /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "git", name: "GIT", icon: <DiGit /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;

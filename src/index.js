import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name="Pizza Funghi" ingredients="Tomato, mushrooms" />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.jpeg" alt="assasin screed" />;
}

function Intro() {
  return (
    <div>
      <h1>Assasin Screed</h1>
      <p>Full-stack web developer. </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💀" color="#3455" />
      <Skill skill="HTML-CSS" emoji="🥶" color="red" />
      <Skill skill="Vue" emoji="💪🏾" color="pink" />
      <Skill skill="JavaScript" emoji="😎" color="lightgreen" />
      <Skill skill="Java" emoji="😊" color="lightblue" />
      <Skill skill="C++" emoji="😡" color="cyan" />
    </div>
  );
}

function Skill(props) {
  return (
    // adding styling like background color, we use the JS object
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

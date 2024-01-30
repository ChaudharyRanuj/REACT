// NAME IMPORT

const skillSet = [
  { skill: "React", color: "yellow" },
  { skill: "HTML", color: "green" },
  { skill: "CSS", color: "purple" },
  { skill: "Javascript", color: "green" },
  { skill: "Node.js", color: "grey" },
  { skill: "PHP", color: "red" },
  { skill: "Python", color: "yellow" },
];
export default function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}

        <div className="skill-list">
          {skillSet.map((ele) => (
            <SkillList skill={ele.skill} key={ele.skill} color={ele.color} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="image.jpg" alt="profile" className="profile-avatar" />;
}

function Intro() {
  return (
    <>
      <h1>Ranuj Chaudhary</h1>
      <p>
        This is Ranuj Chaudhary learning react by making the react projects and
        making the projects and different components. This is Ranuj Chaudhary
        learning react by making the react projects and making the projects and
        different components.
      </p>
    </>
  );
}

function SkillList({ skill, color }) {
  return (
    <p
      className="skill"
      style={{ backgroundColor: color, padding: "4px", borderRadius: "4px" }}
    >
      {skill}
    </p>
  );
}

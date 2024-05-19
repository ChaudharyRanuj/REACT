/*
What is Props? 
***************
Props full form in Properties

Props features:
***************

1) Props is data coming from the outside, and can only be updated by the parent component.
2) Props are read only, they are immutable! This is one of React's strict rules.
3) If you need to mutate props, you actually need state

Why are Pr ops immutable?
*************************

- Mutating props would affect parent, creating side effects (not pure)
- Components have to be pure functions in terms of props and state.
- This allows React to optimize apps, avoid bugs, make apps predictable.

ONE WAY DATA FLOW
*****************

- makes applications more predictable and easier to understand.
- makes applications easier to debug, as we have more control over the data.
- is more performant.

NOTE: Data flow from only parent to child.
*/

// PARENT ELEMENT
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React and Javascript" color="#ffd196" />
      <Skill skill="HTML" color="#ffd196" />
      <Skill skill="CSS" color="#ffd196" />
      <Skill skill="PYTHON" color="#ffd196" />
    </div>
  );
}
/*
NOTE:
skill, color are two property used to transfer the data to
 Skill function which is child component
*/

// CHILD ELEMENT
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <p>{props.skill}</p>
      <img className="skill-icon" src="card/logo.png" alt="Logo" />
    </div>
  );
}

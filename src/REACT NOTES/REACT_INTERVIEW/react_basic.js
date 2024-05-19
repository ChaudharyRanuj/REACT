// REACT INTERVIEW NOTES

// Render HTML Elements to the DOM

// ReactDOM offers a simple method to render React elements to the DOM which looks like this: ReactDOM.render(componentToRender, targetNode), where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

// Create a React Component
// The other way to define a React component is with the ES6 class syntax. In the following example, Kitten extends React.Component:

// class Kitten extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <h1>Hi</h1>
//     );
//   }
// }
// This creates an ES6 class Kitten which extends the React.Component class. So the Kitten class now has access to many useful React features, such as local state and lifecycle hooks.

// Create a Component with Composition

// What is Mounting?

// This process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.

// Read More: https://stackoverflow.com/questions/31556450/what-is-mounting-in-react-js

// Note: that normally you'd only call ReactDOM.render() to mount the root component(s). You don't need to manually "mount" the child components. Every time a parent component calls setState(), and its render method says a particular child should be rendered for the first time, React will automatically "mount" this child into its parent.

// Use the Lifecycle Method componentWillMount
// React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on.
//  Here is a list of some of the main lifecycle methods:
//  componentWillMount()
//  componentDidMount()
// shouldComponentUpdate()
//  componentDidUpdate()
// componentWillUnmount()
// The next several lessons will cover some of the basic use cases for these lifecycle methods.

// Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. Learn more in this article

// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.

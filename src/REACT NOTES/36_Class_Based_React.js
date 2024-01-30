// import React from "react";
// // BOILER PLATE FOR REACT CODE FOR CLASS COMPONENTS
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 1 };
//     this.decreaseValue = this.decreaseValue.bind(this);
//     this.increaseValue = this.increaseValue.bind(this);
//   }
//   // EVENT HANDLERS ARE METHODS IN CLASS COMPONENTS
//   decreaseValue() {
//     if (this.state.count <= 1) {
//       alert("Value cannot be less than 1");
//       return;
//     }
//     this.buttonPress("decrease", "scale-down");
//     this.setState({ count: this.state.count - 1 });
//   } 

//   // EVENT HANDLERS ARE METHODS IN CLASS COMPONENTS
//   increaseValue() {
//     this.buttonPress("increase", "scale-down");
//     this.setState({ count: this.state.count + 1 });
//   }

//   buttonPress(btnClass, className) {
//     const increase = document.querySelector(`.${btnClass}`);
//     increase.classList.add(className);
//     // 'scale-down'
//   }

//   render() {
//     return (
//       <div className="container">
//         <button onClick={this.decreaseValue} className="decrease">
//           -
//         </button>{" "}
//         <input
//           value={this.state.count}
//           onChange={(e) => this.setState(e.target.value)}
//         ></input>{" "}
//         <button onClick={this.increaseValue} className="increase ">
//           +
//         </button>
//       </div>
//     );
//   }
// }

// export default Car;


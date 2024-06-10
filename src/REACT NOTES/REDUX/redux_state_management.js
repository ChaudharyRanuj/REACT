/*
REDUX


const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer)


Redux is a state management framework that can be used with a number of different web technologies, including React.

In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux

Get State from the Redux Store
The Redux store object provides several methods that allow you to interact with it. For example, you can retrieve the current state held in the Redux store object with the getState() method.

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState()

Define a Redux Action
Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a type property that specifies the 'type' of action that occurred.

Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.

Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.

// Define an action here:
const action = {
  type: 'LOGIN'
}

Define an Action Creator
After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

Define a function named actionCreator() that returns the action object when called.

const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator() {
  return action;
}

Dispatch an Action Event

dispatch method is what you use to dispatch actions to the Redux store. Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.

Recall that action creators return an object with a type property that specifies the type of action that has occurred. Then the method dispatches an action object to the Redux store. Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN:

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. There's also an action creator called loginAction() which returns an action of type LOGIN. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

Handle an Action in the Store
After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a reducer function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes state and action as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.

Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.

The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
*/

// REDUCER
// ***** REDUCER FOR COUNTER **********
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const notesReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// ***** REDUCER FOR AUTHENTICATION **********
const LOGIN = "INCREMENT";
const LOGOUT = "DECREMENT";

const defaultState = {
  authenticated: false,
};

const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

// COMBINE REDUCERS
// Note: IF MORE REDUCER WERE USE WITH COMPOSING THE REDUCERS
const rootReducer = Redux.cobineReducers({
  auth: authReducer,
  notes: notesReducer,
});

// Pass this rootRedcer to Store

const store2 = Redux.createStore(rootReducer);

// STORE

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(authReducer);

// ACTIONS
// THESE FUNCTION ARE ACTION CREATORS
const loginUser = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};

//  ********** SEND ACTION DATA TO THE STORE ***********

// We send action data with actions
const addNoteText = (note) => {
  return {
    type: ADD_NOTE,
    text: note,
  };
  // Note: text is the action data
  // Change code above this line
};

// Store Listener
let count = 0;
function actionLog() {
  return count++;
}
store.subscribe(actionLog);

// DISPATCH
store.dispatch(loginUser());
store.dispatch(logoutUser());

// ****************** Register a Store Listener ************************
/*
Another method you have access to on the Redux store object is store.subscribe().
 This allows you to subscribe listener functions to the store, which are called
  whenever an action is dispatched against the store. One simple use for this method
   is to subscribe a function to your store that simply logs a message every time an
    action is received and the store is updated.
*/
// *************** Use Cases for store.subscribe ******************
/*
1. Updating the UI
One of the most common use cases for store.subscribe is to update the UI in response to changes in the application state. By subscribing to store updates, you can re-render your UI components with the latest state, ensuring that your application remains in sync with the latest data.

2. Logging and Debugging
store.subscribe can be used to log changes to the store's state, making it easier to debug and understand the flow of your application. By logging the updated state, you can identify issues and optimize your application's performance.

3. Cache Management
store.subscribe can be used to manage caches and ensure that stale data is not displayed to the user. By subscribing to store updates, you can invalidate caches and refresh data when the store's state changes.

4. Analytics and Telemetry
store.subscribe can be used to track user interactions and send analytics data to your backend. By subscribing to store updates, you can capture user behavior and send telemetry data to your analytics platform.

*/

// *************** Use Middleware to Handle Asynchronous Actions ************

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function (dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ["Jeff", "William", "Alice"],
      };
      // Dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: [],
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users,
      };
    default:
      return state;
  }
};

const store3 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// ********** NEVER MUTATE STATE *****************

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return [...state, action.todo];
    default:
      return state;
  }
};

// Note: The spread syntax can be used multiple times in array composition like this,
//       but it's important to note that it only makes a shallow copy of the array.

// ***************** USING REDUX WITH REACT ************************

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
 handleChange(e) {
this.setState({
 ...this.state,
  input: e.target.value
})
}

submitMessage() {

  this.setState({
 messages: [...this.state.messages, this.state.input],
 input: ''
 })
}
 
  render() {
    return (
      <div>
        <h2>Type in a new Message: {this.state.input}</h2>
        { /* Render an input, button, and ul below this line */ }
<input type="text" value={this.state.input} onChange={this.handleChange.bind(this)} />
<button type="button" onClick={this.submitMessage.bind(this)}>Submit</button>
<ul> {this.state.messages.map(message => <li> {message} </li>)}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};


************************** Extract State Logic to Redux *****************

// Define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD"

function addMessage(message) {
return {
  type: "ADD",
  message
}
}

function messageReducer(state=[], action) {
  switch (action.type) {
    case ADD:
    return [...state, action.message]
    default:
    return state;
  }
}

const store = Redux.createStore(messageReducer)


// ************************** Use Provider to Connect Redux to React *****************
// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider; 
// ************************************

class AppWrapper extends React.Component {
  // Render the Provider below this line
render () {
return (
<Provider store={store}>
<DisplayMessages/>
</Provider>)
 
} 
  // Change code above this line
};


// *************************** Map State to Props **************
const state = [];

// Change code below this line

function mapStateToProps(state) {
return {
  messages: state
}
}



// *********************** Map Dispatch to Props **********************

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: function(message){
    dispatch(addMessage(message))
    }
  }
}
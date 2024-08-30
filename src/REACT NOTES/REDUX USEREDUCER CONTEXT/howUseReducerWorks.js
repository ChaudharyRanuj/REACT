const READY = "READY";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const DELETE_HOBBY = "DELETE_HOBBY";

const initialState = {
  username: "Ranuj",
  password: "pasword",
  is_admin: false,
  isAuthenticated: false,
  hobbies: ["yoga", "plantation", "coding", "reading about geoplitics"],
};

function reducer(state, action) {
  switch (action.type) {
    case READY:
      console.log(state, action);
      return {
        ...state,
      };
    case UPDATE:
      return {
        ...state,
        username: action.payload.username,
      };
    case DELETE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
}

function UseReducer(reducer, initialState) {
  let state = initialState;

  function dispatch(action) {
    state = reducer(state, action);
  }

  return [state, dispatch];
}

const [state, dispatch] = UseReducer(reducer, initialState);
console.log(state);
dispatch({ type: READY, payload: "this is READY payload" });
dispatch({ type: UPDATE, payload: { username: "raneesh" } });
dispatch({ type: DELETE_HOBBY, payload: "coding" });
dispatch({ type: READY, payload: "this is READY payload" });
dispatch({ type: DELETE_HOBBY, payload: "plantation" });
dispatch({ type: READY, payload: "this is READY payload" });

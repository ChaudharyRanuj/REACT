import { createContext, useContext, useReducer } from "react";

const initialState = {
  users: [
    { id: 123, name: "ranuj choudhary", email: "ranujchoudhary@gmail.com" },
    { id: 124, name: "ranuj choudhary", email: "ranujchoudhary@gmail.com" },
  ],
};

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
      };
    case "edit":
      return {
        ...state,
      };
    case "delete":
      return {
        ...state,
      };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [{ users }, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    return null;
  }
  return context;
}

export { useUser, UserProvider };

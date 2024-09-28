import { createContext, useContext, useReducer } from "react";

const initialState = {
  users: [
    { id: "123", name: "ranuj choudhary", email: "ranujchoudhary@gmail.com" },
    { id: "124", name: "ranuj choudhary", email: "ranujchoudhary@gmail.com" },
  ],
};

const UserContext = createContext();

function userReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "update":
      const updatedUser = state.users.map((user) => {
        console.log(user.id === action.payload.id);
        if (user.id === action.payload.id) {
          return {
            ...action.payload,
          };
        } else {
          return user;
        }
      });
     

      return {
        ...state,
        users: [...updatedUser],
      };
    case "delete":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload.id)],
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

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "logout":
      return {
        ...state,
        ...initialState,
      };
    default:
      throw new Error("Unknown Action Type.");
  }
}

const FAKE_USER = {
  name: "Ranuj Chaudhary",
  email: "ranujchoudhary@gmail.com",
  password: "Ranuj@2378",
  userImage: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ isAuthenticated, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    return "Problem fetching auth context.";
  }

  return context;
}

export { useAuth, AuthProvider };

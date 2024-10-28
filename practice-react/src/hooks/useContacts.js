// import { useUser } from "../context/useUser";
import { v4 as uuid } from "uuid";
import { addUsers } from "../api/contacts";
import { useLocalStorage } from "./useLocalStorage";

// components
export function useContacts() {
  // const { dispatch } = useUser();
  // local state
  const { name, email, setName, setEmail } = useLocalStorage("contactForm");

  // handlers
  function addContacts(e) {
    const user = {
      id: uuid(),
      name,
      email,
    };

    // dispatch({ type: "add", payload: user });

    addUsers(`http://localhost:8000/contacts`, user);

    // clear form input
    setEmail("");
    setName("");

    // prevent form defualt
    e.preventDefault();
  }

  return { name, email, addContacts, setEmail, setName };
}

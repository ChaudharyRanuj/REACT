import { useEffect, useState } from "react";
import { getLocalStorageData, setLocalStorageData } from "../helpers/helpers";
import { useUser } from "../context/useUser";
import { v4 as uuidv4 } from "uuid";

export function useContacts() {
  const { dispatch } = useUser();

  const [name, setName] = useState(() => {
    const contactForm = getLocalStorageData("contactForm");
    return contactForm ? contactForm.name : "";
  });

  const [email, setEmail] = useState(() => {
    const contactForm = getLocalStorageData("contactForm");
    return contactForm ? contactForm.email : "";
  });

  useEffect(() => {
    const form = {
      name,
      email,
    };
    setLocalStorageData("contactForm", form);
  }, [email, name]);

  function addContacts(e) {
    const user = {
      id: uuidv4(),
      name,
      email,
    };

    dispatch({ type: "add", payload: user });

    // clear form input
    setEmail("");
    setName("");

    // prevent form defualt
    e.preventDefault();
  }

  return { name, email, addContacts, setEmail,setName,};
}

import { useEffect, useState } from "react";
import { getLocalStorageData } from "../helpers/helpers";

export function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    const contactForm = getLocalStorageData(key);
    return contactForm ? contactForm.name : "";
  });

  const [email, setEmail] = useState(() => {
    const contactForm = getLocalStorageData(key);
    return contactForm ? contactForm.email : "";
  });



  useEffect(() => {
 
    const user = {
      name,
      email,
    };
    localStorage.setItem(key, JSON.stringify(user));
  }, [name, email, key]);

  return { name, email, setEmail, setName };
}

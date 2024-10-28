import { Link, Route, Routes, useParams } from "react-router-dom";

// contacts api
import { UpdateUser } from "../api/contacts";

// custom hook
import { useLocalStorage } from "../hooks/useLocalStorage";

// components
import { Form } from "../components/Form";
// import { useEffect } from "react";

export const EditContacts = () => {
  const { name, email, setName, setEmail } = useLocalStorage("updateForm");

  const { id } = useParams();
  // const { users, dispatch } = useUser();
  console.log(id);
  function updateUser(e) {
    const user = {
      id,
      name,
      email,
    };
    // dispatch({ type: "update", payload: user });
    UpdateUser("http://localhost:8000/contacts", id, user);
    setName("");
    setEmail("");
    e.preventDefault();
  }

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Edit Contacts</h2>
      <div className="p-4">
        <Form
          name={name}
          email={email}
          onChangeName={(e) => setName(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          buttonText={"Edit Contact"}
          onHandleSubmit={updateUser}
        />
      </div>

    </div>
  );
};

import {useEffect, useState } from "react";
import { Form } from "../components/Form";
import { useParams } from "react-router-dom";
import { useUser } from "../context/useUser";

export const EditContacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id } = useParams();
  const { users, dispatch } = useUser();
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  function updateUser(e) {
    const user = {
      id,
      name,
      email,
    };
    dispatch({ type: "update", payload: user });
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

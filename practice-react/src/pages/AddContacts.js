import { useState } from "react";
import { Form } from "../components/Form";


export const AddContacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Add Contacts</h2>
      <div className="p-4">
        <Form
          name={name}
          email={email}
          onChangeName={(e) => setName(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          buttonText={'Add Contacts'}
        />
      </div>
    </div>
  );
};

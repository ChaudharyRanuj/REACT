import { useState } from "react";
import { Form } from "../components/Form";

export const EditContacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
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
        />
      </div>
    </div>
  );
};

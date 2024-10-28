import { Form } from "../components/Form";
import { useContacts } from "../hooks/useContacts";
import { v4 as uuid } from "uuid";
;
export const AddContacts = () => {
  const { name, email, setEmail, setName, addContacts } = useContacts();
 
  

  return (
    <div>
      <h2 className="text-center text-xl font-bold">Add Contacts</h2>
      <div className="p-4">
        <Form
          name={name}
          email={email}
          onChangeName={(e) => setName(e.target.value)}
          onChangeEmail={(e) => setEmail(e.target.value)}
          buttonText={"Add Contacts"}
          onHandleSubmit={addContacts}
        />
      </div>
    </div>
  );
};

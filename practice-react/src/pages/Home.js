import { List } from "../components/List";
import { useUser } from "../context/useUser";
import { ListItem } from "../components/ListItem";
import { ButtonSmall } from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
export const Home = () => {
  // const { users, dispatch } = useUser();
  const [users, setUsers] = useState([]);
  async function fetchUsers(url) {
    try {
      const response = await axios.get(url);
      if (response.data) {
        setUsers(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers("http://localhost:8000/contacts");
  }, [users]);

  async function deleteContact(id) {
    // dispatch({ type: "delete", payload: { id } });
    try {
      const response = await axios.delete(
        `http://localhost:8000/contacts/${id}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-center ">Home</h1>
      <List
        data={users}
        func={(user) => (
          <ListItem key={user.id} list={user}>
            <ButtonSmall path={"/add"}>Add</ButtonSmall>
            <ButtonSmall path={`/edit/${user.id}`}>Edit</ButtonSmall>
            <ButtonSmall onClick={() => deleteContact(user.id)}>
              Delete
            </ButtonSmall>
          </ListItem>
        )}
      />
    </div>
  );
};

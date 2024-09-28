import { List } from "../components/List";
import { useUser } from "../context/useUser";
import { ListItem } from "../components/ListItem";
import { ButtonSmall } from "../components/Button";

export const Home = () => {
  const { users, dispatch } = useUser();


  function deleteContact(id) {
    dispatch({ type: "delete", payload: { id } });
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

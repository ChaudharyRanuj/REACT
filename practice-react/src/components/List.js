import { ListItem } from "./ListItem";
export const List = ({ users }) => {
  return (
    <ul className="flex flex-col w-full"  >
      {users &&
        users.length > 0 &&
        users.map((user) => <ListItem key={user.id} user={user} />)}
    </ul>
  );
};

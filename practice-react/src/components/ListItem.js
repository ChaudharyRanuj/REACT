import { Button } from "./Button";
export const ListItem = ({ user }) => {
  
  return (
    <li className="border-b-2 border-gray-200 flex justify-between w-full m-2">
      <div className="container flex items-center gap-4">
        <span className=" bg-gray-200 rounded-full text-xs p-4">{user.id}</span>
        <div className="flex flex-col">
          <span>{user.name}</span>
          <span>{user.email}</span>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Button size={"small"}>Add</Button>
        <Button size={"small"}>Edit</Button>
        <Button size={"small"}>Delete</Button>
      </div>
    </li>
  );
};

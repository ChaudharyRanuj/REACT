import { List } from "../components/List";
import { useUser } from "../context/useUser";

export const Home = () => {
  const { users } = useUser();
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-center ">Home</h1>
      <List users={users} />
    </div>
  );
};
